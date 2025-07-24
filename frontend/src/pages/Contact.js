import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/contact', data);
      
      if (response.status === 201) {
        toast.success('Message sent successfully! We will get back to you soon.');
        reset();
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="events-section">
      <motion.div 
        className="register-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px' }}
      >
        <h1 style={{ textAlign: 'center', color: '#764ba2', marginBottom: '2rem' }}>
          Contact Us
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Contact Information */}
          <div>
            <h3 style={{ color: '#764ba2', marginBottom: '1.5rem' }}>Get In Touch</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📧</span>
                <div>
                  <strong>Email</strong>
                  <p style={{ margin: 0, color: '#666' }}>symposium@college.edu</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📱</span>
                <div>
                  <strong>Phone</strong>
                  <p style={{ margin: 0, color: '#666' }}>+91-9876543210</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <div>
                  <strong>Address</strong>
                  <p style={{ margin: 0, color: '#666' }}>
                    Technology Department<br />
                    XYZ College of Engineering<br />
                    City, State - 123456
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🕐</span>
                <div>
                  <strong>Office Hours</strong>
                  <p style={{ margin: 0, color: '#666' }}>
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#764ba2', marginBottom: '1rem' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={() => window.open('https://facebook.com', '_blank')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    textDecoration: 'none', 
                    color: '#764ba2', 
                    cursor: 'pointer',
                    padding: 0,
                    font: 'inherit'
                  }}
                >
                  📘 Facebook
                </button>
                <button 
                  onClick={() => window.open('https://twitter.com', '_blank')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    textDecoration: 'none', 
                    color: '#764ba2', 
                    cursor: 'pointer',
                    padding: 0,
                    font: 'inherit'
                  }}
                >
                  🐦 Twitter
                </button>
                <button 
                  onClick={() => window.open('https://linkedin.com', '_blank')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    textDecoration: 'none', 
                    color: '#764ba2', 
                    cursor: 'pointer',
                    padding: 0,
                    font: 'inherit'
                  }}
                >
                  💼 LinkedIn
                </button>
                <button 
                  onClick={() => window.open('https://instagram.com', '_blank')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    textDecoration: 'none', 
                    color: '#764ba2', 
                    cursor: 'pointer',
                    padding: 0,
                    font: 'inherit'
                  }}
                >
                  📷 Instagram
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 style={{ color: '#764ba2', marginBottom: '1.5rem' }}>Send us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  placeholder="Enter your name"
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  {...register('subject', { required: 'Please select a subject' })}
                >
                  <option value="">Select Subject</option>
                  <option value="event-inquiry">Event Inquiry</option>
                  <option value="registration-help">Registration Help</option>
                  <option value="sponsorship">Sponsorship Opportunities</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="general">General Query</option>
                </select>
                {errors.subject && <span className="error-message">{errors.subject.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  placeholder="Enter your message"
                  rows="5"
                />
                {errors.message && <span className="error-message">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
                style={{ 
                  width: '100%',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 style={{ color: '#764ba2', marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
          
          <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#764ba2' }}>Q: Is registration free for all events?</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
                Yes, registration is completely free for all students. However, seats are limited and allocated on a first-come-first-serve basis.
              </p>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#764ba2' }}>Q: Can I register for multiple events?</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
                Yes, you can register for multiple events as long as there are no time conflicts. Please check the event schedules carefully.
              </p>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#764ba2' }}>Q: What should I bring to the events?</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
                Please bring your laptop for workshops and bootcamps. For competitions, check the specific requirements mentioned in the event details.
              </p>
            </div>
            
            <div>
              <strong style={{ color: '#764ba2' }}>Q: Will certificates be provided?</strong>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
                Yes, certificates of participation will be provided to all attendees. Winners will receive special recognition certificates.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
