import { Link } from 'react-router-dom';
import {
  LayoutGrid,
  ShieldAlert,
  BarChart3,
  Headphones,
  Zap,
  Shield,
  IdCard,
  Wallet,
  PieChart,
  Search,
  AlertTriangle,
  Monitor,
  Layers,
  Cpu,
  Umbrella,
  Wrench,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import FOChartPhoneMockup from '../../components/knowledge/FOChartPhoneMockup';
import FOIndexWidgets from '../../components/knowledge/FOIndexWidgets';
import CommunityBanner from '../../components/marketing/CommunityBanner';
import ValuePropositionSection from '../../components/sections/ValuePropositionSection';
import MockupHero from '../../components/mockups/MockupHero';
import FaqAccordion from '../../components/content/FaqAccordion';

const sectionTitle = 'text-xl md:text-2xl font-bold text-[#1a365d] mb-6';

const valueFeatures = [
  { icon: LayoutGrid, text: 'Extensive Derivatives Selection' },
  { icon: ShieldAlert, text: 'Risk Mitigation Strategies' },
  { icon: BarChart3, text: 'Real-time Options Analytics' },
  { icon: Headphones, text: 'Expert Derivatives Support' },
  { icon: Zap, text: '500x Leverage Opportunities' },
  { icon: Shield, text: 'Negative Balance Protection' },
];

const comparisonRows = [
  { point: 'Obligation', futures: 'Both buyer and seller are bound', options: 'Buyer has a right, not an obligation' },
  { point: 'Upfront cost', futures: 'Margin (12–20% of contract value)', options: 'Premium only' },
  { point: 'Risk for buyer', futures: 'Unlimited both sides', options: 'Limited to premium paid' },
  { point: 'Profit potential', futures: 'Linear — moves 1:1 with the underlying', options: 'Non-linear, can be very high vs cost' },
  { point: 'Best for', futures: 'Directional bets, hedging large positions', options: 'Strategy-based trading, limited-risk plays' },
  { point: 'Complexity', futures: 'Easier to grasp', options: 'More moving parts (premium decay, volatility, Greeks)' },
];

const workflowSteps = [
  { icon: IdCard, title: 'Sign up and verify', text: 'quick KYC, no waiting around for days.', color: 'text-brand-blue' },
  { icon: Wallet, title: 'Fund your wallet', text: 'UPI, IMPS, NEFT — money lands fast.', color: 'text-brand-blue' },
  { icon: PieChart, title: 'Pick your instrument', text: 'Nifty, Bank Nifty, stock F&O, commodities.', color: 'text-brand-blue' },
  { icon: Search, title: 'Read the chart', text: 'option chain, IV, open interest, support/resistance.', color: 'text-brand-blue' },
  { icon: AlertTriangle, title: 'Place your trade', text: 'market, limit, or stop-loss order.', color: 'text-red-500' },
  { icon: Monitor, title: 'Monitor and exit', text: 'square off before expiry or let it expire.', color: 'text-brand-blue' },
];

const platformFeatures = [
  { icon: Layers, color: 'bg-blue-100 text-brand-blue', text: 'Extensive derivatives selection — Equity F&O, index options, commodity, and CFD instruments all under one roof.' },
  { icon: Cpu, color: 'bg-blue-100 text-brand-blue', text: 'Real-time options analytics — Live option chain data, Greeks, IV charts, and open interest tracking.' },
  { icon: Zap, color: 'bg-blue-100 text-brand-blue', text: '500x leverage — Among the highest leverage available, with proper risk controls for capital efficiency.' },
  { icon: Umbrella, color: 'bg-green-100 text-green-600', text: 'Negative balance protection — Account never goes into the negative. Your maximum loss is your deposited capital.' },
  { icon: Wrench, color: 'bg-orange-100 text-orange-600', text: 'Risk mitigation tools — Built-in stop-loss, trailing stop-loss, take-profit, and margin alerts.' },
  { icon: Headphones, color: 'bg-blue-100 text-brand-blue', text: 'Expert support — Our team actually understands derivatives. No script readers for margin questions.' },
];

const strategies = [
  { title: 'Long call / Long put', text: 'The starter strategy. Buy a call if bullish, buy a put if bearish. Risk is fixed at the premium. Good for directional conviction.' },
  { title: 'Covered call', text: 'You own the underlying stock and sell a call against it to earn premium income. Works well in sideways markets.' },
  { title: 'Protective put', text: "You own a stock and buy a put as insurance against a fall. Think of it like an EMI for your portfolio's peace of mind." },
  { title: 'Bull call spread / Bear put spread', text: 'Buy one option and sell another at a different strike. Caps both your profit and your loss. Lower cost than buying a naked option.' },
  { title: 'Straddle and strangle', text: "Buy a call and a put when you expect a big move but don't know the direction. Common around budget day, election results, RBI policy days, or major earnings." },
  { title: 'Iron condor', text: 'A four-leg strategy that profits when the market stays inside a range. Favoured by experienced option sellers who want consistent, smaller wins.' },
];

const marginCards = [
  { title: 'LOT SIZE', text: "Lot size is fixed by the exchange. You can't buy one share of a Nifty future — you trade in lots. A Nifty lot might be 75 units, a Bank Nifty lot 30, and stock F&O lot sizes vary contract by contract. Always check before placing the order." },
  { title: 'MARGIN', text: 'Margin for futures is split into SPAN margin (calculated by the exchange based on risk) and exposure margin (an extra buffer). Together they\'re roughly 12–20% of the contract value. For option buyers, you only pay the premium. For option sellers, you pay a much larger margin because your potential loss is higher.' },
  { title: 'EXPIRY DATES', text: 'Expiry dates in India follow a fairly standard pattern. Weekly options expire on Tuesdays (Nifty) and Thursdays (Bank Nifty / Sensex / others) depending on the exchange, while monthly contracts expire on the last Thursday of the month. Always confirm the exact expiry calendar on the NSE or BSE site before trading.' },
  { title: 'SETTLEMENT', text: 'Settlement is T+1 for profits and losses, mostly cash-settled in India. Physical delivery applies to certain stock F&O contracts that are held till expiry.' },
];

const faqs = [
  { q: 'What is the difference between futures and options trading?', a: 'Futures obligate both parties to complete the trade at expiry. Options give the buyer a choice — exercise or walk away. Futures need higher margin and have linear profit/loss. Options need only the premium for buyers and offer asymmetric payoffs.' },
  { q: 'Is F&O trading profitable in India?', a: 'F&O trading can be profitable for disciplined traders who understand risk management, but most retail participants lose money. Success requires education, strategy, and strict capital controls.' },
  { q: 'How much money do I need to start F&O trading?', a: 'You can start with a few thousand rupees for option buying (premium only), but futures trading typically requires ₹50,000–₹1,00,000+ in margin depending on the contract.' },
  { q: 'What are the F&O trading timings in India?', a: 'Equity F&O trades from 9:15 AM to 3:30 PM IST on NSE/BSE. Commodity F&O has extended hours on MCX.' },
  { q: 'Can beginners trade futures and options?', a: 'Beginners can start with small option positions after learning basics, but futures and complex multi-leg strategies should wait until you understand margin, expiry, and risk.' },
  { q: 'What is leverage in F&O trading?', a: 'Leverage lets you control a large contract value with a smaller margin deposit. It amplifies both gains and losses — use it carefully.' },
  { q: 'Is F&O trading the same as gambling?', a: 'No. Regulated F&O on recognised exchanges with analysis and risk management is trading. Gambling relies on chance without edge or discipline.' },
  { q: 'What is an option chain?', a: 'An option chain lists all available strike prices and premiums for calls and puts on an underlying, showing open interest, volume, and implied volatility at a glance.' },
];

const faqDisclaimer =
  'Disclaimer: This content is for educational purposes only and does not constitute investment advice. Derivatives markets involve substantial risk. Read all scheme/offer documents carefully before investing. Consult a SEBI-registered investment adviser for personalised guidance.';

export default function FuturesOptionsPage() {
  return (
    <main>
      <PageHeader
        title="Futures and Options Trading in India — Built for Traders Who Want More Than Just Equity"
        titleClassName="text-2xl md:text-4xl"
        paragraphs={[
          "Most people in India start their market journey with stocks. Buy a share, hold it, hope it goes up. Simple enough. But once you get a feel for how prices actually move, you realise something — there's a whole other layer of the market where traders are doing far more interesting things. That layer is F&O. Futures and options.",
          "At SmartTrade.live, the F&O segment is where a big chunk of our users spend their time, and honestly, it's not hard to see why. You get leverage, you get flexibility, you can profit when markets go up or down, and you can hedge positions you already hold. The catch? You have to actually understand what you're doing. This page is meant to get you there.",
        ]}
      />

      <ValuePropositionSection
        className="bg-gray-50"
        features={valueFeatures}
        visual={
          <MockupHero className="min-h-[480px]">
            <FOChartPhoneMockup />
            <FOIndexWidgets />
          </MockupHero>
        }
      />

      {/* What are F&O */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${sectionTitle} text-[#1a3a6c]`}>What Are Futures and Options? (The Plain-English Version)</h2>
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Futures and options are derivative contracts. That word — derivative — just means the contract&apos;s value
              is &quot;derived&quot; from something else. That something else is called the underlying asset: a stock like
              Reliance or TCS, an index like Nifty 50 or Bank Nifty, a commodity like gold or crude oil, or even a
              currency pair.
            </p>
            <p className="font-medium">
              You&apos;re not buying the stock itself. You&apos;re buying a contract about that stock&apos;s future price.
            </p>
            <p>
              <strong>A futures contract</strong> is an agreement between two parties to buy or sell an asset at a fixed
              price on a specific future date. Both sides are obligated. If you go long on Nifty futures at 24,500 and
              Nifty closes at 24,800 on expiry, you make the difference. If it drops to 24,200, you eat the loss. No way
              out — that&apos;s the deal.
            </p>
            <p>
              <strong>An options contract</strong> gives you the right, but not the obligation, to buy or sell the
              underlying at a set price (called the strike price) on or before a set expiry date. For this right, you pay
              a small upfront fee called the premium. If the trade goes your way, you exercise it. If not, you just let
              it expire and your loss is capped at the premium. That asymmetry is what makes options so interesting.
            </p>
            <p>There are two basic option types:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Call option</strong> — the right to buy the underlying at the strike price. You buy calls when
                you think prices will rise.
              </li>
              <li>
                <strong>Put option</strong> — the right to sell the underlying at the strike price. You buy puts when you
                think prices will fall.
              </li>
            </ul>
            <p>
              That&apos;s the entire foundation. Everything else — straddles, strangles, iron condors, covered calls — is
              just a combination of these basic pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Futures vs Options table */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Futures vs Options — Which One Should You Actually Trade?</h2>
          <p className="text-gray-700 mb-8">This is the question every new F&O trader asks, so let&apos;s settle it.</p>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a365d] text-white">
                  <th className="px-4 py-4 font-semibold text-left">Point</th>
                  <th className="px-4 py-4 font-semibold text-center">Futures</th>
                  <th className="px-4 py-4 font-semibold text-center">Options</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.point} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-4 font-medium text-gray-900">{row.point}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.futures}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.options}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <em>
              <strong>Short version:</strong>
            </em>{' '}
            futures are simpler but riskier in absolute terms. Options are more flexible and let you cap your downside,
            but you have to understand premium behaviour and time decay. Most beginners on SmartTrade.live start with
            index options — usually Nifty or Bank Nifty — because the contracts are highly liquid and the moves are
            easier to read than individual stocks.
          </p>
        </div>
      </section>

      <CommunityBanner />

      {/* How F&O works */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>How F&O Trading Works on SmartTrade.live</h2>
          <p className="text-gray-700 mb-10 max-w-3xl">
            We&apos;ve built the platform so that experienced traders feel at home and new ones don&apos;t get overwhelmed.
            Here&apos;s what a typical F&O trade looks like:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {workflowSteps.map(({ icon: Icon, title, text, color }) => (
              <div key={title} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                <div className={`w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 ${color}`}>
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            The whole flow takes minutes once you&apos;re set up. And because SmartTrade.live offers up to 500x leverage
            with negative balance protection, you get the upside of large positions without the nightmare of owing money
            beyond what&apos;s in your account.             Explore our{' '}
            <Link to="/knowledge/equity-trading" className="text-brand-blue hover:underline">
              equity trading
            </Link>{' '}
            and{' '}
            <Link to="/knowledge/trading" className="text-brand-blue hover:underline">
              trading
            </Link>{' '}
            guides for more context.
          </p>
        </div>
      </section>

      {/* Platform features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>F&O Trading Features That Set SmartTrade.live Apart</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map(({ icon: Icon, color, text }) => (
              <div key={text} className="flex gap-4 bg-[#eef6ff] border border-blue-100 rounded-xl p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${color}`}>
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">{text.split(' — ')[0]}</strong>
                  {text.includes(' — ') ? ` — ${text.split(' — ').slice(1).join(' — ')}` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Popular F&O Strategies (Used by Real Traders, Not Just Textbooks)</h2>
          <p className="text-gray-600 mb-8">
            You&apos;ll hear a hundred &quot;strategies&quot; thrown around online. These are the ones that actually get used:
          </p>
          <div className="space-y-4 mb-6">
            {strategies.map(({ title, text }) => (
              <div key={title} className="flex gap-4 bg-[#fff5f2] rounded-lg p-5 items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">{title}</strong> — {text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 bg-[#ebf5ff] rounded-lg p-5 items-start">
            <Lightbulb className="w-6 h-6 text-[#1a365d] shrink-0 mt-0.5" />
            <p className="text-[#1a365d] leading-relaxed text-sm">
              <strong>A word of honest advice:</strong> don&apos;t try iron condors in your first month. Master long calls
              and puts, understand how premium decays, watch a few expiry days, then move up.
            </p>
          </div>
        </div>
      </section>

      {/* Margin cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>F&O Margin, Lot Size and Expiry – The Stuff You Need to Know</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marginCards.map(({ title, text }) => (
              <div key={title} className="bg-gray-50 rounded-xl border-t-4 border-brand-blue p-6">
                <h3 className="text-brand-blue font-bold text-sm mb-4 tracking-wide">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} disclaimer={faqDisclaimer} className="pb-8" />

      {/* Final CTA */}
      <CommunityBanner
        title="Ready to Start Trading F&O the Right Way?"
        subtitle="Futures and options aren't for everyone, but if you've outgrown plain stock buying and want to actually engage with the market, this is where the real action is. SmartTrade.live gives you the platform, the leverage, the analytics and the support. What you bring is the discipline."
        buttonText="Sign Up"
        footerText="No paperwork, No waiting. Get into your first F&O trade in minutes."
      />

      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 italic">
            Derivatives trading involves substantial risk. Past performance does not guarantee future returns. Trade
            responsibly.
          </p>
        </div>
      </section>
    </main>
  );
}

