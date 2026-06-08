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

export default function TermsPage() {
  useSEO('Terms & Conditions', 'Terms of service for BuildSoft IT Solutions.');

  return (
    <LegalLayout title="Terms & Conditions">
      <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 sm:mb-8">Last updated: June 5, 2026</p>
      <h3 className="font-bold text-gray-900 dark:text-white">1. Agreement to Terms</h3>
      <p>By accessing our website and using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you may not use our services.</p>
      <h3 className="font-bold text-gray-900 dark:text-white">2. Services Provided</h3>
      <p>BuildSoft IT Solutions provides software development, mobile application development, web design, and IT consulting services. The specific scope of work, deliverables, and timelines will be detailed in a separate Statement of Work (SOW) or Service Agreement signed by both parties.</p>
      <h3 className="font-bold text-gray-900 dark:text-white">3. Intellectual Property</h3>
      <p>Unless otherwise agreed upon in writing, all intellectual property rights for custom software developed by BuildSoft IT Solutions shall transfer to the client upon full payment of all outstanding invoices related to the project.</p>
      <h3 className="font-bold text-gray-900 dark:text-white">4. Governing Law</h3>
      <p>These Terms shall be governed and construed in accordance with the laws of India, specifically the jurisdiction of courts in Nagpur, Maharashtra, without regard to its conflict of law provisions.</p>
    </LegalLayout>
  );
}

