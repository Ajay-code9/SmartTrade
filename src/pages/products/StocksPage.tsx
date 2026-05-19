import IntradayPhoneMockup from '../../components/knowledge/IntradayPhoneMockup';
import StocksChartCard from '../../components/products/StocksChartCard';
import ProductLandingPage from '../../components/products/ProductLandingPage';
import { stocksPage } from '../../constants/productPages';

export default function StocksPage() {
  return (
    <ProductLandingPage {...stocksPage} mockup={<><IntradayPhoneMockup /><StocksChartCard /></>} />
  );
}
