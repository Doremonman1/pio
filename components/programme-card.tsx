'use client';

import * as React from 'react';
import Link from 'next/link';
import { Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import { Programme } from '@/lib/data/types';

interface ProgrammeCardProps {
  programme: Programme;
}

export function ProgrammeCard({ programme }: ProgrammeCardProps) {
  // We can dynamically select illustrative images based on the slug to make it look professional
  const imageUrls: Record<string, string> = {
    'se-undergrad': 'https://picsum.photos/seed/tech-school/600/400',
    'cs-undergrad': 'https://picsum.photos/seed/datascience/600/400',
    'ba-undergrad': 'https://picsum.photos/seed/business-school/600/400',
    'ir-undergrad': 'https://picsum.photos/seed/law-school/600/400',
    'mba-postgrad': 'https://picsum.photos/seed/mba/600/400',
    'cyber-postgrad': 'https://picsum.photos/seed/cybersecurity/600/400',
    'econ-postgrad': 'https://picsum.photos/seed/economics/600/400',
    'fintech-diploma': 'https://picsum.photos/seed/fintech/600/400',
    'digital-diploma': 'https://picsum.photos/seed/uxdesign/600/400',
  };

  const img = imageUrls[programme.slug] || 'https://picsum.photos/seed/university/600/400';

  return (
    <div className="flex flex-col h-full bg-veil dark:bg-void border border-dusk/20 hover:border-marigold transition-all duration-300 shadow-sm hover:shadow-lg group">
      {/* Visual Header */}
      <div className="relative h-48 w-full bg-void/10 overflow-hidden">
        <img
          src={img}
          alt={programme.title}
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-4 left-4 bg-void text-veil text-[9px] font-grotesque tracking-widest px-3 py-1.5 border border-dusk/30 uppercase flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-marigold" /> {programme.durationYears} {programme.durationYears === 1 ? 'Year' : 'Years'}
        </div>
      </div>

      {/* Content body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-cobalt dark:text-marigold uppercase tracking-[0.15em] font-grotesque flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" /> {programme.level}
            </span>
            <span className="text-[9px] font-bold bg-dusk/10 text-void/60 dark:text-veil/60 px-2 py-0.5 uppercase tracking-wider font-mono">
              {programme.level === 'Undergraduate' ? 'B.Sc. / B.A.' : programme.level === 'Postgraduate' ? 'M.Sc. / MBA' : 'Dipl.'}
            </span>
          </div>

          <h3 className="font-serif text-xl font-black text-void dark:text-veil leading-snug group-hover:text-cobalt dark:group-hover:text-marigold transition-colors">
            {programme.title}
          </h3>

          <p className="font-mono text-[10px] text-dusk tracking-wide leading-none uppercase">
            {programme.department}
          </p>

          <p className="text-xs sm:text-sm text-void/70 dark:text-veil/70 font-sans leading-relaxed font-light line-clamp-3">
            {programme.summary}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-dusk/10">
          <Link href={`/programmes?slug=${programme.slug}`}>
            <span className="text-xs font-bold text-cobalt dark:text-marigold hover:text-crimson flex items-center gap-1.5 transition-colors font-grotesque uppercase tracking-wider cursor-pointer">
              Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
