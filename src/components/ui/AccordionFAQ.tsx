'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@lib/utils';

interface FAQItemProps {
  question: string;
  answer?: string;
}

function AccordionFAQ({
  question,
  answer = 'This is a sample answer to the frequently asked question.',
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-gray-300"
          aria-expanded={isOpen}
        >
          <ChevronDown
            size={16}
            className={cn('transition-transform duration-300', isOpen ? 'rotate-180' : '')}
          />
        </button>
      </div>
      <div
        className={cn(
          'mt-2 overflow-hidden text-gray-600 transition-all duration-300',
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        {answer}
      </div>
    </div>
  );
}

export default AccordionFAQ;
