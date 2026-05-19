const barHeights = [40, 70, 55, 90, 65];

export default function CommodityGlobeGoldCard() {
  return (
    <div className="absolute left-[140px] md:left-[160px] top-4 w-[260px] md:w-[300px] rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1d4ed8] shadow-2xl z-20 border border-blue-400/20 p-5 overflow-hidden">
      <svg viewBox="0 0 260 170" className="w-full h-auto">
        {barHeights.map((h, i) => (
          <rect
            key={i}
            x={20 + i * 48}
            y={150 - h}
            width="28"
            height={h}
            fill="#3b82f6"
            opacity="0.35"
            rx="2"
          />
        ))}
        <rect x="55" y="118" width="36" height="22" fill="#fbbf24" rx="2" />
        <rect x="95" y="112" width="36" height="28" fill="#f59e0b" rx="2" />
        <rect x="135" y="118" width="36" height="22" fill="#fbbf24" rx="2" />
        <rect x="75" y="128" width="28" height="14" fill="#d97706" rx="1" />
        <rect x="115" y="128" width="28" height="14" fill="#d97706" rx="1" />
        <circle cx="130" cy="72" r="42" fill="#3b82f6" opacity="0.95" />
        <circle cx="130" cy="72" r="42" fill="none" stroke="#60a5fa" strokeWidth="2" />
        <ellipse cx="130" cy="72" rx="42" ry="14" fill="none" stroke="#93c5fd" strokeWidth="1" opacity="0.7" />
        <path d="M88,72 Q130,42 172,72 Q130,102 88,72" fill="none" stroke="#93c5fd" strokeWidth="1.5" />
        <path d="M130,30 L130,114" stroke="#93c5fd" strokeWidth="1" opacity="0.5" />
        <circle cx="48" cy="48" r="4" fill="#60a5fa" />
        <circle cx="212" cy="52" r="4" fill="#60a5fa" />
        <circle cx="40" cy="95" r="3" fill="#60a5fa" />
        <circle cx="220" cy="90" r="3" fill="#60a5fa" />
        <line x1="48" y1="48" x2="88" y2="55" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
        <line x1="212" y1="52" x2="172" y2="55" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
        <line x1="40" y1="95" x2="88" y2="88" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
        <line x1="220" y1="90" x2="172" y2="88" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
}
