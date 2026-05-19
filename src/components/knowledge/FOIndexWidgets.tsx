import BlueBannerCard from '../layout/BlueBannerCard';

export default function FOIndexWidgets() {
  return (
    <div className="absolute left-[150px] md:left-[170px] top-0 flex flex-col gap-4 z-20">
      <BlueBannerCard texture="candles" className="w-[200px] md:w-[220px] rounded-2xl p-4 text-left shadow-xl">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-semibold">US30 (Indices - US)</p>
          <span className="text-lg">🇺🇸</span>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-auto">
          <path
            d="M0,45 L25,40 L50,48 L75,30 L100,35 L125,25 L150,20 L175,15 L200,10"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </BlueBannerCard>
      <BlueBannerCard texture="chart" className="w-[200px] md:w-[220px] rounded-2xl p-4 text-left shadow-xl">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-semibold">GOLD (Commodities - Metals)</p>
          <span className="text-lg">🪙</span>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-auto">
          <path
            d="M0,50 L30,45 L60,40 L90,35 L120,30 L150,25 L180,20 L200,15"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="200" cy="15" r="4" fill="#fbbf24" />
        </svg>
      </BlueBannerCard>
    </div>
  );
}
