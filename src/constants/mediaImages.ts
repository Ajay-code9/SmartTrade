/** Local media under pubic/media/ — reliable for client demos (no broken hotlinks). */
export const MEDIA_IMAGES = {
  tradingChart: '/media/trading-chart.webp',
  tradingDashboard: '/media/trading-dashboard.webp',
  laptopTrading: '/media/laptop-trading.webp',
  mobileTrading: '/media/mobile-trading.webp',
  financeStocks: '/media/finance-stocks.webp',
  marketCurrency: '/media/market-currency.webp',
  analyticsScreen: '/media/analytics-screen.webp',
} as const;

export type MediaImageKey = keyof typeof MEDIA_IMAGES;
