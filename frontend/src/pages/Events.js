import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const events = [
    {
      id: 1,
      title: "TECHNOVERSE",
      description: `TechnoVerse is a multi-stage team-based technical event combining logical thinking, 
problem-solving, and real-world technical reasoning. Across three escalating rounds, 
participants will tackle algorithmic challenges, analyze datasets, and apply machine learning 
techniques using modern tools and technologies.`,
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "Main Auditorium",
      eligibility: "Open to all students. Teams of 2-4 members are required.",
      prizes: "₹50,000 cash prizes for top teams.",
      requirements: "Bring a prototype or demo to present.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    },
    {
      id: 2,
      title: "404 - PROMPT NOT FOUND",
      description: "This workshop is a two-round event combining technical skills and creativity. Round 1 is a Kahoot quiz with 20 MCQs on Python, AI, Web Development, and Aptitude. The top 3 teams automatically qualify for the creative challenge in Phase 2. In Round 2, teams debug code to receive a story theme, write a short story, and then swap stories to generate AI image prompts and visuals. Participants should bring a laptop with Python installed.",
      date: "March 16, 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "Computer Science Lab",
      eligibility: "Participants should have basic programming knowledge.",
      prizes: "Certificates and internship opportunities for winners.",
      requirements: "Laptop with Python installed.",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    },
    {
      id: 3,
      title: "THE CIPHER TEXT",
      description: "THE CIPHER TEXT is a cybersecurity summit featuring interactive sessions on ethical hacking, penetration testing, vulnerability assessment, and digital forensics. Attendees will see live demonstrations of common attack vectors and learn best practices for data protection. This event is ideal for those interested in cybersecurity careers.",
      date: "March 17, 2025",
      time: "11:00 AM - 3:00 PM",
      venue: "Conference Hall A",
      eligibility: "CS/IT students preferred, but open to all interested.",
      prizes: "Industry certifications for outstanding participants.",
      requirements: "Basic networking knowledge recommended.",
      icon: "🔐",
      color: "from-red-500 to-orange-500",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    },
    {
      id: 4,
      title: "JADE JOURNEY",
      description: "JADE JOURNEY is an intensive bootcamp covering modern web development technologies including React, Node.js, MongoDB, and cloud deployment. Participants will build full-stack applications and learn best practices for scalable web development. Bring your laptop and be ready to code!",
      date: "March 18, 2025",
      time: "10:00 AM - 6:00 PM",
      venue: "IT Laboratory",
      eligibility: "Basic HTML/CSS knowledge required.",
      prizes: "Opportunity to showcase your project at the end of the bootcamp.",
      requirements: "Laptop with a code editor installed.",
      icon: "🌐",
      color: "from-green-500 to-teal-500",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
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
      requirements: "Prepare a business plan and pitch deck for your presentation.",
      icon: "📊",
      color: "from-indigo-500 to-purple-500",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    }
  ];

  const categories = ['all', 'Competition', 'Workshop', 'Summit', 'Bootcamp'];
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="events-section"
      style={{ paddingTop: '6rem', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h1 className="section-title">
          Discover Amazing Events
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#b0c4de', 
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.8'
        }}>
          Explore our diverse range of technical events, workshops, and competitions 
          designed to challenge and inspire the next generation of innovators.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '4rem'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              padding: '1rem 2rem',
              borderRadius: '25px',
              border: filter === category 
                ? '2px solid #00ffff' 
                : '2px solid rgba(0, 255, 255, 0.3)',
              background: filter === category 
                ? 'linear-gradient(135deg, #00ffff, #0080ff)'
                : 'transparent',
              color: filter === category ? '#0a0a0f' : '#00ffff',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'capitalize'
            }}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Events Grid */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          padding: '0 1rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        layout
      >
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            className="event-card"
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(event.id)}
            onHoverEnd={() => setHoveredCard(null)}
            style={{
              position: 'relative',
              overflow: 'hidden'
            }}
            layout
            layoutId={`event-${event.id}`}
          >
            {/* Animated Background */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${event.color.split(' ').join(', ')})`,
                opacity: hoveredCard === event.id ? 0.1 : 0.05,
                transition: 'opacity 0.3s ease',
                zIndex: -1
              }}
            />

            {/* Category Badge */}
            <motion.div
              style={{
                display: 'inline-block',
                background: `linear-gradient(135deg, ${event.color.split(' ').join(', ')})`,
                color: '#0a0a0f',
                padding: '0.5rem 1.2rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)'
              }}
              whileHover={{ scale: 1.1 }}
            >
              {event.category}
            </motion.div>

            {/* Event Icon */}
            <motion.div
              style={{
                fontSize: '4rem',
                textAlign: 'center',
                marginBottom: '1.5rem',
                filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
              }}
              animate={{
                rotateY: hoveredCard === event.id ? 360 : 0
              }}
              transition={{ duration: 0.6 }}
            >
              {event.icon}
            </motion.div>

            <h3 style={{ marginBottom: '1.5rem' }}>{event.title}</h3>
            
            <p style={{ 
              marginBottom: '2rem',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {event.description}
            </p>

            {/* Event Details */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="event-meta" style={{ 
                flexDirection: 'column', 
                alignItems: 'flex-start',
                gap: '0.8rem'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📅 <strong>{event.date}</strong>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  🕐 {event.time}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📍 {event.venue}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  🏆 {event.prizes}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="event-actions" style={{ gap: '1rem' }}>
              <Link 
                to={`/events/${event.id}`} 
                className="btn-primary"
                style={{ flex: 1, textAlign: 'center' }}
              >
                View Details
              </Link>
              <motion.a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, textAlign: 'center' }}
                whileHover={{ 
                  background: '#00ffff',
                  color: '#0a0a0f',
                  transform: 'scale(1.05)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.a>
            </div>

            {/* Hover Effect Overlay */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 128, 255, 0.1))',
                opacity: 0,
                pointerEvents: 'none',
                borderRadius: '25px'
              }}
              animate={{
                opacity: hoveredCard === event.id ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        style={{
          textAlign: 'center',
          marginTop: '6rem',
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 128, 255, 0.05))',
          borderRadius: '25px',
          border: '1px solid rgba(0, 255, 255, 0.2)',
          maxWidth: '800px',
          margin: '6rem auto 0'
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3
          style={{
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #00ffff, #0080ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Ready to Join the Innovation?
        </motion.h3>
        
        <p style={{
          fontSize: '1.3rem',
          color: '#b0c4de',
          marginBottom: '2.5rem',
          lineHeight: '1.8'
        }}>
          Don't miss out on these incredible opportunities to learn, compete, and network 
          with fellow tech enthusiasts. Register now and be part of ALTRUIXX 2K25!
        </p>
        
        <motion.div
          style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link 
            to="/contact" 
            className="cta-button"
            style={{ textDecoration: 'none' }}
          >
            Contact Us
          </Link>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNZoaoSEkNWg45ZY6obMOttfUkYc7X5jpUtoIkCH31hghlVw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '1.2rem 3rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '50px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            whileHover={{ 
              scale: 1.05,
              background: '#00ffff',
              color: '#0a0a0f'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Register for All Events
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              background: '#00ffff',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 10px #00ffff'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Events;