import { CheckCircle } from 'lucide-react';
import LegalArticleLayout from '../components/layout/LegalArticleLayout';

const terms = [
  {
    title: 'Prohibited Practices',
    text: 'The use of "Chamka, lines, and insider trading" is strictly prohibited and will result in account suspension.',
  },
  {
    title: 'Account Misuse',
    text: 'Sharing account credentials or using unauthorized account managers is forbidden.',
  },
  {
    title: 'Scalping',
    text: 'Scalping refers to trades generating profits within 5 minutes of execution. Such profits may be removed without notice.',
  },
  {
    title: 'VPN Usage',
    text: 'Using a VPN while trading is strictly prohibited. Any trades detected via VPN will be deleted.',
  },
  {
    title: 'Dividends and Bonuses',
    text: 'Dividends and bonuses will be applied as per the guidelines set by the respective exchange circulars. These are subject to change based on the exchange\'s policies.',
  },
  {
    title: 'Cross Orders',
    text: 'Trading from the same IP address or across multiple IDs is not allowed. In such cases, profitable trades may be removed without prior notice.',
  },
  {
    title: 'Negative Balance Protection',
    text: 'Your account is protected against a negative balance up to a 30% step-out level. If the balance exceeds this level, further actions may be taken to rectify the situation.',
  },
  {
    title: 'Order Execution',
    text: 'Orders will be executed based on bid/ask prices, not the Last Traded Price (LTP). Execution might vary based on market conditions.',
  },
  {
    title: 'Technical Issues',
    text: 'In the event of technical issues or glitches, you must report them immediately along with your user ID. This will allow us to take action to square off positions at the current market price (CMP).',
  },
  {
    title: 'Group Trading',
    text: 'Group trading is allowed only with prior approval from TRADEADDA.live. Any unapproved group trading activities may lead to account suspension.',
  },
  {
    title: 'Payout Delays',
    text: 'Payouts may be delayed due to banking issues. We appreciate your patience and understanding in such situations.',
  },
  {
    title: 'Margin Maintenance',
    text: 'You are required to ensure that your account maintains sufficient funds to avoid the liquidation of your positions.',
  },
  {
    title: 'Hedging',
    text: 'Hedging is not allowed on the TRADEADDA.live platform. Any attempt to hedge may result in account restrictions.',
  },
  {
    title: 'Invalid Orders',
    text: 'Buy stop or sell stop orders placed without an open position or exceeding existing position quantities are prohibited. These orders will not be processed.',
  },
];

export default function TermsConditionsPage() {
  return (
    <LegalArticleLayout title="Terms & Conditions">
      <article className="text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms and Conditions</h2>

        <div className="text-gray-700 leading-relaxed space-y-4 mb-12">
          <p>
            Welcome to <strong>TRADEADDA.live</strong>, your trusted online trading platform. We are committed to
            providing a fair and secure trading environment. Please read these terms carefully before using our
            services.
          </p>
          <p>
            Certain practices are prohibited on our platform. Violations can lead to account suspension, loss of
            funds, or legal action. We reserve the right to update these terms at any time.
          </p>
          <p>These terms apply to all users of the TRADEADDA.live platform.</p>
        </div>

        <ul className="space-y-8">
          {terms.map((term) => (
            <li key={term.title} className="flex gap-4">
              <CheckCircle className="shrink-0 w-8 h-8 text-brand-blue fill-brand-blue text-white" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{term.title}</h3>
                <p className="text-gray-600 leading-relaxed">{term.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-gray-700 leading-relaxed space-y-4">
          <p>
            Thank you for choosing TRADEADDA.live. We are committed to providing a safe and reliable trading
            experience. Should you have any questions or require assistance, feel free to contact us.
          </p>
          <p>
            <strong>Best Regards,</strong>
            <br />
            The TRADEADDA.live Team
          </p>
        </div>
      </article>
    </LegalArticleLayout>
  );
}
