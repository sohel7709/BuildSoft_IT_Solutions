import React from 'react';
import { Award, ChevronRight, Shield } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import PageHeader from '../components/ui/PageHeader';
import { useSEO } from './_internal/useSEOAdapter';
import { COMPANY_INFO } from '../data/content';

export default function AboutPage() {
  useSEO('About Us', 'Learn about our mission and the team behind BuildSoft IT Solution.');

  return (
    <div>
      <PageHeader
        title="About BuildSoft IT Solutions"
        subtitle="Your trusted technology partner in Nagpur, delivering excellence nationwide."
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <FadeIn direction="right">
            <div className="flex flex-col justify-center h-full space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                At <span className="font-bold text-blue-600 dark:text-blue-400">{COMPANY_INFO.name}</span>, we build
                dependable, secure, and locally supported software tailored for Indian businesses — optimized for
                low-bandwidth networks, seamless UPI/payment flows, and clear ownership of source code.
              </p>

              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="rounded-2xl p-5 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm text-center">
                  <div className="text-3xl font-black text-blue-600 dark:text-blue-400">150+</div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mt-1">Projects Delivered</div>
                </div>
                <div className="rounded-2xl p-5 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm text-center">
                  <div className="text-3xl font-black text-green-600 dark:text-green-400">100%</div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mt-1">Client Satisfaction</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#/contact"
                  className="inline-flex items-center px-5 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-shadow shadow-sm"
                >
                  Talk to an Expert
                </a>
                <a
                  href="#/portfolio"
                  className="inline-flex items-center px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                >
                  See Case Studies
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="left">
            <div className="space-y-6">
              <div className="rounded-3xl p-6 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-md">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-md">
                  To make reliable, affordable technology accessible to Indian SMEs — privacy-first, locally supported,
                  and measurable outcomes that drive business growth.
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="font-bold text-gray-800 dark:text-gray-200">Accessible pricing for SMEs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="font-bold text-gray-800 dark:text-gray-200">Privacy-first, secure systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="font-bold text-gray-800 dark:text-gray-200">Local support & training</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm">
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">Team & Process</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Cross-functional squads, short sprints, CI/CD and weekly demos to reduce delivery risk.
                  </p>
                </div>
                <div className="rounded-2xl p-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm">
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">Why BuildSoft</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Transparent SOWs, firm timelines, and full IP transfer on final payment.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl border border-transparent">
                <h3 className="text-lg font-extrabold">Ready to scale?</h3>
                <p className="text-sm mt-2 opacity-90">
                  Book a free consultation and get a transparent estimate tailored to your needs.
                </p>
                <div className="mt-4">
                  <a
                    href="#/contact"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-blue-700 font-black hover:opacity-95 transition"
                  >
                    Request a Call
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300} direction="up">
          <div className="mt-16 sm:mt-24 pt-16 border-t border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 -mx-5 sm:-mx-6 lg:-mx-8 px-5 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-10 sm:mb-12 tracking-tight">
              Certifications & Recognitions
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 md:gap-24">
              <div className="group flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-slate-800 shadow-md group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 dark:text-yellow-400" />
                </div>
                <span className="font-extrabold text-gray-900 dark:text-white text-lg">ISO 9001:2015</span>
                <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                  Quality Assured
                </span>
              </div>
              <div className="group flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-slate-800 shadow-md group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-extrabold text-gray-900 dark:text-white text-lg">MSME Registered</span>
                <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                  Govt. of India
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
