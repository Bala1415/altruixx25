const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

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

// Registration Schema
const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  institution: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: String, required: true },
  rollNumber: { type: String },
  eventId: { type: Number, required: true },
  eventName: { type: String, required: true },
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

// Registration routes
app.post('/api/registrations', async (req, res) => {
  try {
    // Check if user is already registered for this event
    const existingRegistration = await Registration.findOne({
      email: req.body.email,
      eventId: req.body.eventId
    });

    if (existingRegistration) {
      return res.status(400).json({
        error: 'You are already registered for this event'
      });
    }

    const registration = new Registration(req.body);
    const savedRegistration = await registration.save();
    
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
