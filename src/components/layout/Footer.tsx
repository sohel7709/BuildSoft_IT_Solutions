import React from 'react';
import { Code, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export default function Footer({ setPath }: { setPath: (path: string) => void }) {
  // Use `window.location.hash =` so HashRouter's hashchange listener fires and
  // re-renders the matched route. `pushState` mutates the URL but does not emit
  // the event HashRouter subscribes to.
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setPath(path);
    if (window.location.hash !== `#${path}`) {
      window.location.hash = `#${path}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-16 lg:pt-20 pb-8 lg:pb-10 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">BuildSoft IT Solutions </span>
            </div>
            <p className="text-slate-400 mb-6 sm:mb-8 text-sm leading-relaxed font-medium">
              Empowering Indian enterprises with world-class software development, transparent pricing, and robust local support.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 py-1.5 bg-slate-800 dark:bg-slate-900 border border-slate-700 text-xs font-bold rounded-lg text-slate-300">
                ISO 9001:2015
              </span>
              <span className="px-3 py-1.5 bg-slate-800 dark:bg-slate-900 border border-slate-700 text-xs font-bold rounded-lg text-slate-300">
                MSME Reg.
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm font-bold">
              <li>
                <a href="#/about" onClick={(e) => handleLinkClick(e, '/about')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center py-1">
                  <ChevronRight className="w-4 h-4 mr-1" /> About Us
                </a>
              </li>
              <li>
                <a href="#/services" onClick={(e) => handleLinkClick(e, '/services')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center py-1">
                  <ChevronRight className="w-4 h-4 mr-1" /> Services
                </a>
              </li>
              <li>
                <a href="#/portfolio" onClick={(e) => handleLinkClick(e, '/portfolio')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center py-1">
                  <ChevronRight className="w-4 h-4 mr-1" /> Portfolio
                </a>
              </li>
              <li>
                <a href="#/blog" onClick={(e) => handleLinkClick(e, '/blog')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center py-1">
                  <ChevronRight className="w-4 h-4 mr-1" /> Blog & News
                </a>
              </li>
              <li>
                <a href="#/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center py-1">
                  <ChevronRight className="w-4 h-4 mr-1" /> Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6 text-white uppercase tracking-wider">Legal & Info</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm font-bold">
              <li>
                <a href="#/terms" onClick={(e) => handleLinkClick(e, '/terms')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center py-1">
                  <ChevronRight className="w-4 h-4 mr-1" /> Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#/privacy" onClick={(e) => handleLinkClick(e, '/privacy')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center py-1">
                  <ChevronRight className="w-4 h-4 mr-1" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#/refund" onClick={(e) => handleLinkClick(e, '/refund')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center py-1">
                  <ChevronRight className="w-4 h-4 mr-1" /> Refund Policy
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 block">Payments Accepted</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-800 dark:bg-slate-900 text-slate-300 text-[10px] font-bold px-2 py-1.5 rounded border border-slate-700">UPI</span>
                <span className="bg-slate-800 dark:bg-slate-900 text-slate-300 text-[10px] font-bold px-2 py-1.5 rounded border border-slate-700">NEFT/RTGS</span>
                <span className="bg-slate-800 dark:bg-slate-900 text-slate-300 text-[10px] font-bold px-2 py-1.5 rounded border border-slate-700">Cards</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6 text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 sm:space-y-5 text-sm text-slate-400 font-bold">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="leading-relaxed font-medium break-words">{COMPANY_INFO.address}, {COMPANY_INFO.city}</span>
              </li>
              <li className="flex items-start group">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <div className="flex flex-col space-y-1.5">
                  <a href={`tel:${COMPANY_INFO.phone1}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone1}</a>
                  <a href={`tel:${COMPANY_INFO.phone2}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone2}</a>
                </div>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs sm:text-sm font-bold mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-3">
            <a href="#/" onClick={(e) => e.preventDefault()} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 font-bold">in</a>
            <a href="#/" onClick={(e) => e.preventDefault()} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all duration-300 hover:-translate-y-1 font-bold">tw</a>
            <a href="#/" onClick={(e) => e.preventDefault()} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-800 hover:text-white transition-all duration-300 hover:-translate-y-1 font-bold">fb</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
