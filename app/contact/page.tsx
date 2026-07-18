'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, HelpCircle, ChevronDown, ChevronUp, ExternalLink, Compass } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { AdmissionsChat } from '@/components/admissions-chat';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { ColorBlockSection } from '@/components/color-block-section';

interface FAQItem {
  q: string;
  a: string;
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const contactCards = [
    {
      icon: MapPin,
      title: 'Admissions Registry Desk',
      details: '100 Chancellor Avenue, University Heights',
      subDetails: 'Cityville, CV 40221',
      linkText: 'Get Driving Directions',
      href: 'https://maps.google.com',
    },
    {
      icon: Phone,
      title: 'Telephone Board',
      details: 'Main Switch: +1 (555) 234-5678',
      subDetails: 'Registry Line: +1 (555) 234-5679',
      linkText: 'Dial Chancellery',
      href: 'tel:+15552345678',
    },
    {
      icon: Mail,
      title: 'Registrar Communications',
      details: 'Inquiries: admissions@venite.edu',
      subDetails: 'Administrative Desk: admin@venite.edu',
      linkText: 'Transmit Direct Email',
      href: 'mailto:admissions@venite.edu',
    },
    {
      icon: Clock,
      title: 'Registry Office Hours',
      details: 'Monday – Friday: 8:00 AM – 5:00 PM',
      subDetails: 'Saturdays: 9:00 AM – 1:00 PM',
      linkText: 'Book Calendar Slot',
      href: '#',
    },
  ];

  const faqs: FAQItem[] = [
    {
      q: 'What are the core entrance requirements for undergraduate tracks?',
      a: 'Applicants must submit official high school transcripts, two letters of academic recommendation, and a Statement of Purpose essay. Standardized tests (SAT/ACT) are optional but recommended; our typical competitive entry baseline is SAT 1250+ or ACT 26+.',
    },
    {
      q: 'Does Venite University offer tuition grants or merit fellowships?',
      a: 'Yes, absolutely. Venite University dedicates over $15M in academic scholarships and grants annually. Our flagship Merit Excellence Fellowship (covering up to 100% tuition) evaluates all applicants automatically on submission.',
    },
    {
      q: 'Can I transfer previous university credits?',
      a: 'Courses from accredited institutions transfer over if graded "C" or higher and matching at least 80% of our curriculum syllabus. Our registry board provides credit evaluations within 10 business days of initial application.',
    },
    {
      q: 'What are the application deadlines for the Fall intake?',
      a: 'Early Action (non-binding) is due by November 1st, Regular Round 1 by January 15th, and Rolling Admissions (subject to seat availability) until June 30th. Early submissions enjoy priority seat and funding consideration.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <section className="bg-void text-veil relative py-20 overflow-hidden border-b-4 border-marigold">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/contact-hero/1920/600"
            alt="Admissions Desk"
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
            <span className="text-marigold font-bold">Contact Registry</span>
          </nav>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-tight select-none">
              Contact <span className="font-serif font-light italic text-marigold tracking-normal lowercase">Admissions</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-veil/70 font-sans max-w-2xl leading-relaxed font-light">
              Connect with our administrative board, schedule academic counseling, or transmit a validated prospectus inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT COMMUNICATIONS CHANNELS */}
      <section className="py-16 bg-veil dark:bg-void border-b border-dusk/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-veil dark:bg-void/40 p-6 border border-dusk/20 flex flex-col justify-between space-y-4 hover:border-marigold transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-void/5 dark:bg-veil/5 text-cobalt dark:text-marigold flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-black text-void dark:text-veil leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-void/70 dark:text-veil/70 font-sans mt-1 leading-normal font-light">
                        {card.details}
                      </p>
                      <p className="text-xs text-dusk font-mono mt-0.5 font-bold">
                        {card.subDetails}
                      </p>
                    </div>
                  </div>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold text-cobalt dark:text-marigold hover:text-crimson flex items-center gap-1.5 transition-colors font-mono uppercase tracking-widest"
                  >
                    {card.linkText} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TWO-COLUMN INQUIRY & DIRECTIONAL PLOT GRID */}
      <section className="py-20 bg-veil dark:bg-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <React.Suspense fallback={
                <div className="p-8 border border-dusk/20 bg-veil dark:bg-void rounded-none animate-pulse space-y-6">
                  <div className="h-6 bg-void/10 dark:bg-veil/10 w-1/3"></div>
                  <div className="h-4 bg-void/10 dark:bg-veil/10 w-2/3"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-10 bg-void/10 dark:bg-veil/10"></div>
                    <div className="h-10 bg-void/10 dark:bg-veil/10"></div>
                  </div>
                  <div className="h-10 bg-void/10 dark:bg-veil/10"></div>
                  <div className="h-32 bg-void/10 dark:bg-veil/10"></div>
                  <div className="h-10 bg-void/10 dark:bg-veil/10 w-full"></div>
                </div>
              }>
                <ContactForm />
              </React.Suspense>
            </div>

            {/* Map & Directional details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-3xl font-black text-void dark:text-veil uppercase leading-tight">
                  Historic Campus Plots
                </h3>
                <p className="text-sm text-void/70 dark:text-veil/70 font-sans leading-relaxed font-light">
                  We invite scholars, prospective students, and counselors to tour our historical cloisters, administrative libraries, and computational lab facilities.
                </p>
              </div>

              {/* Sophisticated wireframe map design matching high-end design guideline */}
              <div
                id="campus-wireframe-map"
                className="relative w-full h-[320px] bg-void border-2 border-marigold p-6 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Decorative schematic grids */}
                <div className="absolute inset-0 pointer-events-none opacity-10 select-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(#F5F3FF 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-bold text-marigold tracking-widest uppercase block mb-1">
                      Satellite Coordinate Plot
                    </span>
                    <p className="font-mono text-base font-bold text-veil">
                      40.7484&deg; N, 73.9857&deg; W
                    </p>
                  </div>
                  <Compass className="w-8 h-8 text-marigold animate-spin-slow" />
                </div>

                <div className="relative z-10 space-y-2 p-4 bg-void/90 border border-dusk/40 max-w-[90%]">
                  <h5 className="font-grotesque text-[10px] font-black text-marigold uppercase tracking-wider">
                    Navigating our Gates
                  </h5>
                  <p className="text-[11px] text-veil/85 font-sans leading-relaxed font-light">
                    Arriving via Chancellor Ave: Check in at West Gate 4. Visitor parking tags are issued immediately by registry wardens.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-dusk/30 pt-4">
                  <p className="text-[9px] font-mono text-veil/40 uppercase tracking-widest">
                    V.U. Chancellery Registry Desk
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[9px] font-bold font-grotesque text-marigold hover:text-veil uppercase tracking-widest flex items-center gap-1"
                  >
                    Open GPS Link <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Registry Desk Schedule Table */}
              <div className="bg-veil dark:bg-void/40 p-6 border border-dusk/20 space-y-4">
                <h4 className="font-serif text-lg font-black text-void dark:text-veil uppercase">
                  Registry Queue Timetable
                </h4>
                <div className="space-y-2.5 font-mono text-xs text-void/85 dark:text-veil/85">
                  <div className="flex justify-between border-b border-dusk/10 pb-1.5">
                    <span>Monday - Friday</span>
                    <span className="font-bold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between border-b border-dusk/10 pb-1.5">
                    <span>Saturdays (Counsel Desk)</span>
                    <span className="font-bold">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between text-dusk">
                    <span>Sundays & Public Holidays</span>
                    <span className="uppercase text-[10px] font-bold text-crimson">Registry Closed</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. ACCORDION FAQ */}
      <section className="py-20 bg-veil dark:bg-void/20 border-t border-dusk/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <SectionEyebrow latin="Quaestiones" translation="Inquiries" />
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-void dark:text-veil uppercase">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-veil dark:bg-void/40 border border-dusk/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-serif text-base font-black text-void dark:text-veil cursor-pointer hover:bg-void/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cobalt dark:text-marigold" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-dusk" />
                    )}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-void/70 dark:text-veil/70 font-sans leading-relaxed border-t border-dusk/10 font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Floating Admissions Chat Module */}
      <AdmissionsChat />

    </div>
  );
}
