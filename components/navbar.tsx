'use client';

/* eslint-disable react-hooks/set-state-in-effect */
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from '@/components/theme-toggle';
import { ArchDivider } from '@/components/arch-divider';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname, isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-veil/95 dark:bg-void/95 backdrop-blur-md shadow-lg border-b border-dusk/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with the interlocking ArchDivider signature mark */}
          <Link href="/" className="flex items-center space-x-3 group">
            <ArchDivider variant="mark" />
            <div className="flex flex-col">
              <span className="font-grotesque text-base sm:text-lg font-black tracking-tight text-void dark:text-veil leading-none uppercase">
                VENITE
              </span>
              <span className="text-[9px] tracking-[0.25em] font-mono font-bold text-cobalt dark:text-marigold uppercase leading-tight mt-1">
                UNIVERSITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-grotesque text-xs uppercase tracking-widest transition-all hover:text-crimson relative py-1 ${
                    isActive
                      ? 'text-cobalt dark:text-marigold font-black'
                      : 'text-void/60 dark:text-veil/60 font-black'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-cobalt dark:bg-marigold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact?apply=true">
              <button className="px-6 py-3 bg-crimson hover:bg-marigold hover:text-void text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-void/60 dark:text-veil/60 hover:text-void dark:hover:text-veil hover:bg-void/5 dark:hover:bg-veil/5 border border-dusk/20 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full border-b border-dusk/20 bg-veil dark:bg-void overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-grotesque font-black uppercase tracking-widest transition-colors ${
                      isActive
                        ? 'bg-cobalt/10 dark:bg-marigold/10 text-cobalt dark:text-marigold'
                        : 'text-void/60 dark:text-veil/60 hover:bg-void/5 dark:hover:bg-veil/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-dusk/10 px-4">
                <Link href="/contact?apply=true" className="block w-full">
                  <button className="w-full py-3.5 bg-crimson hover:bg-marigold hover:text-void text-veil text-xs font-grotesque font-black uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
