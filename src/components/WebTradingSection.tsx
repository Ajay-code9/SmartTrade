import { Link } from 'react-router-dom';
import { Globe, Download } from 'lucide-react';

export default function WebTradingSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Globe size={800} className="text-gray-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">
            Best Web Trading Platform. Trade Bold with TRADEADDA
          </p>
          <h2 className="text-[32px] md:text-[45px] font-semibold text-gray-900 mb-12 leading-[51px]">
            Initiate Web Trading with TRADEADDA
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/signup"
              className="flex items-center space-x-3 px-10 py-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <div className="p-2 bg-gray-50 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <span className="text-xl font-bold italic">Web Trader</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center space-x-3 px-10 py-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <div className="p-2 bg-gray-50 rounded-full group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Download size={24} />
              </div>
              <span className="text-xl font-bold italic">Get the App</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
