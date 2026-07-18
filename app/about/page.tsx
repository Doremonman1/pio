'use client';

import * as React from 'react';
import Link from 'next/link';
import { Award, Eye, ShieldAlert, Target, Heart, Compass } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { TimelineItem } from '@/components/timeline-item';
import { FacultyCard } from '@/components/faculty-card';
import { ColorBlockSection } from '@/components/color-block-section';

// Data models
import { timeline } from '@/lib/data/timeline';
import { faculty } from '@/lib/data/faculty';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Academic Rigor',
      desc: 'Rigor — every claim in a thesis gets defended, not assumed. We focus on deep proof, extensive validation, and analytical excellence.',
    },
    {
      icon: Heart,
      title: 'Radical Integrity',
      desc: 'Ethical standards — we uphold a strict collegiate honor code. Our students practice transparent leadership across all sectors.',
    },
    {
      icon: Compass,
      title: 'Disruptive Curiosity',
      desc: 'Curiosity — active minds seek answers rather than accepting defaults. We fund campus startups and boundary-testing research.',
    },
    {
      icon: ShieldAlert,
      title: 'Humility in Search',
      desc: 'Humility — true knowledge starts by acknowledging the unknown. We encourage collaborative debate and cross-disciplinary inquiry.',
    },
  ];

  const partners = [
    { name: 'CVAA Accredited', desc: 'Council for Higher Education' },
    { name: 'ABET Certified', desc: 'Applied Sciences Commission' },
    { name: 'SACSCOC Council', desc: 'Regional Institutional body' },
    { name: 'UN Global Compact', desc: 'Diplomatic Training Partner' },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <section className="bg-void text-veil relative py-20 overflow-hidden border-b-4 border-marigold">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/campus-about-hero/1920/600"
            alt="About Venite University"
            className="object-cover w-full h-full opacity-15 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex space-x-2 text-xs font-mono text-veil/50 uppercase tracking-widest mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-marigold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-marigold font-bold">About Venite</span>
          </nav>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-tight select-none">
              About <span className="font-serif font-light italic text-marigold tracking-normal lowercase">Venite</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-veil/70 font-sans max-w-2xl leading-relaxed font-light">
              We stand as a definitive academic threshold, nurturing student curiosity and fostering unparalleled global standards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION (Eyebrow Propositum, Neutral Ground) */}
      <section className="py-20 bg-veil dark:bg-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionEyebrow latin="Propositum" translation="Purpose" />
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-void dark:text-veil uppercase">
              Academic Mandate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Mission Card */}
            <div className="bg-veil border-2 border-dusk/20 dark:bg-void/40 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-cobalt text-veil flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-black text-void dark:text-veil uppercase">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-void/80 dark:text-veil/80 font-sans leading-relaxed font-light">
                  To provide a demanding, globally aligned educational environment that equips scholars with technical expertise, critical problem-solving habits, and uncompromised ethical pillars to solve complex regional and global questions.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-void/60 dark:text-veil/60 font-bold">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-marigold shrink-0" />
                  Grooming technical trailblazers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-marigold shrink-0" />
                  Pioneering advanced research
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-marigold shrink-0" />
                  Zero gap between study and industry
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-veil border-2 border-dusk/20 dark:bg-void/40 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-marigold text-void flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-black text-void dark:text-veil uppercase">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-void/80 dark:text-veil/80 font-sans leading-relaxed font-light">
                  To be recognized globally as a top-tier research destination where discovery-led scholarship meets hands-on application, constructing a progressive, merit-oriented civilization.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-void/60 dark:text-veil/60 font-bold">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cobalt shrink-0" />
                  Consistent global excellence
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cobalt shrink-0" />
                  Self-sustaining campus ecology
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cobalt shrink-0" />
                  100% scholarship for genius
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORY TIMELINE (Quiet neutral ground, sloped top/bottom) */}
      <section className="py-20 bg-veil dark:bg-void/50 border-t border-b border-dusk/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionEyebrow latin="Chronologia" translation="Timeline" />
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-void dark:text-veil uppercase">
              Three Decades of Growth
            </h2>
          </div>

          <div className="space-y-12">
            {timeline.map((event, idx) => (
              <TimelineItem
                key={event.year}
                event={event}
                isFirst={idx === 0}
                isLast={idx === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP HIGHLIGHTS (Cobalt ColorBlockSection) */}
      <ColorBlockSection color="cobalt" clipTop={true} clipBottom={true}>
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <SectionEyebrow latin="Chancellery" translation="Leadership" light={true} />
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-veil uppercase">
            Administrative Board
          </h2>
          <p className="text-xs sm:text-sm text-veil/70 font-sans leading-relaxed font-light">
            Meet the academic directors, provosts, and registrars piloting Venite University toward unyielding high standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </ColorBlockSection>

      {/* 5. VALUES GRID (Quiet Neutral Section) */}
      <section className="py-20 bg-veil dark:bg-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionEyebrow latin="Foundamenta" translation="Values" />
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-void dark:text-veil uppercase">
              Institutional Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-veil dark:bg-void/25 border border-dusk/20 p-8 flex flex-col justify-between space-y-6 hover:border-marigold transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-void/5 dark:bg-veil/5 group-hover:bg-marigold text-void dark:text-veil group-hover:text-void flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-grotesque text-sm font-black text-void dark:text-veil uppercase tracking-wider">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-void/75 dark:text-veil/75 font-sans leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ACCREDITATION & PARTNERS (Grayscale logo strip) */}
      <section className="py-16 bg-veil dark:bg-void border-y border-dusk/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold text-dusk dark:text-veil/40 uppercase tracking-[0.25em] font-mono mb-8 select-none">
            Official Accreditations & Compliance Credentials
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="p-5 border border-dusk/20 hover:border-marigold bg-void/5 dark:bg-void/20 transition-all duration-300 group cursor-default"
              >
                <p className="font-serif text-base font-black text-void/70 dark:text-veil/70 group-hover:text-cobalt dark:group-hover:text-marigold transition-colors">
                  {p.name}
                </p>
                <p className="text-[9px] text-dusk font-mono uppercase tracking-wider mt-1">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION (Crimson ColorBlockSection) */}
      <ColorBlockSection color="crimson" clipTop={true}>
        <div className="max-w-4xl mx-auto text-center space-y-6 py-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-veil uppercase tracking-wide leading-tight">
            Explore our Comprehensive Degree Curricula
          </h2>
          <p className="text-sm text-veil/90 font-sans max-w-xl mx-auto leading-relaxed font-light">
            Browse our catalog of undergraduate, postgraduate, and diploma tracks mapped to high demand fields.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/programmes">
              <button className="px-8 py-4 bg-marigold text-void hover:bg-void hover:text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-all duration-300 cursor-pointer">
                View Academic Catalogue
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border border-veil/20 hover:border-marigold hover:text-marigold text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-all duration-300 cursor-pointer">
                Contact Admissions Desk
              </button>
            </Link>
          </div>
        </div>
      </ColorBlockSection>

    </div>
  );
}
