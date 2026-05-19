import { MessageCircle } from 'lucide-react';
import type { BannerTexture } from '../../constants/assets';
import { COMMUNITY_BANNER } from '../../constants/siteCopy';
import { BannerBackground } from '../layout/BannerBackground';

interface CommunityBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  footerText?: string;
  variant?: 'orange' | 'light';
  texture?: BannerTexture;
}

function CommunityBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-1.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/35 ring-4 ring-white ${className}`}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={2.25} aria-hidden />
      Community
    </span>
  );
}

function ChannelPills() {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
        Telegram
      </span>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
        WhatsApp
      </span>
    </div>
  );
}

export default function CommunityBanner({
  title = COMMUNITY_BANNER.title,
  subtitle = COMMUNITY_BANNER.subtitle,
  buttonText = COMMUNITY_BANNER.buttonText,
  footerText,
  variant = 'orange',
  texture = 'chart',
}: CommunityBannerProps) {
  if (variant === 'light') {
    return (
      <section className="bg-white py-12 pb-24 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Badge sits above the card so overflow-hidden never clips it */}
          <div className="relative flex justify-center pb-0">
            <div className="relative z-20 translate-y-1/2">
              <CommunityBadge />
            </div>
          </div>

          <div className="banner-surface relative overflow-hidden rounded-3xl px-6 pb-14 pt-12 text-center shadow-xl shadow-brand-blue/25 ring-1 ring-black/5 md:px-10 md:pb-16 md:pt-14">
            <BannerBackground texture={texture} />
            <div className="relative z-10">
              <h2 className="mb-3 text-xl font-bold md:text-2xl">{title}</h2>
              <p className="mx-auto mb-6 max-w-xl text-base text-white/90 md:text-lg">{subtitle}</p>
              <ChannelPills />
              <button
                type="button"
                className="rounded-full bg-brand-orange px-10 py-3 font-semibold text-white shadow-lg shadow-brand-orange/30 transition-colors hover:bg-[#e85a3c]"
              >
                {buttonText}
              </button>
              {footerText && <p className="mt-4 text-sm text-white/75">{footerText}</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center">
          <div className="relative z-20 translate-y-1/2">
            <CommunityBadge className="ring-4 ring-white" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-brand-orange px-6 pb-12 pt-12 text-center text-white shadow-lg shadow-brand-orange/25 md:px-10 md:pb-14 md:pt-14">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 400 200" className="h-full w-full">
              {[...Array(14)].map((_, i) => (
                <rect key={i} x={i * 28} y={30} width="16" height={50 + (i % 4) * 20} fill="white" />
              ))}
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="mb-3 text-xl font-bold md:text-2xl">{title}</h2>
            <p className="mx-auto mb-6 max-w-xl text-white/90">{subtitle}</p>
            <ChannelPills />
            <button
              type="button"
              className="rounded-full bg-white px-10 py-3 font-semibold text-gray-800 transition-colors hover:bg-gray-100"
            >
              {buttonText}
            </button>
            {footerText && <p className="mt-4 text-sm text-white/80">{footerText}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
