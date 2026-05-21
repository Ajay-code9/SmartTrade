import { Link } from 'react-router-dom';
import {
  Scale,
  GitBranch,
  ShieldAlert,
  Monitor,
  BookOpen,
  Shield,
  Banknote,
  AlertTriangle,
  LineChart,
  Layers,
  HandCoins,
  Link2,
  Rocket,
  Wrench,
  GraduationCap,
  SlidersHorizontal,
  UserCheck,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import FOChartPhoneMockup from '../../components/knowledge/FOChartPhoneMockup';
import MarginQuotesCard from '../../components/knowledge/MarginQuotesCard';
import CommunityBanner from '../../components/marketing/CommunityBanner';
import FaqAccordion from '../../components/content/FaqAccordion';

const sectionTitle = 'text-xl md:text-2xl font-bold text-[#1a365d] mb-6';

const valueFeatures = [
  { icon: Scale, text: 'High Leverage Ratios' },
  { icon: GitBranch, text: 'Flexible Margin Requirements' },
  { icon: ShieldAlert, text: 'Risk Management Tools' },
  { icon: Monitor, text: 'Real-time Margin Monitoring' },
  { icon: BookOpen, text: 'Educational Resources' },
  { icon: Shield, text: 'Negative Balance Protection' },
];

const marginTerms = [
  { icon: Banknote, title: 'Initial margin', text: 'The minimum amount you have to deposit upfront to open a position. Set by the exchange or broker based on the volatility of the underlying asset.', warn: false },
  { icon: Shield, title: 'Maintenance margin', text: "The minimum balance you must keep in your account while a position is open. If your balance falls below this, you'll get a margin call.", warn: false },
  { icon: AlertTriangle, title: 'Margin call', text: "A notice from the broker that your account has dropped below the required maintenance level. You either add funds or the broker squares off your position. There's no negotiation.", warn: true },
  { icon: LineChart, title: 'Leverage ratio', text: 'Expressed as something like 10x, 50x or 500x. A 10x ratio means every ₹1 of your capital controls ₹10 of trade value. TRADEADDA.live offers up to 500x on select instruments.', warn: false },
  { icon: Layers, title: 'SPAN and exposure margin', text: 'Used in F&O. SPAN is calculated by the exchange based on potential worst-case loss. Exposure margin is an extra buffer. Together they make up the total margin needed for derivative positions.', warn: false },
  { icon: HandCoins, title: 'MTF (Margin Trading Facility)', text: 'The SEBI-regulated facility where you can buy shares using broker funding. You pay interest on the borrowed amount until you square off.', warn: false },
  { icon: Link2, title: 'Margin pledge', text: 'Using shares or other approved assets as collateral instead of (or in addition to) cash. Lets you free up funds while still keeping your investments.', warn: false },
];

const leverageRows = [
  { leverage: '1x (no margin)', capital: '₹1,00,000', value: '₹1,00,000', profit: '₹2,000', return: '2%' },
  { leverage: '10x', capital: '₹10,000', value: '₹1,00,000', profit: '₹2,000', return: '20%' },
  { leverage: '50x', capital: '₹2,000', value: '₹1,00,000', profit: '₹2,000', return: '100%' },
  { leverage: '100x', capital: '₹1,000', value: '₹1,00,000', profit: '₹2,000', return: '200%' },
];

const platformFeatures = [
  { icon: Rocket, title: 'High leverage ratios', text: 'Up to 500x leverage on select instruments. Among the highest available in the Indian market, which means you can scale into positions with much less locked-up capital than a traditional broker would require.' },
  { icon: SlidersHorizontal, title: 'Flexible margin requirements', text: 'Margin requirements that adjust to the instrument and market conditions, not one-size-fits-all rules that punish your good trades along with your bad ones.' },
  { icon: Wrench, title: 'Risk management tools', text: 'Stop-loss, trailing stop-loss, take-profit, and position size calculators built into the platform. The tools you need to stay safe at high leverage are right there in the order screen.' },
  { icon: Monitor, title: 'Real-time margin monitoring', text: 'Live tracking of your used margin, available margin and margin utilisation percentage. No surprises, no "how did I end up below maintenance" moments.' },
  { icon: GraduationCap, title: 'Educational resources', text: "Guides, walkthroughs and worked examples on margin trading basics, leverage management and risk control. Especially useful if you're new to leveraged trading." },
  { icon: UserCheck, title: 'Negative balance protection', text: "If a fast move blows past your stop-loss, your account doesn't go negative. Your maximum loss is the capital you've put in. This single feature has saved more traders from disaster than any indicator ever has." },
];

const principles = [
  { bold: 'Never risk more than 1-2% of your capital on a single trade.', rest: 'Even at high leverage, your stop-loss should be placed so that hitting it costs you only 1-2% of total capital. This is the single most important rule in leveraged trading.' },
  { bold: 'Always trade with a stop-loss.', rest: "Always. There is no philosophical scenario in which leveraged trading without a stop-loss makes sense. The market doesn't care about your conviction." },
  { bold: 'Match leverage to volatility.', rest: 'Trading a high-volatility commodity like crude oil or natural gas at maximum leverage is asking for it. Lower the size when the instrument moves a lot.' },
  { bold: "Don't average down on leveraged losing trades.", rest: 'Adding to a losing position with borrowed money is how small mistakes become account-ending mistakes.' },
  { bold: 'Keep a buffer above maintenance margin.', rest: "If maintenance is 50%, don't run at 51%. A small adverse move will trigger a margin call. Aim for 30-40% utilisation in normal conditions." },
  { bold: 'Watch out for overnight gaps.', rest: 'Stop-losses can be jumped over by gap moves on news, results or weekend events. If a position is leveraged, think hard before holding it overnight near major events.' },
  { bold: 'Use a trading journal.', rest: "Track which leveraged trades worked, which didn't, and why. Pattern recognition is what makes a leveraged trader survive long enough to become a profitable one." },
];

const comparisonRows = [
  { feature: 'Capital required', margin: 'Fraction of trade value', cash: 'Full trade value' },
  { feature: 'Profit potential', margin: 'Magnified by leverage ratio', cash: 'Equal to actual price move' },
  { feature: 'Loss potential', margin: 'Also magnified — can hit capital fast', cash: 'Limited to amount invested' },
  { feature: 'Interest / cost', margin: 'MTF interest on borrowed funds', cash: 'None beyond brokerage' },
  { feature: 'Holding period', margin: 'Often short-term to manage cost & risk', cash: 'Any duration' },
  { feature: 'Skill needed', margin: 'High — risk management critical', cash: 'Lower — fewer moving parts' },
  { feature: 'Best for', margin: 'Active traders with a tested system', cash: 'Investors and casual traders' },
];

const goodFit = [
  'Have a tested trading system with a defined edge.',
  'Use stop-losses on every trade without exception.',
  'Understand position sizing and never risk more than 1-2% per trade.',
  'Have a job-free, distraction-free window to monitor positions.',
  'Can emotionally handle larger rupee swings (because at 50x, your normal trade just got 50 times louder).',
];

const notFit = [
  'Are still figuring out what setup you actually trade.',
  'Skip stop-losses or use "mental stops" that you sometimes ignore.',
  "Hold losing positions hoping they'll come back.",
  "Use trading capital you can't afford to lose.",
  'Trade emotionally after wins or losses.',
];

const faqs = [
  { q: 'What is margin trading in simple words?', a: "Margin trading means borrowing money from your broker to take a larger trade than your own funds would allow. You put up a fraction of the total trade value as margin, and the broker funds the rest. Both your potential profits and losses are calculated on the full position size — that's why leverage is powerful and dangerous in equal measure." },
  { q: 'Is margin trading legal in India?', a: 'Yes. Margin trading is legal and regulated by SEBI through approved brokers. MTF for equities and exchange-mandated margins for F&O are standard frameworks.' },
  { q: 'What is the maximum leverage available on TRADEADDA.live?', a: 'Up to 500x leverage on select instruments, among the highest available for qualified traders on our platform.' },
  { q: 'How does a margin call work?', a: 'When your account equity falls below maintenance margin, the broker notifies you to add funds. If you do not, positions may be squared off automatically to protect both parties.' },
  { q: "What's the difference between initial margin and maintenance margin?", a: 'Initial margin is required to open a position. Maintenance margin is the minimum you must keep while the position is open.' },
  { q: 'Is margin trading good for beginners?', a: 'Generally no. Beginners should master cash trading, stop-losses, and position sizing before using significant leverage.' },
  { q: 'Can I lose more than my deposited capital in margin trading?', a: 'On TRADEADDA.live, negative balance protection caps your loss at deposited capital. Without such protection elsewhere, losses could exceed deposits in extreme moves.' },
  { q: 'What is MTF interest and how much is it?', a: 'MTF interest is the cost of borrowing from your broker for equity margin trades. Rates vary by broker — check your contract note and fee schedule.' },
  { q: 'What happens during a market gap if I\'m using margin?', a: 'Gaps can skip your stop-loss. Losses may exceed what you expected from the stop level, which is why overnight leveraged positions near major events need extra caution.' },
  { q: 'Can I trade with margin in intraday only, or also for longer periods?', a: 'Both are possible depending on product. Intraday margin is common; overnight and positional margin carry additional costs and gap risk.' },
];

const faqDisclaimer =
  'Disclaimer: This content is for educational purposes only and does not constitute investment advice. Margin trading involves substantial risk of loss and may not be suitable for all investors.';

export default function MarginTradingPage() {
  return (
    <main>
      <PageHeader
        title="Margin Trading in India — Trade Bigger Without Tying Up Your Full Capital"
        titleClassName="text-2xl md:text-3xl"
        paragraphs={[
          "There's a reason every serious trader, at some point, ends up using margin. You see a clear setup, your analysis is sharp, your stop-loss is tight — but your trading capital is what it is. You can either take a small position and watch a great move pass you by, or you can use margin to size the trade properly. Margin trading is the bridge between the trade you can afford and the trade you actually want to take.",
          "TRADEADDA.live is built around this idea. We offer margin trading with leverage of up to 500x, real-time margin monitoring, and guardrails such as negative balance protection on supported products. This page explains how margin works, when traders use it, the main risks, and how to size positions responsibly.",
        ]}
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 relative min-h-[440px] flex items-center justify-center">
              <FOChartPhoneMockup />
              <MarginQuotesCard />
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
          <h2 className={`${sectionTitle} text-[#1a3a6c]`}>What Is Margin Trading? (In Plain English)</h2>
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Margin trading means borrowing money from your broker to take a larger position than your own cash would
              allow. You put up a fraction of the total trade value — called the margin — and the broker funds the rest.
              If the trade works, your returns are calculated on the entire position, not just your own contribution.
              That&apos;s the appeal.
            </p>
            <p>
              A simple example: you have ₹10,000 and you want exposure to a stock or index worth ₹1,00,000. Without margin,
              you can only buy what your ₹10,000 buys. With 10x margin, your ₹10,000 acts as collateral and you control
              the full ₹1,00,000 position. If that position rises 2%, you&apos;ve made ₹2,000 — a 20% return on your
              actual capital. If it falls 2%, the loss is also magnified the same way.
            </p>
            <p>
              This is the entire concept. Everything else — initial margin, maintenance margin, margin calls, MTF
              interest, SPAN margin — is just the mechanics of how brokers and exchanges manage the risk of lending you
              that money.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>The Margin Trading Terms You Actually Need to Know</h2>
          <div className="space-y-4">
            {marginTerms.map(({ icon: Icon, title, text, warn }) => (
              <div
                key={title}
                className={`flex gap-4 rounded-xl p-6 bg-[#f0f4ff] border ${warn ? 'border-l-4 border-l-red-500 border-gray-100' : 'border-gray-100'}`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${warn ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-brand-blue'}`}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommunityBanner variant="light" texture="chart" />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>How Leverage Actually Works — A Worked Example</h2>
          <p className="text-gray-700 mb-8">
            Numbers make this concrete. Say a stock is trading at ₹500 and you want to buy 200 shares (total value
            ₹1,00,000). Here&apos;s how the math plays out at different leverage levels:
          </p>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a365d] text-white">
                  <th className="px-4 py-4 font-semibold text-center">Leverage</th>
                  <th className="px-4 py-4 font-semibold text-center">Your Capital (Margin) Required</th>
                  <th className="px-4 py-4 font-semibold text-center">Total Trade Value</th>
                  <th className="px-4 py-4 font-semibold text-center">Profit if Stock Rises 2%</th>
                  <th className="px-4 py-4 font-semibold text-center">Return on Your Capital</th>
                </tr>
              </thead>
              <tbody>
                {leverageRows.map((row) => (
                  <tr key={row.leverage} className="border-b border-gray-100 bg-white">
                    <td className="px-4 py-4 text-center text-gray-900 font-medium">{row.leverage}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.capital}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.value}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.profit}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.return}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 italic leading-relaxed">
            Now flip it — if the stock falls 2% instead of rising, the same percentages apply to your loss. A 2%
            adverse move at 50x leverage wipes out your entire capital. At 100x, you&apos;re down before you&apos;ve
            even had time to react. Leverage amplifies outcomes in both directions. Size positions and stops for the
            margin you use, not for the notional exposure alone.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Margin Trading on TRADEADDA.live — Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {platformFeatures.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <Icon className="w-8 h-8 text-brand-blue shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-brand-blue mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>How to Use Margin Trading Without Blowing Up</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Leverage doesn&apos;t kill traders. Bad position sizing and missing stop-losses do. Here are the principles
            that separate traders who use margin for years from traders who use it for one bad week:
          </p>
          <ul className="space-y-5 list-disc pl-6 text-gray-700 leading-relaxed">
            {principles.map((p) => (
              <li key={p.bold}>
                <strong>{p.bold}</strong> {p.rest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Margin Trading vs Cash Trading — Quick Comparison</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a365d] text-white">
                  <th className="px-4 py-4 font-semibold text-left">Feature</th>
                  <th className="px-4 py-4 font-semibold text-center">Margin Trading</th>
                  <th className="px-4 py-4 font-semibold text-center">Cash Trading</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 bg-white">
                    <td className="px-4 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.margin}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.cash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-green-800">Margin trading is a good fit if you:</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {goodFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-red-800">Margin trading is probably not for you if you:</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {notFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If you fall in the second list, paper-trade or trade small with cash first. Margin will be there when
            you&apos;re ready. It won&apos;t be there for long if you start before you&apos;re ready. Explore{' '}
            <Link to="/knowledge/futures-options" className="text-brand-blue hover:underline">
              futures & options
            </Link>
            ,{' '}
            <Link to="/knowledge/trading" className="text-brand-blue hover:underline">
              trading basics
            </Link>
            , and{' '}
            <Link to="/knowledge/commodity-trading" className="text-brand-blue hover:underline">
              commodity trading
            </Link>{' '}
            guides when you&apos;re ready to scale up.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqs} title="Frequently Asked Questions About Margin Trading" disclaimer={faqDisclaimer} />

      <CommunityBanner
        variant="light"
        texture="candles"
        title="Ready to Trade Bigger?"
        subtitle="Margin trading isn't for everyone, but if you're a serious trader with a tested system and the discipline to use a stop-loss, it changes what's possible from your capital. TRADEADDA.live gives you up to 500x leverage, real-time margin tracking, proper risk tools and negative balance protection — the things that turn leverage from a hazard into a tool."
        buttonText="Sign Up"
        footerText="Quick KYC, instant activation. Trade your first margin position today."
      />

      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 italic">
            Margin trading involves substantial risk of loss and may not be suitable for all investors. Past
            performance does not guarantee future results.
          </p>
        </div>
      </section>
    </main>
  );
}

