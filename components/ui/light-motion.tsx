"use client";

import React from 'react';

// Lazy load framer-motion to reduce initial bundle size
const MotionDiv = React.lazy(() => 
  import('framer-motion').then((mod) => ({ default: mod.motion.div }))
);

const MotionSection = React.lazy(() => 
  import('framer-motion').then((mod) => ({ default: mod.motion.section }))
);

interface LightMotionProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  as?: 'div' | 'section';
}

export function LightMotion({ 
  children, 
  className = "", 
  initial, 
  animate, 
  transition,
  as = 'div'
}: LightMotionProps) {
  const Component = as === 'section' ? MotionSection : MotionDiv;
  
  return (
    <React.Suspense fallback={<div className={className}>{children}</div>}>
      <Component
        className={className}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </Component>
    </React.Suspense>
  );
}

// Simple fade-in animation
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
