import type { Variants } from 'motion/react';

// variants for motion animation for dropdown menus
export const containerVariant: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const itemVariant: Variants = {
  closed: {
    opacity: 0,
    y: -10,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};
