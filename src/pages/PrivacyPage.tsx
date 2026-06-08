import React from 'react';
import FadeIn from '../components/ui/FadeIn';
import { useSEO } from './_internal/useSEOAdapter';

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-10 md:p-16 rounded-3xl shadow-sm border border-gray-200 dark:border-slate-700">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-10 border-b border-gray-100 dark:border-slate-700 pb-6 sm:pb-8">{title}</h1>
            <div className="prose prose-base sm:prose-lg prose-blue dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-loose font-medium">{children}</div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  useSEO('Privacy Policy', 'Privacy Policy for BuildSoft IT Solutions.');

  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 sm:mb-8">Last updated: June 5, 2026</p>
      <h3 className="font-bold text-gray-900 dark:text-white">1. Information We Collect</h3>
      <p>
        We may collect personal identification information from Users in a variety of ways, including when Users visit our site, fill out a form, and in connection with other activities. Users may be asked for name, email address, and phone number.
      </p>
      <h3 className="font-bold text-gray-900 dark:text-white">2. How We Protect Your Information</h3>
      <p>
        We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information. We do not sell or share client data with third parties.
      </p>
    </LegalLayout>
  );
}

