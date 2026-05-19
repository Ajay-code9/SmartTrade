/** Routes that start with white content — navbar stays solid blue */
export const ROUTES_WITHOUT_TOP_BANNER = ['/news-blogs'] as const;

export function hasTopBanner(pathname: string): boolean {
  return !ROUTES_WITHOUT_TOP_BANNER.some((p) => pathname === p);
}
