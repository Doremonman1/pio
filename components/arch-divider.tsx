'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ArchDividerProps {
  variant?: 'hero' | 'mark' | 'medium';
  animated?: boolean;
}

export function ArchDivider({ variant = 'hero', animated = true }: ArchDividerProps) {
  const shouldReduceMotion = useReducedMotion();
  const isAnimated = animated && !shouldReduceMotion;

  // Render static icon/mark version
  if (variant === 'mark') {
    return (
      <div className="flex w-10 h-10 shrink-0 relative overflow-hidden" aria-hidden="true">
        <div className="w-1/2 h-full bg-marigold rounded-tr-[16px]" />
        <div className="w-1/2 h-full bg-cobalt rounded-tl-[16px]" />
      </div>
    );
  }

  // Render medium section divider version
  if (variant === 'medium') {
    return (
      <div className="flex w-24 h-16 shrink-0 relative overflow-hidden my-4 mx-auto" aria-hidden="true">
        <div className="w-1/2 h-full bg-marigold rounded-tr-[40px]" />
        <div className="w-1/2 h-full bg-cobalt rounded-tl-[40px]" />
      </div>
    );
  }

  // Hero curtain-open Threshold animation
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex z-10 pointer-events-none" aria-hidden="true">
      {/* Left Stage Curtain Panel: Marigold */}
      <motion.div
        initial={isAnimated ? { x: '0%' } : { x: '-90%' }}
        animate={isAnimated ? { x: '-90%' } : { x: '-90%' }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 1, 0.5, 1], // Custom cubic bezier for high-end curtain feel
        }}
        className="w-1/2 h-full bg-marigold absolute left-0 top-0 rounded-r-[100px] md:rounded-r-[240px] shadow-2xl border-r-4 border-void/10"
        style={{ originX: 0 }}
      />

      {/* Right Stage Curtain Panel: Cobalt */}
      <motion.div
        initial={isAnimated ? { x: '0%' } : { x: '90%' }}
        animate={isAnimated ? { x: '90%' } : { x: '90%' }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="w-1/2 h-full bg-cobalt absolute right-0 top-0 rounded-l-[100px] md:rounded-l-[240px] shadow-2xl border-l-4 border-void/10"
        style={{ originX: 1 }}
      />
    </div>
  );
}
