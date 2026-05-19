interface CommunityBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  footerText?: string;
  variant?: 'orange' | 'light';
}

function ChartWatermark({ fill, opacity }: { fill: string; opacity: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${opacity}`}>
      <svg width="100%" height="100%" viewBox="0 0 400 200" className="w-full h-full">
        {[...Array(14)].map((_, i) => (
          <rect key={i} x={i * 28} y={30} width="16" height={50 + (i % 4) * 20} fill={fill} />
        ))}
      </svg>
    </div>
  );
}

export default function CommunityBanner({
  title = 'Join the SmartTrade community to avail the benefits!',
  subtitle = "Improving people's financial lives through planning, trading, and earning!",
  buttonText = 'Trade Now',
  footerText,
  variant = 'orange',
}: CommunityBannerProps) {
  if (variant === 'light') {
    return (
      <section className="py-12 md:py-20 bg-white pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-gray-200 bg-white py-14 md:py-16 px-6 md:px-10 text-center overflow-hidden">
            <ChartWatermark fill="#64748b" opacity="opacity-[0.04]" />
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 inline-block bg-brand-blue text-white text-sm font-semibold px-5 py-1.5 rounded-full">
              Community
            </span>
            <h2 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-3 mt-2">{title}</h2>
            <p className="relative z-10 text-gray-500 mb-8 max-w-xl mx-auto">{subtitle}</p>
            <button
              type="button"
              className="relative z-10 px-10 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
            >
              {buttonText}
            </button>
            {footerText && <p className="relative z-10 text-gray-400 text-sm mt-4">{footerText}</p>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-brand-orange text-white py-12 md:py-14 px-6 md:px-10 text-center overflow-hidden">
          <ChartWatermark fill="white" opacity="opacity-10" />
          <span className="relative z-10 inline-block bg-brand-blue text-white text-sm font-semibold px-5 py-1 rounded-full mb-4">
            Community
          </span>
          <h2 className="relative z-10 text-xl md:text-2xl font-bold mb-3">{title}</h2>
          <p className="relative z-10 text-white/90 mb-8 max-w-xl mx-auto">{subtitle}</p>
          <button
            type="button"
            className="relative z-10 px-10 py-3 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </button>
          {footerText && <p className="relative z-10 text-white/80 text-sm mt-4">{footerText}</p>}
        </div>
      </div>
    </section>
  );
}
