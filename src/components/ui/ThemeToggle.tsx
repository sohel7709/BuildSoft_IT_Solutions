import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({
  theme,
  toggleTheme
}: {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 sm:p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle Dark Mode"
      type="button"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

