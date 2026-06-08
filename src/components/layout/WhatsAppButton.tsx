import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.waNumber}?text=Hi%20BuildSoft,%20I%20would%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3.5 sm:p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(34,197,94,0.5)] hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      <span className="absolute right-14 sm:right-16 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-xs sm:text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-md pointer-events-none border border-gray-100 dark:border-slate-700">
        Chat with an expert
      </span>
    </a>
  );
}

