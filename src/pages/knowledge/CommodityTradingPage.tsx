import { Link } from 'react-router-dom';
import {
  BarChart3,
  Award,
  TrendingUp,
  Percent,
  Search,
  ShieldCheck,
  Clock,
  UserCheck,
  Wallet,
  Microscope,
  Hand,
  LogOut,
  Layers,
  Tag,
  Zap,
  LineChart,
  Calendar,
  Newspaper,
  Shield,
  ArrowLeftRight,
} from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import FOChartPhoneMockup from '../../components/knowledge/FOChartPhoneMockup';
import CommodityIllustrationCard from '../../components/knowledge/CommodityIllustrationCard';
import CommunityBanner from '../../components/marketing/CommunityBanner';
import FaqAccordion from '../../components/content/FaqAccordion';

const sectionTitle = 'text-xl md:text-2xl font-bold text-[#1a365d] mb-6';

const valueFeatures = [
  { icon: BarChart3, text: 'Wide Commodity Range' },
  { icon: Award, text: 'Competitive Commodity Prices' },
  { icon: TrendingUp, text: '500x Margin Facility' },
  { icon: Percent, text: 'Zero Brokerage' },
  { icon: Search, text: 'Real-time Market Insights' },
  { icon: ShieldCheck, text: 'Secure Commodity Transactions' },
  { icon: Clock, text: 'Flexible Trading Hours' },
];

const commodityTypes = [
  { title: '1. PRECIOUS METALS', text: 'Gold and silver are treated as a safe haven — they go up when markets get scared or when central banks buy aggressively. You can trade Gold (1kg), Mini (100g), Guinea (8g), and Silver (30kg) or Mini (5kg) contracts.' },
  { title: '2. ENERGY', text: "Crude oil and natural gas are highly active. Crude is the single most traded commodity on MCX. It's also the most volatile, moving sharply around OPEC meetings and US EIA inventory data every Wednesday." },
  { title: '3. BASE METALS', text: 'Copper, aluminium, zinc, lead, and nickel. These are industrial metals, so their prices depend heavily on global demand, particularly from China and the manufacturing cycle. They offer real opportunities for trend followers.' },
  { title: '4. AGRICULTURAL', text: 'Cotton, mustard seed, chana, jeera, turmeric and others, traded mainly on NCDEX. These follow weather, monsoon patterns, sowing data, and government policy. Agri trading needs specific knowledge of seasonal cycles.' },
];

const whyTradeFeatures = [
  { icon: Layers, color: 'bg-blue-100 text-brand-blue', title: 'Wide commodity range', text: "Gold, silver, crude oil, natural gas, copper, and key agri contracts. One platform, every major instrument you'd want." },
  { icon: Tag, color: 'bg-blue-100 text-brand-blue', title: 'Competitive commodity prices', text: "Tight spreads and real-time MCX-linked pricing. You're not getting filled at some delayed quote." },
  { icon: Zap, color: 'bg-blue-100 text-brand-blue', title: '500x margin facility', text: 'Among the highest leverage available for commodity trades, meaning a much smaller capital outlay to take meaningful positions.' },
  { icon: Percent, color: 'bg-green-100 text-green-600', title: 'Zero brokerage', text: 'No per-order brokerage on commodity trades. If you trade 50 lots a month, that adds up fast.' },
  { icon: LineChart, color: 'bg-orange-100 text-orange-600', title: 'Real-time market insights', text: "Live charts, price alerts, open interest data, and quick news access so you're not reacting half an hour late." },
  { icon: Clock, color: 'bg-blue-100 text-brand-blue', title: 'Flexible trading hours', text: 'MCX commodity markets stay open well past equity hours (until 11:30 PM IST), so you can trade alongside your regular job.' },
];

const startSteps = [
  { icon: UserCheck, title: 'Sign up', text: 'Fill in details and complete quick KYC. No waiting for days.', highlight: false },
  { icon: Wallet, title: 'Fund account', text: 'Start with a comfortable amount. A few thousand is enough for mini contracts.', highlight: true },
  { icon: Search, title: 'Pick commodity', text: 'Gold and crude oil mini contracts are great starting points.', highlight: false },
  { icon: Microscope, title: 'Study the chart', text: 'Check trends and major data release schedules (EIA, RBI, Fed).', highlight: false },
  { icon: Hand, title: 'Place the trade', text: 'Choose buy/sell, set quantity, and most importantly, your stop-loss.', highlight: false },
  { icon: LogOut, title: 'Manage and exit', text: 'Close manually at your target or trail your stop-loss.', highlight: false },
];

const tradingHours = [
  { segment: 'Non-agri (Gold, Silver, Crude, Metals)', timing: '9:00 AM – 11:30 PM', notes: 'Extends to 11:55 PM in US DST months' },
  { segment: 'Agricultural commodities', timing: '9:00 AM – 9:00 PM', notes: 'Slightly shorter than non-agri' },
  { segment: 'Peak liquidity window', timing: '6:30 PM – 11:30 PM', notes: 'US markets active — best price discovery' },
  { segment: 'Trading days', timing: 'Monday to Friday', notes: 'Closed on weekends and exchange holidays' },
];

const comparisonRows = [
  { feature: 'Underlying asset', commodity: 'Physical goods — metals, energy, agri', equity: 'Shares of listed companies' },
  { feature: 'Main exchange', commodity: 'MCX and NCDEX', equity: 'NSE and BSE' },
  { feature: 'Trading hours', commodity: '9:00 AM to 11:30 PM', equity: '9:15 AM to 3:30 PM' },
  { feature: 'Leverage', commodity: 'Higher — up to 500x on TRADEADDA.live', equity: 'Lower, with strict SEBI margin rules', boldCommodity: true },
  { feature: 'Main price drivers', commodity: 'Global demand, USD, geopolitics, weather', equity: 'Earnings, sector trends, domestic data' },
  { feature: 'Tax treatment', commodity: 'Non-speculative business income (most cases)', equity: 'Capital gains or speculative income' },
  { feature: 'Best for', commodity: 'Hedgers, diversifiers, evening traders', equity: 'Investors and intraday equity traders' },
];

const topCommodities = [
  { title: 'MCX Gold (and Gold Mini)', text: 'The default for Indian commodity traders. Goes up during global uncertainty, falls when the dollar strengthens or real interest rates rise. Margin requirement is roughly 4–6% of contract value. Highly liquid and the easiest to read for beginners.' },
  { title: 'MCX Silver (and Silver Mini)', text: 'More volatile than gold, smaller contract sizes available, often gives a bigger percentage move when precious metals rally. Watch the gold-silver ratio.' },
  { title: 'MCX Crude Oil (and Crude Mini)', text: 'The most actively traded commodity in India. Big intraday range, sensitive to OPEC announcements, US inventory data (every Wednesday around 8 PM IST), and geopolitical events. Crude Mini (10 barrels) is the retail favourite.' },
  { title: 'MCX Natural Gas', text: "Highest volatility of the lot. Big moves on US storage data and weather. Profitable when you read it right, painful when you don't. Not for absolute beginners." },
];

const strategies = [
  { icon: LineChart, title: 'Trend following', text: 'The simplest approach. Identify the direction using moving averages (50 and 200 day are popular) and trade with the trend. Works particularly well in crude oil during clear directional phases.' },
  { icon: ArrowLeftRight, title: 'Range trading', text: 'When a commodity is stuck in a sideways range (gold often does this for weeks), buy near support, sell near resistance. Tight stops are non-negotiable.' },
  { icon: Calendar, title: 'Event-based trading', text: "Position before high-impact events — US EIA inventory data for crude, NFP data for gold, OPEC announcements, RBI policy. Higher reward, but also higher risk if you misread the news." },
  { icon: Newspaper, title: 'News and gap trading', text: 'Commodities often gap up or down at the open after weekend news. Experienced traders position for or fade these gaps once they see follow-through.' },
  { icon: Shield, title: 'Hedging', text: 'Less glamorous but vital for businesses. A jeweller buying gold futures to lock in costs, an importer hedging crude exposure — this is the original purpose of these markets.' },
];

const faqs = [
  { q: 'Is commodity trading legal in India?', a: 'Yes. Commodity trading in India is fully legal and regulated by SEBI. All contracts are traded on recognised exchanges — MCX for metals and energy, NCDEX for agricultural commodities. Trade only through SEBI-registered platforms.' },
  { q: 'How much money do I need to start commodity trading?', a: 'You can start with ₹5,000–₹10,000 for mini contracts like Gold Mini or Crude Mini. Full-size contracts need significantly more margin.' },
  { q: 'Which commodity is best for beginners in India?', a: 'Gold Mini and Crude Mini are popular starting points due to liquidity, smaller lot sizes, and abundant educational resources.' },
  { q: 'What are commodity trading hours in India?', a: 'Non-agri commodities trade 9:00 AM to 11:30 PM IST (extended during US DST). Agricultural commodities trade until 9:00 PM IST.' },
  { q: 'Do I need a Demat account for commodity trading?', a: 'Commodity futures are typically cash-settled and do not require demat for most retail trades. Your broker will clarify requirements for specific contracts.' },
  { q: 'What is the difference between MCX and NCDEX?', a: 'MCX is the primary exchange for metals and energy. NCDEX focuses on agricultural commodities like cotton, chana, and spices.' },
  { q: 'How is commodity trading taxed in India?', a: 'Commodity F&O profits are generally treated as non-speculative business income and taxed at your applicable slab rate. Consult a CA for your specific situation.' },
  { q: 'Can I trade commodities without taking physical delivery?', a: 'Yes. Most retail commodity trades are squared off before expiry and cash-settled in rupees.' },
  { q: 'What is the biggest risk in commodity trading?', a: 'Leverage combined with volatility. A small adverse move can wipe out margin quickly. Always use stop-losses and position sizing.' },
];

const faqDisclaimer =
  'Disclaimer: This content is for educational purposes only and does not constitute investment advice. Commodity markets involve substantial risk. Consult a SEBI-registered adviser for personalised guidance.';

export default function CommodityTradingPage() {
  return (
    <main>
      <PageHeader
        title="Commodity Trading in India — Trade Gold, Crude Oil, Silver and More on TRADEADDA.live"
        titleClassName="text-2xl md:text-3xl"
        paragraphs={[
          "If your portfolio only has stocks, you're missing half the picture. Equities move with corporate earnings, sentiment and a handful of indices. Commodities move with something completely different — weather in Brazil, OPEC meetings, a war in the Middle East, the dollar index, harvest seasons, central bank gold buying. That's why traders who actually understand markets keep one eye on Nifty and the other on MCX.",
          'Commodity trading on TRADEADDA.live covers precious metals, energy, base metals, and agricultural contracts on MCX and NCDEX. Use it to hedge inflation with gold, trade crude around US inventory data, or take directional positions in silver and industrial metals — with zero brokerage on supported products and margin up to 500x on select instruments.',
        ]}
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 relative min-h-[420px] flex items-center justify-center">
              <FOChartPhoneMockup />
              <CommodityIllustrationCard />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
                How <span className="text-brand-blue">TRADEADDA.live</span> Offers Value
              </h2>
              <ul className="space-y-6">
                {valueFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-brand-blue" strokeWidth={1.75} />
                    </div>
                    <span className="text-gray-800 text-base md:text-lg font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionTitle} text-[#1a3a6c]`}>What Is Commodity Trading? (The Simple Version)</h2>
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Commodity trading is the buying and selling of contracts based on physical raw materials and natural
              resources. You&apos;re not actually receiving sacks of wheat or barrels of crude at your doorstep — you&apos;re
              trading standardised contracts whose value moves with the price of the underlying commodity. Most retail
              trades are cash-settled, meaning you square off before expiry and the profit or loss is credited in rupees.
            </p>
            <p>
              In India, commodity trading is regulated by SEBI and happens primarily on two exchanges — the Multi
              Commodity Exchange (MCX) for metals and energy, and the National Commodity & Derivatives Exchange (NCDEX)
              for agricultural products. The MCX is by far the larger of the two and is where most active traders spend
              their time. On TRADEADDA.live, you get access to all the major commodity instruments traders actually use,
              with intuitive charts and execution that doesn&apos;t lag when the market gets busy.
            </p>
            <p>People come to commodity markets for three main reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>To hedge risk</strong> — a jewellery business locks in gold prices, an airline locks in fuel
                costs, a farmer locks in his harvest price.
              </li>
              <li>
                <strong>To speculate</strong> — traders who want to profit from price moves without owning the physical
                asset.
              </li>
              <li>
                <strong>To diversify</strong> — investors who want exposure to assets that don&apos;t always move with the
                stock market.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Types of Commodities You Can Trade in India</h2>
          <p className="text-gray-600 mb-8">
            Commodities fall into four broad buckets. Each behaves differently and reacts to its own set of drivers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commodityTypes.map(({ title, text }) => (
              <div key={title} className="bg-gray-50 rounded-xl border-t-4 border-brand-blue p-6">
                <h3 className="text-brand-blue font-bold text-sm mb-4">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Why Trade Commodities on TRADEADDA.live</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyTradeFeatures.map(({ icon: Icon, color, title, text }) => (
              <div key={title} className="flex gap-4 bg-[#eef6ff] border border-blue-100 rounded-xl p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${color}`}>
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">{title}</strong> — {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>How to Start Commodity Trading on TRADEADDA.live</h2>
          <p className="text-gray-700 mb-10">Getting started is intentionally short. Here&apos;s the full flow:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {startSteps.map(({ icon: Icon, title, text, highlight }) => (
              <div
                key={title}
                className={`bg-white rounded-xl p-5 text-center shadow-sm ${highlight ? 'border-2 border-brand-blue' : 'border border-gray-100'}`}
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 text-brand-blue">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            That&apos;s it. Once you&apos;ve done it a few times, the whole process takes under a minute per trade.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Commodity Trading Hours in India</h2>
          <p className="text-gray-700 mb-8">
            Commodity markets in India run much longer than equity markets, which is one of their biggest advantages — you
            can actually trade after office hours.
          </p>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a1128] text-white">
                  <th className="px-4 py-4 font-semibold text-left">Segment</th>
                  <th className="px-4 py-4 font-semibold text-center">Timing (IST)</th>
                  <th className="px-4 py-4 font-semibold text-center">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tradingHours.map((row) => (
                  <tr key={row.segment} className="border-b border-gray-100 bg-white">
                    <td className="px-4 py-4 text-gray-900">{row.segment}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.timing}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Most experienced commodity traders focus on the evening window. That&apos;s when New York is active, when US
            inventory and economic data drops, and when global price discovery is happening in real time. Trading in the
            morning lull often means thin liquidity and choppy moves.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Commodity Trading vs Equity Trading – What&apos;s Different?</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a365d] text-white">
                  <th className="px-4 py-4 font-semibold text-left">Feature</th>
                  <th className="px-4 py-4 font-semibold text-center">Commodity Trading</th>
                  <th className="px-4 py-4 font-semibold text-center">Equity Trading</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 bg-white">
                    <td className="px-4 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className={`px-4 py-4 text-center text-gray-700 ${row.boldCommodity ? 'font-bold' : ''}`}>
                      {row.commodity}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.equity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>The Commodities Traders Actually Make Money On</h2>
          <p className="text-gray-600 mb-8">
            You can trade dozens of contracts on MCX, but in practice most active retail traders focus on four:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {topCommodities.map(({ title, text }) => (
              <div key={title} className="bg-[#fff5f2] rounded-xl p-6">
                <h3 className="font-bold text-brand-blue mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Base metals (copper, aluminium, zinc, nickel) and agri commodities (cotton, soybean, mustard) round out the
            menu, but they typically need more specialised knowledge to trade well.
          </p>
        </div>
      </section>

      <CommunityBanner variant="light" texture="chart" />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Commodity Trading Strategies That Work</h2>
          <div className="space-y-4 mb-8">
            {strategies.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 bg-[#ebf5ff] rounded-lg p-5 items-start">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0 text-brand-blue shadow-sm">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a365d] mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Whatever strategy you use, two rules don&apos;t change: never trade without a stop-loss, and never risk more
            than 1–2% of your account on a single trade. Commodity markets are unforgiving of leverage abuse. Also see
            our{' '}
            <Link to="/knowledge/futures-options" className="text-brand-blue hover:underline">
              futures & options
            </Link>{' '}
            and{' '}
            <Link to="/knowledge/equity-trading" className="text-brand-blue hover:underline">
              equity trading
            </Link>{' '}
            guides.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqs} title="Frequently Asked Questions" disclaimer={faqDisclaimer} />

      <CommunityBanner
        variant="light"
        texture="candles"
        title="Ready to Trade Gold, Crude and More?"
        subtitle="Open your TRADEADDA.live account and access MCX commodities with zero brokerage, 500x leverage, and charts that keep up when markets move fast."
        buttonText="Sign Up"
        footerText="Start with mini contracts. Learn the evening session. Trade responsibly."
      />

      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 italic">
            Commodity trading involves substantial risk. Past performance does not guarantee future returns. Trade
            responsibly.
          </p>
        </div>
      </section>
    </main>
  );
}

