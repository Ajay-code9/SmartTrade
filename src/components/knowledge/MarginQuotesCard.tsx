const pairs = [
  { pair: 'AUDCAD', sell: '0.9124', buy: '0.9128', sellRed: true },
  { pair: 'AUDCHF', sell: '0.5841', buy: '0.5846', sellRed: true },
  { pair: 'AUDJPY', sell: '98.42', buy: '98.48', sellRed: true },
  { pair: 'AUDNZD', sell: '1.0892', buy: '1.0897', sellRed: false },
  { pair: 'EURJPY', sell: '162.45', buy: '162.52', sellRed: false },
];

export default function MarginQuotesCard() {
  return (
    <div className="absolute left-[150px] md:left-[170px] top-4 w-[260px] md:w-[300px] rounded-xl bg-white shadow-2xl z-20 border border-gray-100 overflow-hidden">
      <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 text-[10px] text-gray-500 grid grid-cols-4 gap-1">
        <span>Time</span>
        <span>Pair</span>
        <span className="text-center">Sell</span>
        <span className="text-center">Buy</span>
      </div>
      {pairs.map((p) => (
        <div key={p.pair} className="px-3 py-2 border-b border-gray-50 last:border-0">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px] text-gray-400">08:17:01</span>
            <span className="text-xs font-semibold text-gray-800">{p.pair}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className={`text-[10px] py-1.5 rounded font-semibold text-white ${p.sellRed ? 'bg-red-500' : 'bg-brand-blue'}`}
            >
              Sell {p.sell}
            </button>
            <button
              type="button"
              className={`text-[10px] py-1.5 rounded font-semibold text-white ${p.sellRed ? 'bg-red-500' : 'bg-brand-blue'}`}
            >
              Buy {p.buy}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
