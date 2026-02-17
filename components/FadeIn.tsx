import React from 'react';
import { motion } from 'framer-motion';
import { FadeInProps } from '../types';

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up' 
}) => {
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        // Fix: Cast array to tuple to match Easing type
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom easing for elegance
        delay: delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;