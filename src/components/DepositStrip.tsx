import BlueBannerCard from './layout/BlueBannerCard';

export default function DepositStrip() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <BlueBannerCard texture="chart" className="max-w-7xl mx-auto rounded-none py-20 px-8">
        <p className="text-white font-bold tracking-widest text-sm mb-4">Payments Update</p>
        <h2 className="text-[32px] md:text-[45px] font-semibold mb-8 tracking-tight leading-[51px]">
          24X7 Instant Deposit & Withdrawal
        </h2>
        <p className="text-sm md:text-lg max-w-4xl mx-auto text-white leading-relaxed mb-12">
          Ready for a payment experience that&apos;s both genuine and fast? At SmartTrade.live, we&apos;re all about making your deposit & withdrawal smooth and swift. Trade with confidence and choose from multiple payment methods like UPI, NEFT, and RTGS.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-10 py-3 rounded-md border border-white text-white font-bold hover:bg-white hover:text-brand-blue transition-all italic">
            Why SmartTrade?
          </button>
          <button className="px-10 py-3 rounded-md bg-brand-orange text-white font-bold hover:bg-opacity-90 transition-all italic shadow-lg">
            Trade Now
          </button>
        </div>
      </BlueBannerCard>
    </section>
  );
}
