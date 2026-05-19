import type { ReactNode } from 'react';
import PageHeader from '../layout/PageHeader';
import ValuePropositionSection from '../sections/ValuePropositionSection';
import MockupHero from '../mockups/MockupHero';
import CommunityBanner from '../marketing/CommunityBanner';
import type { FeatureItem } from '../sections/FeatureIconList';

const COMMUNITY_TITLE = 'Join the SmartTrade.live community to avail the benefits!';
const COMMUNITY_SUBTITLE = "Improving people's financial lives through planning, trading, and earning!";

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
      <CommunityBanner variant="light" title={COMMUNITY_TITLE} subtitle={COMMUNITY_SUBTITLE} buttonText="Trade Now" />
    </main>
  );
}
