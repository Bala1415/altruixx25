import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Events data matching the home page events
const events = [
  {
    id: 0,
    category: 'Tech',
    title: 'TECHNOVERSE',
    image: '/assets/poster.jpg',
    date: 'March 15, 2025',
    time: '10:00 AM - 5:00 PM',
    venue: 'SRM Valliammai Engineering College',
    eligibility: 'All Engineering Students',
    prizes: 'Cash Prizes, Certificates, Trophies',
    requirements: 'Laptop, Valid ID, Registration',
    fullDescription: '404 prompt not found is a tech event where teams face a fast-paced quiz followed by a creative round that turns debugged code into AI-generated visuals through storytelling. This is a multi-stage competition featuring data analysis challenges and ML implementation.',
    schedule: [
      '10:00 AM - Registration & Welcome',
      '11:00 AM - Opening Ceremony',
      '12:00 PM - Quiz Round 1',
      '2:00 PM - Creative Coding Round',
      '4:00 PM - AI Visual Generation',
      '5:00 PM - Results & Prize Distribution'
    ],
    judges: ['Dr. Abinaya', 'Dr. Srinivasan', 'Industry Expert Panel'],
    instructors: null,
    speakers: null
  },
  {
    id: 1,
    category: 'Tech',
    title: '404 - PROMPT NOT FOUND',
    image: '/assets/404/1.jpg',
    date: 'March 16, 2025',
    time: '9:00 AM - 4:00 PM',
    venue: 'SRM Valliammai Engineering College',
    eligibility: 'All Engineering Students',
    prizes: 'Cash Prizes, Certificates, Internship Opportunities',
    requirements: 'Programming Knowledge, Laptop, Creative Mind',
    fullDescription: '404 PROMPT NOT FOUND is a tech event where teams face a fast-paced quiz followed by a creative round that turns debugged code into AI-generated visuals through storytelling. Participants will debug code, create stories, and use AI prompt engineering.',
    schedule: [
      '9:00 AM - Registration',
      '10:00 AM - Technical Quiz',
      '12:00 PM - Debug Challenge',
      '2:00 PM - Creative Storytelling',
      '3:00 PM - AI Prompt Engineering',
      '4:00 PM - Final Presentation'
    ],
    judges: ['Technical Experts', 'AI Specialists', 'Creative Directors'],
    instructors: null,
    speakers: null
  },
  {
    id: 2,
    category: 'Cybersecurity',
    title: 'THE CIPHER TEXT',
    image: '/assets/srm.png',
    date: 'March 17, 2025',
    time: '10:00 AM - 6:00 PM',
    venue: 'SRM Valliammai Engineering College',
    eligibility: 'Computer Science & IT Students',
    prizes: 'Security Certifications, Cash Prizes, Job Opportunities',
    requirements: 'Cybersecurity Basics, Laptop, Kali Linux (Optional)',
    fullDescription: 'Cybersecurity summit exploring the latest in ethical hacking, penetration testing, and digital forensics with hands-on demonstrations. Learn about cybersecurity focus, ethical hacking techniques, and digital forensics methods.',
    schedule: [
      '10:00 AM - Registration & Setup',
      '11:00 AM - Ethical Hacking Workshop',
      '1:00 PM - Penetration Testing Demo',
      '3:00 PM - Digital Forensics Session',
      '5:00 PM - Hands-on Challenges',
      '6:00 PM - Closing & Awards'
    ],
    judges: ['Cybersecurity Professionals', 'Ethical Hackers', 'Digital Forensics Experts'],
    instructors: null,
    speakers: ['Industry Security Experts', 'Certified Ethical Hackers']
  },
  {
    id: 3,
    category: 'Web Development',
    title: 'JADE JOURNEY',
    image: '/assets/srm.png',
    date: 'March 18, 2025',
    time: '9:00 AM - 5:00 PM',
    venue: 'SRM Valliammai Engineering College',
    eligibility: 'All Engineering Students',
    prizes: 'Development Tools, Hosting Credits, Certificates',
    requirements: 'Basic Programming, Laptop, Code Editor',
    fullDescription: 'Intensive web development bootcamp covering modern technologies including React, Node.js, MongoDB, and cloud deployment strategies. Experience full-stack development, cloud deployment, and modern frameworks.',
    schedule: [
      '9:00 AM - Registration',
      '10:00 AM - React Fundamentals',
      '12:00 PM - Node.js Backend',
      '2:00 PM - MongoDB Database',
      '4:00 PM - Cloud Deployment',
      '5:00 PM - Project Showcase'
    ],
    judges: null,
    instructors: ['Full-Stack Developers', 'Cloud Architects', 'Senior Engineers'],
    speakers: null
  },
  {
    id: 4,
    category: 'Research',
    title: 'INTELLICA',
    image: '/assets/srm.png',
    date: 'March 19, 2025',
    time: '10:00 AM - 4:00 PM',
    venue: 'SRM Valliammai Engineering College',
    eligibility: 'All Students with Research Papers',
    prizes: 'Research Grants, Publication Opportunities, Certificates',
    requirements: 'Research Paper, Presentation, Valid ID',
    fullDescription: 'Intellica – Ignite Ideas. Inspire Innovation. Step into the spotlight with Intellica, a thrilling paper presentation event where innovation meets intellect. It\'s a stage for tech enthusiasts and budding researchers to showcase groundbreaking ideas, challenge conventional thinking, and present solutions that shape tomorrow. Whether it\'s AI, green tech, or futuristic systems — if you\'ve got the vision, Intellica is your voice. Academic presentation platform where participants showcase their research, innovations, and technical findings to expert panels.',
    schedule: [
      '10:00 AM - Registration & Setup',
      '11:00 AM - Paper Presentations Batch 1',
      '1:00 PM - Paper Presentations Batch 2',
      '3:00 PM - Expert Panel Discussion',
      '4:00 PM - Awards & Recognition'
    ],
    judges: ['Research Professors', 'Industry Researchers', 'Academic Experts'],
    instructors: null,
    speakers: null
  }
];

const EventDetail = () => {
  const { id } = useParams();
  
  // Find event by ID
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return (
      <div className="events-section">
        <h1 className="section-title">Event Not Found</h1>
        <div style={{ textAlign: 'center' }}>
          <Link to="/events" className="btn-primary">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="events-section">
      <motion.div 
        className="register-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px' }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ 
            background: '#667eea', 
            color: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px', 
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            {event.category}
          </span>
        </div>
        
        <h1 style={{ color: '#764ba2', marginBottom: '1rem' }}>{event.title}</h1>
        
        {/* Event Image Display */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <motion.img
            src={event.image}
            alt={event.title}
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '3px solid rgba(118, 75, 162, 0.2)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div><strong>📅 Date:</strong> {event.date}</div>
            <div><strong>🕐 Time:</strong> {event.time}</div>
            <div><strong>📍 Venue:</strong> {event.venue}</div>
            <div><strong>🎓 Eligibility:</strong> {event.eligibility}</div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong>🏆 Prizes:</strong> {event.prizes}
          </div>
          <div>
            <strong>📋 Requirements:</strong> {event.requirements}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>About This Event</h3>
          <p style={{ lineHeight: '1.6', color: '#666' }}>{event.fullDescription}</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Event Schedule</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {event.schedule.map((item, index) => (
              <li key={index} style={{ 
                padding: '0.5rem 0', 
                borderBottom: '1px solid #eee',
                color: '#666'
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>
            {event.judges ? 'Judges' : event.instructors ? 'Instructors' : 'Speakers'}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {(event.judges || event.instructors || event.speakers).map((person, index) => (
              <li key={index} style={{ 
                padding: '0.5rem 0', 
                color: '#666'
              }}>
                • {person}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to={`/register/${id}`} className="btn-primary" style={{ marginRight: '1rem' }}>
            Register for This Event
          </Link>
          <Link to="/events" className="btn-secondary">
            Back to Events
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetail;
