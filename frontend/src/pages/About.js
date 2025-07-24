import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
          About TechSymposium 2025
        </h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Our Vision</h3>
          <p style={{ lineHeight: '1.6', color: '#666', marginBottom: '1.5rem' }}>
            TechSymposium 2025 is designed to be the premier technology event that brings together students, 
            industry professionals, and innovators to explore the latest trends in technology, foster innovation, 
            and create meaningful connections that will shape the future of technology.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>What We Offer</h3>
          <ul style={{ paddingLeft: '1.5rem', color: '#666', lineHeight: '1.8' }}>
            <li><strong>Hands-on Workshops:</strong> Learn from industry experts through practical, interactive sessions</li>
            <li><strong>Competitive Events:</strong> Showcase your skills and compete for exciting prizes and recognition</li>
            <li><strong>Networking Opportunities:</strong> Connect with peers, mentors, and potential employers</li>
            <li><strong>Industry Insights:</strong> Gain valuable knowledge about current trends and future prospects</li>
            <li><strong>Skill Development:</strong> Enhance your technical and professional capabilities</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Event Highlights</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#000000', padding: '1.5rem', borderRadius: '10px' }}>
              <h4 style={{ color: '#764ba2', marginBottom: '0.5rem' }}>🏆 Competitions</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Tech Innovation Challenge and Startup Pitch Competition with substantial cash prizes and funding opportunities.
              </p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px' }}>
              <h4 style={{ color: '#764ba2', marginBottom: '0.5rem' }}>🎓 Learning</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Comprehensive workshops and bootcamps covering AI/ML, Cybersecurity, and Web Development.
              </p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px' }}>
              <h4 style={{ color: '#764ba2', marginBottom: '0.5rem' }}>🤝 Networking</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Connect with industry leaders, successful entrepreneurs, and like-minded peers.
              </p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px' }}>
              <h4 style={{ color: '#764ba2', marginBottom: '0.5rem' }}>💼 Career</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Internship opportunities, job placements, and mentorship from industry professionals.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Our Partners</h3>
          <p style={{ lineHeight: '1.6', color: '#666', marginBottom: '1rem' }}>
            We are proud to collaborate with leading technology companies and organizations:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center' }}>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
              <strong style={{ color: '#764ba2' }}>Google</strong>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
              <strong style={{ color: '#764ba2' }}>Microsoft</strong>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
              <strong style={{ color: '#764ba2' }}>AWS</strong>
            </div>
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '10px' }}>
              <strong style={{ color: '#764ba2' }}>Netflix</strong>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Important Information</h3>
          <div style={{ background: '#e3f2fd', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #764ba2' }}>
            <ul style={{ paddingLeft: '1.5rem', color: '#666', lineHeight: '1.8', margin: 0 }}>
              <li><strong>Event Dates:</strong> March 15-19, 2025</li>
              <li><strong>Registration Deadline:</strong> March 10, 2025</li>
              <li><strong>Venue:</strong> College Campus, Multiple Venues</li>
              <li><strong>Registration Fee:</strong> Free for all students</li>
              <li><strong>Certificates:</strong> Provided to all participants</li>
              <li><strong>Contact:</strong> symposium@college.edu | +91-9876543210</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#764ba2', fontWeight: 'bold' }}>
            Join us for an unforgettable journey of learning, innovation, and growth!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
