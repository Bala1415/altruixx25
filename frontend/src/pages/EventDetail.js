import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EventDetail = () => {
  const { id } = useParams();
  
  // Show images for event ID 0 (TECHNOVERSE)
  if (id === '0') {
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
            TECHNOVERSE
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
                src="/assets/technoverse/1.jpg"
                alt="Technoverse Event Details 1"
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
                src="/assets/technoverse/2.jpg"
                alt="Technoverse Event Details 2"
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

  // Show images for event ID 1 (404 - PROMPT NOT FOUND)
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

          {/* Student Coordinators Section */}
          <motion.div 
            style={{ marginTop: '3rem', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 style={{ 
              color: '#764ba2', 
              marginBottom: '2rem',
              fontSize: '2rem',
              fontWeight: '700',
              textAlign: 'center'
            }}>
              Student Coordinators
            </h3>
            
            <div style={{
              background: 'rgba(118, 75, 162, 0.1)',
              padding: '2rem',
              borderRadius: '15px',
              border: '1px solid rgba(118, 75, 162, 0.3)',
              backdropFilter: 'blur(10px)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              {[
                { name: 'Akshaya.V', phone: '9380597472' },
                { name: 'Kritthika.S', phone: '+91 73057 25190' },
                { name: 'Saraswati.V', phone: '+91 63798 43223' },
                { name: 'Tisha.R', phone: '+91 95000 63181' }
              ].map((coordinator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    marginBottom: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(118, 75, 162, 0.2)'
                  }}
                >
                  <span style={{ 
                    color: '#764ba2',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {coordinator.name}
                  </span>
                  <span style={{ 
                    color: '#666',
                    fontSize: '1rem'
                  }}>
                    {coordinator.phone}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/events" className="btn-secondary">
              Back to Events
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Show images for event ID 2 (THE CIPHER TEXT)
  if (id === '2') {
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
            THE CIPHER CUT
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
                src="/assets/ciper/1.jpg"
                alt="Cipher Text Event Details 1"
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
                src="/assets/ciper/2.jpg"
                alt="Cipher Text Event Details 2"
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

  // Show images for event ID 3 (JADE JOURNEY)
  if (id === '3') {
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
            JADE JOURNEY
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
                src="/assets/jade/1.jpg"
                alt="Jade Journey Event Details 1"
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
                src="/assets/jade/2.jpg"
                alt="Jade Journey Event Details 2"
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

  // Show images for event ID 4 (INTELLICA)
  if (id === '4') {
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
            INTELLICA
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
                src="/assets/intellica/1.jpg"
                alt="Intellica Event Details 1"
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
                src="/assets/intellica/2.jpg"
                alt="Intellica Logo"
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


