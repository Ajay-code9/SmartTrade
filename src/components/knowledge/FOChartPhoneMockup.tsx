export default function FOChartPhoneMockup() {
  const candles = [45, 60, 35, 70, 50, 65, 40, 75, 55, 80];

  return (
    <div className="relative z-10 w-[200px] md:w-[220px] shrink-0">
      <div className="rounded-[2rem] border-4 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
        <div className="h-6 bg-gray-800 flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-600" />
        </div>
        <div className="px-3 py-2 bg-gray-900 border-b border-gray-700">
          <p className="text-white text-sm font-semibold text-center">Chart</p>
        </div>
        <div className="px-2 py-3 bg-[#0f1419]">
          <p className="text-white text-xs font-semibold mb-2">EURUSD</p>
          <svg viewBox="0 0 180 70" className="w-full h-auto mb-2">
            {candles.map((h, i) => (
              <rect
                key={i}
                x={4 + i * 17}
                y={70 - h}
                width="10"
                height={h}
                fill={i % 2 === 0 ? '#22c55e' : '#ef4444'}
              />
            ))}
          </svg>
          <svg viewBox="0 0 180 30" className="w-full h-auto opacity-70">
            <path d="M0,20 L30,15 L60,22 L90,10 L120,18 L150,8 L180,12" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
          </svg>
          <p className="text-[9px] text-gray-500 mt-1 text-center">MACD</p>
        </div>
        <div className="h-10 bg-gray-800 flex items-center justify-around px-2 border-t border-gray-700">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-5 h-5 rounded bg-gray-600" />
          ))}
        </div>
      </div>
    </div>
  );
}

