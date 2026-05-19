const spikes = [
  { x: 18, h: 45, color: '#14b8a6' },
  { x: 32, h: 72, color: '#06b6d4' },
  { x: 46, h: 58, color: '#0ea5e9' },
  { x: 60, h: 95, color: '#3b82f6' },
  { x: 74, h: 110, color: '#6366f1' },
  { x: 88, h: 88, color: '#8b5cf6' },
  { x: 102, h: 102, color: '#a855f7' },
  { x: 116, h: 78, color: '#f59e0b' },
  { x: 130, h: 92, color: '#f97316' },
  { x: 144, h: 70, color: '#fb923c' },
  { x: 158, h: 55, color: '#fbbf24' },
  { x: 172, h: 40, color: '#fcd34d' },
  { x: 186, h: 30, color: '#fde047' },
];

export default function IndexesMarketCard() {
  return (
    <div className="absolute left-[140px] md:left-[160px] top-4 w-[240px] md:w-[280px] rounded-2xl bg-[#0a0f1a] shadow-2xl z-20 border border-gray-800 overflow-hidden">
      <svg viewBox="0 0 220 200" className="w-full h-auto">
        <defs>
          <linearGradient id="indexGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="220" height="200" fill="url(#indexGlow)" />
        {spikes.map((s) => (
          <line
            key={s.x}
            x1={s.x}
            y1={175}
            x2={s.x}
            y2={175 - s.h}
            stroke={s.color}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
        ))}
        <path
          d="M18,175 L32,103 L46,117 L60,80 L74,65 L88,87 L102,73 L116,97 L130,83 L144,105 L158,120 L172,135 L186,145"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
