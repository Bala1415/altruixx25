import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EventDetail = () => {
  const { id } = useParams();
  
  const events = {
    1: {
      title: "TECHNOVERSE",
      description: "Showcase your innovative ideas and compete with the brightest minds in technology. Present your solutions to real-world problems and get a chance to win exciting prizes.",
      fullDescription: "The Tech Innovation Challenge is our flagship competition designed to foster creativity and innovation among students. Participants will work in teams to develop solutions for real-world problems using cutting-edge technologies. The challenge spans across various domains including healthcare, education, environment, and social impact. Teams will have access to mentors from leading tech companies and will present their solutions to a panel of industry experts.",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "Main Auditorium",
      category: "Competition",
      eligibility: "All students",
      prizes: "₹50,000 cash prizes",
      requirements: "Team of 2-4 members, Prototype/Demo required",
      schedule: [
        "10:00 AM - Registration & Team Check-in",
        "10:30 AM - Opening Ceremony & Rules Briefing",
        "11:00 AM - Problem Statement Release",
        "11:30 AM - 2:00 PM - Development Phase",
        "2:00 PM - 3:00 PM - Presentations",
        "3:00 PM - 3:30 PM - Judging & Evaluation",
        "3:30 PM - 4:00 PM - Awards Ceremony"
      ],
      judges: [
        "Dr. Sarah Johnson - CTO, TechCorp",
        "Mr. Rahul Sharma - Senior Engineer, Google",
        "Ms. Priya Patel - Startup Founder & Investor"
      ],
      image: "/assets/404/technoverse.jpg"
    },
    2: {
      title: "404 - PROMPT NOT FOUND",
      description: "Comprehensive hands-on workshop covering the latest trends in AI and ML. Learn from industry experts and build practical projects.",
      fullDescription: "This intensive workshop provides a deep dive into the world of Artificial Intelligence and Machine Learning. Participants will learn about neural networks, deep learning algorithms, computer vision, and natural language processing through hands-on exercises and real-world case studies. The workshop includes practical sessions using Python, TensorFlow, and PyTorch frameworks.",
      date: "March 16, 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "Computer Science Lab",
      category: "Workshop",
      eligibility: "Basic programming knowledge required",
      prizes: "Certificates and internship opportunities",
      requirements: "Laptop with Python installed",
      schedule: [
        "9:00 AM - Introduction to AI/ML",
        "10:00 AM - Python for Data Science",
        "11:30 AM - Neural Networks Basics",
        "1:00 PM - Lunch Break",
        "2:00 PM - Deep Learning with TensorFlow",
        "3:30 PM - Computer Vision Project",
        "4:30 PM - Q&A and Networking"
      ],
      instructors: [
        "Dr. Michael Chen - AI Research Scientist",
        "Ms. Anjali Gupta - ML Engineer, Microsoft",
        "Mr. David Kim - Data Scientist, Netflix"
      ],
      image: "/assets/404/1.jpg"
    },
    3: {
      title: "Cybersecurity Summit",
      description: "Explore the world of cybersecurity, ethical hacking, and data protection. Interactive sessions and live demonstrations.",
      fullDescription: "The Cybersecurity Summit brings together security professionals, researchers, and students to discuss the latest threats, defense mechanisms, and best practices in cybersecurity. The summit features interactive workshops on penetration testing, vulnerability assessment, and digital forensics with live demonstrations of attack vectors and defense strategies.",
      date: "March 17, 2025",
      time: "11:00 AM - 3:00 PM",
      venue: "Conference Hall A",
      category: "Summit",
      eligibility: "CS/IT students preferred",
      prizes: "Industry certifications",
      requirements: "Basic networking knowledge",
      schedule: [
        "11:00 AM - Cybersecurity Landscape Overview",
        "11:45 AM - Ethical Hacking Demonstration",
        "12:30 PM - Penetration Testing Workshop",
        "1:15 PM - Lunch Break",
        "2:00 PM - Digital Forensics Session",
        "2:45 PM - Industry Panel Discussion"
      ],
      speakers: [
        "Mr. Alex Thompson - Cybersecurity Consultant",
        "Ms. Kavya Reddy - Security Analyst, Cisco",
        "Dr. Robert Wilson - Cybersecurity Professor"
      ],
      image: "/assets/404/cybersecurity_summit.jpg"
    },
    4: {
      title: "Web Development Bootcamp",
      description: "Intensive bootcamp covering modern web development technologies including React, Node.js, and cloud deployment.",
      fullDescription: "This comprehensive bootcamp covers the complete web development stack from frontend to backend and deployment. Participants will learn React for frontend development, Node.js and Express for backend services, MongoDB for database management, and cloud deployment strategies using AWS and Vercel.",
      date: "March 18, 2025",
      time: "10:00 AM - 6:00 PM",
      venue: "IT Laboratory",
      category: "Bootcamp",
      eligibility: "Basic HTML/CSS knowledge",
      prizes: "Project showcase opportunity",
      requirements: "Laptop with code editor",
      schedule: [
        "10:00 AM - Modern JavaScript Fundamentals",
        "11:30 AM - React Components & Hooks",
        "1:00 PM - Lunch Break",
        "2:00 PM - Node.js & Express Backend",
        "3:30 PM - Database Integration",
        "4:30 PM - Deployment & Best Practices",
        "5:30 PM - Project Showcase"
      ],
      instructors: [
        "Mr. James Anderson - Full Stack Developer",
        "Ms. Sneha Joshi - React Specialist",
        "Mr. Tom Miller - Backend Architect"
      ],
      image: "/assets/404/web_dev_bootcamp.jpg"
    },
    5: {
      title: "Startup Pitch Competition",
      description: "Present your startup ideas to a panel of investors and industry leaders. Win exciting prizes and potential funding.",
      fullDescription: "The Startup Pitch Competition provides a platform for aspiring entrepreneurs to present their business ideas to experienced investors and industry leaders. Participants will showcase their business models, market analysis, financial projections, and growth strategies. The competition includes mentorship sessions and networking opportunities with successful entrepreneurs.",
      date: "March 19, 2025",
      time: "2:00 PM - 6:00 PM",
      venue: "Business Center",
      category: "Competition",
      eligibility: "All students and recent graduates",
      prizes: "Funding opportunities up to ₹5 lakhs",
      requirements: "Business plan and pitch deck",
      schedule: [
        "2:00 PM - Registration & Mentorship Session",
        "2:30 PM - Pitch Presentations (Round 1)",
        "3:30 PM - Break & Networking",
        "4:00 PM - Final Pitch Presentations",
        "5:00 PM - Investor Feedback Session",
        "5:30 PM - Awards & Closing Ceremony"
      ],
      judges: [
        "Mr. Vikram Shah - Angel Investor",
        "Ms. Meera Kapoor - Venture Capitalist",
        "Dr. Suresh Kumar - Startup Accelerator Director"
      ],
      image: "/assets/404/startup_pitch.jpg"
    }
  };

  const event = events[id];

  if (!event) {
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
  }

  return (
    <div className="events-section">
      <motion.div 
        className="register-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px' }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ 
            background: '#667eea', 
            color: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px', 
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            {event.category}
          </span>
        </div>
        
        <h1 style={{ color: '#764ba2', marginBottom: '1rem' }}>{event.title}</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div><strong>📅 Date:</strong> {event.date}</div>
            <div><strong>🕐 Time:</strong> {event.time}</div>
            <div><strong>📍 Venue:</strong> {event.venue}</div>
            <div><strong>🎓 Eligibility:</strong> {event.eligibility}</div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong>🏆 Prizes:</strong> {event.prizes}
          </div>
          <div>
            <strong>📋 Requirements:</strong> {event.requirements}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>About This Event</h3>
          <p style={{ lineHeight: '1.6', color: '#666' }}>{event.fullDescription}</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Event Schedule</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {event.schedule.map((item, index) => (
              <li key={index} style={{ 
                padding: '0.5rem 0', 
                borderBottom: '1px solid #eee',
                color: '#666'
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>
            {event.judges ? 'Judges' : event.instructors ? 'Instructors' : 'Speakers'}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {(event.judges || event.instructors || event.speakers).map((person, index) => (
              <li key={index} style={{ 
                padding: '0.5rem 0', 
                color: '#666'
              }}>
                • {person}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to={`/register/${id}`} className="btn-primary" style={{ marginRight: '1rem' }}>
            Register for This Event
          </Link>
          <Link to="/events" className="btn-secondary">
            Back to Events
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetail;
