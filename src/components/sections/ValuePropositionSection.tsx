import type { ReactNode } from 'react';
import Container from '../layout/Container';
import FeatureIconList, { type FeatureItem } from './FeatureIconList';
import { cn } from '../../lib/cn';

type HeadingVariant = 'why' | 'value';

type ValuePropositionSectionProps = {
  features: FeatureItem[];
  visual: ReactNode;
  heading?: HeadingVariant;
  className?: string;
};

const headings: Record<HeadingVariant, ReactNode> = {
  why: (
    <>
      Why <span className="text-brand-blue">TRADEADDA.live</span>
    </>
  ),
  value: (
    <>
      How <span className="text-brand-blue">TRADEADDA.live</span> Offers Value
    </>
  ),
};

export default function ValuePropositionSection({
  features,
  visual,
  heading = 'value',
  className,
}: ValuePropositionSectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className ?? 'bg-white')}>
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-16">
          {visual}
          <div className="w-full lg:w-1/2 min-w-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">{headings[heading]}</h2>
            <FeatureIconList features={features} />
          </div>
        </div>
      </Container>
    </section>
  );
}
