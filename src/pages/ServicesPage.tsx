import React from 'react';
import { ArrowRight, Code, Globe, PenTool, Server, Shield, Smartphone } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import PageHeader from '../components/ui/PageHeader';
import { useSEO } from './_internal/useSEOAdapter';
import { SERVICES, type ServiceIconKey } from '../data/content';

// Map data-driven icon keys to actual lucide components
const SERVICE_ICON_MAP: Record<ServiceIconKey, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Code,
  PenTool,
  Server,
  Shield
};

const ServiceIcon = ({ iconKey, className = '' }: { iconKey: ServiceIconKey; className?: string }) => {
  const Icon = SERVICE_ICON_MAP[iconKey];
  return <Icon className={className} />;
};

export default function ServicesPage() {
  useSEO('Our Services', 'End-to-end software development, mobile apps, and IT consulting.');

  return (
    <div>
      <PageHeader title="Our Services" subtitle="End-to-end software development and IT consulting to modernize your business." />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 100} direction={idx % 2 === 0 ? 'right' : 'left'}>
              <div className="group bg-white dark:bg-slate-800 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm dark:shadow-none border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm border border-blue-100 dark:border-slate-600 group-hover:border-transparent">
                  <ServiceIcon iconKey={service.iconKey} className="w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-500" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-grow font-medium">{service.fullDesc}</p>

                <div className="mt-6 sm:mt-8">
                  <a
                    href="#/contact"
                    className="inline-flex items-center px-6 py-3 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-colors group/btn shadow-sm text-sm sm:text-base w-full sm:w-auto justify-center"
                  >
                    Discuss your project{' '}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
