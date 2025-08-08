import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
    hidden: { scale: 0.9, opacity: 0 },
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
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      style={{
        paddingTop: '6rem',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.02) 0%, rgba(0, 128, 255, 0.05) 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="events-section">
        {/* Hero Section */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '6rem' }}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem',
              textShadow: '0 0 40px rgba(0, 255, 255, 0.3)'
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
            About ALTRUIXX 2K25
          </motion.h1>
          
          <motion.p
            style={{
              fontSize: '1.4rem',
              color: '#b0c4de',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to the future of technology and innovation. ALTRUIXX 2K25 is more than just a symposium - 
            it's a launchpad for the next generation of tech leaders, innovators, and changemakers.
          </motion.p>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem',
            marginBottom: '6rem'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Our Mission",
              icon: "🎯",
              content: "To create an unparalleled platform where technology meets creativity, fostering innovation and collaboration among the brightest minds in the field. We aim to bridge the gap between academic learning and industry requirements.",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              title: "Our Vision",
              icon: "🔮",
              content: "To establish ALTRUIXX as the premier technology symposium that shapes the future of innovation, empowering students and professionals to push the boundaries of what's possible in the digital age.",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              style={{
                background: 'rgba(10, 20, 40, 0.9)',
                borderRadius: '25px',
                padding: '3rem',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${item.gradient.split(' ').join(', ')})`,
                  opacity: 0.05,
                  zIndex: -1
                }}
                whileHover={{ opacity: 0.1 }}
              />
              
              <motion.div
                style={{
                  fontSize: '4rem',
                  marginBottom: '2rem',
                  filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {item.icon}
              </motion.div>
              
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#00ffff',
                marginBottom: '1.5rem',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
              }}>
                {item.title}
              </h3>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#b0c4de',
                lineHeight: '1.8'
              }}>
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

          

        {/* Statistics Section */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 128, 255, 0.05))',
            borderRadius: '25px',
            padding: '4rem 2rem',
            marginBottom: '6rem',
            border: '1px solid rgba(0, 255, 255, 0.2)'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            variants={itemVariants}
          >
            ALTRUIXX 2K25 by Numbers
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem'
          }}>
            {[
              { number: '200+', label: 'Expected Participants', icon: '👥' },
              { number: '5+', label: 'Technical Events', icon: '🚀' },
              { number: '1', label: 'Days of Innovation', icon: '📅' },
              { number: '₹15K+', label: 'Prize Pool', icon: '🏆' },
              { number: '20+', label: 'Industry Experts', icon: '👨‍🏫' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  y: -10
                }}
                style={{
                  textAlign: 'center',
                  background: 'rgba(10, 20, 40, 0.8)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: '1px solid rgba(0, 255, 255, 0.3)'
                }}
              >
                <motion.div
                  style={{ fontSize: '3rem', marginBottom: '1rem' }}
                  animate={{
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  style={{
                    fontSize: '2.5rem',
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
                
                <div style={{
                  color: '#b0c4de',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          style={{ marginBottom: '6rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            variants={itemVariants}
          >
            Our Story
          </motion.h2>

          <motion.div
            style={{
              background: 'rgba(10, 20, 40, 0.9)',
              borderRadius: '25px',
              padding: '4rem',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)'
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <motion.div variants={itemVariants}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#00ffff',
                  marginBottom: '2rem'
                }}>
                  From Vision to Reality
                </h3>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: '#b0c4de',
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  ALTRUIXX began as a simple idea - to create a space where technology enthusiasts 
                  could come together, learn, compete, and innovate. What started as a small college 
                  event has evolved into one of the most anticipated technology symposiums in the region.
                </p>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: '#b0c4de',
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  Our journey has been marked by continuous growth, innovation, and a commitment to 
                  excellence. Each year, we raise the bar higher, introducing new technologies, 
                  fresh perspectives, and exciting opportunities for participants.
                </p>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: '#b0c4de',
                  lineHeight: '1.8'
                }}>
                  Today, ALTRUIXX 2K25 stands as a testament to what's possible when passion meets 
                  purpose, bringing together the brightest minds to shape the future of technology.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem'
                }}
              >
                {[
                  { year: '2020', milestone: 'First ALTRUIXX Event', participants: '100+' },
                  { year: '2021', milestone: 'Virtual Innovation', participants: '150+' },
                  { year: '2022', milestone: 'Hybrid Experience', participants: '150+' },
                  { year: '2023', milestone: 'Industry Partnership', participants: '150+' }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    style={{
                      background: 'rgba(0, 255, 255, 0.05)',
                      borderRadius: '15px',
                      padding: '1.5rem',
                      border: '1px solid rgba(0, 255, 255, 0.2)',
                      textAlign: 'center'
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(0, 255, 255, 0.1)',
                      scale: 1.05
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#00ffff',
                      marginBottom: '0.5rem'
                    }}>
                      {milestone.year}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#b0c4de',
                      marginBottom: '0.5rem'
                    }}>
                      {milestone.milestone}
                    </div>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#ffffff'
                    }}>
                      {milestone.participants}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* College Information */}
        <motion.div
          style={{ marginBottom: '6rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            variants={itemVariants}
          >
            About SRM Valliammai Engineering College
          </motion.h2>

          <motion.div
            style={{
              background: 'rgba(10, 20, 40, 0.9)',
              borderRadius: '25px',
              padding: '4rem',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)'
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}>
              <motion.div variants={itemVariants}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#00ffff',
                  marginBottom: '2rem'
                }}>
                  Excellence in Engineering Education
                </h3>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: '#b0c4de',
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  SRM Valliammai Engineering College stands as a beacon of excellence in technical 
                  education, fostering innovation and nurturing the next generation of engineers 
                  and technologists. Located in the vibrant city of Chennai, our institution 
                  combines academic rigor with practical application.
                </p>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: '#b0c4de',
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  With state-of-the-art facilities, experienced faculty, and a commitment to 
                  research and development, we provide students with the tools they need to 
                  succeed in today's competitive technological landscape.
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginTop: '2rem'
                }}>
                  {[
                    'AICTE Approved',
                    'NBA Accredited',
                    'Research Excellence',
                    'Industry Partnerships'
                  ].map((feature, index) => (
                    <motion.span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 255, 255, 0.1)',
                        border: '1px solid rgba(0, 255, 255, 0.3)',
                        borderRadius: '20px',
                        color: '#00ffff',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}
                      whileHover={{
                        backgroundColor: 'rgba(0, 255, 255, 0.2)',
                        scale: 1.05
                      }}
                    >
                      ✓ {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem'
                }}
              >
                {[
                  { icon: '🎓', label: 'Students', value: '3000+' },
                  { icon: '👨‍🏫', label: 'Faculty', value: '200+' },
                  { icon: '🏢', label: 'Departments', value: '8+' },
                  { icon: '🔬', label: 'Research Labs', value: '25+' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    style={{
                      background: 'rgba(0, 255, 255, 0.05)',
                      borderRadius: '15px',
                      padding: '2rem',
                      border: '1px solid rgba(0, 255, 255, 0.2)',
                      textAlign: 'center'
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(0, 255, 255, 0.1)',
                      scale: 1.05,
                      y: -5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                      {stat.icon}
                    </div>
                    <div style={{
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      color: '#00ffff',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: '#b0c4de',
                      fontWeight: '600'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 128, 255, 0.05))',
            borderRadius: '25px',
            border: '1px solid rgba(0, 255, 255, 0.2)',
            maxWidth: '900px',
            margin: '0 auto'
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
            Be Part of the Future
          </motion.h3>
          
          <p style={{
            fontSize: '1.3rem',
            color: '#b0c4de',
            marginBottom: '3rem',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            Join us at ALTRUIXX 2K25 and be part of a community that's shaping the future of technology. 
            Whether you're a student, professional, or tech enthusiast, there's a place for you here.
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
              to="/events"
              style={{
                display: 'inline-block',
                padding: '1.2rem 3rem',
                fontSize: '1.2rem',
                fontWeight: '600',
                textDecoration: 'none',
                color: '#0a0a0f',
                background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05) translateY(-3px)';
                e.target.style.boxShadow = '0 15px 40px rgba(0, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.3)';
              }}
            >
              Explore Events
            </Link>
            
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                padding: '1.2rem 3rem',
                fontSize: '1.2rem',
                fontWeight: '600',
                textDecoration: 'none',
                color: '#00ffff',
                background: 'transparent',
                border: '2px solid #00ffff',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#00ffff';
                e.target.style.color = '#0a0a0f';
                e.target.style.transform = 'scale(1.05) translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#00ffff';
                e.target.style.transform = 'scale(1) translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;