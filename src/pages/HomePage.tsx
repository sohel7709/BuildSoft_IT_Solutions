import React from 'react';
import { Award, ArrowRight, CheckCircle2, Clock, Code, Shield, Star, Globe, Smartphone, PenTool, Server } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import Typewriter from '../components/ui/Typewriter';
import FAQItem from '../components/ui/FAQItem';
import { useSEO } from './_internal/useSEOAdapter';
import { COMPANY_INFO, SERVICES, TESTIMONIALS, FAQS, type ServiceIconKey } from '../data/content';

// Map data-driven icon keys to actual lucide components
const SERVICE_ICON_MAP: Record<ServiceIconKey, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Code,
  PenTool,
  Server,
  Shield
};

// Service card icon (compact) for the home grid
const ServiceIconCard = ({ iconKey, className = '' }: { iconKey: ServiceIconKey; className?: string }) => {
  const Icon = SERVICE_ICON_MAP[iconKey];
  return <Icon className={className} />;
};

export default function HomePage() {
  useSEO('IT Solutions & Software Development', COMPANY_INFO.shortDesc);

  const heroTaglines = [
    'Building scalable tech for modern India.',
    'Delivering custom ERPs with zero hidden costs.',
    'Crafting apps with seamless UPI integrations.',
    'Providing 100% source code ownership.',
    'Supporting your growth with dedicated AMC.'
  ];

  return (
    <div className="pt-[96px] md:pt-[116px]">
      <section className="relative bg-white dark:bg-slate-900 overflow-hidden pb-10 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 opacity-60" />
        <div className="max-w-7xl mx-auto relative">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 max-w-3xl mx-auto lg:max-w-3xl lg:pb-28 xl:pb-32 py-16 px-5 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <FadeIn direction="left">
              <div className="mx-auto max-w-7xl">
                <div className="text-center">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-bold text-xs sm:text-sm mb-6 border border-blue-200 dark:border-blue-800/50">
                    <Award className="w-4 h-4 mr-2" /> Top Rated Agency in Nagpur
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-extrabold text-gray-900 dark:text-white leading-[1.08]">
                    <span className="block xl:inline">Technology partner for</span>{' '}
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient-x xl:inline">
                      growing businesses
                    </span>
                  </h1>

                  <div className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0 min-h-[4rem] sm:min-h-[5rem] font-medium leading-relaxed">
                    <Typewriter words={heroTaglines} />
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="#/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = '#/contact';
                      }}
                      className="w-full sm:w-auto flex items-center justify-center px-10 py-4 text-lg sm:text-xl font-extrabold rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg transform transition-all duration-300 hover:-translate-y-1 active:scale-95"
                    >
                      Get a Free Quote
                    </a>
                    <a
                      href="#/portfolio"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = '#/portfolio';
                      }}
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 text-lg font-bold rounded-full border-2 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-white bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 shadow-sm transition-all duration-300"
                    >
                      View Our Work
                    </a>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400 font-medium gap-y-2 gap-x-6">
                    <span className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-1.5" /> No Hidden Costs
                    </span>
                    <span className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-1.5" /> Free Consultation
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 dark:bg-slate-950 py-12 lg:py-16 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800 dark:divide-slate-800">
            <div className="py-4 md:p-4">
              <div className="w-16 h-16 bg-gray-800 dark:bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-700 dark:border-slate-800">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">100% Transparency</h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
                Clear SOWs, strict timelines, and absolutely zero hidden costs mid-project.
              </p>
            </div>
            <div className="py-8 md:p-4">
              <div className="w-16 h-16 bg-gray-800 dark:bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-700 dark:border-slate-800">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Code Ownership</h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
                You own the IP. Full source code transfer upon project completion.
              </p>
            </div>
            <div className="py-8 md:p-4">
              <div className="w-16 h-16 bg-gray-800 dark:bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-700 dark:border-slate-800">
                <Clock className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Free AMC Support</h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
                Enjoy up to 6 months of free technical support and bug fixes post-launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Core Services
              </h2>
              <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400">
                Comprehensive IT services tailored for the Indian market.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 150} direction="up">
                <div
                  className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm dark:shadow-none border border-gray-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative overflow-hidden cursor-pointer"
                  onClick={() => {
                    window.location.hash = '#/services';
                  }}
                >
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out blur-2xl" />
                  <div className="mb-6 bg-blue-50 dark:bg-slate-700 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors duration-300 border border-blue-100 dark:border-slate-600 group-hover:border-transparent">
                    <ServiceIconCard
                      iconKey={service.iconKey}
                      className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed relative z-10 font-medium text-sm sm:text-base">
                    {service.shortDesc}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center mt-auto relative z-10 group/link">
                    Explore Details{' '}
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="#/services"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#/services';
              }}
              className="inline-flex items-center px-8 py-3.5 border-2 border-gray-300 dark:border-slate-700 text-base sm:text-lg font-bold rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all active:scale-95"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400">
                Don't just take our word for it. Hear from businesses we've helped grow.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <FadeIn key={t.name} delay={idx * 150} direction="up">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-sm relative h-full flex flex-col">
                  <div className="flex text-yellow-400 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium italic mb-6 flex-grow leading-relaxed text-sm sm:text-base">
                    "{t.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4 shadow-md flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
                Everything you need to know about working with us.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <div className="space-y-0">
              {FAQS.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Have more questions?</p>
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#/contact';
                }}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center"
              >
                Talk to our experts{' '}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
