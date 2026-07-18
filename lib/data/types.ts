// lib/data/types.ts

export type ProgrammeLevel = "Undergraduate" | "Postgraduate" | "Diploma";

export interface Programme {
  slug: string;
  title: string;
  level: ProgrammeLevel;
  durationYears: number;
  summary: string;
  department: string;
  tags?: string[];
  
  // Enriched fields for Section 5.3 Degree Specifications
  degree: string;
  modules: string[];
  careerPathways: string[];
  annualTuitionUsd: number;
  minimumRequirements: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  programme: string;
  gradYear: number;
  photoUrl: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  photoUrl: string;
  bio?: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix?: string; // e.g. "%", "+"
  label: string;
  desc?: string;
}
