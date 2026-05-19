const candles = [
  { x: 24, h: 32, y: 48, up: true },
  { x: 48, h: 44, y: 36, up: false },
  { x: 72, h: 28, y: 52, up: true },
  { x: 96, h: 50, y: 30, up: false },
  { x: 120, h: 38, y: 42, up: true },
  { x: 144, h: 55, y: 25, up: false },
  { x: 168, h: 30, y: 50, up: true },
  { x: 192, h: 42, y: 38, up: true },
];

export default function StocksChartCard() {
  return (
    <div className="absolute left-[140px] md:left-[160px] top-4 w-[280px] md:w-[320px] rounded-2xl bg-gradient-to-br from-[#1e3a8a]/90 to-[#3b82f6]/80 backdrop-blur shadow-2xl z-20 border border-blue-300/30 p-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 280 160">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={i} x1={0} y1={20 + i * 22} x2={280} y2={20 + i * 22} stroke="white" strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={i} x1={35 * i} y1={0} x2={35 * i} y2={160} stroke="white" strokeWidth="0.5" />
          ))}
        </svg>
      </div>
      <svg viewBox="0 0 220 130" className="w-full h-auto relative z-10">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {candles.map((c, i) => (
          <g key={i} filter="url(#glow)">
            <line x1={c.x + 6} y1={c.y} x2={c.x + 6} y2={c.y + c.h} stroke="#93c5fd" strokeWidth="1.5" />
            <rect
              x={c.x}
              y={c.up ? c.y + c.h - 18 : c.y}
              width="12"
              height="18"
              fill={c.up ? '#60a5fa' : '#f97316'}
              rx="1"
            />
          </g>
        ))}
        <path
          d="M10,95 L40,80 L70,88 L100,60 L130,70 L160,45 L190,55 L210,35"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
