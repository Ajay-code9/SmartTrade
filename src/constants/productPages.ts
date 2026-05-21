import {
  BadgeDollarSign,
  BarChart2,
  ChartColumn,
  Clock,
  Globe,
  HandHelping,
  Headphones,
  LineChart,
  Monitor,
  Percent,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sprout,
  Tags,
  TrendingUp,
  UserCheck,
  Warehouse,
} from 'lucide-react';
import type { FeatureItem } from '../components/sections/FeatureIconList';
import type { ProductLandingPageProps } from '../components/products/ProductLandingPage';

type ProductPageConfig = Omit<ProductLandingPageProps, 'mockup'>;

export const cfdPage: ProductPageConfig = {
  title: 'CFD Instrument',
  subtitle:
    'Explore the world of Contracts for Difference (CFDs) with TRADEADDA.live. CFDs allow you to speculate on price movements without owning the underlying asset.',
  heading: 'value',
  features: [
    { icon: BarChart2, text: 'Advanced trading platforms' },
    { icon: UserCheck, text: 'Diverse CFD selection' },
    { icon: Percent, text: 'Competitive spreads' },
    { icon: ShieldAlert, text: 'Risk management tools' },
    { icon: LineChart, text: 'Real-time analytics' },
  ],
};

export const stocksPage: ProductPageConfig = {
  title: 'Stocks',
  subtitle:
    'Invest in leading global companies through TRADEADDA.live. Trade stocks on various global exchanges and benefit from market trends.',
  heading: 'why',
  features: [
    { icon: Globe, text: 'Global market access' },
    { icon: HandHelping, text: 'Wide stock coverage' },
    { icon: Clock, text: 'Real-time market insights' },
    { icon: Smartphone, text: 'User-friendly interface' },
    { icon: Headphones, text: 'Expert support' },
  ],
};

export const commodityPage: ProductPageConfig = {
  title: 'Commodity',
  subtitle:
    'Trade precious metals, energy resources, and agricultural products to diversify your portfolio. We offer easy commodity trading.',
  heading: 'why',
  features: [
    { icon: Warehouse, text: 'Wide commodity range' },
    { icon: Tags, text: 'Competitive prices' },
    { icon: LineChart, text: 'Real-time market data' },
    { icon: ShieldCheck, text: 'Secure transactions' },
    { icon: TrendingUp, text: 'Flexible trading hours' },
  ],
};

export const indexesPage: ProductPageConfig = {
  title: 'Indexes',
  subtitle:
    'Invest in the broader market movement with our Index trading. Trade major indices globally and take benefit from market trends.',
  heading: 'why',
  features: [
    { icon: Globe, text: 'Global index access' },
    { icon: Sprout, text: 'Diversification opportunities' },
    { icon: BadgeDollarSign, text: 'Low transaction costs' },
    { icon: Monitor, text: 'Advanced trading tools' },
    { icon: ChartColumn, text: 'Real-time index tracking' },
  ],
};
