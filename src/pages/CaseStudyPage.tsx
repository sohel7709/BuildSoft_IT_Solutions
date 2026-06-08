import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Star, X, ChevronRight } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import { useSEO } from './_internal/useSEOAdapter';
import { PORTFOLIO } from '../data/content';
import { useParams } from 'react-router-dom';

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id || '';
  const project = PORTFOLIO.find((p) => p.id === id);

  useSEO(project ? `${project.title} Case Study` : 'Project Not Found', project ? project.desc : 'Case study details.');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[70vh] flex flex-col items-center justify-center px-4">
        <FadeIn direction="down">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Project Not Found</h2>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <a
          href="#/portfolio"
          className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 sm:mb-10 transition-colors font-bold text-sm sm:text-base group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </a>

        <FadeIn direction="down">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[10px] sm:text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 border border-blue-100 dark:border-blue-800/50">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4 sm:mb-6 tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed font-medium">{project.desc}</p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl dark:shadow-blue-900/20 mb-12 sm:mb-20 border-4 border-white dark:border-slate-800 relative group">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[400px] sm:max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            <FadeIn direction="right" delay={100}>
              <div className="bg-red-50 dark:bg-red-900/10 p-6 sm:p-8 md:p-10 rounded-3xl border border-red-100 dark:border-red-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-5">
                  <X className="w-24 h-24 sm:w-32 sm:h-32 text-red-600" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center relative z-10">
                  <X className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-red-500" /> The Challenge
                </h2>
                <p className="text-gray-800 dark:text-gray-300 text-base sm:text-lg leading-relaxed relative z-10 font-medium">{project.problem}</p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="bg-blue-50 dark:bg-blue-900/10 p-6 sm:p-8 md:p-10 rounded-3xl border border-blue-100 dark:border-blue-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-5">
                  <CheckCircle2 className="w-24 h-24 sm:w-32 sm:h-32 text-blue-600" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center relative z-10">
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-blue-500" /> Our Solution
                </h2>
                <p className="text-gray-800 dark:text-gray-300 text-base sm:text-lg leading-relaxed relative z-10 font-medium">{project.solution}</p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={300}>
              <div className="bg-green-50 dark:bg-green-900/10 p-6 sm:p-8 md:p-10 rounded-3xl border border-green-100 dark:border-green-900/30 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-5">
                  <Star className="w-24 h-24 sm:w-32 sm:h-32 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center relative z-10">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-green-500" /> The Results
                </h2>
                <p className="text-gray-900 dark:text-gray-100 text-base sm:text-lg font-bold leading-relaxed relative z-10">{project.results}</p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-1">
            <FadeIn direction="left" delay={400}>
              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl dark:shadow-none border border-gray-200 dark:border-slate-700 lg:sticky lg:top-36">
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 border-b border-gray-100 dark:border-slate-700 pb-4">Technologies Used</h3>
                <ul className="space-y-3 sm:space-y-4 flex flex-row flex-wrap lg:flex-col gap-2 lg:gap-0">
                  {project.tech.map((t, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 font-bold text-sm sm:text-lg bg-gray-50 dark:bg-slate-900/50 lg:bg-transparent px-3 py-2 lg:p-0 rounded-lg lg:rounded-none border border-gray-200 dark:border-slate-700 lg:border-none">
                      <div className="hidden lg:flex w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 items-center justify-center mr-3 border border-blue-100 dark:border-blue-800/50 flex-shrink-0">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-100 dark:border-slate-700">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-bold mb-4 uppercase tracking-wider text-center">Ready for similar results?</p>
                  <a href="#/contact" className="w-full flex justify-center items-center px-6 py-3.5 sm:py-4 border border-transparent text-sm sm:text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md active:scale-95">
                    Start a Conversation
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

