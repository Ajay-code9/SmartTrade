import BlueBannerCard from './layout/BlueBannerCard';

export default function PartnerStrip() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <BlueBannerCard texture="candles" className="max-w-7xl mx-auto rounded-none py-20 px-8">
        <h2 className="text-[32px] md:text-[45px] font-semibold mb-12 tracking-tight leading-[51px]">
          Become Our Partner
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-10 py-4 rounded-md border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-brand-blue transition-all">
            Get White Label Platform
          </button>
          <button className="px-10 py-4 rounded-md bg-brand-orange text-white font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
            Become Our IB Partner
          </button>
        </div>
      </BlueBannerCard>
    </section>
  );
}
