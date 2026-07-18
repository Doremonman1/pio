'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Search, GraduationCap, Calendar, DollarSign, ListChecks, Award, ArrowUpRight, ArrowLeft, X, Briefcase, GraduationCap as CapIcon } from 'lucide-react';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { ColorBlockSection } from '@/components/color-block-section';
import { programmes } from '@/lib/data/programmes';
import { Programme } from '@/lib/data/types';

interface UrlParamSyncProps {
  setActiveProg: (prog: Programme | null) => void;
}

function ProgrammeUrlParamSync({ setActiveProg }: UrlParamSyncProps) {
  const searchParams = useSearchParams();
  React.useEffect(() => {
    const slug = searchParams.get('slug');
    if (slug) {
      const found = programmes.find((p) => p.slug === slug);
      if (found) {
        setActiveProg(found);
      }
    } else {
      setActiveProg(null);
    }
  }, [searchParams, setActiveProg]);
  return null;
}

function ProgrammesPageContent() {
  const router = useRouter();
  
  const [selectedLevel, setSelectedLevel] = React.useState<string>('all');
  const [selectedDept, setSelectedDept] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  
  // Selected programme for the drawer/overlay details
  const [activeProg, setActiveProg] = React.useState<Programme | null>(null);

  // Handle opening a programme
  const openProgramme = (prog: Programme) => {
    // Update URL query string without reloading page
    const params = new URLSearchParams(window.location.search);
    params.set('slug', prog.slug);
    router.push(`/programmes?${params.toString()}`);
  };

  // Handle closing the drawer
  const closeProgramme = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete('slug');
    router.push(`/programmes?${params.toString()}`);
  };

  // Get unique departments for the dropdown filter
  const departments = ['all', ...Array.from(new Set(programmes.map((p) => p.department)))];

  // Filtering Logic
  const filteredProgrammes = programmes.filter((prog) => {
    const matchesLevel = selectedLevel === 'all' || prog.level.toLowerCase() === selectedLevel.toLowerCase();
    const matchesDept = selectedDept === 'all' || prog.department === selectedDept;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesDept && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <React.Suspense fallback={null}>
        <ProgrammeUrlParamSync setActiveProg={setActiveProg} />
      </React.Suspense>
      
      {/* 1. PAGE HERO */}
      <section className="bg-void text-veil relative py-20 overflow-hidden border-b-4 border-marigold">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/catalog-hero/1920/600"
            alt="Academic Catalogue"
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
            <span className="text-marigold font-bold">Academic Catalogue</span>
          </nav>
          
          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-tight select-none">
              Academic <span className="font-serif font-light italic text-marigold tracking-normal lowercase">Catalogues</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-veil/70 font-sans max-w-2xl leading-relaxed font-light">
              We offer rigorous, research-centered degrees across undergraduate, postgraduate, and professional diploma divisions, designed to forge uncompromised expertise.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC FILTERS BAR */}
      <section className="py-8 bg-veil dark:bg-void border-b border-dusk/20 sticky top-[72px] z-30 shadow-md backdrop-blur-md bg-veil/95 dark:bg-void/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Degree Division Tabs */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Division Filter">
              {[
                { label: 'All Divisions', value: 'all' },
                { label: 'Undergraduate', value: 'undergraduate' },
                { label: 'Postgraduate', value: 'postgraduate' },
                { label: 'Diplomas', value: 'diploma' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  role="tab"
                  aria-selected={selectedLevel === tab.value}
                  onClick={() => setSelectedLevel(tab.value)}
                  className={`px-4 py-3 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    selectedLevel === tab.value
                      ? 'bg-marigold text-void border-marigold font-black'
                      : 'bg-void/5 dark:bg-veil/5 hover:bg-void/10 dark:hover:bg-veil/10 text-void/80 dark:text-veil/80 border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Department Selector & Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch w-full lg:max-w-2xl">
              {/* Department Dropdown */}
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="bg-void/5 dark:bg-veil/5 border border-dusk/20 text-xs font-mono uppercase tracking-wider py-3 px-4 text-void dark:text-veil focus:outline-hidden focus:ring-1 focus:ring-marigold rounded-none"
                aria-label="Filter by department"
              >
                <option value="all">All Departments</option>
                {departments.filter(d => d !== 'all').map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              {/* Live search input */}
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-dusk">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search courses or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-void/5 dark:bg-veil/5 border border-dusk/20 py-3 pl-10 pr-10 text-xs text-void dark:text-veil placeholder-dusk focus:outline-hidden focus:ring-1 focus:ring-marigold transition-all rounded-none"
                  aria-label="Search majors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-dusk hover:text-void dark:hover:text-veil cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CATALOGUE CARDS GRID */}
      <section className="py-16 md:py-24 bg-veil dark:bg-void/40 border-t border-dusk/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="popLayout">
            {filteredProgrammes.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProgrammes.map((prog) => {
                  const isUndergrad = prog.level === 'Undergraduate';
                  const isPostgrad = prog.level === 'Postgraduate';
                  const badgeColor = isUndergrad
                    ? 'text-cobalt dark:text-marigold'
                    : isPostgrad
                    ? 'text-crimson'
                    : 'text-dusk';

                  return (
                    <motion.div
                      layout
                      key={prog.slug}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="cursor-pointer"
                      onClick={() => openProgramme(prog)}
                    >
                      <div className="flex flex-col h-full bg-veil dark:bg-void border border-dusk/20 hover:border-marigold transition-all duration-300 shadow-sm hover:shadow-lg group">
                        
                        {/* Course Image Header */}
                        <div className="relative h-44 w-full bg-void/10 overflow-hidden">
                          <img
                            src={
                              prog.slug === 'se-undergrad' ? 'https://picsum.photos/seed/tech-school/600/400' :
                              prog.slug === 'cs-undergrad' ? 'https://picsum.photos/seed/datascience/600/400' :
                              prog.slug === 'ba-undergrad' ? 'https://picsum.photos/seed/business-school/600/400' :
                              prog.slug === 'ir-undergrad' ? 'https://picsum.photos/seed/law-school/600/400' :
                              prog.slug === 'mba-postgrad' ? 'https://picsum.photos/seed/mba/600/400' :
                              prog.slug === 'cyber-postgrad' ? 'https://picsum.photos/seed/cybersecurity/600/400' :
                              prog.slug === 'econ-postgrad' ? 'https://picsum.photos/seed/economics/600/400' :
                              prog.slug === 'fintech-diploma' ? 'https://picsum.photos/seed/fintech/600/400' :
                              'https://picsum.photos/seed/uxdesign/600/400'
                            }
                            alt={prog.title}
                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 left-4 bg-void text-veil text-[9px] font-grotesque tracking-widest px-3 py-1.5 border border-dusk/30 uppercase flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-marigold" /> {prog.durationYears} {prog.durationYears === 1 ? 'Year' : 'Years'}
                          </div>
                        </div>

                        {/* Card metadata & overview */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className={`text-[10px] font-bold uppercase tracking-[0.15em] font-grotesque flex items-center gap-1 ${badgeColor}`}>
                                <GraduationCap className="w-3.5 h-3.5" /> {prog.level}
                              </span>
                              <span className="text-[10px] font-mono text-dusk font-bold">
                                {prog.degree}
                              </span>
                            </div>

                            <h3 className="font-serif text-lg font-black text-void dark:text-veil leading-snug group-hover:text-cobalt dark:group-hover:text-marigold transition-colors">
                              {prog.title}
                            </h3>

                            <p className="font-mono text-[9px] text-dusk tracking-wide leading-none uppercase">
                              {prog.department}
                            </p>

                            <p className="text-xs sm:text-sm text-void/70 dark:text-veil/70 font-sans leading-relaxed font-light line-clamp-3">
                              {prog.summary}
                            </p>
                          </div>

                          {/* Trigger card links */}
                          <div className="pt-3 border-t border-dusk/15 flex items-center justify-between">
                            <span className="text-[10px] font-mono text-dusk uppercase tracking-widest font-bold">
                              Tuition: ${prog.annualTuitionUsd.toLocaleString()}/yr
                            </span>
                            <span className="text-xs font-bold text-cobalt dark:text-marigold group-hover:text-crimson flex items-center gap-1 font-grotesque uppercase tracking-wider transition-colors">
                              View Curriculum <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="text-center py-20 space-y-4 max-w-md mx-auto">
                <div className="mx-auto w-12 h-12 border border-dusk/20 text-dusk flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-black text-void dark:text-veil">
                    No matching programmes found
                  </h3>
                  <p className="text-sm text-void/60 dark:text-veil/60 font-sans font-light">
                    Try searching for other parameters, adjusting your department dropdown, or resetting the filter fields.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLevel('all');
                    setSelectedDept('all');
                  }}
                  className="px-5 py-2.5 border border-dusk/30 hover:border-marigold text-xs font-bold uppercase tracking-widest transition-colors font-mono cursor-pointer"
                >
                  Reset Catalog filters
                </button>
              </div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* 4. DETAILS DRAWER OVERLAY */}
      <AnimatePresence>
        {activeProg && (
          <div
            id="programme-drawer-overlay"
            className="fixed inset-0 z-50 overflow-hidden flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProg.title} Details`}
          >
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={closeProgramme}
              className="absolute inset-0 bg-void"
            />

            {/* Sliding Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl bg-veil dark:bg-void h-full overflow-y-auto shadow-2xl border-l-4 border-marigold flex flex-col justify-between"
            >
              {/* Header block with title */}
              <div className="p-8 border-b border-dusk/20 relative space-y-4">
                <button
                  onClick={closeProgramme}
                  className="absolute top-6 right-6 p-2 border border-dusk/30 hover:border-marigold text-void dark:text-veil cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-3.5">
                  <span className="text-[10px] font-bold bg-cobalt text-veil px-2.5 py-1 uppercase tracking-widest font-grotesque">
                    {activeProg.level}
                  </span>
                  <span className="text-xs font-mono font-bold text-dusk">
                    {activeProg.durationYears} Years &middot; {activeProg.degree}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-black text-void dark:text-veil leading-tight">
                  {activeProg.title}
                </h2>

                <p className="text-xs font-mono text-dusk uppercase tracking-widest">
                  {activeProg.department}
                </p>
              </div>

              {/* Main specifications contents */}
              <div className="p-8 flex-1 space-y-8">
                {/* 1. Overview */}
                <div className="space-y-2">
                  <h4 className="font-grotesque text-xs font-black text-void dark:text-veil uppercase tracking-wider">
                    Course Summary & Vision
                  </h4>
                  <p className="text-sm text-void/80 dark:text-veil/80 font-sans leading-relaxed font-light">
                    {activeProg.summary}
                  </p>
                </div>

                {/* 2. Core Curriculum modules */}
                <div className="space-y-3 p-5 bg-void/5 dark:bg-veil/5 border border-dusk/10">
                  <h4 className="font-grotesque text-xs font-black text-void dark:text-veil uppercase tracking-wider flex items-center gap-1.5">
                    <ListChecks className="w-4 h-4 text-marigold" /> Core Course Syllabus Modules
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs text-void/90 dark:text-veil/90">
                    {activeProg.modules.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-marigold select-none font-bold">&raquo;</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Tuition details & admission requirements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Tuition info */}
                  <div className="space-y-2.5 p-4 border border-dusk/15 bg-void/5 dark:bg-veil/5">
                    <h5 className="font-grotesque text-[10px] font-black text-dusk uppercase tracking-wider flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-marigold" /> Annual Tuition Fees
                    </h5>
                    <p className="font-mono text-2xl font-bold text-void dark:text-veil">
                      ${activeProg.annualTuitionUsd.toLocaleString()}{' '}
                      <span className="text-xs text-dusk font-sans font-light">USD</span>
                    </p>
                    <p className="text-[10px] text-dusk font-sans leading-tight">
                      Fees cover syllabus registries, examinations, computational lab hours, and campus wellness services.
                    </p>
                  </div>

                  {/* Requirements info */}
                  <div className="space-y-2.5 p-4 border border-dusk/15 bg-void/5 dark:bg-veil/5">
                    <h5 className="font-grotesque text-[10px] font-black text-dusk uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-marigold" /> Minimum Entrance Criteria
                    </h5>
                    <p className="text-xs text-void/90 dark:text-veil/90 font-mono leading-relaxed font-bold">
                      {activeProg.minimumRequirements}
                    </p>
                  </div>
                </div>

                {/* 4. Career Pathways */}
                <div className="space-y-3">
                  <h4 className="font-grotesque text-xs font-black text-void dark:text-veil uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-cobalt" /> Targeted Alumni Placement Vectors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProg.careerPathways.map((path) => (
                      <span
                        key={path}
                        className="text-[10px] font-mono bg-cobalt/15 text-cobalt dark:text-marigold font-bold px-3 py-1.5 uppercase tracking-wider"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action/Submit Enquiry Block */}
              <div className="p-8 border-t border-dusk/20 bg-void text-veil flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-left space-y-1">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-marigold font-bold">
                    Registry Code: {activeProg.slug.toUpperCase()}
                  </p>
                  <p className="text-[11px] font-sans text-veil/70 font-light">
                    Submit applications now for the Fall Academic term.
                  </p>
                </div>
                <Link
                  href={`/contact?apply=true&slug=${activeProg.slug}`}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full px-8 py-4 bg-crimson hover:bg-marigold hover:text-void text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-colors duration-300 shadow-md cursor-pointer">
                    Apply Now
                  </button>
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. ACCREDITED ADVICE STRIP */}
      <section className="py-16 bg-veil dark:bg-void border-t border-dusk/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-1.5 bg-marigold/10 text-marigold px-3.5 py-1.5 border border-marigold/20 rounded-none text-xs font-bold font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-marigold" /> Verified Academic Integrity
          </div>
          <h2 className="font-serif text-3xl font-black text-void dark:text-veil uppercase">
            Need Counseling Choosing Your Major?
          </h2>
          <p className="text-sm text-void/70 dark:text-veil/70 font-sans leading-relaxed max-w-2xl mx-auto font-light">
            Our counselor board is standing by to assist with syllabus specifications, transfer credits, study-abroad options, and tuition scholarships.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <button className="px-8 py-4 bg-void dark:bg-veil text-veil dark:text-void hover:bg-cobalt dark:hover:bg-marigold hover:text-veil font-bold text-xs uppercase tracking-widest transition-colors duration-300 font-grotesque cursor-pointer">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function ProgrammesPage() {
  return <ProgrammesPageContent />;
}
