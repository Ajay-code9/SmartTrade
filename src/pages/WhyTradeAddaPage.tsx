import { FilePen, KeyRound, Wallet, Smartphone } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import BannerSection from '../components/layout/BannerSection';

const marginRows = [
  { script: 'Gold', ordinary: 'Rs 5,50,000', tradeadda: 'Rs 13,000' },
  { script: 'Natural Gas', ordinary: 'Rs 65,000', tradeadda: 'Rs 400' },
  { script: 'Crude', ordinary: 'Rs 2,50,000', tradeadda: 'Rs 1,500' },
  { script: 'Silver', ordinary: 'Rs 3,00,000', tradeadda: 'Rs 4,500' },
  { script: 'Bank Nifty', ordinary: 'Rs 90,000', tradeadda: 'Rs 1,500' },
  { script: 'Nifty', ordinary: 'Rs 1,20,000', tradeadda: 'Rs 2,500' },
];

const steps = [
  { num: 1, icon: FilePen, label: 'Register with TRADEADDA.live' },
  { num: 2, icon: KeyRound, label: 'Minimal Documents Needed' },
  { num: 3, icon: Wallet, label: 'Deposit Funds' },
  { num: 4, icon: Smartphone, label: 'Start Trading' },
];

export default function WhyTradeAddaPage() {
  return (
    <main className="pt-0">
      <PageHeader
        title="Why TRADEADDA"
        subtitle="Zero brokerage on supported products, up to 500x margin on select instruments, and a single terminal for equities, commodities, and global CFDs."
      />

      {/* ZERO Brokerage */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">ZERO Brokerage</h2>
          <p className="text-gray-500 mb-10">
            No More Sharing Your Profits, TRADEADDA.live Lets You Keep It All
          </p>

          <div className="relative max-w-3xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 400 200">
                {[...Array(8)].map((_, i) => (
                  <rect key={i} x={i * 50} y={80} width="20" height={60 + (i % 3) * 20} fill="#333" />
                ))}
              </svg>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 text-left border-b md:border-b-0 md:border-r border-gray-300">
                <h3 className="text-brand-blue font-semibold text-lg mb-6 text-center md:text-left">
                  Ordinary Platform
                </h3>
                <p className="text-gray-800 mb-2">Profit Rs 28000/-</p>
                <p className="text-gray-800 mb-2">Brokerage, taxes etc. Rs 20,000/-</p>
                <p className="text-gray-900 font-bold">Net Profit (take home) Rs 8,000/-</p>
              </div>
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue rotate-45 z-10" />
              <div className="p-8 md:p-10 text-left">
                <h3 className="text-brand-blue font-semibold text-lg mb-6 text-center md:text-left">
                  TRADEADDA.live
                </h3>
                <p className="text-gray-800 mb-2">Profit Rs 28000/-</p>
                <p className="text-gray-800 mb-2">Brokerage, taxes etc. 0/-</p>
                <p className="text-gray-900 font-bold">Net Profit (take home) Rs 28,000/-</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 500x Margin */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Up to 500x Margin</h2>
          <p className="text-gray-500 mb-4">Trade higher volumes with lesser capital.</p>
          <p className="text-gray-700 font-semibold mb-8">
            Illustrative Comparison of Margin Required for Intraday Trading:
          </p>

          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-4 text-left font-bold text-gray-800">Script</th>
                  <th className="px-4 py-4 text-center font-bold text-gray-800">
                    Per Lot Margin - Ordinary Platform
                  </th>
                  <th className="px-4 py-4 text-center font-bold text-gray-800">
                    Per lot Margin - TRADEADDA.live
                  </th>
                </tr>
              </thead>
              <tbody>
                {marginRows.map((row) => (
                  <tr key={row.script} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-4 text-left font-medium text-gray-900">{row.script}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.ordinary}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{row.tradeadda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Multi Markets */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Multi Markets</h2>
          <p className="text-gray-600 leading-relaxed">
            Trade Indian equities and commodities alongside global CFDs from one account. Charts, order
            types, and wallet balances stay in sync across web and mobile so you are not switching tools
            mid-session.
          </p>
        </div>
      </section>

      {/* Open Account */}
      <BannerSection texture="chart" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Open Account in Just 1 Minute and Start Trading
          </h2>
          <p className="text-white max-w-3xl mx-auto mb-12 leading-relaxed">
            Join TRADEADDA.live now for the ultimate trading experience. Apply for a trading account in just
            1 minute and access advanced tools like technical analysis indicators and customizable charts.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {steps.map(({ num, icon: Icon, label }) => (
              <div key={num} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-brand-orange text-white text-sm font-bold flex items-center justify-center z-10">
                    {num}
                  </span>
                  <div className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-sm md:text-base font-medium">{label}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="px-10 py-3 rounded-full bg-brand-orange text-white font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            Join Now!
          </button>
        </div>
      </BannerSection>

      {/* Support */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border border-gray-200 rounded-2xl p-10 md:p-14 text-center bg-white shadow-sm overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 400 200">
                {[...Array(10)].map((_, i) => (
                  <rect key={i} x={i * 40} y={60} width="15" height={80 + (i % 4) * 15} fill="#333" />
                ))}
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 relative z-10">
              Support Whenever You Need It
            </h2>
            <p className="text-gray-500 mb-8 relative z-10 leading-relaxed">
              Our 24x7 customer support ensures you&apos;re never alone, and your deposits and withdrawals are
              always smooth and efficient.
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors relative z-10"
            >
              <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Whatsapp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

