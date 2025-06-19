import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedPageProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
  }),
  in: {
    x: 0,
    opacity: 1,
  },
  out: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 1,
  }),
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.4, 0.0, 0.2, 1] as const,
  duration: 0.4,
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`absolute top-0 left-0 w-full min-h-screen bg-white overflow-auto ${className}`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ 
        zIndex: 20,
        willChange: 'transform',
      }}
    >
      <div className="w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedPage;