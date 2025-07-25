import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 2000);
  };

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
      scale: 1.02,
      y: -5,
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
        background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 128, 255, 0.05) 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="events-section">
        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
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
            Contact Us
          </motion.h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#b0c4de',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Have questions about ALTRUIXX 2K25? We're here to help! 
            Reach out to us and join the innovation revolution.
          </p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            style={{
              background: 'rgba(10, 20, 40, 0.9)',
              borderRadius: '25px',
              padding: '3rem',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0, 255, 255, 0.1)'
            }}
          >
            <motion.h3
              style={{
                color: '#00ffff',
                marginBottom: '2rem',
                fontSize: '2rem',
                fontWeight: '700',
                textAlign: 'center'
              }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(0, 255, 255, 0.5)',
                  '0 0 20px rgba(0, 255, 255, 0.8)',
                  '0 0 10px rgba(0, 255, 255, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Get In Touch
            </motion.h3>

            {/* Contact Items */}
            {[
              {
                icon: '📧',
                title: 'Email',
                info: 'altruixx@srmvec.edu',
                subtitle: 'Send us your queries anytime',
                delay: 0.1
              },
              {
                icon: '📱',
                title: 'Phone',
                info: '+91-9876543210',
                subtitle: 'Call us for instant support',
                delay: 0.2
              },
              {
                icon: '📍',
                title: 'Address',
                info: 'SRM Valliammai Engineering College\nKattankulathur, Chennai - 603203',
                subtitle: 'Visit our campus',
                delay: 0.3
              },
              {
                icon: '🕐',
                title: 'Event Dates',
                info: 'March 15-19, 2025',
                subtitle: 'Registration Deadline: March 10, 2025',
                delay: 0.4
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(0, 255, 255, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(0, 255, 255, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                variants={itemVariants}
                whileHover={{
                  x: 10,
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  borderColor: 'rgba(0, 255, 255, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  style={{
                    fontSize: '2.5rem',
                    filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: contact.delay
                  }}
                >
                  {contact.icon}
                </motion.span>
                <div>
                  <strong style={{
                    display: 'block',
                    color: '#00ffff',
                    marginBottom: '0.5rem',
                    fontSize: '1.2rem',
                    fontWeight: '700'
                  }}>
                    {contact.title}
                  </strong>
                  <p style={{
                    margin: 0,
                    color: '#ffffff',
                    whiteSpace: 'pre-line',
                    lineHeight: '1.6',
                    fontSize: '1rem',
                    marginBottom: '0.5rem'
                  }}>
                    {contact.info}
                  </p>
                  <p style={{
                    margin: 0,
                    color: '#b0c4de',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                  }}>
                    {contact.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div variants={itemVariants}>
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
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {[
                  { name: '📘 Facebook', url: 'https://facebook.com', color: '#1877f2' },
                  { name: '🐦 Twitter', url: 'https://twitter.com', color: '#1da1f2' },
                  { name: '💼 LinkedIn', url: 'https://linkedin.com', color: '#0a66c2' },
                  { name: '📷 Instagram', url: 'https://www.instagram.com/altruixx_2k25?igsh=MXdicnUyanQxb2c0eA==', color: '#e4405f' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#00ffff',
                      textDecoration: 'none',
                      padding: '0.8rem 1.5rem',
                      border: '1px solid #00ffff',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: social.color,
                      borderColor: social.color,
                      color: '#ffffff'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            style={{
              background: 'rgba(10, 20, 40, 0.9)',
              borderRadius: '25px',
              padding: '3rem',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0, 255, 255, 0.1)'
            }}
          >
            <motion.h3
              style={{
                color: '#00ffff',
                marginBottom: '2rem',
                fontSize: '2rem',
                fontWeight: '700',
                textAlign: 'center'
              }}
            >
              Send us a Message
            </motion.h3>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <motion.div
                style={{ marginBottom: '2rem' }}
                variants={itemVariants}
              >
                <label style={{
                  display: 'block',
                  color: '#00ffff',
                  marginBottom: '0.8rem',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  Name *
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    border: '2px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '15px',
                    background: 'rgba(0, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  whileFocus={{
                    borderColor: '#00ffff',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                  }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                style={{ marginBottom: '2rem' }}
                variants={itemVariants}
              >
                <label style={{
                  display: 'block',
                  color: '#00ffff',
                  marginBottom: '0.8rem',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  Email *
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    border: '2px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '15px',
                    background: 'rgba(0, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  whileFocus={{
                    borderColor: '#00ffff',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                  }}
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                style={{ marginBottom: '2rem' }}
                variants={itemVariants}
              >
                <label style={{
                  display: 'block',
                  color: '#00ffff',
                  marginBottom: '0.8rem',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  Subject *
                </label>
                <motion.select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    border: '2px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '15px',
                    background: 'rgba(0, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  whileFocus={{
                    borderColor: '#00ffff',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                  }}
                >
                  <option value="" style={{ background: '#0a0a0f', color: '#b0c4de' }}>Select Subject</option>
                  <option value="event-inquiry" style={{ background: '#0a0a0f', color: '#b0c4de' }}>Event Inquiry</option>
                  <option value="registration-help" style={{ background: '#0a0a0f', color: '#b0c4de' }}>Registration Help</option>
                  <option value="sponsorship" style={{ background: '#0a0a0f', color: '#b0c4de' }}>Sponsorship Opportunities</option>
                  <option value="technical-support" style={{ background: '#0a0a0f', color: '#b0c4de' }}>Technical Support</option>
                  <option value="general" style={{ background: '#0a0a0f', color: '#b0c4de' }}>General Query</option>
                </motion.select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                style={{ marginBottom: '2rem' }}
                variants={itemVariants}
              >
                <label style={{
                  display: 'block',
                  color: '#00ffff',
                  marginBottom: '0.8rem',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  Message *
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    border: '2px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '15px',
                    background: 'rgba(0, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'all 0.3s ease'
                  }}
                  whileFocus={{
                    borderColor: '#00ffff',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1.2rem 2rem',
                  background: isSubmitting 
                    ? 'rgba(0, 255, 255, 0.3)' 
                    : 'linear-gradient(135deg, #00ffff, #0080ff)',
                  color: isSubmitting ? '#b0c4de' : '#0a0a0f',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                whileHover={!isSubmitting ? {
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(0, 255, 255, 0.4)'
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                variants={itemVariants}
              >
                {isSubmitting ? (
                  <motion.div
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <motion.div
                      style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #b0c4de',
                        borderTop: '2px solid #00ffff',
                        borderRadius: '50%'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </motion.div>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(0, 255, 128, 0.1)',
                    border: '1px solid #00ff80',
                    borderRadius: '10px',
                    color: '#00ff80',
                    textAlign: 'center',
                    fontWeight: '600'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  🎉 Thank you! Your message has been sent successfully. We'll get back to you soon!
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          style={{
            maxWidth: '1000px',
            margin: '6rem auto 0',
            padding: '0 2rem'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            style={{
              color: '#00ffff',
              marginBottom: '3rem',
              fontSize: '2.5rem',
              fontWeight: '800',
              textAlign: 'center',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h3>

          <motion.div
            style={{
              background: 'rgba(10, 20, 40, 0.9)',
              padding: '3rem',
              borderRadius: '25px',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)'
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            {[
              {
                question: "Is registration free for all events?",
                answer: "Yes, registration is completely free for all students. However, seats are limited and allocated on a first-come-first-serve basis.",
                icon: "💰"
              },
              {
                question: "Can I register for multiple events?",
                answer: "Yes, you can register for multiple events as long as there are no time conflicts. Please check the event schedules carefully.",
                icon: "📅"
              },
              {
                question: "What should I bring to the events?",
                answer: "Please bring your laptop for workshops and bootcamps. For competitions, check the specific requirements mentioned in the event details.",
                icon: "💻"
              },
              {
                question: "Will certificates be provided?",
                answer: "Yes, certificates of participation will be provided to all attendees. Winners will receive special recognition certificates.",
                icon: "🏆"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                style={{
                  marginBottom: index < 3 ? '2rem' : 0,
                  padding: '1.5rem',
                  background: 'rgba(0, 255, 255, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(0, 255, 255, 0.2)'
                }}
                variants={itemVariants}
                whileHover={{
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  borderColor: 'rgba(0, 255, 255, 0.4)',
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{faq.icon}</span>
                  <div>
                    <strong style={{
                      color: '#00ffff',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      display: 'block',
                      marginBottom: '0.8rem'
                    }}>
                      Q: {faq.question}
                    </strong>
                    <p style={{
                      margin: 0,
                      color: '#b0c4de',
                      lineHeight: '1.7',
                      fontSize: '1rem'
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          >
            Ready to Join ALTRUIXX 2K25?
          </motion.h3>
          
          <p style={{
            fontSize: '1.3rem',
            color: '#b0c4de',
            marginBottom: '2.5rem',
            lineHeight: '1.8'
          }}>
            Don't miss out on this incredible opportunity to be part of the future of technology. 
            Register now and secure your spot!
          </p>
          
          <motion.div
            style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
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
                boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 40px rgba(0, 255, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;