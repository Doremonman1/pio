'use client';

import * as React from 'react';
import { FacultyMember } from '@/lib/data/types';

interface FacultyCardProps {
  member: FacultyMember;
}

export function FacultyCard({ member }: FacultyCardProps) {
  return (
    <div className="flex flex-col h-full bg-veil dark:bg-void/10 border border-dusk/20 overflow-hidden hover:border-marigold transition-all duration-300 shadow-sm group">
      {/* Faculty Avatar Frame */}
      <div className="relative h-72 w-full bg-void/10 overflow-hidden">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="object-cover w-full h-full grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Faculty Metadata */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h4 className="font-serif text-lg font-black text-void dark:text-veil leading-tight">
            {member.name}
          </h4>
          <p className="text-[10px] font-bold text-cobalt dark:text-marigold font-grotesque uppercase tracking-[0.15em] mb-1">
            {member.title}
          </p>
          <p className="text-[11px] font-mono text-dusk tracking-wide leading-none uppercase">
            {member.department}
          </p>
          {member.bio && (
            <p className="text-xs sm:text-sm text-void/65 dark:text-veil/65 font-sans leading-relaxed font-light mt-2 line-clamp-3">
              {member.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
