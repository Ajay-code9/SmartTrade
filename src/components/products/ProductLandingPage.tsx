import type { ReactNode } from 'react';
import PageHeader from '../layout/PageHeader';
import ValuePropositionSection from '../sections/ValuePropositionSection';
import MockupHero from '../mockups/MockupHero';
import CommunityBanner from '../marketing/CommunityBanner';
import type { FeatureItem } from '../sections/FeatureIconList';
import { COMMUNITY_BANNER } from '../../constants/siteCopy';

export type ProductLandingPageProps = {
  title: string;
  subtitle: string;
  heading?: 'why' | 'value';
  features: FeatureItem[];
  mockup: ReactNode;
};

export default function ProductLandingPage({
  title,
  subtitle,
  heading = 'why',
  features,
  mockup,
}: ProductLandingPageProps) {
  return (
    <main>
      <PageHeader title={title} subtitle={subtitle} />
      <ValuePropositionSection
        heading={heading}
        features={features}
        visual={<MockupHero>{mockup}</MockupHero>}
      />
      <CommunityBanner variant="light" {...COMMUNITY_BANNER} buttonText="Trade Now" />
    </main>
  );
}
