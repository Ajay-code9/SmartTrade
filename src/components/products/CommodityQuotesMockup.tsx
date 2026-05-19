const quotes = [
  { pair: 'AUDCAD', bid: '0.9124', ask: '0.9128' },
  { pair: 'AUDCHF', bid: '0.5841', ask: '0.5846' },
  { pair: 'AUDJPY', bid: '98.42', ask: '0.9848' },
  { pair: 'EURUSD', bid: '1.0842', ask: '1.0848' },
];

export default function CommodityQuotesMockup() {
  return (
    <div className="relative z-10 w-[200px] md:w-[220px] shrink-0">
      <div className="rounded-[2rem] border-4 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
        <div className="h-6 bg-gray-800 flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-600" />
        </div>
        <div className="px-3 py-2 bg-gray-900 border-b border-gray-700">
          <p className="text-white text-sm font-semibold text-center">Quotes</p>
        </div>
        <div className="px-2 py-2">
          <div className="bg-gray-800 rounded px-2 py-1.5 mb-2">
            <p className="text-gray-400 text-[10px]">Search by Script Name</p>
          </div>
          <div className="grid grid-cols-3 text-[9px] text-gray-500 mb-1 px-1">
            <span>Pair</span>
            <span className="text-center text-red-400">Bid</span>
            <span className="text-right text-blue-400">Ask</span>
          </div>
          {quotes.map((q) => (
            <div key={q.pair} className="grid grid-cols-3 text-[10px] py-1.5 border-b border-gray-800 px-1">
              <span className="text-gray-300">{q.pair}</span>
              <span className="text-center text-red-400">{q.bid}</span>
              <span className="text-right text-blue-400">{q.ask}</span>
            </div>
          ))}
          <div className="grid grid-cols-3 text-[10px] py-2 px-1 mt-1 bg-gray-800/60 rounded">
            <span className="text-amber-400 font-medium">Gold 1 Gram</span>
            <span className="text-center text-white font-semibold col-span-2">1198.8</span>
          </div>
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
