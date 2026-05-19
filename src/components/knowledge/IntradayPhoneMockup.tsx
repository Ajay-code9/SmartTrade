export default function IntradayPhoneMockup() {
  return (
    <div className="relative z-10 w-[200px] md:w-[220px] shrink-0">
      <div className="rounded-[2rem] border-4 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
        <div className="h-6 bg-gray-800 flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-600" />
        </div>
        <div className="px-4 py-4 bg-gray-900 text-center">
          <p className="text-white text-lg font-bold">$ 5 864.81</p>
          <p className="text-green-400 text-xs mt-1">+0.87 (+1.13%)</p>
          <svg viewBox="0 0 180 60" className="w-full h-auto my-4">
            <path
              d="M0,45 L30,40 L60,50 L90,25 L120,35 L150,20 L180,30"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
            />
            <path
              d="M0,45 L30,40 L60,50 L90,25 L120,35 L150,20 L180,30 L180,60 L0,60 Z"
              fill="#a855f7"
              opacity="0.15"
            />
          </svg>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button type="button" className="py-2 rounded-lg bg-teal-500 text-white text-sm font-bold">
              SELL
            </button>
            <button type="button" className="py-2 rounded-lg bg-red-500 text-white text-sm font-bold">
              BUY
            </button>
          </div>
        </div>
        <div className="h-8 bg-gray-800" />
      </div>
    </div>
  );
}
