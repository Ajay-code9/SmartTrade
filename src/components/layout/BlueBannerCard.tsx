import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { BannerBackground } from './BannerBackground';

type BlueBannerCardProps = {
  children: ReactNode;
  className?: string;
};

/** Blue promo card / strip with shared banner background image */
export default function BlueBannerCard({ children, className }: BlueBannerCardProps) {
  return (
    <div className={cn('relative overflow-hidden text-center banner-surface', className)}>
      <BannerBackground />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
