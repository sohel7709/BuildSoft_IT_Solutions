import React from 'react';
import FadeIn from './FadeIn';

export default function PageHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative bg-slate-50 dark:bg-slate-800 py-12 md:py-20 lg:py-24 border-b border-gray-200 dark:border-slate-700 mt-[96px] md:mt-[116px] overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn direction="down">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </div>
  );
}

