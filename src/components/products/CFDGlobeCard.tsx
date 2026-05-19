export default function CFDGlobeCard() {
  return (
    <div className="absolute left-[140px] md:left-[160px] top-4 w-[260px] md:w-[300px] rounded-2xl bg-white shadow-xl z-20 border border-gray-100 p-5">
      <svg viewBox="0 0 260 180" className="w-full h-auto" aria-hidden>
        {/* Globe */}
        <circle cx="130" cy="88" r="52" fill="#3b82f6" opacity="0.9" />
        <ellipse cx="130" cy="88" rx="52" ry="52" fill="none" stroke="#1d4ed8" strokeWidth="2" />
        <path
          d="M78,88 Q130,55 182,88 Q130,121 78,88"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.5"
        />
        <path d="M130,36 L130,140" stroke="#93c5fd" strokeWidth="1" opacity="0.6" />
        <path d="M78,88 L182,88" stroke="#93c5fd" strokeWidth="1" opacity="0.6" />

        {/* Buildings on globe */}
        <rect x="108" y="48" width="14" height="28" fill="#ef4444" rx="1" />
        <rect x="124" y="42" width="12" height="34" fill="#3b82f6" rx="1" />
        <rect x="138" y="50" width="16" height="26" fill="#22c55e" rx="1" />

        {/* Side icons */}
        <circle cx="52" cy="72" r="14" fill="#dbeafe" />
        <rect x="44" y="66" width="16" height="12" fill="#3b82f6" rx="1" />
        <circle cx="208" cy="72" r="14" fill="#dbeafe" />
        <path d="M200,78 L208,70 L216,78 L208,86 Z" fill="#3b82f6" />
        <circle cx="48" cy="108" r="12" fill="#dbeafe" />
        <rect x="42" y="102" width="4" height="14" fill="#3b82f6" />
        <rect x="48" y="98" width="4" height="18" fill="#22c55e" />
        <rect x="54" y="104" width="4" height="12" fill="#f97316" />

        {/* Money bags & coins */}
        <ellipse cx="105" cy="138" rx="18" ry="14" fill="#92400e" />
        <path d="M95,128 Q105,118 115,128" fill="#b45309" stroke="#78350f" strokeWidth="1" />
        <ellipse cx="155" cy="138" rx="18" ry="14" fill="#92400e" />
        <path d="M145,128 Q155,118 165,128" fill="#b45309" stroke="#78350f" strokeWidth="1" />
        <circle cx="130" cy="148" r="6" fill="#fbbf24" />
        <circle cx="118" cy="152" r="5" fill="#fbbf24" />
        <circle cx="142" cy="152" r="5" fill="#fbbf24" />

        {/* Document & scroll */}
        <rect x="168" y="128" width="22" height="28" rx="2" fill="#f8fafc" stroke="#cbd5e1" />
        <circle cx="179" cy="138" r="5" fill="#ef4444" opacity="0.8" />
        <rect x="72" y="130" width="18" height="24" rx="10" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
      </svg>
    </div>
  );
}
