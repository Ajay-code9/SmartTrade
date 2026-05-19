import {
  LayoutGrid,
  BarChart3,
  Users,
  Shield,
  Globe,
  Briefcase,
  RotateCcw,
  TrendingUp,
  Target,
  Zap,
  Layers,
  PieChart,
  CheckCircle2,
  LineChart,
  ArrowUpRight,
  FolderOpen,
} from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import PhoneQuotesMockup from '../../components/knowledge/PhoneQuotesMockup';
import US30ChartCard from '../../components/knowledge/US30ChartCard';
import CommunityBanner from '../../components/marketing/CommunityBanner';
import ValuePropositionSection from '../../components/sections/ValuePropositionSection';
import MockupHero from '../../components/mockups/MockupHero';
import FaqAccordion from '../../components/content/FaqAccordion';

const sectionTitle = 'text-xl md:text-2xl font-bold text-brand-navy mb-6';

const valueFeatures = [
  { icon: LayoutGrid, text: 'Diverse Stock Selection' },
  { icon: BarChart3, text: 'Real-time Market Insights' },
  { icon: Users, text: 'User-friendly Interface' },
  { icon: Shield, text: 'Risk Management Tools' },
  { icon: Globe, text: 'Global Market Research' },
];

const tradingTypes = [
  { icon: Briefcase, title: '1. Delivery Trading', text: '(Investment-Based Equity Trading) You buy shares and hold them in your demat account for days, months, or years. Ownership transfers fully to you.' },
  { icon: RotateCcw, title: '2. Intraday Trading', text: 'You buy and sell the same stock within a single trading session (9:15 AM to 3:30 PM IST). Positions must be squared off before market close.' },
  { icon: TrendingUp, title: '3. Swing Trading', text: 'Positions are held for several days to a few weeks to capture medium-term price swings. Swing traders rely heavily on technical analysis.' },
  { icon: Target, title: '4. Positional Trading', text: 'A longer version of swing trading where positions are held for weeks to months, based on a specific market thesis or trend.' },
  { icon: Zap, title: '5. BTST', text: '(Buy Today, Sell Tomorrow) You buy shares today and sell them the next day before they\'re credited to your demat account.' },
  { icon: Layers, title: '6. Equity Derivatives', text: '(Futures & Options) Contracts whose value derives from underlying equity shares or indices. Used for hedging and speculation.' },
];

const comparisonRows = [
  { asset: 'Equity Shares', returns: 'High (long-term)', risk: 'High', riskColor: 'text-red-600', liquidity: 'Very High', regulator: 'SEBI', notes: 'Wealth creation' },
  { asset: 'Mutual Funds', returns: 'Moderate to High', risk: 'Moderate', riskColor: '', liquidity: 'High', regulator: 'SEBI / AMFI', notes: 'Diversified' },
  { asset: 'Fixed Deposits', returns: 'Low', risk: 'Very Low', riskColor: 'text-green-600', liquidity: 'Moderate', regulator: 'RBI', notes: 'Capital safety' },
  { asset: 'Gold', returns: 'Moderate', risk: 'Moderate', riskColor: '', liquidity: 'High', regulator: '—', notes: 'Inflation hedge' },
  { asset: 'Real Estate', returns: 'Moderate to High', risk: 'Moderate', riskColor: '', liquidity: 'Low', regulator: 'RERA', notes: 'Long horizon' },
  { asset: 'Bonds / Debt', returns: 'Low to Moderate', risk: 'Low', riskColor: '', liquidity: 'Moderate', regulator: 'SEBI / RBI', notes: 'Income-oriented' },
];

const keyConcepts = [
  { term: 'Bid and Ask Price', def: 'The bid is the highest price a buyer is willing to pay; the ask is the lowest price a seller will accept. The gap between them is the spread.' },
  { term: 'Market Order vs. Limit Order', def: 'A market order executes immediately at the best available price. A limit order executes only at your specified price or better.' },
  { term: 'Stop-Loss Order', def: 'An order that triggers an automatic sale if a stock falls to a predetermined price, helping cap losses.' },
  { term: 'Circuit Limits', def: 'Daily price bands (typically 5%, 10%, or 20%) beyond which a stock cannot move in a single session.' },
  { term: 'Volume', def: 'The number of shares traded in a given period. High volume confirms price movements.' },
  { term: 'Market Capitalisation', def: 'Share price multiplied by total outstanding shares (Large-cap, Mid-cap, Small-cap).' },
  { term: 'P/E Ratio', def: 'Price-to-Earnings ratio, comparing a company\'s share price to its earnings per share.' },
  { term: 'Dividend', def: 'A portion of company profits distributed to shareholders.' },
];

const startSteps = [
  { title: 'Choose a SEBI-registered stockbroker.', text: 'Verify the broker\'s SEBI registration number on the SEBI website before opening an account.' },
  { title: 'Open a demat and trading account.', text: 'Submit PAN, Aadhaar, bank proof, and a signed agreement. Most accounts open within 24–48 hours via e-KYC.' },
  { title: 'Link your bank account.', text: 'Fund transfers happen via UPI, IMPS, or NEFT.' },
  { title: 'Learn the platform.', text: 'Practise with the broker\'s paper trading or virtual trading feature before risking real capital.' },
  { title: 'Start small.', text: 'Begin with a small portion of investable capital in well-known large-cap stocks while you build experience.' },
  { title: 'Build a strategy.', text: 'Decide whether you\'re investing for the long term, swing trading, or doing intraday — and stick to one approach.' },
  { title: 'Track, review, learn.', text: 'Maintain a trade journal. Review wins and losses honestly. Markets reward discipline, not impulse.' },
];

const strategies = [
  { icon: BarChart3, title: 'Fundamental Analysis', text: 'Studying a company\'s financial statements, management quality, industry position, and growth prospects to identify undervalued stocks. Used primarily by long-term investors. Key metrics: revenue growth, profit margins, ROE, debt-to-equity, and free cash flow.' },
  { icon: PieChart, title: 'Technical Analysis', text: 'Studying price charts, patterns, and indicators (RSI, MACD, moving averages, Bollinger Bands) to forecast short-term price movements. Used heavily by intraday and swing traders.' },
  { icon: CheckCircle2, title: 'Value Investing', text: 'Popularised by Benjamin Graham and Warren Buffett — buying quality companies trading below their intrinsic value and holding for the long term.' },
  { icon: LineChart, title: 'Growth Investing', text: 'Focusing on companies with above-average earnings growth, even if they trade at premium valuations.' },
  { icon: ArrowUpRight, title: 'Momentum Trading', text: 'Buying stocks showing strong upward price action and selling when momentum fades.' },
  { icon: FolderOpen, title: 'Index Investing', text: 'Rather than picking individual stocks, investing in index funds or ETFs that mirror Nifty 50, Sensex, or sectoral indices — a low-cost, diversified approach.' },
];

const faqs = [
  { q: 'What is equity trading in simple terms?', a: 'Equity trading is the buying and selling of company shares on a stock exchange. When you buy a share, you own a small part of that company.' },
  { q: 'How much money do I need to start equity trading in India?', a: 'You can start with as little as ₹500–₹1,000 with some brokers, though ₹10,000–₹25,000 is more practical for diversification and covering charges.' },
  { q: 'Is equity trading the same as stock trading?', a: 'Yes. Both refer to buying and selling shares of listed companies on stock exchanges like NSE and BSE.' },
  { q: 'Is equity trading safe?', a: 'Equity trading carries market risk. It is regulated when done through SEBI-registered brokers, but capital loss is possible.' },
  { q: "What's the difference between equity trading and equity investing?", a: 'Investing typically means holding shares for the long term. Trading focuses on shorter horizons to capture price movements.' },
  { q: 'Can I trade equity without a demat account?', a: 'No. Delivery trades require a demat account. Even intraday trading requires demat linkage with your broker.' },
  { q: 'What are the trading hours for equity in India?', a: '9:15 AM to 3:30 PM IST on weekdays (excluding exchange holidays). Pre-open session runs 9:00–9:15 AM.' },
  { q: 'Which is better – equity trading or mutual funds?', a: 'Mutual funds offer diversification and professional management. Direct equity suits those who can research and manage risk. Many investors use both.' },
  { q: 'How do I check if a broker is genuine?', a: 'Verify SEBI registration on sebi.gov.in, use only recognised NSE/BSE member brokers, and avoid platforms promising guaranteed returns.' },
  { q: 'Can equity trading make me rich quickly?', a: 'No reputable approach guarantees quick wealth. Sustainable results require education, discipline, risk management, and realistic expectations.' },
];

const faqDisclaimer =
  'Disclaimer: This content is for educational purposes only and does not constitute investment advice. Equity markets are subject to risk. Read all scheme/offer documents carefully before investing. Consult a SEBI-registered investment adviser for personalised guidance.';

export default function EquityTradingPage() {
  return (
    <main>
      <PageHeader
        title="Equity Trading: A Complete Guide for Indian Investors"
        subtitle="Your comprehensive roadmap to navigating the Indian Stock Market in 2026."
      />

      <ValuePropositionSection
        className="bg-gray-50"
        features={valueFeatures}
        visual={
          <MockupHero>
            <PhoneQuotesMockup />
            <US30ChartCard />
          </MockupHero>
        }
      />

      {/* What is equity trading */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-100 rounded-xl p-8 md:p-10 shadow-sm bg-white">
            <h2 className={`${sectionTitle} text-[#1a3a6c]`}>What Is Equity Trading?</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Equity trading is the buying and selling of shares (also called equities or stocks) of publicly
                listed companies on a stock exchange. When you purchase an equity share, you become a part-owner of
                that company — entitled to a proportional claim on its profits, assets, and voting rights at
                shareholder meetings.
              </p>
              <p>
                In India, equity trading happens primarily on two recognised stock exchanges regulated by the
                Securities and Exchange Board of India (SEBI):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>National Stock Exchange (NSE)</strong> — home to the Nifty 50 index
                </li>
                <li>
                  <strong>Bombay Stock Exchange (BSE)</strong> — home to the Sensex, Asia&apos;s oldest stock exchange
                </li>
              </ul>
              <p>
                Every legitimate equity trade in India is routed through these exchanges, settled through clearing
                corporations (NSCCL, ICCL), and held in your demat account with depositories (NSDL or CDSL). This
                regulated structure is what protects investors and distinguishes real equity trading from informal
                or off-exchange alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>How Equity Trading Works in India</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-brand-blue rounded-lg p-6 md:p-8">
              <ol className="list-decimal pl-5 space-y-4 text-gray-700 leading-relaxed">
                <li>You place an order through a SEBI-registered stockbroker&apos;s platform (web, mobile app, or call-and-trade).</li>
                <li>The broker routes the order to the exchange (NSE or BSE).</li>
                <li>The exchange matches buyers and sellers based on price-time priority.</li>
                <li>The trade is confirmed instantly, and you receive a contract note by end of day.</li>
                <li>Settlement happens on T+1 basis — shares arrive in your demat account, and funds are debited, one working day after the trade.</li>
              </ol>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 md:p-8 flex items-center">
              <p className="text-gray-700 italic leading-relaxed">
                To participate, you need three linked accounts: a <strong>trading account</strong> (to place orders), a{' '}
                <strong>demat account</strong> (to hold shares electronically), and a <strong>bank account</strong> (for
                fund transfers). Most brokers offer all three as a 3-in-1 bundle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Types of Equity Trading</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingTypes.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <Icon className="w-8 h-8 text-[#1a365d] mb-4" strokeWidth={1.5} />
                <h3 className="font-bold text-[#1a365d] mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Equity Trading vs. Other Asset Classes</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a365d] text-white">
                  {['Asset Class', 'Returns Potential', 'Risk Level', 'Liquidity', 'Regulator', 'Notes'].map((h) => (
                    <th key={h} className="px-4 py-4 font-semibold text-center whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.asset} className="border-b border-gray-100 bg-white">
                    <td className="px-4 py-4 font-bold text-gray-900 text-center">{row.asset}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.returns}</td>
                    <td className={`px-4 py-4 text-center font-medium ${row.riskColor || 'text-gray-700'}`}>{row.risk}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.liquidity}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.regulator}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic leading-relaxed">
            Equity historically delivers the highest long-term returns among traditional asset classes in India, but it
            also experiences the largest short-term volatility. Most financial advisors recommend equity as a core
            component of long-term portfolios, with allocation depending on age, goals, and risk tolerance.
          </p>
        </div>
      </section>

      <CommunityBanner />

      {/* Key concepts */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d1117] rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-xl font-bold mb-2 pb-4 border-b border-gray-700">
              Key Concepts Every Equity Trader Should Know
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-5 mt-6">
              {keyConcepts.map(({ term, def }) => (
                <p key={term} className="text-sm leading-relaxed">
                  <strong>{term}</strong> — {def}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to start */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>How to Start Equity Trading in India: Step-by-Step</h2>
          <div className="space-y-4">
            {startSteps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-lg p-5">
                <span className="shrink-0 w-9 h-9 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <p className="text-gray-700 leading-relaxed pt-1">
                  <strong className="text-gray-900">{step.title}</strong> {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Popular Equity Trading Strategies</h2>
          <ul className="space-y-8">
            {strategies.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-5">
                <Icon className="w-8 h-8 text-gray-600 shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-[#1a365d] text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Risks */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="border border-red-200 bg-red-50 rounded-xl p-8 md:p-10">
            <h2 className="text-xl font-bold text-red-900 mb-4">Risks of Equity Trading</h2>
            <p className="text-red-900/80 mb-6">
              Equity trading offers attractive return potential but carries genuine risks that every participant must
              understand.
            </p>
            <ul className="space-y-3 text-red-900/90">
              {[
                ['Market Risk', 'Broad market declines affect almost all stocks regardless of company fundamentals.'],
                ['Company-Specific Risk', 'Poor earnings, fraud, management changes, or sectoral disruption.'],
                ['Liquidity Risk', 'Hard to exit some small-cap stocks at fair prices due to low volumes.'],
                ['Volatility Risk', 'Sharp and emotionally challenging short-term price swings.'],
                ['Leverage Risk', 'Using margin amplifies both gains and losses.'],
                ['Behavioural Risk', 'Fear, greed, and overconfidence cause more losses than market moves do.'],
              ].map(([label, desc]) => (
                <li key={label}>
                  <strong>{label}</strong> — {desc}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-red-900 font-medium">
              Risk management isn&apos;t optional. Position sizing, stop-losses, diversification across sectors, and not
              investing borrowed money are basic protections every trader should adopt.
            </p>
          </div>

          <div className="border border-gray-200 bg-gray-50 rounded-xl p-8 md:p-10">
            <h2 className={`${sectionTitle} mb-4`}>Tax Implications for Equity Traders</h2>
            <ul className="space-y-4 text-gray-700">
              {[
                ['Long-Term Capital Gains (LTCG)', 'Shares held over 12 months. Gains above ₹1.25 lakh per financial year are taxed at 12.5%.'],
                ['Short-Term Capital Gains (STCG)', 'Shares held under 12 months. Taxed at 20%.'],
                ['Intraday Trading', 'Treated as speculative business income, taxed at your applicable income tax slab rate.'],
                ['F&O Trading', 'Treated as non-speculative business income, taxed at slab rate, with audit requirements above turnover thresholds.'],
              ].map(([label, desc]) => (
                <li key={label}>
                  <strong>{label}</strong> — {desc}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 italic">
              (Rates reflect the Finance Act 2024 framework. Always confirm current rates with a chartered accountant.)
              Securities Transaction Tax (STT), exchange charges, GST, stamp duty, and brokerage are levied on every trade
              and reduce net returns.
            </p>
          </div>
        </div>
      </section>

      {/* Investor protection */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-brand-blue rounded-lg p-8 md:p-10">
            <h2 className={`${sectionTitle} text-[#1a365d]`}>
              Why Investor Protection Matters: Trading Only on Recognised Exchanges
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Legitimate trades in India happen on NSE or BSE with SEBI-regulated accounts. This structure provides:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Investor Protection Fund coverage in case of broker default</li>
                <li>SEBI&apos;s SCORES grievance redressal portal</li>
                <li>Clearing corporation guarantees on settlement</li>
                <li>Audit trails, contract notes, and tax documentation</li>
                <li>Insurance protection on demat holdings</li>
              </ul>
              <p>
                &quot;Informal&quot; trading platforms operate outside this framework and are illegal under the Securities
                Contracts (Regulation) Act, 1956.
              </p>
              <p className="font-bold text-[#1a365d] uppercase text-sm md:text-base">
                This is the single most important rule of equity trading in India: trade only through SEBI-registered
                brokers on recognised exchanges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommunityBanner />

      <FaqAccordion items={faqs} numbered disclaimer={faqDisclaimer} />
    </main>
  );
}

