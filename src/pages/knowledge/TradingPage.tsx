import {
  ArrowUpDown,
  CheckCircle2,
  Contact,
  IndianRupee,
  TrendingUp,
} from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import PhoneQuotesMockup from '../../components/knowledge/PhoneQuotesMockup';
import US30ChartCard from '../../components/knowledge/US30ChartCard';
import CommunityBanner from '../../components/marketing/CommunityBanner';
import ValuePropositionSection from '../../components/sections/ValuePropositionSection';
import MockupHero from '../../components/mockups/MockupHero';

const valueFeatures = [
  { icon: CheckCircle2, text: 'Zero Brokerage Fees' },
  { icon: IndianRupee, text: 'No Annual Maintenance Charges (AMC)' },
  { icon: TrendingUp, text: 'Enjoy up to 500x Leverage' },
  { icon: Contact, text: 'Instant Account Settlement' },
  { icon: ArrowUpDown, text: '24/7 Deposit and Withdrawal Support' },
];

export default function TradingPage() {
  return (
    <main>
      <PageHeader
        title="Trading"
        subtitle="Trade equities, commodities, F&O, and global CFDs from one account. Zero brokerage on supported products and margin up to 500x on select instruments."
      />
      <ValuePropositionSection
        features={valueFeatures}
        visual={
          <MockupHero>
            <PhoneQuotesMockup />
            <US30ChartCard />
          </MockupHero>
        }
      />
      <CommunityBanner variant="light" texture="chart" />
    </main>
  );
}
