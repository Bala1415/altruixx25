import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
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
            description: "Our flagship competition that challenges participants with algorithmic problems, data analysis, and machine learning techniques using modern tools and technologies.",
            highlights: ["🎯 Multi-stage Competition", "📊 Data Analysis Challenges", "🤖 ML Implementation"],
            image: "/assets/poster.jpg"
          },
          {
            title: "404 - PROMPT NOT FOUND",
            description: "An innovative workshop combining technical skills with creativity, featuring debugging challenges and AI-powered content generation.",
            highlights: ["💻 Technical Skills Assessment", "🎨 Creative Challenges", "🔧 Debugging Expertise"],
            image: "/assets/srm.png",
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
            description: "Intensive web development bootcamp covering modern technologies including React, Node.js, MongoDB, and cloud deployment strategies.",
            highlights: ["🌐 Full-Stack Development", "☁️ Cloud Deployment", "📱 Modern Frameworks"],
            image: "/assets/srm.png",
            reverse: true
          },
          {
            title: "PAPER PRESENTATION",
            description: "Academic presentation platform where participants showcase their research, innovations, and technical findings to expert panels.",
            highlights: ["📚 Research Presentation", "🎓 Academic Excellence", "🏆 Expert Evaluation"],
            image: "/assets/srm.png"
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
              <ProfileCard
                name={event.title}
                title="Technical Event"
                handle={event.title.toLowerCase().replace(/\s+/g, '')}
                status="Available"
                contactText="Learn More"
                avatarUrl={event.image}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  const eventsSection = document.querySelector('.events-section');
                  eventsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
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

      {/* Stats Section */}
      <motion.section 
        style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 128, 255, 0.1))',
          textAlign: 'center'
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Event Statistics
        </motion.h2>
        
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '4rem auto 0'
          }}
          variants={containerVariants}
        >
          {[
            { number: '5+', label: 'Technical Events', icon: '🚀' },
            { number: '500+', label: 'Expected Participants', icon: '👥' },
            { number: '3', label: 'Days of Innovation', icon: '📅' },
            { number: '₹50K+', label: 'Prize Pool', icon: '🏆' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              style={{
                background: 'rgba(10, 20, 40, 0.8)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{stat.icon}</div>
              <motion.div
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div style={{ color: '#b0c4de', fontSize: '1.1rem', fontWeight: '600' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
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

          {/* Leadership Section */}
          <motion.div 
            variants={containerVariants}
            style={{ marginBottom: '5rem' }}
          >
            <motion.h3 
              variants={itemVariants}
              style={{
                textAlign: 'center',
                color: '#00ffff',
                fontSize: '2.2rem',
                marginBottom: '3rem',
                fontWeight: '700'
              }}
            >
              Event Leadership
            </motion.h3>
            
            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '3rem',
                maxWidth: '900px',
                margin: '0 auto'
              }}
              variants={containerVariants}
            >
              {/* President Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(0, 128, 255, 0.15))',
                  padding: '3rem 2rem',
                  borderRadius: '25px',
                  border: '2px solid rgba(0, 255, 255, 0.3)',
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
                  background: 'linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
                  animation: 'shimmer 3s infinite',
                  transform: 'rotate(-45deg)'
                }} />
                
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  👑
                </div> 
                
                <h4 style={{
                  color: '#00ffff',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  President
                </h4>
                
                <h5 style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  [Saran]
                </h5>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    color: '#b0c4de'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>📧</span>
                    <span>president@altruixx.com</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    color: '#b0c4de'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>📱</span>
                    <span>+91-98765-43210</span>
                  </div>
                </div>
              </motion.div>

              {/* Vice President Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 128, 255, 0.15), rgba(128, 0, 255, 0.15))',
                  padding: '3rem 2rem',
                  borderRadius: '25px',
                  border: '2px solid rgba(0, 128, 255, 0.3)',
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
                  background: 'linear-gradient(45deg, transparent, rgba(0, 128, 255, 0.1), transparent)',
                  animation: 'shimmer 3s infinite reverse',
                  transform: 'rotate(-45deg)'
                }} />
                
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0080ff, #8000ff)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  🎖️
                </div>
                
                <h4 style={{
                  color: '#0080ff',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  Vice President
                </h4>
                
                <h5 style={{
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  [Vice President Name]
                </h5>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    color: '#b0c4de'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>📧</span>
                    <span>vicepresident@altruixx.com</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    color: '#b0c4de'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>📱</span>
                    <span>+91-98765-43211</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Information Grid */}
          <motion.div 
            className="contact-grid" 
            variants={containerVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '4rem',
              alignItems: 'start'
            }}
          >
            {/* General Contact Information */}
            <motion.div variants={itemVariants}>
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

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 style={{ 
                color: '#00ffff', 
                marginBottom: '2.5rem',
                fontSize: '2rem',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                Send us a Message
              </h3>
              
              <motion.form 
                onSubmit={handleSubmit}
                style={{
                  background: 'rgba(10, 20, 40, 0.8)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block',
                    color: '#00ffff',
                    marginBottom: '0.8rem',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      border: '2px solid rgba(0, 255, 255, 0.3)',
                      borderRadius: '12px',
                      background: 'rgba(0, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block',
                    color: '#00ffff',
                    marginBottom: '0.8rem',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      border: '2px solid rgba(0, 255, 255, 0.3)',
                      borderRadius: '12px',
                      background: 'rgba(0, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block',
                    color: '#00ffff',
                    marginBottom: '0.8rem',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      border: '2px solid rgba(0, 255, 255, 0.3)',
                      borderRadius: '12px',
                      background: 'rgba(0, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '1rem',
                      resize: 'vertical',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                <motion.button 
                  type="submit" 
                  className="btn-primary"
                  style={{ 
                    width: '100%',
                    padding: '1.2rem',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#0a0a0f',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
                
                {sent && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                      marginTop: '1.5rem',
                      padding: '1rem',
                      background: 'rgba(0, 255, 0, 0.1)',
                      border: '1px solid rgba(0, 255, 0, 0.3)',
                      borderRadius: '10px',
                      color: '#00ff00',
                      textAlign: 'center',
                      fontWeight: '600'
                    }}
                  >
                    ✅ Thank you! Message sent successfully.
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;