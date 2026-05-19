/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import WhySmartTradePage from './pages/WhySmartTradePage';
import BecomeAffiliatePage from './pages/BecomeAffiliatePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import TradingPage from './pages/knowledge/TradingPage';
import EquityTradingPage from './pages/knowledge/EquityTradingPage';
import FuturesOptionsPage from './pages/knowledge/FuturesOptionsPage';
import CommodityTradingPage from './pages/knowledge/CommodityTradingPage';
import MarginTradingPage from './pages/knowledge/MarginTradingPage';
import IntradayTradingPage from './pages/knowledge/IntradayTradingPage';
import DabbaTradingPage from './pages/knowledge/DabbaTradingPage';
import CfdInstrumentPage from './pages/products/CfdInstrumentPage';
import StocksPage from './pages/products/StocksPage';
import CommodityPage from './pages/products/CommodityPage';
import IndexesPage from './pages/products/IndexesPage';
import NewsBlogsPage from './pages/NewsBlogsPage';
import ContactUsPage from './pages/ContactUsPage';
import SignUpPage from './pages/auth/SignUpPage';
import LoginPage from './pages/auth/LoginPage';
import ScrollToTop from './components/layout/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-smarttrade" element={<WhySmartTradePage />} />
          <Route path="/become-affiliate" element={<BecomeAffiliatePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="/knowledge/trading" element={<TradingPage />} />
          <Route path="/knowledge/equity-trading" element={<EquityTradingPage />} />
          <Route path="/knowledge/futures-options" element={<FuturesOptionsPage />} />
          <Route path="/knowledge/commodity-trading" element={<CommodityTradingPage />} />
          <Route path="/knowledge/margin-trading" element={<MarginTradingPage />} />
          <Route path="/knowledge/intraday-trading" element={<IntradayTradingPage />} />
          <Route path="/knowledge/dabba-trading" element={<DabbaTradingPage />} />
          <Route path="/products/cfd-instrument" element={<CfdInstrumentPage />} />
          <Route path="/products/stocks" element={<StocksPage />} />
          <Route path="/products/commodity" element={<CommodityPage />} />
          <Route path="/products/indexes" element={<IndexesPage />} />
          <Route path="/news-blogs" element={<NewsBlogsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
