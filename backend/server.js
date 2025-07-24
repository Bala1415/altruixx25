const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Twilio client
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/symposium';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Events Schema
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  maxParticipants: { type: Number, required: true },
  currentParticipants: { type: Number, default: 0 }
});

const Event = mongoose.model('Event', eventSchema);

// Registration Schema
const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  teamMembers: { type: String },
  events: [{
    eventId: { type: Number, required: true },
    eventName: { type: String, required: true }
  }],
  teamMembers: { type: String },
  experience: { type: String },
  expectations: { type: String },
  dietaryRestrictions: { type: String },
  agreeTerms: { type: Boolean, required: true },
  emailUpdates: { type: Boolean, default: false },
  registrationDate: { type: Date, default: Date.now },
  status: { type: String, default: 'registered' }
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

const Registration = mongoose.model('Registration', registrationSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running successfully' });
});

// Event routes
app.post('/api/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// Registration routes
app.post('/api/registrations', async (req, res) => {
  try {
    // Check if user already has registrations
    const existingRegistrations = await Registration.findOne({
      email: req.body.email
    });

    // Validate number of events
    if (existingRegistrations && existingRegistrations.events.length + req.body.events.length > 2) {
      return res.status(400).json({
        error: 'You can only register for a maximum of 2 events'
      });
    }

    // Check if user is already registered for any of the selected events
    if (existingRegistrations) {
      const alreadyRegisteredEvents = existingRegistrations.events.filter(
        existingEvent => req.body.events.some(
          newEvent => newEvent.eventId.toString() === existingEvent.eventId.toString()
        )
      );

      if (alreadyRegisteredEvents.length > 0) {
        return res.status(400).json({
          error: 'You are already registered for one or more of these events'
        });
      }
    }

    const registration = new Registration(req.body);
    const savedRegistration = await registration.save();

    // Send WhatsApp message
    try {
      await twilioClient.messages.create({
        body: `Thank you for registering for ALTRUIXX 2K25!\n\nRegistration Details:\nName: ${req.body.fullName}\nEvents: ${req.body.events.map(e => e.eventName).join(', ')}\n\nWe look forward to seeing you at the events!`,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        to: `whatsapp:+91${req.body.phone}`
      });
    } catch (twilioError) {
      console.error('WhatsApp notification error:', twilioError);
      // Continue with registration even if WhatsApp notification fails
    }
    
    res.status(201).json({
      message: 'Registration successful',
      registration: savedRegistration
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      error: 'Failed to register. Please try again.'
    });
  }
});

// Get all registrations (for admin)
app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ registrationDate: -1 });
    res.json(registrations);
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({
      error: 'Failed to fetch registrations'
    });
  }
});

// Get registrations by event
app.get('/api/registrations/event/:eventId', async (req, res) => {
  try {
    const registrations = await Registration.find({ 
      eventId: parseInt(req.params.eventId) 
    }).sort({ registrationDate: -1 });
    
    res.json(registrations);
  } catch (error) {
    console.error('Error fetching event registrations:', error);
    res.status(500).json({
      error: 'Failed to fetch event registrations'
    });
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    
    res.status(201).json({
      message: 'Message sent successfully',
      contact: savedContact
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again.'
    });
  }
});

// Get all contact messages (for admin)
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      error: 'Failed to fetch contact messages'
    });
  }
});

// Statistics endpoint
app.get('/api/stats', async (req, res) => {
  try {
    const totalRegistrations = await Registration.countDocuments();
    const registrationsByEvent = await Registration.aggregate([
      {
        $group: {
          _id: '$eventId',
          eventName: { $first: '$eventName' },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    
    const recentRegistrations = await Registration.find()
      .sort({ registrationDate: -1 })
      .limit(5)
      .select('fullName eventName registrationDate');

    res.json({
      totalRegistrations,
      registrationsByEvent,
      recentRegistrations
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({
      error: 'Failed to fetch statistics'
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    error: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API Health check: http://localhost:${PORT}/api/health`);
});
