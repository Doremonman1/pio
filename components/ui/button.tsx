'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', animate = true, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-hidden focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
    
    const variants = {
      primary: 'bg-brand-blue-600 hover:bg-brand-blue-700 text-white shadow-md shadow-brand-blue-500/10 dark:bg-brand-blue-500 dark:hover:bg-brand-blue-600 dark:shadow-none',
      secondary: 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900',
      outline: 'border border-slate-300 hover:bg-slate-100 text-slate-700 dark:border-slate-800 dark:hover:bg-slate-900 dark:text-slate-200',
      ghost: 'hover:bg-slate-100 text-slate-700 dark:hover:bg-slate-900 dark:text-slate-200',
      gold: 'bg-brand-gold-600 hover:bg-brand-gold-700 text-white shadow-md shadow-brand-gold-500/10 dark:bg-brand-gold-500 dark:hover:bg-brand-gold-600 dark:shadow-none',
    };

    const sizes = {
      sm: 'px-3.5 py-1.5 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3.5 text-base',
    };

    const combinedClass = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

    if (animate) {
      return (
        <motion.button
          ref={ref}
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.01 }}
          className={combinedClass}
          {...(props as any)}
        />
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClass}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
