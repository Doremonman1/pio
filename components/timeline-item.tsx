'use client';

import * as React from 'react';
import { TimelineEvent } from '@/lib/data/types';

interface TimelineItemProps {
  event: TimelineEvent;
  isFirst?: boolean;
  isLast?: boolean;
}

export function TimelineItem({ event, isFirst = false, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-16 group flex flex-col md:flex-row md:items-start">
      {/* Timeline Connecting Vertical Line */}
      <div
        className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-dusk/20 group-hover:bg-marigold/40 transition-colors"
        style={{ height: isLast ? '0px' : 'calc(100% + 2rem)' }}
      />

      {/* Timeline Marker (Circle/Square Dot) */}
      <div className="absolute left-0 top-1.5 w-4 h-4 bg-void dark:bg-veil border-2 border-marigold group-hover:bg-marigold transition-all duration-300 shadow-md" />

      {/* Year Label for Desktops */}
      <div className="hidden md:block md:w-32 md:text-right font-mono text-2xl font-bold text-marigold pr-8 shrink-0 select-none">
        {event.year}
      </div>

      {/* Milestone card */}
      <div className="bg-veil dark:bg-void/40 border border-dusk/10 p-6 rounded-none group-hover:border-marigold transition-all duration-300 flex-1 hover:shadow-md">
        {/* Mobile Year Badge */}
        <span className="inline-block md:hidden font-mono text-lg font-bold text-marigold mb-1 select-none">
          {event.year}
        </span>
        <h4 className="font-serif text-lg font-black text-void dark:text-veil mb-2">
          {event.title}
        </h4>
        <p className="text-xs sm:text-sm text-void/75 dark:text-veil/75 font-sans leading-relaxed font-light">
          {event.description}
        </p>
      </div>
    </div>
  );
}
