import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import PageHeader from '../components/ui/PageHeader';
import { useSEO } from './_internal/useSEOAdapter';
import { PORTFOLIO } from '../data/content';

export default function PortfolioPage() {
  useSEO('Portfolio', 'Explore our successfully delivered web and mobile applications.');

  return (
    <div>
      <PageHeader title="Our Portfolio" subtitle="Showcasing our best work across various industries in India." />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PORTFOLIO.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 150} direction="up">
              <a
                href={`#/portfolio/${project.id}`}
                className="block bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md dark:shadow-none border border-gray-100 dark:border-slate-700 group hover:shadow-2xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col"
              >
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-flex items-center bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-bold py-2 px-5 rounded-full shadow-lg text-sm">
                      View Case Study{' '}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{project.desc}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

