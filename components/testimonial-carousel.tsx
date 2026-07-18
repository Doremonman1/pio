'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '@/lib/data/types';

interface TestimonialCarouselProps {
  items: Testimonial[];
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const activeTestimonial = items[activeIndex];

  if (!activeTestimonial) return null;

  return (
    <div
      className="max-w-4xl mx-auto w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="bg-veil dark:bg-void/50 border border-dusk/20 rounded-none p-8 sm:p-12 shadow-xl relative min-h-[300px] flex flex-col justify-between">
        
        {/* Visual Quotes Accents */}
        <div className="absolute top-8 right-8 text-marigold flex space-x-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-marigold text-marigold" />
          ))}
        </div>

        <div className="space-y-6">
          {/* Main testimonial quote */}
          <blockquote className="font-serif text-lg sm:text-xl md:text-2xl italic text-void/90 dark:text-veil/90 leading-relaxed font-light">
            &ldquo;{activeTestimonial.quote}&rdquo;
          </blockquote>

          {/* Alumni author details */}
          <div className="flex items-center space-x-4 pt-6 border-t border-dusk/15">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-marigold">
              <img
                src={activeTestimonial.photoUrl}
                alt={activeTestimonial.name}
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h5 className="font-serif text-base font-bold text-void dark:text-veil">
                {activeTestimonial.name}
              </h5>
              <p className="text-xs text-dusk font-sans font-light">
                {activeTestimonial.programme} &middot; Class of &apos;{activeTestimonial.gradYear % 100}
              </p>
            </div>
          </div>
        </div>

        {/* Manual navigation controls */}
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 border border-dusk/30 hover:border-marigold hover:bg-marigold hover:text-void text-void dark:text-veil transition-all duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 border border-dusk/30 hover:border-marigold hover:bg-marigold hover:text-void text-void dark:text-veil transition-all duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
