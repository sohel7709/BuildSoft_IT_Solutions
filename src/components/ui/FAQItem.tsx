import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
} & React.Attributes;

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-slate-700 rounded-2xl mb-4 overflow-hidden hover:border-blue-300 dark:hover:border-blue-500 transition-colors bg-white dark:bg-slate-800 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 sm:px-6 sm:py-5 flex justify-between items-center focus:outline-none text-left"
        type="button"
      >
        <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`px-5 sm:px-6 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-56 pb-4 sm:pb-5 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default FAQItem;
