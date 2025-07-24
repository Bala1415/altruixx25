import React, { useState } from 'react';
import backgroundVideo from '../assets/background.mp4';
import SpotlightCard from '../components/SpotlightCard';
import ProfileCard from '../components/ProfileCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css'; // <<<--- create this file using the CSS below

const Home = () => {
  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // This would be replaced by actual API or email logic
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        id="video"
        style={{
          width: "100vw",
          height: "250vh",
          objectFit: "cover",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="home-container">
        <h3 className="home-title accent" style={{ textAlign: "center", height: "550px" }}>Welcome to ALTRUIXX 2K25</h3>
      </div>

      {/* Team Profilges Section */}
      <section className="team-profiles-section">
        <h2 className="section-title accent">Events</h2>
        
        <motion.div 
          className="profile-row"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-container">
            <ProfileCard
              name=""
              title=""
              handle="eventteam"
              status="Lead Organizers"
              contactText="Contact Team"
              avatarUrl="/assets/poster.jpg" // <-- changed to use the poster image
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const contactSection = document.querySelector('.contact-section');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
          <div className="profile-content">
            <h3 className="accent">TECHNOVERSE</h3>
            <p>Our dedicated event coordinators ensure seamless organization and execution of all symposium activities. With years of experience in managing large-scale technical events, they bring expertise and innovation to ALTRUIXX 2K25.</p>
            <ul className="profile-highlights">
              <li>🎯 Event Planning & Coordination</li>
              <li>📅 Schedule Management</li>
              <li>🤝 Participant Support</li>
            </ul>
          </div>
        </motion.div>

        {/* Profile 2 */}
        <motion.div 
          className="profile-row reverse"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="profile-container">
            <ProfileCard
              name="PROMPT NOT FOUND"
              title="Technical Event"
              handle="techteam"
              status="Technical Experts"
              contactText="Tech Support"
              avatarUrl="/assets/srm.png"
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
          <div className="profile-content">
            <h3 className="accent">404 - PROMPT NOT FOUND</h3>
            <p>Our technical team handles all aspects of digital infrastructure and technical event management. They ensure smooth operation of workshops, competitions, and online platforms throughout the symposium.</p>
            <ul className="profile-highlights">
              <li>💻 Technical Workshop Support</li>
              <li>🛠️ Infrastructure Management</li>
              <li>🔧 Real-time Problem Solving</li>
            </ul>
          </div>
        </motion.div>

        {/* Profile 3 */}
        <motion.div 
          className="profile-row"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-container">
            <ProfileCard
              name="THE CIPHER CUT"
              title="Non-Technical Event"
              handle="creativeteam"
              status="Creative Directors"
              contactText="Contact Creative"
              avatarUrl="/assets/srm.png"
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
          <div className="profile-content">
            <h3 className="accent">THE CIPHER CUT</h3>
            <p>The creative team brings ALTRUIXX 2K25 to life through stunning visuals and engaging content. They handle all aspects of branding, design, and marketing communications.</p>
            <ul className="profile-highlights">
              <li>🎨 Visual Design & Branding</li>
              <li>📱 Social Media Management</li>
              <li>📢 Marketing Communications</li>
            </ul>
          </div>
        </motion.div>

        {/* Profile 4 */}
        <motion.div 
          className="profile-row reverse"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="profile-container">
            <ProfileCard
              name="JADE JOURNEY"
              title="Non-Technical Event"
              handle="relations"
              status="Student Coordinators"
              contactText="Contact Team"
              avatarUrl="/assets/srm.png"
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
          <div className="profile-content">
            <h3 className="accent">JADE JOURNEY</h3>
            <p>JADE JOURNEY is an intensive bootcamp covering modern web development technologies including React, Node.js, MongoDB, and cloud deployment. Participants will build full-stack applications and learn best practices for scalable web development. Bring your laptop and be ready to code!</p>
            <ul className="profile-highlights">
              <li>👥 Participant Coordination</li>
              <li>❓ Query Resolution</li>
              <li>📋 Registration Support</li>
            </ul>
          </div>
        </motion.div>

        {/* Profile 5 */}
        <motion.div 
          className="profile-row"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="profile-container">
            <ProfileCard
              name="PAPER PRESENTATION"
              title="Academic Mentors"
              handle="faculty"
              status="Senior Advisors"
              contactText="Contact Faculty"
              avatarUrl="/assets/srm.png"
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
          <div className="profile-content">
            <h3 className="accent">PAPER PRESENTATION</h3>
            <p>Our esteemed faculty advisors provide guidance and mentorship to ensure the symposium meets high academic standards and provides valuable learning experiences.</p>
            <ul className="profile-highlights">
              <li>📚 Academic Guidance</li>
              <li>🎓 Expert Mentorship</li>
              <li>🔍 Quality Assurance</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-section-wrapper">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title accent">About ALTRUIXX 2K25</h2>

            {/* Row 1: Image Left, Content Right */}
            <motion.div
              className="about-section-grid"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Image */}
              <div className="about-image">
                <SpotlightCard spotlightColor="rgba(118, 75, 162, 0.3)">
                  <div className="about-img-gradient">
                    <div className="about-emoji-text">
                      <div className="emoji">🚀</div>
                      <div className="img-title">Innovation</div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
              {/* Content Right */}
              <div style={{ flex: '1 1 0', width: '50%' }}>
                <h3 className="accent" style={{ marginBottom: '1.5rem', fontSize: '2rem', color: '#fff', textShadow: '0 2px 8px #764ba2' }}>Our Vision</h3>
                <p className="about-desc" style={{ fontSize: '1.2rem', fontWeight: 500, color: '#fff', textShadow: '0 2px 8px #764ba2' }}>
                  ALTRUIXX 2K25 is designed to be the premier technology event that brings together students, 
                  industry professionals, and innovators to explore the latest trends in technology, foster innovation, 
                  and create meaningful connections that will shape the future of technology.
                </p>
                <div className="about-tags">
                  <span className="tag purple" style={{ background: '#fff', color: '#764ba2', fontWeight: 'bold' }}>Innovation</span>
                  <span className="tag blue" style={{ background: '#fff', color: '#667eea', fontWeight: 'bold' }}>Technology</span>
                  <span className="tag pink" style={{ background: '#fff', color: '#f093fb', fontWeight: 'bold' }}>Future</span>
                </div>
              </div>
              </motion.div>

              {/* Row 2: Content Left, Image Right */}
              <motion.div
                className="about-section-grid reverse"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Content Left */}
                <div style={{ flex: '1 1 0', width: '50%' }}>
                  <h3 className="accent" style={{ marginBottom: '1.5rem', fontSize: '2rem', color: '#fff', textShadow: '0 2px 8px #764ba2' }}>What We Offer</h3>
                  <ul className="offer-list" style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                    <li><span role="img" aria-label="workshop">🎯</span> Hands-on Workshops with industry experts</li>
                    <li><span role="img" aria-label="competition">🏆</span> Competitive Events with exciting prizes</li>
                    <li><span role="img" aria-label="network">🤝</span> Networking with peers and professionals</li>
                    <li><span role="img" aria-label="insight">📈</span> Industry insights and future prospects</li>
                    <li><span role="img" aria-label="skills">⚡</span> Skill development opportunities</li>
                  </ul>
                </div>
                {/* Image Right */}
                <div className="about-image" style={{ flex: '1 1 0', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <SpotlightCard spotlightColor="rgba(102, 126, 234, 0.3)" style={{ padding: '2rem', margin: '1rem', height: '320px', width: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="about-img-gradient pink-bg" style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div className="about-emoji-text" style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="emoji" style={{ fontSize: '4rem' }}>💡</div>
                        <div className="img-title" style={{ color: '#fff', textShadow: '0 2px 8px #764ba2', fontSize: '2rem', marginTop: '1rem' }}>Excellence</div>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>}
            <motion.div 
              className="feature-grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <SpotlightCard spotlightColor="rgba(118, 75, 162, 0.2)">
                <div className="feature-card-content">
                  <div className="feature-emoji">🏆</div>
                  <h4>Competitions</h4>
                  <p>Tech Innovation Challenge and Startup Pitch Competition with substantial prizes.</p>
                </div>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(102,126,234,0.2)">
                <div className="feature-card-content">
                  <div className="feature-emoji">🎓</div>
                  <h4>Learning</h4>
                  <p>Comprehensive workshops covering AI/ML, Cybersecurity, and Web Development.</p>
                </div>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(240, 147, 251, 0.2)">
                <div className="feature-card-content">
                  <div className="feature-emoji">🤝</div>
                  <h4>Networking</h4>
                  <p>Connect with industry leaders, entrepreneurs, and like-minded peers.</p>
                </div>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(245, 87, 108, 0.2)">
                <div className="feature-card-content">
                  <div className="feature-emoji">💼</div>
                  <h4>Career</h4>
                  <p>Internship opportunities, job placements, and professional mentorship.</p>
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-wrapper">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title accent">Get In Touch</h2>
            <div className="contact-grid">
              <div>
                <h3 className="accent">Contact Information</h3>
                <div className="contact-info">
                  <span>📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>altruixx@srmvec.edu</p>
                  </div>
                </div>
                <div className="contact-info">
                  <span>📱</span>
                  <div>
                    <strong>Phone</strong>
                    <p>+91-9876543210</p>
                  </div>
                </div>
                <div className="contact-info">
                  <span>📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>
                      SRM Valliammai Engineering College<br />
                      Kattankulathur, Chennai - 603203
                    </p>
                  </div>
                </div>
                <div className="contact-info">
                  <span>🕐</span>
                  <div>
                    <strong>Event Dates</strong>
                    <p>
                      March 15-19, 2025<br />
                      Registration Deadline: March 10, 2025
                    </p>
                  </div>
                </div>
              </div>
              {/* Quick Contact Form */}
              <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
                <h3 className="accent">Quick Message</h3>
                <div>
                  <label htmlFor="name">Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                  />
                </div>
                <button type="submit" className="send-btn">Send Message</button>
                {sent && <div className="sent-message">Thank you! Message sent.</div>}
                <div className="follow-links">
                  <h4>Follow Us</h4>
                  <div>
                    <a href="https://facebook.com/altruixx" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
                    <a href="https://twitter.com/altruixx" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
                    <a href="https://linkedin.com/company/altruixx" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                    <a href="https://instagram.com/altruixx" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
