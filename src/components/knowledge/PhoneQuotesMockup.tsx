import PhoneFrame from '../mockups/PhoneFrame';

const quotes = [
  { pair: 'AUDCAD', bid: '0.9124', ask: '0.9128' },
  { pair: 'AUDCHF', bid: '0.5841', ask: '0.5846' },
  { pair: 'AUDJPY', bid: '98.42', ask: '98.48' },
  { pair: 'AUDNZD', bid: '1.0892', ask: '1.0897' },
  { pair: 'AUDUSD', bid: '0.6612', ask: '0.6618' },
];

export default function PhoneQuotesMockup() {
  return (
    <PhoneFrame title="Quotes">
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
    </PhoneFrame>
  );
}
