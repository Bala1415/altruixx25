import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< Updated upstream
import './Navbar.css';
import introLogo from '../assets/logonew.png';
=======
import introLogo from '../assets/intro.png';
import './Navbar.css';
>>>>>>> Stashed changes

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/events', label: 'Events', icon: '🚀' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: isScrolled 
          ? 'rgba(10, 10, 15, 0.95)' 
          : 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(0, 255, 255, 0.3)' 
          : '1px solid rgba(0, 255, 255, 0.1)',
        padding: '1rem 0',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isScrolled 
          ? '0 0 30px rgba(0, 255, 255, 0.2)' 
          : 'none'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div className="logo-container">
          <img src={introLogo} alt="Logo" className="logo-image" />
          <span className="logo-text">ALTRUIXX 2K25</span>
        </div>

        {/* Desktop Menu */}
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '0.5rem',
            margin: 0,
            padding: 0
          }}
          className="desktop-menu"
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <div>
                <Link
                  to={item.path}
                  style={{
                    color: location.pathname === item.path ? '#0a0a0f' : '#b0c4de',
                    textDecoration: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    fontWeight: '600',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, #00ffff, #0080ff)' 
                      : 'transparent',
                    border: location.pathname === item.path 
                      ? 'none' 
                      : '1px solid rgba(0, 255, 255, 0.3)',
                    boxShadow: location.pathname === item.path 
                      ? '0 0 20px rgba(0, 255, 255, 0.4)' 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'linear-gradient(135deg, #00ffff, #0080ff)';
                      e.target.style.color = '#0a0a0f';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#b0c4de';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                  {item.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          style={{
            display: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '10px',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            background: 'rgba(0, 255, 255, 0.1)'
          }}
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div
            style={{
              width: '24px',
              height: '20px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: '#00ffff',
                borderRadius: '2px'
              }}
            />
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: '#00ffff',
                borderRadius: '2px'
              }}
            />
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: '#00ffff',
                borderRadius: '2px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 15, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '2rem',
            borderTop: '1px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 10px 30px rgba(0, 255, 255, 0.2)'
          }}
          className="mobile-menu"
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    color: location.pathname === item.path ? '#0a0a0f' : '#b0c4de',
                    textDecoration: 'none',
                    padding: '1rem 1.5rem',
                    borderRadius: '15px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, #00ffff, #0080ff)' 
                      : 'rgba(0, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    fontSize: '1.1rem'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'linear-gradient(135deg, #00ffff, #0080ff)';
                      e.target.style.color = '#0a0a0f';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                      e.target.style.color = '#b0c4de';
                    }
                  }}
                >
                  {item.label === "Home" ? (
                    <>
                      <img
                        src="frontend\src\assets\intro.png"
                        alt="Logo"
                        style={{
                          width: '28px',
                          height: '28px',
                          marginRight: '0.7rem',
                          borderRadius: '6px',
                          objectFit: 'cover',
                          background: '#fff'
                        }}
                      />
                      {item.label}
                    </>
                  ) : (
                    <>
                      <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                      {item.label}
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Additional Styles for Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;