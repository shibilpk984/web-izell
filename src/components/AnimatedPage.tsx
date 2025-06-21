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
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    // Dispatch custom event for header to listen to
    window.dispatchEvent(new CustomEvent('pageScroll', { detail: { scrollTop } }));
  };

  return (
    <motion.div
      className={`fixed inset-0 w-full bg-white ${className}`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ 
        zIndex: 20,
        willChange: 'transform',
        overflow: 'hidden',
      }}
    >
      <div 
        className="w-full h-full"
        data-scroll-container
        onScroll={handleScroll}
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '100vh',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedPage;