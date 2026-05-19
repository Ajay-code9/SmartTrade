import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BlueBannerCard from './layout/BlueBannerCard';

const features = [
  {
    id: 'secure',
    title: 'Secure Investment',
    content: 'At SmartTrade.live, we safeguard your interests and ensure your investment journey is as secure as it is prosperous.',
    active: true
  },
  {
    id: 'zero',
    title: 'Zero Brokerage',
    content: 'Trade without limits and keep 100% of your profits with our absolute zero brokerage model.',
    active: false
  },
  {
    id: 'margin',
    title: '500x Margin Facilities',
    content: 'Trade with up to 500x margin on select instruments when you need more exposure per rupee of capital.',
    active: false
  },
  {
    id: 'withdrawal',
    title: '24x7 Deposit & Withdrawal',
    content: 'Access your funds whenever you need them with our lightning-fast, round-the-clock payment processing.',
    active: false
  },
  {
    id: 'support',
    title: 'Round-The-Clock Customer Support',
    content: 'Our dedicated support team is available 24/7 to assist you with any queries or technical needs.',
    active: false
  }
];

export default function InvestmentSection() {
  const [activeId, setActiveId] = useState('secure');

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">500x Margin For Maximum Returns</p>
          <h2 className="text-[32px] md:text-[45px] font-semibold text-gray-900 max-w-4xl mx-auto leading-[51px]">
            Make Big Moves with Lesser Capital as We Offer Upto 500x Margin.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <BlueBannerCard texture="candles" className="rounded-xl p-8 shadow-2xl text-left">
              <div className="aspect-video bg-white/10 rounded-lg backdrop-blur-md p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="w-24 h-4 bg-white/20 rounded" />
                    <div className="w-32 h-6 bg-white/40 rounded" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/50">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="w-1/2 h-32 flex items-end space-x-2">
                    <div className="w-4 h-[20%] bg-blue-300" />
                    <div className="w-4 h-[40%] bg-blue-400" />
                    <div className="w-4 h-[60%] bg-blue-500" />
                    <div className="w-4 h-[80%] bg-white" />
                    <div className="w-4 h-[100%] bg-white" />
                  </div>
                  <div className="text-white text-6xl font-black opacity-20">%</div>
                </div>
              </div>
            </BlueBannerCard>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {features.map((feature) => (
                <div key={feature.id} className="border-b border-gray-100 last:border-none">
                  <button
                    type="button"
                    onClick={() => setActiveId(feature.id)}
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${activeId === feature.id ? 'bg-brand-orange text-white' : 'hover:bg-gray-50'}`}
                  >
                    <span className="text-xl font-bold italic">{feature.title}</span>
                    <div className={`p-1 rounded-full ${activeId === feature.id ? 'bg-white/20' : 'bg-blue-50 text-brand-blue'}`}>
                      {activeId === feature.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeId === feature.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 text-gray-500 text-lg">{feature.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
