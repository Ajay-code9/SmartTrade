import BlueBannerCard from './layout/BlueBannerCard';

export default function StatsStrip() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <BlueBannerCard texture="chart" className="max-w-7xl mx-auto rounded-none py-16 px-8">
        <h2 className="text-[32px] md:text-[45px] font-semibold mb-6 uppercase tracking-tight leading-[51px]">
          Enjoy Maximum Profits with ZERO BROKERAGE
        </h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto text-white leading-relaxed uppercase">
          Is money-making your passion? Our platform makes trading easy and fun. Trade anytime, anywhere, on any device with absolute ZERO BROKERAGE costs
        </p>
      </BlueBannerCard>
    </section>
  );
}
