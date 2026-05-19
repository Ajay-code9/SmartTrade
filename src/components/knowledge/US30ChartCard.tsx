import BlueBannerCard from '../layout/BlueBannerCard';

export default function US30ChartCard() {
  const timeframes = ['1H', '4H', '6H', '12H', '1W'];

  return (
    <BlueBannerCard
      texture="chart"
      className="w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] rounded-2xl shadow-2xl p-4 text-left shrink-0"
    >
      <p className="text-sm font-semibold mb-3">US30 (Indices - US)</p>
      <svg viewBox="0 0 260 100" className="w-full h-auto mb-3">
        {[40, 55, 45, 70, 50, 65, 40, 75, 55, 80].map((h, i) => (
          <rect
            key={i}
            x={8 + i * 25}
            y={100 - h}
            width="14"
            height={h}
            fill={i % 2 === 0 ? '#4ade80' : '#f87171'}
            opacity="0.9"
          />
        ))}
      </svg>
      <div className="flex gap-2 flex-wrap justify-center">
        {timeframes.map((tf) => (
          <span
            key={tf}
            className={`text-xs px-2 py-0.5 rounded-full ${tf === '1W' ? 'bg-brand-orange font-semibold' : 'bg-white/20'}`}
          >
            {tf}
          </span>
        ))}
      </div>
    </BlueBannerCard>
  );
}
