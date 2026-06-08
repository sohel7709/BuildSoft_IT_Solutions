import React from 'react';
import { CheckCircle2, Cpu, FileText, Zap } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import PageHeader from '../components/ui/PageHeader';
import { useSEO } from './_internal/useSEOAdapter';

function CostEstimator() {
  const [pages, setPages] = React.useState(5);
  const [type, setType] = React.useState('static');

  const calculateCost = () => {
    let base = 25000;
    let perPage = 1500;

    if (type === 'ecommerce') {
      base = 50000;
      perPage = 2500;
    }
    if (type === 'webapp') {
      base = 80000;
      perPage = 3000;
    }

    return base + pages * perPage;
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-[2rem] p-6 sm:p-8 md:p-12 mb-16 sm:mb-20 max-w-5xl mx-auto shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-none relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="text-center mb-8 sm:mb-10 relative z-10">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3">Instant Project Estimator</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-lg font-medium">Adjust the sliders below to get a transparent baseline cost.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-gray-200 mb-2 sm:mb-3">What kind of project do you need?</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="block w-full p-3.5 sm:p-4 pl-4 sm:pl-5 pr-10 border-2 border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-0 focus:border-blue-500 dark:focus:border-blue-500 bg-gray-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-300 dark:hover:border-slate-600 transition-colors font-bold text-gray-800 dark:text-white text-sm sm:text-base appearance-none cursor-pointer"
            >
              <option value="static">Business Website (Informational)</option>
              <option value="ecommerce">E-Commerce (with Payment Gateway)</option>
              <option value="webapp">Custom ERP / Web Application</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-bold text-gray-900 dark:text-gray-200">Estimated Pages / Screens</label>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm border border-blue-200 dark:border-blue-800/50">{pages}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={pages}
              onChange={(e) => setPages(parseInt(e.target.value))}
              className="w-full h-2.5 sm:h-3 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
            />
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-bold mt-2 sm:mt-3 uppercase tracking-wider">
              <span>Small (1)</span>
              <span>Large (50+)</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900 p-8 sm:p-10 rounded-[2rem] shadow-xl text-white transform md:hover:scale-105 transition-transform duration-500 border-4 border-white dark:border-slate-800">
          <span className="text-xs sm:text-sm font-black text-blue-200 uppercase tracking-widest mb-2 sm:mb-3 text-center">Estimated Investment</span>
          <span className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 tracking-tight">₹{calculateCost().toLocaleString('en-IN')}</span>
          <span className="text-[10px] sm:text-xs font-bold text-blue-100 mt-1 sm:mt-2 text-center bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl backdrop-blur-sm uppercase tracking-wider">*Excludes GST & APIs</span>

          <a href="#/contact" className="mt-6 sm:mt-8 bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors shadow-lg w-full text-center active:scale-95 text-base sm:text-lg border border-transparent dark:border-slate-700">
            Lock in this price
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  useSEO('Pricing Models', 'Transparent pricing for custom software and web development.');

  return (
    <div>
      <PageHeader title="Transparent Pricing" subtitle="We believe in clear, upfront pricing. Choose the engagement model that fits your business goals." />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <FadeIn direction="up">
          <CostEstimator />
        </FadeIn>

        <div className="text-center mb-12 sm:mb-16 mt-20 sm:mt-32">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Partnership Models</h2>
            <p className="mt-3 sm:mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium">Flexible ways to work with our expert team in Nagpur.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <FadeIn delay={100} direction="up" className="h-full">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm dark:shadow-none border border-gray-200 dark:border-slate-700 p-8 sm:p-10 flex flex-col h-full hover:shadow-xl dark:hover:border-blue-500/50 md:hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 border border-blue-100 dark:border-slate-600">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4">Fixed Price</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 flex-grow leading-relaxed font-medium">Best for projects with clear requirements. We agree on a set scope and absolute price before work begins.</p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-sm sm:text-base text-gray-800 dark:text-gray-300 font-bold">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Defined Scope of Work</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Strict Delivery Timelines</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Milestone Payments</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Zero hidden costs</li>
              </ul>
              <a href="#/contact" className="text-center w-full py-3.5 sm:py-4 px-4 border-2 border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 font-bold rounded-xl hover:border-gray-300 dark:hover:border-slate-500 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all active:scale-95 text-sm sm:text-base">
                Request Quote
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up" className="h-full">
            <div className="bg-gray-900 dark:bg-slate-950 rounded-3xl shadow-2xl border border-gray-800 dark:border-slate-800 p-8 sm:p-10 flex flex-col transform md:-translate-y-4 relative h-full md:hover:-translate-y-6 transition-all duration-300">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest py-1.5 sm:py-2 px-4 sm:px-6 rounded-full shadow-lg border border-blue-400 whitespace-nowrap">
                Most Popular
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 border border-gray-700 dark:border-slate-800">
                <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">Dedicated Team</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 flex-grow leading-relaxed font-medium">Hire our expert developers full-time to act as an extension of your own IT department.</p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-sm sm:text-base text-gray-200 font-bold">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Daily Standups & Reports</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Complete Code Control</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Scale team instantly</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Simple Monthly Billing</li>
              </ul>
              <a href="#/contact" className="text-center w-full py-3.5 sm:py-4 px-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 text-base sm:text-lg">
                Discuss Hiring
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={300} direction="up" className="h-full">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm dark:shadow-none border border-gray-200 dark:border-slate-700 p-8 sm:p-10 flex flex-col h-full hover:shadow-xl dark:hover:border-blue-500/50 md:hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 border border-blue-100 dark:border-slate-600">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4">Time & Material</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 flex-grow leading-relaxed font-medium">Ideal for long-term projects where requirements evolve, or for ongoing maintenance tasks.</p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-sm sm:text-base text-gray-800 dark:text-gray-300 font-bold">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Maximum Flexibility</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Pay only for hours worked</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Transparent timesheets</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" /> Easy priority shifting</li>
              </ul>
              <a href="#/contact" className="text-center w-full py-3.5 sm:py-4 px-4 border-2 border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 font-bold rounded-xl hover:border-gray-300 dark:hover:border-slate-500 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all active:scale-95 text-sm sm:text-base">
                Contact Us
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

