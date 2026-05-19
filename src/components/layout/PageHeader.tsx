import type { ReactNode } from 'react';
import BannerSection from './BannerSection';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  paragraphs?: (string | ReactNode)[];
  titleClassName?: string;
}

export default function PageHeader({ title, subtitle, paragraphs, titleClassName }: PageHeaderProps) {
  return (
    <BannerSection mergeWithNav bottomNotch="sm" className="pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`font-bold mb-4 ${titleClassName ?? 'text-3xl md:text-5xl'}`}>{title}</h1>
        {subtitle && (
          <p className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto mb-4">
            {subtitle}
          </p>
        )}
        {paragraphs?.map((p, i) => (
          <p
            key={typeof p === 'string' ? p.slice(0, 48) : i}
            className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto mb-4 last:mb-0"
          >
            {p}
          </p>
        ))}
      </div>
    </BannerSection>
  );
}
