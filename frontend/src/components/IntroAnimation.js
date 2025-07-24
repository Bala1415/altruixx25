import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroAnimation.css';

const IntroAnimation = () => {
  useEffect(() => {
    // This effect will run once when the component mounts
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="intro-animation"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="logo-container">
          <motion.h1
            className="logo-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ALTRUIXX 2K25
          </motion.h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Innovation • Technology • Future
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
