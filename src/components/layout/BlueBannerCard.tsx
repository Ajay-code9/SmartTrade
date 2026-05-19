import type { ReactNode } from 'react';
import type { BannerTexture } from '../../constants/assets';
import { cn } from '../../lib/cn';
import { BannerBackground } from './BannerBackground';

type BlueBannerCardProps = {
  children: ReactNode;
  className?: string;
  texture?: BannerTexture;
};

/** Blue promo card / strip with shared banner background image */
export default function BlueBannerCard({ children, className, texture = 'candles' }: BlueBannerCardProps) {
  return (
    <div className={cn('relative overflow-hidden text-center banner-surface', className)}>
      <BannerBackground texture={texture} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
