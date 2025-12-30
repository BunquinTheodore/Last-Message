import { motion } from 'framer-motion';
import React from 'react';
import './ClosingSection.css';

const ClosingSection: React.FC = () => {
  return (
    <motion.section 
      className="closing-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2 }}
    >
      <div className="closing-gradient"></div>
      
      <motion.div 
        className="closing-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="closing-decorative-line"
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        
        <motion.h2 
          className="closing-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Happy New Year
        </motion.h2>
        
        <motion.p
          className="closing-year"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          2025 → 2026
        </motion.p>
        
        <motion.div
          className="closing-decorative-line"
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        
        <motion.p
          className="closing-signature"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          With love and gratitude,
          <br />
          <span className="signature-name">Theo</span>
        </motion.p>
        
        <motion.div
          className="closing-heart"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          💙
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ClosingSection;
