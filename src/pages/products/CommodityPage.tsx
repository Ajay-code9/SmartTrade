import CommodityQuotesMockup from '../../components/products/CommodityQuotesMockup';
import CommodityGlobeGoldCard from '../../components/products/CommodityGlobeGoldCard';
import ProductLandingPage from '../../components/products/ProductLandingPage';
import { commodityPage } from '../../constants/productPages';

export default function CommodityPage() {
  return (
    <ProductLandingPage
      {...commodityPage}
      mockup={
        <>
          <CommodityQuotesMockup />
          <CommodityGlobeGoldCard />
        </>
      }
    />
  );
}
