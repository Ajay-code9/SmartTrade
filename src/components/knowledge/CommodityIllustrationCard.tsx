export default function CommodityIllustrationCard() {
  return (
    <div className="absolute left-[150px] md:left-[170px] top-6 w-[240px] md:w-[280px] rounded-2xl bg-white/80 backdrop-blur shadow-xl p-6 z-20 border border-gray-100">
      <svg viewBox="0 0 240 140" className="w-full h-auto">
        {[60, 90, 75, 110, 85].map((h, i) => (
          <rect key={i} x={20 + i * 35} y={120 - h} width="22" height={h} fill="#2b59ff" opacity="0.7" rx="2" />
        ))}
        <path d="M15,100 L60,70 L100,85 L140,45 L180,55 L220,25" fill="none" stroke="#2b59ff" strokeWidth="3" />
        <polygon points="220,25 210,35 225,32" fill="#2b59ff" />
        <ellipse cx="50" cy="125" rx="18" ry="8" fill="#fbbf24" />
        <ellipse cx="75" cy="122" rx="18" ry="8" fill="#fbbf24" />
        <ellipse cx="100" cy="125" rx="18" ry="8" fill="#fbbf24" />
        <rect x="170" y="108" width="40" height="22" rx="3" fill="#22c55e" opacity="0.8" />
      </svg>
    </div>
  );
}
