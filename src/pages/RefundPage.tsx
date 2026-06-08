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

export default function RefundPage() {
  useSEO('Refund Policy', 'Refund and cancellation policy.');

  return (
    <LegalLayout title="Refund & Cancellation Policy">
      <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 sm:mb-8">Last updated: June 5, 2026</p>
      <p>
        At BuildSoft IT Solutions, we strive to ensure our clients are completely satisfied. However, due to the nature of custom software development, our refund policy is structured as follows:
      </p>
      <h3 className="font-bold text-gray-900 dark:text-white">1. Project Cancellations</h3>
      <p>If a client wishes to cancel a project before work has commenced, a full refund of any advance payment will be issued within 10-15 business days to the original payment method.</p>
      <p>If a project is cancelled after work has commenced, the client will be billed for the hours worked up to the point of cancellation. If the advance payment exceeds the value of the work completed, the balance will be refunded.</p>
      <h3 className="font-bold text-gray-900 dark:text-white">2. Milestone-Based Projects</h3>
      <p>
        For projects divided into milestones, payments made for completed and approved milestones are non-refundable. If you choose to terminate the contract during an active milestone, you will be billed pro-rata for the work done.
      </p>
    </LegalLayout>
  );
}

