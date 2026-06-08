import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import { useParams } from 'react-router-dom';
import { useSEO } from './_internal/useSEOAdapter';
import { BLOG_POSTS, type BlogPost } from '../data/blog';

export default function BlogPostPage() {
  const params = useParams();
  const id = params.id || '';

  const post: BlogPost | undefined = BLOG_POSTS.find((p) => p.id === id);

  useSEO(post ? post.title : 'Article Not Found', post ? post.excerpt : 'Article details.');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <a
            href="#/blog"
            className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 sm:mb-10 transition-colors font-bold text-sm sm:text-base group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />{' '}
            Back to Articles
          </a>
          <FadeIn direction="down">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Article Not Found
            </h1>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <a
          href="#/blog"
          className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 sm:mb-10 transition-colors font-bold text-sm sm:text-base group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />{' '}
          Back to Articles
        </a>

        <FadeIn direction="down">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-gray-200 dark:border-slate-800">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mr-3 sm:mr-4 shadow-md border-2 border-white dark:border-slate-800 flex-shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">{post.author}</div>
              <div className="text-xs sm:text-sm font-medium uppercase tracking-wider mt-0.5">{post.date}</div>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-10 sm:mb-12 relative border-4 border-white dark:border-slate-800">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="prose prose-base sm:prose-lg md:prose-xl prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed font-medium">
            {post.content}
          </div>

          <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 sm:p-10 text-center border border-gray-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Ready to upgrade your business?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 font-medium">
                Let's discuss how these concepts can apply to your specific needs.
              </p>
              <a
                href="#/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95 w-full sm:w-auto justify-center"
              >
                Contact Our Experts
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
