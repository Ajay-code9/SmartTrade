import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { BANNER_BG_IMAGE } from '../../constants/assets';
import SectionBottomNotch from './SectionBottomNotch';

export type BannerBackgroundVariant = 'gradient' | 'solid';

type BannerBackgroundProps = {
  className?: string;
  /** gradient = hero only; solid = header blue on all other blue surfaces */
  variant?: BannerBackgroundVariant;
};

export function BannerBackground({ className, variant = 'solid' }: BannerBackgroundProps) {
  return (
    <>
      <div
        aria-hidden
        className={cn(
          'absolute inset-0',
          variant === 'gradient' ? 'banner-bg-gradient' : 'banner-bg-solid',
          className,
        )}
      />

      <div
        aria-hidden
        className="absolute inset-0 banner-chart-grid opacity-60"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat banner-candle-layer"
        style={{ backgroundImage: `url(${BANNER_BG_IMAGE})` }}
      />
    </>
  );
}

type BannerSectionProps = {
  children: ReactNode;
  className?: string;
  mergeWithNav?: boolean;
  /** Only homepage hero uses gradient; other banner sections use solid header blue */
  gradient?: boolean;
  bottomNotch?: 'sm' | 'md';
};

export default function BannerSection({
  children,
  className,
  mergeWithNav,
  gradient = false,
  bottomNotch,
}: BannerSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-x-hidden banner-surface',
        mergeWithNav && '-mt-20 banner-below-nav',
        className,
      )}
    >
      <BannerBackground variant={gradient ? 'gradient' : 'solid'} />
      <div className="relative z-10">{children}</div>
      {bottomNotch ? <SectionBottomNotch size={bottomNotch} /> : null}
    </section>
  );
}
