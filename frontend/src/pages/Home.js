import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/countdown';

const Home = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [particles, setParticles] = useState([]);

  // Create floating particles effect
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 6,
          duration: 3 + Math.random() * 3,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    const interval = setInterval(createParticles, 10000);
    return () => clearInterval(interval);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Contact from ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;
    const mailtoLink = `mailto:altruixx@srmvec.edu?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message and reset form
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const heroVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
     {/* Floating Particles */}
<div className="particles">
  {particles.map((particle) => (
    <div
      key={particle.id}
      className="particle"
      style={{
        left: `${particle.left}%`,
        animationDelay: `${particle.delay}s`,
        animationDuration: `${particle.duration}s`,
        backgroundColor: 'rgba(0, 255, 255, 0.5)' // Simplified background
      }}
    />
  ))}
</div>

      {/* Hero Section */}
      <motion.section 
        className="hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ALTRUIXX 2K25
        </motion.h1>

        {/* Featured Poster */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            margin: '2rem 0',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <motion.img
            src="/assets/poster.jpg"
            alt="ALTRUIXX 2K25 Official Poster"
            style={{
              maxWidth: '500px',
              width: '90%',
              height: 'auto',
              borderRadius: '20px',
              border: '3px solid rgba(0, 255, 255, 0.5)',
              boxShadow: '0 20px 40px rgba(0, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 30px 60px rgba(0, 255, 255, 0.5)',
              border: '3px solid rgba(0, 255, 255, 0.8)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Countdown replaces description */}
        <CountdownTimer eventName="ALTRUIXX 2K25" eventDate={new Date(new Date().getFullYear(), 7, 23, 0, 0, 0)} autoStart />
        {/* Remove the <motion.p> description */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Link to="/events" className="cta-button">
            Explore Events
          </Link>
        </motion.div>
      </motion.section>


      {/* Team Profiles Section */}
      <motion.section 
        className="team-profiles-section"
        variants={containerVariants}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Our Events
        </motion.h2>
        
        {[
          {
            title: "TECHNOVERSE",
            description: "TechnoVerse is a multi-stage technical showdown where teams decode real-world problems, uncover hidden clues from messy data, and build ML models to battle for leaderboard glory.",
            highlights: ["🎯 Multi-stage Competition", "📊 Data Analysis Challenges", "🤖 ML Implementation"],
            image: "/assets/poster.jpg"
          },
          {
            title: "404 - PROMPT NOT FOUND",
            description: "404 PROMPT NOT FOUND is a tech event where teams face a fast-paced quiz followed by a creative round that turns debugged code into AI-generated visuals through storytelling.",
            highlights: ["💻 Debug to Discover", "🎨  Creative Storytelling", "🔧 AI Prompt Engineering"],
            image: "./assets/404/404.jpg",
            reverse: true
          },
          {
            title: "THE CIPHER TEXT",
            description: "Cybersecurity summit exploring the latest in ethical hacking, penetration testing, and digital forensics with hands-on demonstrations.",
            highlights: ["🔐 Cybersecurity Focus", "🛡️ Ethical Hacking", "🔍 Digital Forensics"],
            image: "/assets/srm.png"
          },
          {
            title: "JADE JOURNEY",
            description: "Test your memory, speed, and teamwork in this thrilling 2-round game! Recreate cup patterns, hunt treasures linked to your department, and decode tech words through actions. From brainy speed to silent drama — only the sharpest teams survive!",
            highlights: ["📸SNAP", "🔎HUNT", "📱 ACT"],
            image: "./assets/jade/jade.jpg",
            reverse: true
          },
          {
            title: "INTELLICA",
            description: "Academic presentation platform where participants showcase their research, innovations, and technical findings to expert panels.",
            highlights: ["📚 Research Presentation", "🎓 Academic Excellence", "🏆 Expert Evaluation"],
            image: "/assets/intellica/logo.jpg"
          }
        ].map((event, index) => (
          <motion.div
            key={index}
            className={`profile-row ${event.reverse ? 'reverse' : ''}`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="profile-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                to={`/event/${index}`}
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit',
                  display: 'block'
                }}
              >
                <motion.div
                  style={{
                    width: '300px',
                    height: '400px',
                    margin: '0 auto',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '3px solid rgba(0, 255, 255, 0.5)',
                    background: 'rgba(0, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(20px)',
                    position: 'relative'
                  }}
                  whileHover={{ 
                    border: '3px solid rgba(0, 255, 255, 0.8)',
                    boxShadow: '0 20px 40px rgba(0, 255, 255, 0.3)',
                    scale: 1.05
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div 
              className="profile-content"
              initial={{ opacity: 0, x: event.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <ul className="profile-highlights">
                {event.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="contact-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(135deg, rgba(10, 20, 40, 0.95), rgba(0, 30, 60, 0.95))',
          minHeight: '100vh'
        }}
      >
        <div className="contact-wrapper" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.h2 
            className="section-title" 
            variants={itemVariants}
            style={{
              textAlign: 'center',
              fontSize: '3rem',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Get In Touch
          </motion.h2>

          {/* Staff Co-ordinators Section */}
          <motion.div 
            variants={containerVariants}
            style={{ marginBottom: '5rem' }}
          >
            <motion.h3 
              variants={itemVariants}
              style={{
                textAlign: 'center',
                color: '#ff00ff',
                fontSize: '2.2rem',
                marginBottom: '1rem',
                fontWeight: '700'
              }}
            >
              ● Staff Co-ordinators
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: '300',
                marginBottom: '3rem',
                fontStyle: 'italic'
              }}
            >
              We're here to give you effective ideas.
            </motion.p>
            
            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '3rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
              variants={containerVariants}
            >
              {/* Dr. S. Ramesh Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(200, 200, 200, 0.1))',
                  padding: '3rem 2rem',
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  animation: 'shimmer 3s infinite',
                  transform: 'rotate(-45deg)'
                }} />
                
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  
                </div>
                
                <h4 style={{
                  color: 'white',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  Dr. ABINAYA
                </h4>
                
                <h5 style={{
                  color: '#ff6b6b',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  Professor
                </h5>
                
                <p style={{
                  color: '#b0c4de',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 2,
                  margin: 0
                }}>
                  Department of Artificial Intelligence and Data Science
                  <br />
                  <span style={{ fontWeight: '600', color: 'white' }}>
                    SRM Valliammai Engineering College
                  </span>
                </p>
              </motion.div>

              {/* Dr. S. R. Preethi Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(200, 200, 200, 0.1))',
                  padding: '3rem 2rem',
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  animation: 'shimmer 3s infinite reverse',
                  transform: 'rotate(-45deg)'
                }} />
                
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  👩‍🏫
                </div>
                
                <h4 style={{
                  color: 'white',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  Dr. SRINIVASAN
                </h4>
                
                <h5 style={{
                  color: '#4ecdc4',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  Associate Professor
                </h5>
                
                <p style={{
                  color: '#b0c4de',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 2,
                  margin: 0
                }}>
                  Department of Artificial Intelligence and Data Science
                  <br />
                  <span style={{ fontWeight: '600', color: 'white' }}>
                    SRM Valliammai Engineering College
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Leadership Section */}
          <motion.div 
            variants={containerVariants}
            style={{ marginBottom: '5rem' }}
          >
            <motion.h3 
              variants={itemVariants}
              style={{
                textAlign: 'center',
                color: '#ff00ff',
                fontSize: '2.2rem',
                marginBottom: '0.5rem',
                fontWeight: '700'
              }}
            >
              ● STUDENT CO-ORDINATORS /INCHARGE
            </motion.h3>
            
            <motion.div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                maxWidth: '600px',
                margin: '2rem auto 0',
                textAlign: 'center'
              }}
              variants={containerVariants}
            >
              {/* President */}
              <motion.div
                variants={itemVariants}
                style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '300',
                  lineHeight: '1.8'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                  SARAN  (9840809513)
                </div>
                <div style={{ 
                  fontSize: '1.3rem', 
                  fontStyle: 'italic', 
                  color: '#ff00ff',
                  marginBottom: '1.5rem'
                }}>
                  PRESIDENT
                </div>
              </motion.div>

              {/* Vice President */}
              <motion.div
                variants={itemVariants}
                style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '300',
                  lineHeight: '1.8'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                  KAAMESH (6382631461)
                </div>
                <div style={{ 
                  fontSize: '1.3rem', 
                  fontStyle: 'italic', 
                  color: '#ff00ff',
                  marginBottom: '1.5rem'
                }}>
                  VICE PRESIDENT
                </div>
              </motion.div>

              {/* Secretary */}
              <motion.div
                variants={itemVariants}
                style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '300',
                  lineHeight: '1.8'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                  ABINAYA (9087951148)
                </div>
                <div style={{ 
                  fontSize: '1.3rem', 
                  fontStyle: 'italic', 
                  color: '#ff00ff',
                  marginBottom: '1.5rem'
                }}>
                  SECRETARY
                </div>
              </motion.div>

              {/* Vice Secretary */}
              <motion.div
                variants={itemVariants}
                style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '300',
                  lineHeight: '1.8'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                  SHALINI (7010040489)
                </div>
                <div style={{ 
                  fontSize: '1.3rem', 
                  fontStyle: 'italic', 
                  color: '#ff00ff',
                  marginBottom: '1.5rem'
                }}>
                  JOINT SECRETARY
                </div>
              </motion.div>

              {/* Treasurer */}
              <motion.div
                variants={itemVariants}
                style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '300',
                  lineHeight: '1.8'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                  JEYAPRAKASH (7395835201)
                </div>
                <div style={{ 
                  fontSize: '1.3rem', 
                  fontStyle: 'italic', 
                  color: '#ff00ff',
                  marginBottom: '1.5rem'
                }}>
                  TREASURER
                </div>
              </motion.div>

              {/* Vice Treasurer */}
              <motion.div
                variants={itemVariants}
                style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '300',
                  lineHeight: '1.8'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                  SANJAY.N (8825423058)
                </div>
                <div style={{ 
                  fontSize: '1.3rem', 
                  fontStyle: 'italic', 
                  color: '#ff00ff'
                }}>
                  JOINTTRESURER
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Information Grid */}
          <motion.div 
            className="contact-grid" 
            variants={containerVariants}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* General Contact Information - Centered */}
            <motion.div variants={itemVariants} style={{ maxWidth: '800px' }}>
              <h3 style={{ 
                color: '#00ffff', 
                marginBottom: '2.5rem', 
                fontSize: '2rem',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                Contact Information
              </h3>
              
              <div style={{
                background: 'rgba(10, 20, 40, 0.8)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)'
              }}>
                {[
                  { icon: '📧', title: 'Official Email', info: 'altruixx@srmvec.edu' },
                  { icon: '📍', title: 'Venue', info: 'SRM Valliammai Engineering College\nKattankulathur, Chennai - 603203' },
                  { icon: '🕐', title: 'Event Dates', info: 'March 15-19, 2025\nRegistration Deadline: March 10, 2025' },
                  { icon: '🎯', title: 'Event Type', info: 'Technical Symposium\nWorkshops & Competitions' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="contact-info"
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      marginBottom: '1rem',
                      background: 'rgba(0, 255, 255, 0.05)',
                      borderRadius: '15px',
                      border: '1px solid rgba(0, 255, 255, 0.1)'
                    }}
                  >
                    <span style={{ fontSize: '2rem', minWidth: '3rem' }}>{contact.icon}</span>
                    <div>
                      <strong style={{ 
                        color: '#00ffff',
                        fontSize: '1.2rem',
                        display: 'block',
                        marginBottom: '0.5rem'
                      }}>
                        {contact.title}
                      </strong>
                      <p style={{ 
                        margin: 0, 
                        color: '#b0c4de',
                        whiteSpace: 'pre-line',
                        lineHeight: '1.6',
                        fontSize: '1rem'
                      }}>
                        {contact.info}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Social Media Links */}
                <motion.div 
                  variants={itemVariants}
                  style={{ marginTop: '2.5rem' }}
                >
                  <h4 style={{ 
                    color: '#00ffff', 
                    marginBottom: '1.5rem',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}>
                    Follow Us
                  </h4>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem'
                  }}>
                    {[
                      { name: '💼 LinkedIn', url: 'https://linkedin.com' },
                      { name: '📷 Instagram', url: 'https://www.instagram.com/altruixx_2k25?igsh=MXdicnUyanQxb2c0eA==' },
                      { name: '📘 Facebook', url: 'https://facebook.com' },
                      { name: '🐦 Twitter', url: 'https://twitter.com' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#00ffff',
                          textDecoration: 'none',
                          padding: '1rem',
                          border: '1px solid #00ffff',
                          borderRadius: '15px',
                          transition: 'all 0.3s ease',
                          fontSize: '1rem',
                          fontWeight: '600',
                          textAlign: 'center',
                          background: 'rgba(0, 255, 255, 0.05)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: '#00ffff',
                          color: '#0a0a0f'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 40, 0.95))',
          padding: '4rem 2rem 2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem'
            }}
            variants={containerVariants}
          >
            {/* Left Section - Ready to Participate */}
            <motion.div variants={itemVariants}>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                color: 'white',
                marginBottom: '2rem',
                lineHeight: '1.2'
              }}>
                Ready to<br />Participate?
              </h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>📷</span>
                  <span style={{ color: '#b0c4de', fontSize: '1.1rem' }}>
                    Instagram: 
                    <a 
                      href="https://www.instagram.com/altruixx_2k25?igsh=MXdicnUyanQxb2c0eA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#00ffff', 
                        textDecoration: 'underline',
                        marginLeft: '0.5rem'
                      }}
                    >
                     altruixx_2k25
                    </a>
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>📧</span>
                  <a 
                    href="mailto:srmvec@srmvalliammai.ac.in"
                    style={{ 
                      color: '#00ffff', 
                      textDecoration: 'underline',
                      fontSize: '1.1rem'
                    }}
                  >
                   altruixx@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Middle Section - Quick Links & Contact Info */}
            <motion.div variants={itemVariants}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}>
                  Quick Link
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}>
                  {['About', 'Service', 'Blog'].map((item, index) => (
                    <a
                      key={index}
                      href={`/${item.toLowerCase()}`}
                      style={{
                        color: '#b0c4de',
                        textDecoration: 'underline',
                        fontSize: '1rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#00ffff'}
                      onMouseLeave={(e) => e.target.style.color = '#b0c4de'}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}>
                  Contact Info
                </h4>
                <div style={{
                  color: '#b0c4de',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  <div style={{ marginBottom: '0.5rem' }}>23TH AUGUST 2025</div>
                  <div style={{ marginBottom: '0.5rem', textDecoration: 'underline' }}>
                    SRM VALLIAMMAI ENGINEERING COLLEGE
                  </div>
                  <div style={{ textDecoration: 'underline' }}>
                    SRM Nagar, Kattankulathur - 603 203, Chengalpattu District, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Other Pages */}
            <motion.div variants={itemVariants}>
              <h4 style={{
                color: 'white',
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>
                Other Page
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                {[
                  { name: 'Privacy Policy', link: '/privacy-policy' },
                  { name: 'Terms Of Use', link: '/terms-of-use' },
                  { name: 'Support', link: '/support' }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    style={{
                      color: '#b0c4de',
                      textDecoration: 'underline',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00ffff'}
                    onMouseLeave={(e) => e.target.style.color = '#b0c4de'}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            variants={itemVariants}
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}
          >
            <div style={{
              color: '#b0c4de',
              fontSize: '0.9rem'
            }}>
              © 2025 ALTRUIXX 2K25. All rights reserved. | Developed by SRM Valliammai Engineering College
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default Home;