import React from "react";
import { motion } from "framer-motion";
import "./Register.css";

const Register = () => {
  // Google Form URL - Replace this with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://forms.gle/ZSYfxzCncgfkDP1VA";

  const handleRegisterClick = () => {
    // Open Google Form in a new tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  const events = [
    { id: 1, name: "TECHNOVERSE", description: "Flagship competition with algorithmic problems and ML techniques" },
    { id: 2, name: "404 - PROMPT NOT FOUND", description: "Technical skills workshop with debugging challenges" },
    { id: 3, name: "THE CIPHER TEXT", description: "Cybersecurity summit with ethical hacking and digital forensics" },
    { id: 4, name: "JADE JOURNEY", description: "Web development bootcamp with modern technologies" },
    { id: 5, name: "PAPER PRESENTATION", description: "Academic presentation platform for research showcase" }
  ];

  return (
    <div className="register-page">
      <motion.div 
        className="register-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Event Registration
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '2rem', 
            color: '#b0c4de',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}
        >
          Join ALTRUIXX 2K25 and be part of an amazing technical symposium experience! 
          Choose from our exciting events and register today.
        </motion.p>

        {/* Events Overview */}
        <motion.div 
          className="events-overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <h3 style={{ 
            textAlign: 'center', 
            color: '#00ffff', 
            marginBottom: '2rem',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}>
            Available Events
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  background: 'rgba(0, 255, 255, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h4 style={{ 
                  color: '#00ffff', 
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>
                  {event.name}
                </h4>
                <p style={{ 
                  color: '#b0c4de', 
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          style={{
            background: 'rgba(10, 20, 40, 0.8)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            backdropFilter: 'blur(20px)',
            marginBottom: '2rem'
          }}
        >
          <h3 style={{ 
            color: '#00ffff', 
            marginBottom: '1rem',
            textAlign: 'center',
            fontSize: '1.3rem'
          }}>
            Registration Instructions
          </h3>
          <ul style={{ 
            color: '#b0c4de', 
            lineHeight: '1.8',
            paddingLeft: '1.5rem'
          }}>
            <li>Click the "Register Now" button below to access our registration form</li>
            <li>Fill in all required information accurately</li>
            <li>You can register for a maximum of 2 events</li>
            <li>Team registrations are welcome for applicable events</li>
            <li>Registration deadline: March 10, 2025</li>
            <li>Confirmation will be sent via email after successful registration</li>
          </ul>
        </motion.div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <motion.button 
            onClick={handleRegisterClick}
            className="register-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              color: '#0a0a0f',
              border: 'none',
              padding: '1.2rem 3rem',
              fontSize: '1.2rem',
              fontWeight: '700',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(0, 255, 255, 0.2)'
            }}
          >
            🚀 Register Now
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          style={{ 
            textAlign: 'center', 
            marginTop: '1.5rem', 
            color: '#b0c4de',
            fontSize: '0.9rem'
          }}
        >
          Need help? Contact us at{' '}
          <a 
            href="mailto:altruixx@srmvec.edu" 
            style={{ color: '#00ffff', textDecoration: 'none' }}
          >
            altruixx@srmvec.edu
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;
