import { motion } from 'framer-motion';
import React from 'react';
import { sections } from '../data/sections';
import ClosingSection from './ClosingSection';
import './PhotoEssay.css';
import Section from './Section';

const PhotoEssay: React.FC = () => {
  return (
    <motion.div 
      className="photo-essay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="essay-container">
        {sections.map((section, index) => (
          <Section
            key={section.id}
            image={section.image}
            text={section.text}
            alt={section.alt}
            index={index}
          />
        ))}
        
        <ClosingSection />
      </div>
    </motion.div>
  );
};

export default PhotoEssay;
