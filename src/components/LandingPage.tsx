import { motion } from 'framer-motion';
import React from 'react';
import './LandingPage.css';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <motion.div 
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="landing-content">
        <motion.div
          className="landing-decorative-line"
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        <motion.h1
          className="landing-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          For You
        </motion.h1>
        
        <motion.p
          className="landing-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          A message written with honesty and care
        </motion.p>
        
        <motion.div
          className="landing-decorative-line"
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        <motion.button
          className="landing-button"
          onClick={onEnter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="button-text">A message from your Theo</span>
          <span className="button-heart">💙</span>
        </motion.button>
        
        <motion.p
          className="landing-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          click to read
        </motion.p>
      </div>
      
      {/* Decorative floating elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
