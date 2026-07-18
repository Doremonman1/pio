'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { ArchDivider } from '@/components/arch-divider';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { ColorBlockSection } from '@/components/color-block-section';
import { StatCard } from '@/components/stat-card';
import { ProgrammeCard } from '@/components/programme-card';
import { TestimonialCarousel } from '@/components/testimonial-carousel';

// Static database imports
import { stats } from '@/lib/data/stats';
import { programmes } from '@/lib/data/programmes';
import { testimonials } from '@/lib/data/testimonials';
import { Programme } from '@/lib/data/types';

export default function HomePage() {
  // Select one of each level for featured section
  const featured = [
    programmes.find((p) => p.level === 'Undergraduate'),
    programmes.find((p) => p.level === 'Postgraduate'),
    programmes.find((p) => p.level === 'Diploma'),
  ].filter((p): p is Programme => !!p);

  const features = [
    {
      icon: Sparkles,
      title: 'Studio-Style Classes',
      desc: 'Small, highly interactive classrooms where theory is deconstructed and tested immediately.',
    },
    {
      icon: BookOpen,
      title: 'Pioneering Research Funding',
      desc: 'Over $15M in merit endowments supporting collaborative discoveries with global industry leaders.',
    },
    {
      icon: Compass,
      title: 'Global Exchange Portals',
      desc: 'Study terms hosted at international partner institutions spanning Geneva, Singapore, and Cambridge.',
    },
    {
      icon: ShieldCheck,
      title: '98% Graduate Placement',
      desc: 'Consistent corporate placement inside Fortune 100 conglomerates within 6 months of graduation.',
    },
  ];

  const galleryImages = [
    { src: 'https://picsum.photos/seed/campus-lawn/800/600', title: 'The Great Lawn & Library Cloisters' },
    { src: 'https://picsum.photos/seed/campus-lab/800/600', title: 'Computational Nano-Systems Laboratories' },
    { src: 'https://picsum.photos/seed/campus-convocation/800/600', title: 'Founders Convocation Auditorium' },
    { src: 'https://picsum.photos/seed/campus-collaboration/800/600', title: 'Student Innovation and Startup Hub' },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION (Threshold Archway Curtain Reveal) */}
      <section
        id="hero-section"
        className="relative min-h-[85vh] flex items-center justify-center bg-void text-veil pt-16 pb-24 overflow-hidden border-b-4 border-marigold"
      >
        {/* Signature Two-Panel sliding archway curtains */}
        <ArchDivider variant="hero" animated={true} />

        {/* Decorative ambient deep background circles (behind text, behind curtain slide) */}
        <div className="absolute top-12 left-10 w-[350px] h-[350px] bg-cobalt/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-marigold/5 rounded-full blur-3xl pointer-events-none" />

        {/* Central visual text structure */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-4">
            <SectionEyebrow latin="Venite" translation="Come" light={true} />

            <h1 className="font-serif text-5xl sm:text-7xl md:text-[8rem] font-black tracking-tight leading-[1] text-veil uppercase select-none">
              Come as <br /> you&apos;re <span className="font-serif font-light italic text-marigold tracking-normal lowercase">becoming</span>.
            </h1>
          </div>

          <p className="font-sans text-sm sm:text-base md:text-lg text-veil/70 max-w-2xl mx-auto leading-relaxed font-light">
            Venite University is built on the pillars of invitation and arrival. We host a modern, high-intensity learning ecosystem designed to turn deep curiosity into pioneering global leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/contact?apply=true">
              <button className="px-8 py-4 bg-crimson hover:bg-marigold hover:text-void text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer">
                Apply Online
              </button>
            </Link>
            <Link href="/programmes">
              <button className="px-8 py-4 border border-veil/20 hover:border-marigold hover:text-marigold text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center gap-2">
                Explore Programmes <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP (Marigold color block panel) */}
      <ColorBlockSection color="marigold" clipBottom={true} id="stats-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              desc={stat.desc}
            />
          ))}
        </div>
      </ColorBlockSection>

      {/* 3. FEATURED PROGRAMMES (Quiet neutral ground section) */}
      <section id="featured-programmes" className="py-20 md:py-28 bg-veil dark:bg-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <SectionEyebrow latin="Disce" translation="Learn" />
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight text-void dark:text-veil uppercase">
              Degree Programmes
            </h2>
            <p className="text-sm sm:text-base text-void/70 dark:text-veil/70 font-sans leading-relaxed font-light">
              We offer highly demanding curriculum models led by active industry researchers, paving direct avenues for real-world competency.
            </p>
          </div>

          {/* Cards catalog preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featured.map((prog) => (
              <ProgrammeCard key={prog.slug} programme={prog} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/programmes">
              <button className="px-8 py-4 bg-void dark:bg-veil text-veil dark:text-void hover:bg-cobalt dark:hover:bg-marigold hover:text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-colors duration-300 cursor-pointer shadow-md">
                View All Programmes
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. WHY VENITE (Cobalt full-bleed color block panel) */}
      <ColorBlockSection color="cobalt" clipTop={true} clipBottom={true} id="why-venite">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow latin="Vocatio" translation="Calling" light={true} />
          <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight text-veil uppercase">
            The Invitation to Excel
          </h2>
          <p className="text-sm text-veil/85 font-sans leading-relaxed font-light">
            We deconstruct the default university structure, replacing lecture-hall noise with deliberate, hands-on, studio-style mentoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 bg-void/10 border border-veil/10 hover:border-marigold hover:bg-void/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-marigold text-void flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-grotesque text-sm font-black text-veil uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-xs text-veil/70 font-sans leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ColorBlockSection>

      {/* 5. TESTIMONIALS (Quiet neutral ground section) */}
      <section id="testimonials" className="py-20 md:py-28 bg-veil dark:bg-void border-t border-dusk/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <SectionEyebrow latin="Testimonia" translation="Voices" />
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight text-void dark:text-veil uppercase">
              Our Community
            </h2>
          </div>

          <TestimonialCarousel items={testimonials} />

        </div>
      </section>

      {/* 6. CAMPUS GALLERY PREVIEW (Quiet neutral ground section) */}
      <section id="gallery-preview" className="py-20 md:py-28 bg-veil dark:bg-void border-t border-dusk/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h3 className="font-grotesque text-xs font-black text-cobalt dark:text-marigold tracking-widest uppercase">
              Campus Environment
            </h3>
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight text-void dark:text-veil uppercase">
              A Threshold of Discovery
            </h2>
          </div>

          {/* Grid Layout of campus environments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden h-72 border border-dusk/20 shadow-sm">
                <img
                  src={img.src}
                  alt={img.title}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 z-10">
                  <p className="font-serif text-veil font-black text-base tracking-wide leading-snug">
                    {img.title}
                  </p>
                  <p className="text-[9px] text-marigold font-mono tracking-widest uppercase mt-1">
                    Venite Campus grounds
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FINAL ENROLLMENT CTA BANNER (Crimson color block panel) */}
      <ColorBlockSection color="crimson" clipTop={true} id="cta-banner">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-8">
          <h2 className="font-grotesque text-4xl sm:text-6xl md:text-[5.5rem] font-black tracking-tight text-veil uppercase leading-none">
            COME. BECOME.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-veil/90 max-w-2xl mx-auto font-sans leading-relaxed font-light">
            Enrollment is now active for the upcoming Fall Academic Session. Our chancellery counseling desk is standing by to assist with credit evaluations and admissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/contact?apply=true">
              <button className="px-8 py-4 bg-marigold hover:bg-void hover:text-veil text-void text-xs font-grotesque font-black uppercase tracking-widest transition-colors duration-300 shadow-xl cursor-pointer">
                Start Enrollment
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border border-veil/30 hover:border-marigold hover:text-marigold text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-colors duration-300 cursor-pointer">
                Contact Admissions Desk
              </button>
            </Link>
          </div>
        </div>
      </ColorBlockSection>

    </div>
  );
}
