'use client';

/* eslint-disable react-hooks/set-state-in-effect */
import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 border border-dusk/20 rounded-none bg-veil dark:bg-void" />
    );
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <button
      id="theme-toggle-btn"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 flex items-center justify-center border border-dusk/20 rounded-none bg-veil hover:bg-marigold hover:text-void dark:bg-void dark:hover:bg-marigold text-void dark:text-veil cursor-pointer focus-ring transition-all"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {currentTheme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ y: -10, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            <Sun className="h-4 w-4 text-marigold hover:text-void" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -10, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.15 }}
          >
            <Moon className="h-4 w-4 text-cobalt" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
