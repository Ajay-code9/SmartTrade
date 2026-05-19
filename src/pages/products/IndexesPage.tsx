import IndexesQuotesMockup from '../../components/products/IndexesQuotesMockup';
import IndexesMarketCard from '../../components/products/IndexesMarketCard';
import ProductLandingPage from '../../components/products/ProductLandingPage';
import { indexesPage } from '../../constants/productPages';

export default function IndexesPage() {
  return (
    <ProductLandingPage
      {...indexesPage}
      mockup={
        <>
          <IndexesQuotesMockup />
          <IndexesMarketCard />
        </>
      }
    />
  );
}
