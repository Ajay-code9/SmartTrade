import PageHeader from '../../components/layout/PageHeader';
import CommunityBanner from '../../components/marketing/CommunityBanner';
import FaqAccordion from '../../components/content/FaqAccordion';
import { COMMUNITY_BANNER } from '../../constants/siteCopy';

const sectionTitle = 'text-xl md:text-2xl font-bold text-[#1a365d] mb-6';
const subTitle = 'text-lg font-bold text-[#1a365d] mb-3';

const keyCharacteristics = [
  'Orders are matched off-exchange (not on NSE/BSE)',
  'Settlement is between trader and operator',
  'Margin requirements are often lower than exchange products',
  'Execution speed depends on the operator, not the exchange queue',
  'Regulatory protection is limited compared to exchange trading',
];

const howItWorksSteps = [
  {
    title: 'Account setup',
    text: 'You register with an operator or platform. KYC and funding rules vary by provider.',
  },
  {
    title: 'Fund the wallet',
    text: 'Trading capital is credited to an internal ledger. Withdrawal policies should be clear before you deposit.',
  },
  {
    title: 'Place orders',
    text: 'Buy and sell instructions are recorded in the operator’s system. Prices usually follow the live exchange feed, but the trade itself is not routed to NSE/BSE.',
  },
  {
    title: 'P&L settlement',
    text: 'Profit or loss is calculated from price movement and settled in your wallet with the operator.',
  },
];

const whyPreferReasons = [
  {
    title: 'Lower formalities',
    text: 'Onboarding can be faster than a full exchange-backed account, depending on the operator.',
  },
  {
    title: 'Flexible margin',
    text: 'Operators may offer higher leverage than standard exchange margin for similar exposure.',
  },
  {
    title: 'Simple workflow',
    text: 'Many systems focus on order entry, charts, and wallet balance without exchange-specific product menus.',
  },
  {
    title: 'Mobile access',
    text: 'Apps are built for intraday monitoring and quick execution on phone or web.',
  },
  {
    title: 'Cost structure',
    text: 'Charges are set by the operator — compare brokerage, funding, and withdrawal fees upfront.',
  },
];

const comparisonRows = [
  { feature: 'Trade location', dabba: 'Off-market (operator book)', stock: 'NSE / BSE' },
  { feature: 'Regulation', dabba: 'Limited / informal', stock: 'SEBI-regulated' },
  { feature: 'Order routing', dabba: 'Internal matching', stock: 'Exchange order book' },
  { feature: 'Leverage', dabba: 'Operator-defined', stock: 'Exchange & broker rules' },
  { feature: 'Investor protection', dabba: 'Depends on operator', stock: 'SEBI framework' },
];

const platformFeatures = [
  {
    title: 'Live prices',
    text: 'Charts and quotes should track exchange feeds with minimal delay.',
  },
  {
    title: 'Stable order screen',
    text: 'Entry, exit, and position view should be clear during volatile sessions.',
  },
  {
    title: 'Execution speed',
    text: 'Slippage and fill quality matter more than marketing claims — test with small size first.',
  },
  {
    title: 'Wallet transparency',
    text: 'Deposits, margins used, and withdrawals should be visible in real time.',
  },
  {
    title: 'Risk controls',
    text: 'Stop-loss, alerts, and margin utilisation help avoid silent blow-ups.',
  },
];

const appBenefits = [
  {
    title: 'Trade from mobile',
    text: 'Monitor positions and square off without being tied to a desktop terminal.',
  },
  {
    title: 'Price alerts',
    text: 'Notifications for levels, news, or margin thresholds reduce missed exits.',
  },
  {
    title: 'Charts and indicators',
    text: 'Standard technical tools should be available without a separate terminal subscription.',
  },
  {
    title: 'Faster decisions',
    text: 'Intraday traders benefit when the app shows positions and P&L in one place.',
  },
  {
    title: 'Support channel',
    text: 'Reachable support during market hours is non-negotiable for wallet-based trading.',
  },
];

const risks = [
  {
    title: 'Regulatory gap',
    text: 'Off-market trading does not carry the same safeguards as exchange membership and SEBI oversight.',
  },
  {
    title: 'Counterparty risk',
    text: 'You rely on the operator’s solvency and honesty. Research reputation before large deposits.',
  },
  {
    title: 'Market risk',
    text: 'Leverage and volatility can erase capital quickly. Use stop-losses and position limits.',
  },
  {
    title: 'Platform risk',
    text: 'Downtime, manual intervention, or disputed settlements are operational risks — not just market risk.',
  },
];

const chooseCriteria = [
  {
    title: 'Track record',
    text: 'Look for consistent payouts, clear terms, and feedback from traders you trust.',
  },
  {
    title: 'Technology',
    text: 'Test the app in live market hours. Laggy charts or failed orders are red flags.',
  },
  {
    title: 'Tools',
    text: 'Charts, order types, and margin reporting should match how you actually trade.',
  },
  {
    title: 'Support',
    text: 'Phone, chat, or ticket response during 9:15–3:30 IST matters when money is at stake.',
  },
  {
    title: 'Payments',
    text: 'Deposit and withdrawal timelines should be documented, not promised verbally.',
  },
];

const startSteps = [
  'Read the risk section below before funding an account.',
  'Register on TRADEADDA.live and complete KYC.',
  'Deposit only capital you can afford to lose.',
  'Start with small size until you trust execution and settlement.',
  'Use a stop-loss on every trade.',
  'Review weekly P&L and withdrawal tests.',
];

const tradeAddaHighlights = [
  {
    title: 'Unified terminal',
    text: 'Web and mobile access with charts, watchlists, and order management in one place.',
  },
  {
    title: 'Fast order path',
    text: 'Built for intraday workflows where seconds matter on entries and exits.',
  },
  {
    title: 'Margin visibility',
    text: 'Used margin, available balance, and utilisation shown while positions are open.',
  },
  {
    title: 'Funding controls',
    text: 'Deposit and withdrawal requests tracked in-app with support escalation if delayed.',
  },
  {
    title: 'Risk tools',
    text: 'Stop-loss, alerts, and negative balance protection on supported products.',
  },
];

const faqs = [
  {
    q: 'What is dabba trading?',
    a: 'Dabba trading is off-exchange trading where an operator records your buy/sell in an internal book. Prices usually follow NSE/BSE, but the trade is not cleared on the exchange.',
  },
  {
    q: 'Is dabba trading legal in India?',
    a: 'Exchange trading through SEBI-registered brokers is the regulated route. Off-market arrangements carry legal and counterparty risks. Understand local laws and operator terms before participating.',
  },
  {
    q: 'How is TRADEADDA.live different from a traditional broker?',
    a: 'We focus on speed, zero brokerage on supported products, high margin on select instruments, and in-app risk tools. Product availability and regulation depend on your account type — check onboarding documents.',
  },
  {
    q: 'Can I lose more than my deposit?',
    a: 'On products with negative balance protection, losses are capped at funded capital. Without it, fast markets can exceed your wallet. Always use stop-losses.',
  },
  {
    q: 'How do I start?',
    a: 'Sign up, complete KYC, fund your wallet, and trade small size until you are comfortable with execution, fees, and withdrawals.',
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function FeatureBlocks({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="space-y-6 mb-6">
      {items.map(({ title, text }) => (
        <div key={title}>
          <h3 className={subTitle}>{title}</h3>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}

export default function DabbaTradingPage() {
  return (
    <main>
      <PageHeader
        title="Introduction to Dabba Trading"
        titleClassName="text-2xl md:text-4xl"
        paragraphs={[
          'Dabba trading is an informal market where orders are matched inside a broker or operator system instead of on NSE or BSE. Traders still watch live exchange prices, but settlement happens off-book between the client and the operator.',
          'Some active traders use this model for speed and margin flexibility. Others avoid it because regulation, transparency, and counterparty risk differ from exchange trading. This page covers mechanics, trade-offs, and what to verify before you fund an account.',
          'TRADEADDA.live provides charts, wallet-based trading, margin tools, and support channels described below. Read the risks section before you trade.',
        ]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>What is Dabba Trading?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In dabba trading, the operator maintains an internal ledger of your positions. When you buy or sell, the
            instruction is not sent to the exchange order book. P&L is still tied to market prices, but legal title and
            clearing work differently from a standard demat trade.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Treat it as a bilateral arrangement: you are exposed to market moves and to the operator’s ability to
            honour balances.
          </p>

          <h3 className={subTitle}>Key characteristics</h3>
          <BulletList items={keyCharacteristics} />
          <p className="text-gray-700 leading-relaxed mb-12">
            If you already trade on NSE/BSE, compare execution, margin, fees, and dispute resolution before moving
            size off-exchange.
          </p>

          <h2 className={sectionTitle}>How dabba trading works</h2>
          <FeatureBlocks items={howItWorksSteps} />

          <h2 className={sectionTitle}>Why some traders use off-market platforms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Reasons vary — margin, speed, or simpler workflows. None of these remove market or operator risk.
          </p>
          <FeatureBlocks items={whyPreferReasons} />

          <h2 className={sectionTitle}>Dabba trading vs exchange trading</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a365d] text-white">
                  <th className="px-4 py-4 font-semibold text-left">Feature</th>
                  <th className="px-4 py-4 font-semibold text-center">Dabba / off-market</th>
                  <th className="px-4 py-4 font-semibold text-center">Exchange trading</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 bg-white">
                    <td className="px-4 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.dabba}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-12">
            Exchange trading offers SEBI oversight, central clearing, and standard dispute processes. Off-market trading
            shifts more responsibility to the operator you choose.
          </p>

          <h2 className={sectionTitle}>What to look for in a platform</h2>
          <FeatureBlocks items={platformFeatures} />

          <h2 className={sectionTitle}>Mobile and web trading</h2>
          <FeatureBlocks items={appBenefits} />

          <h2 className={sectionTitle}>Risks and legal considerations</h2>
          <FeatureBlocks items={risks} />
          <p className="text-gray-700 leading-relaxed mb-12">
            Do not deposit money you cannot afford to lose. Consult a qualified adviser if you are unsure about
            regulatory status in your jurisdiction.
          </p>

          <h2 className={sectionTitle}>Choosing an operator</h2>
          <FeatureBlocks items={chooseCriteria} />

          <h2 className={sectionTitle}>Getting started (checklist)</h2>
          <BulletList items={startSteps} />

          <h2 className={sectionTitle}>TRADEADDA.live at a glance</h2>
          <FeatureBlocks items={tradeAddaHighlights} />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqs} title="FAQs" inline />

          <h2 className={`${sectionTitle} mt-12`}>Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dabba trading is off-exchange, wallet-based speculation on market prices. It can offer speed and margin
            flexibility, but counterparty and regulatory risks are higher than trading through a SEBI-registered broker
            on NSE/BSE.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you use TRADEADDA.live, start small, test withdrawals, and treat risk controls as mandatory — not
            optional.
          </p>
        </div>
      </section>

      <CommunityBanner variant="light" texture="chart" {...COMMUNITY_BANNER} buttonText="Trade Now" />
    </main>
  );
}
