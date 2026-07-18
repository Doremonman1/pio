'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ColorBlockSectionProps {
  color: 'marigold' | 'cobalt' | 'crimson';
  clipTop?: boolean;
  clipBottom?: boolean;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function ColorBlockSection({
  color,
  clipTop = false,
  clipBottom = false,
  className,
  children,
  id,
}: ColorBlockSectionProps) {
  const bgStyles = {
    marigold: 'bg-marigold text-void select-none',
    cobalt: 'bg-cobalt text-veil select-none',
    crimson: 'bg-crimson text-veil select-none',
  };

  const clipClass = cn(
    clipTop && !clipBottom && 'clip-diagonal-top pt-20',
    !clipTop && clipBottom && 'clip-diagonal-bottom pb-20',
    clipTop && clipBottom && 'clip-diagonal-both pt-20 pb-20'
  );

  return (
    <section
      id={id}
      className={cn(
        'relative w-full py-16 md:py-24 transition-all duration-300',
        bgStyles[color],
        clipClass,
        className
      )}
    >
      {/* Decorative/Atmospheric Glow inside the saturated panel to prevent flat feeling */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </section>
  );
}
