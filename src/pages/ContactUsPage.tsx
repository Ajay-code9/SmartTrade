import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Clock, MapPin, Headphones } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import BlueBannerCard from '../components/layout/BlueBannerCard';

const contactChannels = [
  {
    icon: Mail,
    title: 'Email Support',
    detail: 'support@smarttrade.live',
    href: 'mailto:support@smarttrade.live',
    note: 'We reply within 24 hours on business days.',
  },
  {
    icon: Phone,
    title: 'Phone',
    detail: '+91 1800-XXX-XXXX',
    href: 'tel:+911800000000',
    note: 'Mon–Sat, 9:00 AM – 6:00 PM IST',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: 'Chat with us instantly',
    href: 'https://wa.me/',
    note: 'Fast help for account & trading queries.',
  },
  {
    icon: Headphones,
    title: 'Live Chat',
    detail: 'Available on platform',
    href: '#',
    note: 'Use the chat button while logged in.',
  },
];

const subjects = [
  'General inquiry',
  'Open a trading account',
  'Deposits & withdrawals',
  'Technical support',
  'Partnership / Affiliate',
];

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjects[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: subjects[0], message: '' });
  };

  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Questions about trading, your account, or SmartTrade.live? Our team is here to help. Reach out anytime—we typically respond within one business day."
      />

      <section className="relative -mt-12 md:-mt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {contactChannels.map(({ icon: Icon, title, detail, href, note }) => (
              <a
                key={title}
                href={href}
                className="block p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                  <Icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-brand-blue font-medium text-sm mb-2">{detail}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{note}</p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-500 mb-8">
                Fill out the form and we&apos;ll get back to you. For urgent trading issues, use WhatsApp or live chat.
              </p>

              {submitted ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                  <p className="text-green-800 font-semibold text-lg mb-2">Message sent successfully!</p>
                  <p className="text-green-700 text-sm mb-6">
                    Thank you for contacting SmartTrade.live. Our team will review your request and respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-brand-blue font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Full name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 py-3 px-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 py-3 px-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 py-3 px-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 py-3 px-0 text-gray-900 bg-transparent focus:outline-none focus:border-brand-blue transition-colors"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-0 border-b border-gray-300 py-3 px-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="px-10 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <BlueBannerCard texture="chart" className="rounded-xl p-8 text-left">
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="w-8 h-8 shrink-0 opacity-90" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Support hours</h3>
                    <p className="text-white text-sm leading-relaxed">
                      Monday – Saturday: 9:00 AM – 6:00 PM IST
                      <br />
                      Sunday & market holidays: Limited email support
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 shrink-0 opacity-90" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Pan-India presence</h3>
                    <p className="text-white text-sm leading-relaxed">
                      SmartTrade.live serves traders across major cities including Mumbai, Delhi, Bangalore,
                      Hyderabad, Chennai, Pune, Kolkata, and more.
                    </p>
                  </div>
                </div>
              </BlueBannerCard>

              <div className="rounded-xl border border-gray-100 p-6 bg-gray-50">
                <h3 className="font-bold text-gray-900 mb-4">Before you write</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <span className="font-medium text-gray-800">New to trading?</span> Browse our{' '}
                    <Link to="/knowledge/trading" className="text-brand-blue hover:underline">
                      Knowledge Center
                    </Link>
                    .
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">Want to partner?</span> See{' '}
                    <Link to="/become-affiliate" className="text-brand-blue hover:underline">
                      Become an Affiliate
                    </Link>
                    .
                  </li>
                  <li>
                    <span className="font-medium text-gray-800">Account policies:</span>{' '}
                    <Link to="/privacy-policy" className="text-brand-blue hover:underline">
                      Privacy
                    </Link>{' '}
                    &{' '}
                    <Link to="/terms-and-conditions" className="text-brand-blue hover:underline">
                      Terms
                    </Link>
                    .
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Ready to trade?</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Open your account in minutes. Zero brokerage, up to 500x leverage on select instruments.
                </p>
                <button
                  type="button"
                  className="w-full py-3 rounded-lg bg-brand-orange text-white font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
