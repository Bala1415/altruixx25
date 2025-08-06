import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EventDetail = () => {
  const { id } = useParams();
  
  // Only show images for event ID 1 (404 - PROMPT NOT FOUND)
  if (id === '1') {
    return (
      <div className="events-section">
        <motion.div 
          className="register-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            maxWidth: '800px',
            textAlign: 'center',
            padding: '2rem'
          }}
        >
          <h1 style={{ 
            color: '#764ba2', 
            marginBottom: '2rem',
            fontSize: '2.5rem'
          }}>
            404 - PROMPT NOT FOUND
          </h1>
          
          {/* Images in column layout */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: '3px solid rgba(0, 255, 255, 0.3)',
                background: 'rgba(0, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                maxWidth: '600px',
                width: '100%'
              }}
            >
              <img
                src="/assets/404/1.jpg"
                alt="404 Event Details 1"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: '3px solid rgba(0, 255, 255, 0.3)',
                background: 'rgba(0, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                maxWidth: '600px',
                width: '100%'
              }}
            >
              <img
                src="/assets/404/2.jpg"
                alt="404 Event Details 2"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </motion.div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/events" className="btn-secondary">
              Back to Events
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // For all other events, show not found
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
};

export default EventDetail;


