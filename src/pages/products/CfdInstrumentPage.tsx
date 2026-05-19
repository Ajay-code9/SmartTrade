import IntradayPhoneMockup from '../../components/knowledge/IntradayPhoneMockup';
import CFDGlobeCard from '../../components/products/CFDGlobeCard';
import ProductLandingPage from '../../components/products/ProductLandingPage';
import { cfdPage } from '../../constants/productPages';

export default function CfdInstrumentPage() {
  return (
    <ProductLandingPage {...cfdPage} mockup={<><IntradayPhoneMockup /><CFDGlobeCard /></>} />
  );
}
