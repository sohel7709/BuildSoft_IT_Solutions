import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import PageHeader from '../components/ui/PageHeader';
import { useSEO } from './_internal/useSEOAdapter';
import { BLOG_POSTS } from '../data/blog';

export default function BlogPage() {
  useSEO('Blog & Insights', 'Read the latest technology insights from our experts.');

  return (
    <div>
      <PageHeader
        title="Insights & News"
        subtitle="Latest thoughts from our technology experts to keep you ahead of the curve."
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 100} direction="up">
              <a
                href={`#/blog/${post.id}`}
                className="flex flex-col bg-white dark:bg-slate-800 rounded-3xl shadow-sm dark:shadow-none border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 h-full group"
              >
                <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-slate-700">
                    {post.date}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
                  <div className="flex items-center text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-black border border-blue-200 dark:border-blue-800/50">
                      {post.author.charAt(0)}
                    </div>
                    {post.author}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 flex-grow leading-relaxed font-medium">
                    {post.excerpt}
                  </p>

                  <div className="text-gray-900 dark:text-gray-200 font-bold inline-flex items-center mt-auto group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors bg-gray-50 dark:bg-slate-900/50 self-start px-4 py-2 sm:px-5 sm:py-2 rounded-lg border border-gray-200 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-500/50 text-sm sm:text-base">
                    Read Article{' '}
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}


