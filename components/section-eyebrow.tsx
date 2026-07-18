'use client';

import * as React from 'react';

interface SectionEyebrowProps {
  latin: string;
  translation: string;
  light?: boolean;
}

export function SectionEyebrow({ latin, translation, light = false }: SectionEyebrowProps) {
  return (
    <div className="inline-flex flex-col items-center group cursor-help select-none mb-3">
      <div className="flex items-center space-x-1.5">
        <span className="w-1.5 h-1.5 bg-crimson rounded-none animate-pulse shrink-0" />
        <span
          className={`font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
            light ? 'text-veil/80 group-hover:text-marigold' : 'text-dusk group-hover:text-cobalt'
          }`}
        >
          {latin}
        </span>
      </div>
      {/* Dynamic hover reveal of translation */}
      <span
        className="font-mono text-[10px] tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 h-0 group-hover:h-4 text-center text-crimson font-semibold"
      >
        ({translation})
      </span>
    </div>
  );
}
