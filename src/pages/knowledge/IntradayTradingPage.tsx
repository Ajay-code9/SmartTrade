import { BarChart3, BookOpen, LineChart, Link2, TrendingUp, Zap } from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import IntradayPhoneMockup from '../../components/knowledge/IntradayPhoneMockup';
import IntradayChartCard from '../../components/knowledge/IntradayChartCard';
import CommunityBanner from '../../components/marketing/CommunityBanner';
import ValuePropositionSection from '../../components/sections/ValuePropositionSection';
import MockupHero from '../../components/mockups/MockupHero';
import ContentSection from '../../components/layout/ContentSection';
import SectionHeading from '../../components/layout/SectionHeading';

const valueFeatures = [
  { icon: LineChart, text: 'Real-time Market Data', highlight: true },
  { icon: Link2, text: 'Zero Brokerage Costs' },
  { icon: Zap, text: 'Quick Order Execution' },
  { icon: BarChart3, text: 'Intraday Analytics' },
  { icon: BookOpen, text: 'Educational Support' },
  { icon: TrendingUp, text: '500x Leverage' },
];

export default function IntradayTradingPage() {
  return (
    <main>
      <PageHeader
        title="Intraday Trading in India — Take the Day's Move and Sleep at Night"
        titleClassName="text-2xl md:text-3xl"
        paragraphs={[
          "Intraday trading is the art of buying and selling the same instrument on the same trading day. No overnight risk, no waiting for quarterly results, no surprise gap-downs on Monday morning. You enter when the setup forms, exit before the closing bell, and either book a profit or take the loss and move on. Clean.",
          "It also happens to be the most demanding form of trading. You're competing against people who do this for a living, with faster systems and better data than you. The difference between a profitable intraday trader and a losing one isn't intelligence — it's discipline, the right tools, and a tested system. SmartTrade.live gives you the tools and the cost structure. The rest is on you. This page is about helping you bring the rest.",
        ]}
      />

      <ValuePropositionSection
        features={valueFeatures}
        visual={
          <MockupHero>
            <IntradayPhoneMockup />
            <IntradayChartCard />
          </MockupHero>
        }
      />

      <ContentSection width="narrow" className="bg-white pb-20">
        <SectionHeading className="text-[#1a3a6c]">What Is Intraday Trading? (The Direct Answer)</SectionHeading>
        <div className="text-gray-700 space-y-4 leading-relaxed">
          <p>
            Intraday trading — also called day trading — means opening and closing a position within the same
            market session. If you buy 100 shares of Reliance at 9:30 AM, you must sell them by 3:30 PM the same day.
            If you don&apos;t square off, the broker will do it automatically near the close, often at a worse price
            than you&apos;d have got.
          </p>
          <p>
            There&apos;s no overnight position. No &quot;let me hold and see what happens tomorrow.&quot; That single
            rule changes the entire game. You can use much higher leverage (because the broker knows the position
            closes today), you don&apos;t pay STT on the full value, and your capital recycles every day instead of
            being locked in a position for weeks.
          </p>
          <p>
            Intraday traders make money from short-term price movements driven by news, momentum, technical
            breakouts, sector rotation and pure volatility. A 1% move in a stock isn&apos;t dramatic for a long-term
            investor — but if you&apos;ve taken that move with intraday leverage and a tight stop, it&apos;s a real
            day&apos;s work.
          </p>
        </div>
      </ContentSection>

      <CommunityBanner />
    </main>
  );
}
