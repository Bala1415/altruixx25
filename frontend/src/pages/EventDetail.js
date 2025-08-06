import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EventDetail = () => {
  const { id } = useParams();
  
  // removed as requested

  const event = events[id];

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
