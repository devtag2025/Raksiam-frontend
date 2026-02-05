// components/about-us/hooks/useAnimationInView.ts
import { useMemo } from 'react';

const defaultVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const useAnimationInView = (variants = defaultVariants) => {
  return useMemo(() => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 },
    variants: variants,
  }), [variants]);
};