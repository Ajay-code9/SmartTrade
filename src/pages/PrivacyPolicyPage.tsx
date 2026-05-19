import LegalArticleLayout from '../components/layout/LegalArticleLayout';

export default function PrivacyPolicyPage() {
  return (
    <LegalArticleLayout title="Privacy Policy">
        <p>
          SmartTrade.live respects your right to privacy. This Privacy Policy explains who we are, how we
          collect, share and use personal information about you, and how you can exercise your privacy rights.
          We recommend that you read this Privacy Policy in full to ensure you are fully informed.
        </p>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            What personal information do we collect and why?
          </h2>
          <p className="mb-4">
            The personal information that we may collect about you broadly falls into the following categories:
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-3">Information You Provide Voluntarily to Us.</h3>
          <p className="mb-6">
            We collect the information you provide to us when you register on the Site, subscribe to our
            newsletter, or post information. This may include your name and contact information.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Information relating to transactions or trades you carry out through the Site.
          </h3>
          <p className="mb-6">
            When you use our trading services, we collect information related to your transactions, including
            trade history, account balances, and related financial data necessary to provide our services.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-3">Information We Collect Automatically.</h3>
          <p className="mb-4">
            As you navigate through and interact with the Site, we may use automatic data collection technologies
            to collect certain information about your equipment, browsing actions and patterns, including traffic
            data, location data, logs, and other communication data and the resources that you access and use on
            the Site. We use this for internal analytics and to improve the quality of our Site.
          </p>
          <p className="mb-4">
            We also collect data related to your trading activities, such as billing information, trader IDs, and
            aggregated statistical data to help us understand how our services are used.
          </p>
          <p className="mb-4">
            We may collect device and network information, including IP addresses, operating systems, hardware
            versions, device settings, battery and signal strength, and browser types.
          </p>
          <p className="mb-4">
            We may collect device locations via GPS, Bluetooth, or Wi-Fi signals when you use location-based
            features of our services.
          </p>
          <p>
            We use <strong>Cookies</strong> and similar technologies. A cookie is a small file placed on your
            device. You can manage or refuse cookies through your browser settings, though this may affect site
            functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Information relating to transactions or trades you carry out through the Site.
          </h2>
          <p>
            We may receive personal information from third-party sources such as brokers or exchanges, provided
            they have your consent or legal permission. This includes names and trading identifications used to
            maintain our services and improve record accuracy.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Advertising, Use of Cookies, and Other Tracking Technologies
          </h2>
          <p>
            We advertise through various online channels and social media. We use tracking tools (cookies, web
            beacons) to measure campaign performance. Collected data includes IP addresses, page visits, search
            engine referrals, and browsing activities across other websites. Third parties are not permitted to
            advertise on our Site without our authorization.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            How Do We Use Your Personal Information?
          </h2>
          <p className="mb-4">
            We use information that we collect about you or that you provide to us, including any personal
            information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>To present our Site and its contents to you.</li>
            <li>To provide you with SmartTrade information, products, or services that you request from us.</li>
            <li>To provide you with notices about your account, including expiration and renewal notices.</li>
            <li>
              To carry out our obligations and enforce our rights arising from any contracts entered into between
              you (or your company) and us, including for billing and collection.
            </li>
            <li>To notify you about changes to our Site or services we offer or provide through it.</li>
            <li>To allow you to participate in interactive features on our Sites.</li>
            <li>To provide you with support services.</li>
            <li>To estimate our audience size and usage patterns.</li>
            <li>
              To store information about your preferences, allowing us to customize our Site according to your
              individual interests.
            </li>
            <li>To improve your use of the Site.</li>
            <li>To recognize you when you return to our Site.</li>
          </ul>
          <p className="mb-4">In any other way we may describe when you provide the information.</p>
          <p className="mb-4">For any other purpose with your consent.</p>
          <p>
            We may also use your information to contact you about SmartTrade services that may be of interest to
            you.
          </p>
        </section>
    </LegalArticleLayout>
  );
}
