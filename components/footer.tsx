'use client';

import * as React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Facebook, Instagram, Send, CheckCircle2 } from 'lucide-react';
import { ArchDivider } from '@/components/arch-divider';

export function Footer() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-void text-veil/70 border-t border-dusk/20">
      {/* Top Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: University Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3.5">
              <ArchDivider variant="mark" />
              <div className="flex flex-col">
                <span className="font-grotesque text-lg font-black tracking-tight text-veil leading-none uppercase">
                  VENITE
                </span>
                <span className="text-[10px] tracking-[0.25em] font-mono font-bold text-marigold uppercase leading-tight mt-1">
                  UNIVERSITY
                </span>
              </div>
            </Link>
            <p className="text-sm text-veil/60 leading-relaxed font-sans">
              Founded on the pillars of academic rigor, character, and invitation. Venite University is committed to shaping global trailblazers and pioneering high-impact solutions.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="w-9 h-9 border border-dusk/30 hover:border-marigold text-veil/60 hover:text-marigold flex items-center justify-center transition-colors" aria-label="Venite University on Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-dusk/30 hover:border-marigold text-veil/60 hover:text-marigold flex items-center justify-center transition-colors" aria-label="Venite University on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-dusk/30 hover:border-marigold text-veil/60 hover:text-marigold flex items-center justify-center transition-colors" aria-label="Venite University on Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-dusk/30 hover:border-marigold text-veil/60 hover:text-marigold flex items-center justify-center transition-colors" aria-label="Venite University on Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="font-grotesque text-xs font-black text-veil tracking-wider uppercase border-b border-dusk/20 pb-2.5">
              Explore
            </h3>
            <ul className="space-y-3.5 text-xs font-mono text-veil/60 uppercase tracking-wider font-bold">
              <li>
                <Link href="/" className="hover:text-marigold transition-colors flex items-center">
                  <span className="mr-2 text-marigold">&middot;</span> Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-marigold transition-colors flex items-center">
                  <span className="mr-2 text-marigold">&middot;</span> About Venite
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="hover:text-marigold transition-colors flex items-center">
                  <span className="mr-2 text-marigold">&middot;</span> Academic Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-marigold transition-colors flex items-center">
                  <span className="mr-2 text-marigold">&middot;</span> Contact Registry
                </Link>
              </li>
              <li>
                <Link href="/contact?apply=true" className="hover:text-marigold transition-colors flex items-center">
                  <span className="mr-2 text-marigold">&middot;</span> Apply Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="font-grotesque text-xs font-black text-veil tracking-wider uppercase border-b border-dusk/20 pb-2.5">
              Campus Info
            </h3>
            <ul className="space-y-4 text-sm font-sans text-veil/60">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-marigold shrink-0 mt-0.5" />
                <span>100 Chancellor Avenue, University Heights, Cityville, CV 40221</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-marigold shrink-0" />
                <span>+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-marigold shrink-0" />
                <span>admissions@venite.edu</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-marigold shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-veil/80">Office Hours</p>
                  <p className="text-xs text-veil/50">Mon – Fri: 8:00 AM – 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="font-grotesque text-xs font-black text-veil tracking-wider uppercase border-b border-dusk/20 pb-2.5">
              Newsletter
            </h3>
            <p className="text-sm text-veil/60 leading-relaxed font-sans">
              Subscribe to the Venite Gazette to receive updates on academic deadlines and admissions cycles.
            </p>
            {subscribed ? (
              <div className="bg-marigold/10 border border-marigold text-marigold p-4 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold">Subscription Complete!</p>
                  <p className="mt-0.5 opacity-80">Welcome to the Venite Gazette dispatch.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex flex-col space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-veil/5 border border-dusk/30 rounded-none py-2.5 pl-3.5 pr-12 text-sm text-veil placeholder-dusk focus:outline-hidden focus:ring-1 focus:ring-marigold focus:border-transparent font-sans"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-marigold text-void hover:bg-cobalt hover:text-veil flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-dusk/10 bg-void text-veil/40 text-[10px] uppercase tracking-[0.2em] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono">
            &copy; {currentYear} Venite University &bull; Arrive. Become.
          </p>
          <div className="flex space-x-6 font-mono">
            <a href="#" className="hover:text-veil transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-veil transition-colors">Academic Integrity</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
