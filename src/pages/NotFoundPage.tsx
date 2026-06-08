import React from 'react';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import { useSEO } from './_internal/useSEOAdapter';

export default function NotFoundPage() {
  useSEO('Page Not Found', 'The page you are looking for does not exist.');

  return (
    <div className="pt-32 pb-20 text-center min-h-[70vh] flex flex-col items-center justify-center px-4">
      <FadeIn direction="down">
        <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
          404
        </h1>
        <div className="w-24 h-2 bg-blue-600 mx-auto mb-8 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto font-medium">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => {
            window.location.hash = '#/';
            window.scrollTo(0, 0);
          }}
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg active:scale-95"
          type="button"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Go Back Home
        </button>
      </FadeIn>
    </div>
  );
}

