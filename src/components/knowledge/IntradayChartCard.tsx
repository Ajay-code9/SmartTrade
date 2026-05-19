const candles = [
  { x: 20, h: 35, y: 45, up: true },
  { x: 45, h: 50, y: 30, up: false },
  { x: 70, h: 40, y: 40, up: true },
  { x: 95, h: 55, y: 25, up: false },
  { x: 120, h: 30, y: 50, up: true },
  { x: 145, h: 45, y: 35, up: false },
  { x: 170, h: 25, y: 55, up: true },
];

export default function IntradayChartCard() {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-gray-100 p-4 shrink-0">
      <svg viewBox="0 0 220 120" className="w-full h-auto">
        {candles.map((c, i) => (
          <g key={i}>
            <line x1={c.x + 6} y1={c.y} x2={c.x + 6} y2={c.y + c.h} stroke="#999" strokeWidth="1" />
            <rect
              x={c.x}
              y={c.up ? c.y + c.h - 20 : c.y}
              width="12"
              height="20"
              fill={c.up ? '#22c55e' : '#f97316'}
            />
          </g>
        ))}
        <text x="95" y="18" fontSize="8" fill="#f97316" fontWeight="bold">
          SELL
        </text>
        <text x="40" y="28" fontSize="8" fill="#f97316" fontWeight="bold">
          SELL
        </text>
        <text x="165" y="75" fontSize="8" fill="#22c55e" fontWeight="bold">
          BUY
        </text>
        {['1997', '1998', '1999', '2000', '2001', '2002'].map((year, i) => (
          <text key={year} x={18 + i * 35} y={115} fontSize="7" fill="#666">
            {year}
          </text>
        ))}
      </svg>
    </div>
  );
}
