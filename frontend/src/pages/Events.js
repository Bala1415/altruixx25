import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const profileCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const Events = () => {
  // The events array contains detailed information about each event.
  // Each object describes the event's title, description, schedule, venue, category, eligibility, prizes, and requirements.
  // This descriptive format helps participants understand what each event offers and how to prepare.

  const events = [
    {
      id: 1,
      title: "TECHNOVERSE",
      description: `TechnoVerse is a multi-stage team-based technical event combining logical thinking, 
problem-solving, and real-world technical reasoning. Across three escalating rounds, 
participants will tackle algorithmic challenges, analyze datasets, and apply machine learning 
techniques using modern tools and technologies.`,
      time: "10:00 AM - 4:00 PM",
      venue: "Main Auditorium",
      category: "Competition",
      eligibility: "Open to all students. Teams of 2-4 members are required.",
      prizes: "₹50,000 cash prizes for top teams.",
      requirements: "Bring a prototype or demo to present."
    },
    {
      id: 2,
      title: "PROMPT NOT FOUND",
      description: "This workshop is a two-round event combining technical skills and creativity. Round 1 is a Kahoot quiz with 20 MCQs on Python, AI, Web Development, and Aptitude. The top 3 teams automatically qualify for the creative challenge in Phase 2. In Round 2, teams debug code to receive a story theme, write a short story, and then swap stories to generate AI image prompts and visuals. Participants should bring a laptop with Python installed.",
      date: "March 16, 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "Computer Science Lab",
      category: "Workshop",
      eligibility: "Participants should have basic programming knowledge.",
      prizes: "Certificates and internship opportunities for winners.",
      requirements: "Laptop with Python installed."
    },
    {
      id: 3,
      title: "THE CIPHER TEXT",
      description: "THE CIPHER TEXT is a cybersecurity summit featuring interactive sessions on ethical hacking, penetration testing, vulnerability assessment, and digital forensics. Attendees will see live demonstrations of common attack vectors and learn best practices for data protection. This event is ideal for those interested in cybersecurity careers.",
      date: "March 17, 2025",
      time: "11:00 AM - 3:00 PM",
      venue: "Conference Hall A",
      category: "Summit",
      eligibility: "CS/IT students preferred, but open to all interested.",
      prizes: "Industry certifications for outstanding participants.",
      requirements: "Basic networking knowledge recommended."
    },
    {
      id: 4,
      title: "JADE JOURNEY",
      description: "JADE JOURNEY is an intensive bootcamp covering modern web development technologies including React, Node.js, MongoDB, and cloud deployment. Participants will build full-stack applications and learn best practices for scalable web development. Bring your laptop and be ready to code!",
      date: "March 18, 2025",
      time: "10:00 AM - 6:00 PM",
      venue: "IT Laboratory",
      category: "Bootcamp",
      eligibility: "Basic HTML/CSS knowledge required.",
      prizes: "Opportunity to showcase your project at the end of the bootcamp.",
      requirements: "Laptop with a code editor installed."
    },
    {
      id: 5,
      title: "PAPER PRESENTATION",
      description: "Present your startup ideas to a panel of investors and industry leaders. This event is perfect for aspiring entrepreneurs to showcase their business models, market analysis, and growth strategies. Network with potential co-founders and mentors, and compete for funding opportunities.",
      date: "March 19, 2025",
      time: "2:00 PM - 6:00 PM",
      venue: "Business Center",
      category: "Competition",
      eligibility: "Open to all students and recent graduates.",
      prizes: "Funding opportunities up to ₹5 lakhs for the best ideas.",
      requirements: "Prepare a business plan and pitch deck for your presentation."
    }
  ];

  return (
    <div className="events-section">
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        All Events
      </motion.h1>
      <div className="events-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="event-card"
            variants={profileCardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ width: '100%', maxWidth: '600px' }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ 
                background: '#667eea', 
                color: 'white', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '15px', 
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {event.category}
              </span>
            </div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-meta">
              <span>📅 {event.date}</span>
              <span>🕐 {event.time}</span>
            </div>
            <div className="event-meta">
              <span>📍 {event.venue}</span>
              <span>🎓 {event.eligibility}</span>
            </div>
            <div className="event-meta">
              <span>🏆 {event.prizes}</span>
            </div>
            <div className="event-actions">
              <Link to={`/events/${event.id}`} className="btn-primary">
                View Details
              </Link>
              <Link to={`/register/${event.id}`} className="btn-secondary">
                Register Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
