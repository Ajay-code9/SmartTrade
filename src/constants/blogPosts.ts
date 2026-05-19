export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  category?: string;
  excerpt?: string;
}

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;

export const featuredPost: BlogPost = {
  id: 'featured-1',
  title: 'The Free Vs Paid Equity Trading Platform in',
  date: 'May 6, 2026',
  category: 'trading platform in india',
  excerpt:
    '"Think twice before you spend once." Choosing the right equity trading platform in India is more important than ever. Compare free and paid options to find what fits your trading style.',
  image: img('1551288049-bebda4e38f71'),
};

export const featuredSlides = [
  featuredPost,
  {
    id: 'featured-2',
    title: 'FREE VS PAID EQUITY TRADING PLATFORM IN INDIA',
    date: 'May 6, 2026',
    category: 'equity trading',
    excerpt: 'Which One is Right for You? A complete guide to choosing between free and paid platforms.',
    image: img('1611974717482-482fe0051142'),
  },
];

export const recentPosts: BlogPost[] = [
  {
    id: 'r1',
    title: 'How to Convert Physical Shares to Demat in 2026: Complete Guide',
    date: 'May 16, 2026',
    image: img('1611974717482-482fe0051142'),
  },
  {
    id: 'r2',
    title: 'NSDL vs CDSL: Which Depository Is Better in 2026?',
    date: 'May 15, 2026',
    image: img('1590283603385-17ffb3a7f29f'),
  },
  {
    id: 'r3',
    title: 'Upcoming IPO 2026 in India: Complete List, Dates, GMP, Price',
    date: 'May 2, 2026',
    image: img('1642790103517-18107388d748'),
  },
  {
    id: 'r4',
    title: 'Best Demat Account for Beginners in India 2026',
    date: 'April 28, 2026',
    image: img('1460925895917-afdab827c52f'),
  },
  {
    id: 'r5',
    title: 'Intraday Trading Tips for New Traders in 2026',
    date: 'April 22, 2026',
    image: img('1551288049-bebda4e38f71'),
  },
  {
    id: 'r6',
    title: 'How to Use Stop-Loss Orders Effectively',
    date: 'April 18, 2026',
    image: img('1590283603385-17ffb3a7f29f'),
  },
  {
    id: 'r7',
    title: 'Understanding STT, Brokerage and Other Trading Charges',
    date: 'April 10, 2026',
    image: img('1642790103517-18107388d748'),
  },
  {
    id: 'r8',
    title: 'Commodity Trading in India: A Beginner’s Roadmap',
    date: 'April 5, 2026',
    image: img('1611974717482-482fe0051142'),
  },
  {
    id: 'r9',
    title: 'Bank Nifty vs Nifty: Which Index Should You Trade?',
    date: 'March 25, 2026',
    image: img('1460925895917-afdab827c52f'),
  },
  {
    id: 'r10',
    title: 'How to Read Candlestick Charts for Day Trading',
    date: 'March 20, 2026',
    image: img('1551288049-bebda4e38f71'),
  },
  {
    id: 'r11',
    title: 'Gold vs Silver: Which Metal to Trade This Year?',
    date: 'March 12, 2026',
    image: img('1590283603385-17ffb3a7f29f'),
  },
  {
    id: 'r12',
    title: 'F&O Expiry Day Strategies Every Trader Should Know',
    date: 'March 8, 2026',
    image: img('1642790103517-18107388d748'),
  },
  {
    id: 'r13',
    title: 'How to Avoid Overtrading and Protect Your Capital',
    date: 'February 28, 2026',
    image: img('1611974717482-482fe0051142'),
  },
  {
    id: 'r14',
    title: 'Top 5 Mistakes New Equity Traders Make',
    date: 'February 22, 2026',
    image: img('1460925895917-afdab827c52f'),
  },
  {
    id: 'r15',
    title: 'Crude Oil Trading: Key Events That Move Prices',
    date: 'February 15, 2026',
    image: img('1551288049-bebda4e38f71'),
  },
  {
    id: 'r16',
    title: 'What Is Margin Trading and How Does It Work?',
    date: 'February 8, 2026',
    image: img('1590283603385-17ffb3a7f29f'),
  },
  {
    id: 'r17',
    title: 'SmartTrade.live Platform Walkthrough for Beginners',
    date: 'January 30, 2026',
    image: img('1642790103517-18107388d748'),
  },
  {
    id: 'r18',
    title: 'How to Pick Stocks for Swing Trading',
    date: 'January 22, 2026',
    image: img('1611974717482-482fe0051142'),
  },
  {
    id: 'r19',
    title: 'Risk Management Rules for Leveraged Trading',
    date: 'January 15, 2026',
    image: img('1460925895917-afdab827c52f'),
  },
  {
    id: 'r20',
    title: 'Market Holidays 2026: NSE & BSE Trading Calendar',
    date: 'January 8, 2026',
    image: img('1551288049-bebda4e38f71'),
  },
];

export const RECENT_POSTS_PER_PAGE = 4;
export const RECENT_POSTS_TOTAL_PAGES = Math.ceil(recentPosts.length / RECENT_POSTS_PER_PAGE);

export const futureTradingPosts: BlogPost[] = [
  {
    id: 'ft1',
    title: 'Futures Trading Basics for Beginners in India',
    date: 'April 12, 2026',
    image: img('1642790103517-18107388d748'),
  },
  {
    id: 'ft2',
    title: 'How to Read Futures Contract Specifications',
    date: 'March 30, 2026',
    image: img('1590283603385-17ffb3a7f29f'),
  },
  {
    id: 'ft3',
    title: 'Index Futures vs Stock Futures: Key Differences',
    date: 'March 18, 2026',
    image: img('1611974717482-482fe0051142'),
  },
  {
    id: 'ft4',
    title: 'Risk Management in Futures Trading',
    date: 'March 5, 2026',
    image: img('1551288049-bebda4e38f71'),
  },
];

export const marginTradingPosts: BlogPost[] = [
  {
    id: 'mt1',
    title: '500X Margin Trading: How to Leverage More Capital',
    date: 'April 20, 2026',
    image: img('1611974717482-482fe0051142'),
  },
  {
    id: 'mt2',
    title: '7 Key Things That Changed for Market Overnight',
    date: 'April 14, 2026',
    image: img('1590283603385-17ffb3a7f29f'),
  },
  {
    id: 'mt3',
    title: 'Nasdaq tumbles 400 points—how is a Chinese AI app driving markets?',
    date: 'April 8, 2026',
    image: img('1551288049-bebda4e38f71'),
  },
  {
    id: 'mt4',
    title: 'Margin Trading: Know the Risks and Rewards',
    date: 'March 22, 2026',
    image: img('1642790103517-18107388d748'),
  },
];

export const mainHighlightPosts: BlogPost[] = [
  {
    id: 'm1',
    title: 'SmartTrade.live Review 2026: Features, Fees & Verdict',
    date: 'April 3, 2026',
    image: img('1460925895917-afdab827c52f'),
  },
  {
    id: 'm2',
    title: 'How to Deposit & Withdraw on SmartTrade.live',
    date: 'March 28, 2026',
    image: img('1611974717482-482fe0051142'),
  },
  {
    id: 'm3',
    title: 'SmartTrade.live vs Zerodha vs Upstox: Which Broker Wins?',
    date: 'March 15, 2026',
    image: img('1551288049-bebda4e38f71'),
  },
];

export const trendingStocksPosts: BlogPost[] = [
  {
    id: 'ts1',
    title: 'Best Apps for Trading Stocks in India in 2026',
    date: 'February 19, 2026',
    image: img('1611974717482-482fe0051142'),
  },
  {
    id: 'ts2',
    title: 'Top 10 Stocks to Watch This Quarter',
    date: 'February 12, 2026',
    image: img('1590283603385-17ffb3a7f29f'),
  },
  {
    id: 'ts3',
    title: 'How to Build a Diversified Stock Portfolio',
    date: 'February 5, 2026',
    image: img('1460925895917-afdab827c52f'),
  },
];

export const dayTradingPosts: BlogPost[] = [
  {
    id: 'dt1',
    title: 'Bull vs Bear Markets: What Day Traders Need to Know',
    date: 'January 28, 2026',
    image: img('1551288049-bebda4e38f71'),
  },
  {
    id: 'dt2',
    title: 'SEBI New Rules for Intraday Trading in 2026',
    date: 'January 20, 2026',
    image: img('1642790103517-18107388d748'),
  },
  {
    id: 'dt3',
    title: 'Gold Trading Strategies for Indian Day Traders',
    date: 'January 14, 2026',
    image: img('1611974717482-482fe0051142'),
  },
];
