import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Events = () => {
  const [particles, setParticles] = useState([]);

  // Create floating particles effect
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
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

  const events = [
    {
      id: 0,
      title: "TECHNOVERSE",
      description: "TechnoVerse is a multi-stage technical showdown where teams decode real-world problems, uncover hidden clues from messy data, and build ML models to battle for leaderboard glory.",
      date: "August 23, 2025",
      time: "11:00 AM - 4:00 PM",
      venue: "AIDS lab 3rd floor",
      highlights: ["🎯 Multi-stage Competition", "📊 Data Analysis Challenges", "🤖 ML Implementation"],
      image: "/assets/technoverse/techno.jpg",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    },
    {
      id: 1,
      title: "404 - PROMPT NOT FOUND",
      description: "404 PROMPT NOT FOUND is a tech event where teams face a fast-paced quiz followed by a creative round that turns debugged code into AI-generated visuals through storytelling.",
      date: "August 23, 2025",
      time: "11:00 AM - 4:00 PM",
      venue: "AI&DS Lab- 3rd Floor",
      highlights: ["💻 Debug to Discover", "🎨 Creative Storytelling", "🔧 AI Prompt Engineering"],
      image: "/assets/404/404.jpg",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    },
    {
      id: 2,
      title: "THE CIPHER CUT",
      description: "Not your usual movie night – it's decoding, designing, and outsmarting your way through iconic film lines and poster clues.",
      date: "August 23, 2025",
      time: "11:00 AM - 4:00 PM",
      venue: "Room no-203",
      highlights: ["🎬 Movie Decoding", "🎨 Design Challenges", "🧩 Poster Clues"],
      image: "/assets/ciper/cipher.jpg",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    },
    {
      id: 3,
      title: "JADE JOURNEY",
      description: "Test your memory, speed, and teamwork in this thrilling 2-round game! Recreate cup patterns, hunt treasures linked to your department, and decode tech words through actions. From brainy speed to silent drama — only the sharpest teams survive!",
      date: "August 23, 2025",
      time: "11:00 AM - 4:00 PM",
      venue: "Multiple Venues",
      highlights: ["📸 SNAP", "🔎 HUNT", "📱 ACT"],
      image: "/assets/jade/jade.jpg",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    },
    {
      id: 4,
      title: "INTELLICA",
      description: "Intellica – Ignite Ideas. Inspire Innovation. Step into the spotlight with Intellica, a thrilling paper presentation event where innovation meets intellect. It's a stage for tech enthusiasts and budding researchers to showcase groundbreaking ideas, challenge conventional thinking, and present solutions that shape tomorrow. Whether it's AI, green tech, or futuristic systems — if you've got the vision, Intellica is your voice.",
      date: "August 23, 2025",
      time: "11:00 AM - 4:00 PM",
      venue: "Auditorium",
      highlights: ["📚 Research Presentation", "🎓 Academic Excellence", "🏆 Expert Evaluation"],
      image: "/assets/intellica/logo.jpg",
      registrationUrl: "https://forms.gle/3EY9HxsFXicxWfQE9"
    }
  ];

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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
      paddingTop: '6rem',
      position: 'relative'
    }}>
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
              backgroundColor: 'rgba(0, 255, 255, 0.5)'
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        style={{
          textAlign: 'center',
          marginBottom: '4rem',
          padding: '0 2rem'
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #00ffff, #0080ff, #ff00ff)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            textShadow: '0 0 50px rgba(0, 255, 255, 0.3)',
            lineHeight: '1.1'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ALTRUIXX 2K25
        </motion.h1>
        
        <motion.h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '1rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover Amazing Events
        </motion.h2>
        
        <motion.p
          style={{
            fontSize: '1.3rem',
            color: '#b0c4de',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Explore our diverse range of technical events designed to challenge and inspire the next generation of innovators.
        </motion.p>
      </motion.div>

      {/* Events Grid */}
      <motion.div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginBottom: '4rem'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(200, 200, 200, 0.05))',
              borderRadius: '25px',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            {/* Shimmer Effect */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
              animation: 'shimmer 3s infinite',
              transform: 'rotate(-45deg)',
              zIndex: 1
            }} />

            {/* Event Image */}
            <motion.div
              style={{
                height: '250px',
                overflow: 'hidden',
                position: 'relative'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={event.image}
                alt={event.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.8)'
                }}
              />
              
              {/* Image Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)'
              }} />

              {/* Event Title on Image */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  zIndex: 2
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 style={{
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                }}>
                  {event.title}
                </h3>
              </motion.div>
            </motion.div>

            {/* Event Content */}
            <div style={{
              padding: '1.5rem',
              position: 'relative',
              zIndex: 2
            }}>
              {/* Event Details */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#00ffff',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>
                  <span>📅</span>
                  <span>{event.date}</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#b0c4de',
                  fontSize: '0.95rem'
                }}>
                  <span>🕒</span>
                  <span>{event.time}</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#b0c4de',
                  fontSize: '0.95rem'
                }}>
                  <span>📍</span>
                  <span>{event.venue}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: '#d0d0d0',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {event.description}
              </p>

              {/* Highlights */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}>
                {event.highlights.map((highlight, idx) => (
                  <motion.span
                    key={idx}
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 128, 255, 0.2))',
                      color: '#00ffff',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      border: '1px solid rgba(0, 255, 255, 0.3)'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <Link
                  to={`/event/${event.id}`}
                  style={{
                    flex: '1',
                    minWidth: '120px',
                    textDecoration: 'none'
                  }}
                >
                  <motion.button
                    style={{
                      width: '100%',
                      padding: '0.8rem 1.5rem',
                      background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                      color: '#0a0a0f',
                      border: 'none',
                      borderRadius: '25px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 25px rgba(0, 255, 255, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </Link>

                <motion.a
                  href="https://forms.gle/DaUQSc7NB2y4L2UX9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: '1',
                    minWidth: '140px',
                    textDecoration: 'none'
                  }}
                >
                  <motion.button
                    style={{
                      width: '100%',
                      padding: '0.8rem 1.2rem',
                      background: 'transparent',
                      color: '#00ffff',
                      border: '2px solid #00ffff',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      background: '#00ffff',
                      color: '#0a0a0f',
                      boxShadow: '0 10px 25px rgba(0, 255, 255, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register - Internal
                  </motion.button>
                </motion.a>

                <motion.a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: '1',
                    minWidth: '140px',
                    textDecoration: 'none'
                  }}
                >
                  <motion.button
                    style={{
                      width: '100%',
                      padding: '0.8rem 1.2rem',
                      background: 'transparent',
                      color: '#00ffff',
                      border: '2px solid #00ffff',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      background: '#00ffff',
                      color: '#0a0a0f',
                      boxShadow: '0 10px 25px rgba(0, 255, 255, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register - External
                  </motion.button>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 128, 255, 0.05))',
          borderRadius: '25px',
          border: '1px solid rgba(0, 255, 255, 0.2)',
          maxWidth: '1000px',
          margin: '0 auto 3rem',
          backdropFilter: 'blur(20px)'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
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
          style={{ 
            display: 'flex', 
            gap: '2rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}
        >
          <Link 
            to="/contact" 
            style={{ textDecoration: 'none' }}
          >
            <motion.button
              style={{
                padding: '1.2rem 3rem',
                background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                color: '#0a0a0f',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: '600',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 35px rgba(0, 255, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
          
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNZoaoSEkNWg45ZY6obMOttfUkYc7X5jpUtoIkCH31hghlVw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <motion.button
              style={{
                padding: '1.2rem 3rem',
                background: 'transparent',
                color: '#00ffff',
                border: '2px solid #00ffff',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: '600',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              whileHover={{ 
                scale: 1.05,
                background: '#00ffff',
                color: '#0a0a0f',
                boxShadow: '0 15px 35px rgba(0, 255, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Register for All Events
            </motion.button>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Events;