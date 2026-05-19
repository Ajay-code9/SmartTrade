/** Static files — see `publicDir` in vite.config.ts */
export const BANNER_BG_IMAGE = '/bg-images/bannerbg-scaled.webp';
export const BANNER_BG_ALT_IMAGE = '/bg-images/bg-1.webp';
export const LOGO_IMAGE = '/logo.svg';

/** Candle watermark vs alternate chart texture — alternate across blue sections */
export type BannerTexture = 'candles' | 'chart';

export const BANNER_TEXTURE_SRC: Record<BannerTexture, string> = {
  candles: BANNER_BG_IMAGE,
  chart: BANNER_BG_ALT_IMAGE,
};
