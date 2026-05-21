import { MEDIA_IMAGES } from './mediaImages';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  category?: string;
  excerpt?: string;
}

export const featuredPost: BlogPost = {
  id: 'featured-1',
  title: 'Free vs paid equity trading platforms in India',
  date: 'May 6, 2026',
  category: 'trading platform in india',
  excerpt:
    '"Think twice before you spend once." Choosing the right equity trading platform in India is more important than ever. Compare free and paid options to find what fits your trading style.',
  image: MEDIA_IMAGES.tradingDashboard,
};

export const featuredSlides = [
  featuredPost,
  {
    id: 'featured-2',
    title: 'Free vs paid equity trading platforms in India',
    date: 'May 6, 2026',
    category: 'equity trading',
    excerpt: 'Which One is Right for You? A complete guide to choosing between free and paid platforms.',
    image: MEDIA_IMAGES.laptopTrading,
  },
];

export const recentPosts: BlogPost[] = [
  {
    id: 'r1',
    title: 'How to convert physical shares to demat',
    date: 'May 16, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
  {
    id: 'r2',
    title: 'NSDL vs CDSL: how depositories work',
    date: 'May 15, 2026',
    image: MEDIA_IMAGES.tradingChart,
  },
  {
    id: 'r3',
    title: 'Upcoming IPOs in India: what to check before applying',
    date: 'May 2, 2026',
    image: MEDIA_IMAGES.financeStocks,
  },
  {
    id: 'r4',
    title: 'Opening a demat account as a beginner',
    date: 'April 28, 2026',
    image: MEDIA_IMAGES.analyticsScreen,
  },
  {
    id: 'r5',
    title: 'Intraday trading basics for new traders',
    date: 'April 22, 2026',
    image: MEDIA_IMAGES.tradingDashboard,
  },
  {
    id: 'r6',
    title: 'How to Use Stop-Loss Orders Effectively',
    date: 'April 18, 2026',
    image: MEDIA_IMAGES.tradingChart,
  },
  {
    id: 'r7',
    title: 'Understanding STT, Brokerage and Other Trading Charges',
    date: 'April 10, 2026',
    image: MEDIA_IMAGES.financeStocks,
  },
  {
    id: 'r8',
    title: 'Commodity Trading in India: A Beginner’s Roadmap',
    date: 'April 5, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
  {
    id: 'r9',
    title: 'Bank Nifty vs Nifty: Which Index Should You Trade?',
    date: 'March 25, 2026',
    image: MEDIA_IMAGES.analyticsScreen,
  },
  {
    id: 'r10',
    title: 'How to Read Candlestick Charts for Day Trading',
    date: 'March 20, 2026',
    image: MEDIA_IMAGES.tradingDashboard,
  },
  {
    id: 'r11',
    title: 'Gold vs Silver: Which Metal to Trade This Year?',
    date: 'March 12, 2026',
    image: MEDIA_IMAGES.tradingChart,
  },
  {
    id: 'r12',
    title: 'F&O Expiry Day Strategies Every Trader Should Know',
    date: 'March 8, 2026',
    image: MEDIA_IMAGES.financeStocks,
  },
  {
    id: 'r13',
    title: 'How to Avoid Overtrading and Protect Your Capital',
    date: 'February 28, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
  {
    id: 'r14',
    title: 'Top 5 Mistakes New Equity Traders Make',
    date: 'February 22, 2026',
    image: MEDIA_IMAGES.analyticsScreen,
  },
  {
    id: 'r15',
    title: 'Crude Oil Trading: Key Events That Move Prices',
    date: 'February 15, 2026',
    image: MEDIA_IMAGES.tradingDashboard,
  },
  {
    id: 'r16',
    title: 'What Is Margin Trading and How Does It Work?',
    date: 'February 8, 2026',
    image: MEDIA_IMAGES.tradingChart,
  },
  {
    id: 'r17',
    title: 'TRADEADDA.live Platform Walkthrough for Beginners',
    date: 'January 30, 2026',
    image: MEDIA_IMAGES.financeStocks,
  },
  {
    id: 'r18',
    title: 'How to Pick Stocks for Swing Trading',
    date: 'January 22, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
  {
    id: 'r19',
    title: 'Risk Management Rules for Leveraged Trading',
    date: 'January 15, 2026',
    image: MEDIA_IMAGES.analyticsScreen,
  },
  {
    id: 'r20',
    title: 'Market Holidays 2026: NSE & BSE Trading Calendar',
    date: 'January 8, 2026',
    image: MEDIA_IMAGES.tradingDashboard,
  },
];

export const RECENT_POSTS_PER_PAGE = 4;
export const RECENT_POSTS_TOTAL_PAGES = Math.ceil(recentPosts.length / RECENT_POSTS_PER_PAGE);

export const futureTradingPosts: BlogPost[] = [
  {
    id: 'ft1',
    title: 'Futures Trading Basics for Beginners in India',
    date: 'April 12, 2026',
    image: MEDIA_IMAGES.financeStocks,
  },
  {
    id: 'ft2',
    title: 'How to Read Futures Contract Specifications',
    date: 'March 30, 2026',
    image: MEDIA_IMAGES.tradingChart,
  },
  {
    id: 'ft3',
    title: 'Index Futures vs Stock Futures: Key Differences',
    date: 'March 18, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
  {
    id: 'ft4',
    title: 'Risk Management in Futures Trading',
    date: 'March 5, 2026',
    image: MEDIA_IMAGES.tradingDashboard,
  },
];

export const marginTradingPosts: BlogPost[] = [
  {
    id: 'mt1',
    title: 'High margin trading: sizing and risk limits',
    date: 'April 20, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
  {
    id: 'mt2',
    title: '7 Key Things That Changed for Market Overnight',
    date: 'April 14, 2026',
    image: MEDIA_IMAGES.tradingChart,
  },
  {
    id: 'mt3',
    title: 'Overnight gaps: what moved global indices',
    date: 'April 8, 2026',
    image: MEDIA_IMAGES.tradingDashboard,
  },
  {
    id: 'mt4',
    title: 'Margin Trading: Know the Risks and Rewards',
    date: 'March 22, 2026',
    image: MEDIA_IMAGES.financeStocks,
  },
];

export const mainHighlightPosts: BlogPost[] = [
  {
    id: 'm1',
    title: 'TRADEADDA.live Review 2026: Features, Fees & Verdict',
    date: 'April 3, 2026',
    image: MEDIA_IMAGES.analyticsScreen,
  },
  {
    id: 'm2',
    title: 'How to Deposit & Withdraw on TRADEADDA.live',
    date: 'March 28, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
  {
    id: 'm3',
    title: 'TRADEADDA.live vs Zerodha vs Upstox: Which Broker Wins?',
    date: 'March 15, 2026',
    image: MEDIA_IMAGES.tradingDashboard,
  },
];

export const trendingStocksPosts: BlogPost[] = [
  {
    id: 'ts1',
    title: 'Best Apps for Trading Stocks in India in 2026',
    date: 'February 19, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
  {
    id: 'ts2',
    title: 'Top 10 Stocks to Watch This Quarter',
    date: 'February 12, 2026',
    image: MEDIA_IMAGES.tradingChart,
  },
  {
    id: 'ts3',
    title: 'How to Build a Diversified Stock Portfolio',
    date: 'February 5, 2026',
    image: MEDIA_IMAGES.analyticsScreen,
  },
];

export const dayTradingPosts: BlogPost[] = [
  {
    id: 'dt1',
    title: 'Bull vs Bear Markets: What Day Traders Need to Know',
    date: 'January 28, 2026',
    image: MEDIA_IMAGES.tradingDashboard,
  },
  {
    id: 'dt2',
    title: 'SEBI New Rules for Intraday Trading in 2026',
    date: 'January 20, 2026',
    image: MEDIA_IMAGES.financeStocks,
  },
  {
    id: 'dt3',
    title: 'Gold Trading Strategies for Indian Day Traders',
    date: 'January 14, 2026',
    image: MEDIA_IMAGES.laptopTrading,
  },
];
