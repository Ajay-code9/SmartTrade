import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Send, MessageCircle } from 'lucide-react';
import { LOCATIONS } from '../constants/locations';
import { knowledgeLinks } from '../constants/knowledgeLinks';
import { productLinks } from '../constants/productLinks';
import { BannerBackground } from './layout/BannerBackground';
import SmartTradeLogo from './auth/SmartTradeLogo';

export default function Footer() {
  return (
    <footer className="pt-24 pb-8 overflow-hidden relative banner-surface">
      <BannerBackground />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center z-[1]">
        <svg viewBox="0 0 1000 500" className="w-[120%] h-full fill-white">
          <path d="M100,100 C150,150 200,50 250,100 C300,150 350,100 400,150 C450,200 500,100 550,150 C600,200 650,150 700,200 C750,250 800,150 850,200 C900,250 950,200 1000,250" />
          <path d="M50,200 C100,250 150,150 200,200 C250,250 300,200 350,250 C400,300 450,200 500,250 C550,300 600,250 650,300 C700,350 750,250 800,300 C850,350 900,300 950,350" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <SmartTradeLogo variant="light" size="lg" />
            </Link>

            <div className="flex flex-wrap gap-3">
              {[Facebook, Instagram, MessageCircle, Youtube, Twitter, Send].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="banner-icon-btn w-10 h-10 rounded-full bg-white text-brand-blue flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold italic mb-6">About Us</h4>
            <ul className="space-y-4 text-white">
              <li>
                <Link to="/why-smarttrade" className="hover:text-white transition-colors">
                  Why SmartTrade
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/become-affiliate" className="hover:text-white transition-colors">
                  Become An Affiliate
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-4 border-t border-white/10 mt-4">
                <a href="#" className="hover:text-white transition-colors">
                  Referral Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Other Links
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold italic mb-6">Knowledge Center</h4>
            <ul className="space-y-4 text-white">
              {knowledgeLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold italic mb-6">Products</h4>
            <ul className="space-y-4 text-white">
              {productLinks.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link to={link.to} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <span className="opacity-70">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
            <h4 className="text-xl font-bold italic mt-12 mb-6">News & Blogs</h4>
            <ul className="space-y-4 text-white">
              <li>
                <Link to="/news-blogs" className="hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold italic mb-6">Platforms</h4>
            <ul className="space-y-4 text-white">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web Trader
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 mb-12">
          <h4 className="text-xl font-bold italic mb-6">Features</h4>
          <div className="text-sm text-white leading-relaxed text-justify">
            {LOCATIONS.map((loc, idx) => (
              <span key={loc}>
                Best Dabba Trading App in {loc}
                {idx < LOCATIONS.length - 1 ? ' | ' : ''}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-white text-sm italic">
          Copyright @2026 SmartTrade.live
        </div>
      </div>
    </footer>
  );
}
