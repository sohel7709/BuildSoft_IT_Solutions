import React, { useEffect, useState } from 'react';
import { Code, Mail, MapPin, Phone, Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { COMPANY_INFO } from '../../data/content';

type Props = {
  currentPath: string;
  setPath: (path: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export default function Navbar({ currentPath, setPath, theme, toggleTheme }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/services', label: 'Services' },
    { id: '/portfolio', label: 'Portfolio' },
    { id: '/pricing', label: 'Pricing' }
  ];

  // Use `window.location.hash =` so HashRouter's hashchange listener fires and
  // re-renders the matched route. `pushState` mutates the URL but does not emit
  // the event HashRouter subscribes to, which left routes stuck on the current page.
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    setPath(path);
    if (window.location.hash !== `#${path}`) {
      window.location.hash = `#${path}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed w-full z-50 transition-all duration-500">
      <div
        className={`bg-gray-900 dark:bg-slate-950 text-gray-300 text-[11px] sm:text-xs py-2 transition-all duration-300 ${
          scrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'h-auto opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-between items-center">
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5" /> {COMPANY_INFO.email}
            </a>
            <span className="text-gray-600 dark:text-gray-700">|</span>
            <span className="flex items-center">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5" /> {COMPANY_INFO.city}
            </span>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="font-bold text-green-400">Open Now</span>
            <span className="hidden sm:inline text-gray-600 dark:text-gray-700">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone1}`}
              className="flex items-center font-bold text-white hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5" /> {COMPANY_INFO.phone1}
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-white dark:bg-slate-900 py-4 sm:py-5 border-b border-gray-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a
              href="#/"
              onClick={(e) => handleNavClick(e, '/')}
              className="flex-shrink-0 flex items-center group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                BuildSoft IT Solutions
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
              {navItems.map((item) => {
                const isActive =
                  currentPath === item.id ||
                  (currentPath.startsWith(item.id) && item.id !== '/');
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`px-3 lg:px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pl-4 flex items-center gap-3">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <a
                  href="#/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  className="bg-gray-900 dark:bg-blue-600 text-white px-5 lg:px-6 py-2.5 rounded-xl text-sm lg:text-base font-bold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block duration-300 active:scale-95 border border-transparent dark:border-blue-500"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none p-1.5 transition-colors"
                aria-label="Toggle navigation"
                type="button"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden absolute w-full left-0 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-2xl transition-all duration-300 origin-top overflow-hidden ${
            isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {[...navItems, { id: '/contact', label: 'Contact Us' }].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block w-full text-left px-5 py-3.5 text-base font-bold rounded-xl transition-colors border-b border-gray-50 dark:border-slate-800/50 last:border-0 ${
                  currentPath === item.id
                    ? 'bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
