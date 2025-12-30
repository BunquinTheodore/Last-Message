import { motion } from 'framer-motion';
import React from 'react';
import './Section.css';

interface SectionProps {
  image: string;
  text: string;
  alt: string;
  index: number;
}

const Section: React.FC<SectionProps> = ({ image, text, alt, index }) => {
  const isEven = index % 2 === 0;
  
  // Split text into paragraphs
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  
  return (
    <motion.section
      className={`essay-section ${isEven ? 'image-left' : 'image-right'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="section-image-container"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="image-frame">
          <img 
            src={image} 
            alt={alt}
            className="section-image"
            loading="lazy"
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="section-text-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-content">
          {paragraphs.map((paragraph, pIndex) => (
            <motion.p
              key={pIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + pIndex * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Section;
