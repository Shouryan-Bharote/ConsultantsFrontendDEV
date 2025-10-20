import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import "./TrainersSection.css"
import trainerImage from "../../assets/images/trainersprofile.png"

const TrainersSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null); // 🔹 Reference to the section

  // Full list of all trainers
  const allTrainers = [
    { id: 1, name: "John Martin", image: trainerImage },
    { id: 2, name: "John Martin", image: trainerImage },
    { id: 3, name: "John Martin", image: trainerImage },
    { id: 4, name: "John Martin", image: trainerImage },
    { id: 5, name: "John Martin", image: trainerImage },
    { id: 6, name: "John Martin", image: trainerImage },
    { id: 7, name: "John Martin", image: trainerImage },
    { id: 8, name: "John Martin", image: trainerImage },
    { id: 9, name: "John Martin", image: trainerImage },
    { id: 10, name: "John Martin", image: trainerImage },
    { id: 11, name: "John Martin", image: trainerImage },
    { id: 12, name: "John Martin", image: trainerImage }
  ];

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show 2 cards on mobile, 6 on desktop/tablet initially
  const initialCount = isMobile ? 2 : 6;
  const displayedTrainers = showAll ? allTrainers : allTrainers.slice(0, initialCount);

  const handleViewAll = () => {
    // If collapsing (View Less), scroll to top of section
    if (showAll) {
      sectionRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
    setShowAll(!showAll);
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className='trainers-section' ref={sectionRef}> {/* 🔹 Added ref */}
      <div className="trainers-header">
        <h1 className='trainers-title'>Meet the Amazing Trainers behind the </h1>
        <h2 className='trainers-subtitle'>Infinova Consultants</h2>
        <p className='trainers-description'>Lorem Ipsum lorem ipsum lorem ipsum</p>
      </div>

      <motion.div 
        className="trainers-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="popLayout">
          {displayedTrainers.map((trainer, index)=>(
            <motion.div 
              className="trainer-card" 
              key={trainer.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="card-header">
                <span className="trainer-name">{trainer.name}</span>
              </div>
              <div className="image-container">
                <img src={trainer.image} alt={trainer.name} className='trainer-image' />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      <div className="button-container">
        <motion.button 
          className="view-all-button" 
          onClick={handleViewAll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? 'View Less' : 'View All'}
        </motion.button>
      </div>
    </div>
  )
}

export default TrainersSection
