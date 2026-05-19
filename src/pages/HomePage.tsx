import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import InvestmentSection from '../components/InvestmentSection';
import CTASection from '../components/CTASection';
import WebTradingSection from '../components/WebTradingSection';
import DepositStrip from '../components/DepositStrip';
import BlogSection from '../components/BlogSection';
import PartnerStrip from '../components/PartnerStrip';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <InvestmentSection />
      <CTASection />
      <WebTradingSection />
      <DepositStrip />
      <BlogSection />
      <PartnerStrip />
    </main>
  );
}
