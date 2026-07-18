'use client';

import * as React from 'react';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  desc?: string;
}

export function StatCard({ value, suffix = '', label, desc }: StatCardProps) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    if (end === 0) return;

    // Fast duration for high values, slower for lower values
    const duration = 1200; 
    const increment = Math.ceil(end / (duration / 16)); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col justify-between p-6 md:p-8 bg-void/5 dark:bg-veil/5 hover:bg-void/10 dark:hover:bg-veil/10 border border-void/10 dark:border-veil/10 transition-colors duration-300">
      <div>
        <div className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="font-grotesque text-xs sm:text-sm uppercase tracking-wider mb-2 font-black">
          {label}
        </div>
      </div>
      {desc && (
        <p className="font-sans text-xs opacity-70 leading-relaxed font-light">
          {desc}
        </p>
      )}
    </div>
  );
}
