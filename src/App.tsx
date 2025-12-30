import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import PhotoEssay from './components/PhotoEssay';
import './styles/global.css';

function App() {
  const [showEssay, setShowEssay] = useState(false);

  const handleEnter = () => {
    setShowEssay(true);
    // Scroll to top when entering the essay
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <AnimatePresence mode="wait">
      {!showEssay ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage onEnter={handleEnter} />
        </motion.div>
      ) : (
        <motion.div
          key="essay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <PhotoEssay />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
