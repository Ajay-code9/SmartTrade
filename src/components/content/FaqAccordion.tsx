import { useState } from 'react';
import ContentSection from '../layout/ContentSection';
import SectionHeading from '../layout/SectionHeading';
import { cn } from '../../lib/cn';

export type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  title?: string;
  numbered?: boolean;
  disclaimer?: string;
  className?: string;
  inline?: boolean;
};

export default function FaqAccordion({
  items,
  title = 'Frequently Asked Questions',
  numbered = false,
  disclaimer,
  className,
  inline = false,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const body = (
    <>
      <SectionHeading>{title}</SectionHeading>
      <div className="space-y-3">
        {items.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.q} className="rounded-lg overflow-hidden border border-gray-100">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className={cn(
                  'w-full text-left px-5 py-4 font-medium flex items-center gap-2 transition-colors',
                  isOpen ? 'bg-brand-navy text-white' : 'bg-blue-50 text-brand-navy',
                )}
              >
                <span className="text-lg">+</span>
                <span>
                  {numbered ? `Q${i + 1}. ` : ''}
                  {faq.q}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 py-4 bg-white border-t border-gray-100 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {disclaimer && (
        <p className={cn('text-sm text-gray-500 italic leading-relaxed', inline ? 'mt-6 mb-10' : 'mt-8')}>
          {disclaimer}
        </p>
      )}
    </>
  );

  if (inline) {
    return <div className={className}>{body}</div>;
  }

  return (
    <ContentSection width="article" className={cn('bg-white pb-24', className)}>
      {body}
    </ContentSection>
  );
}
