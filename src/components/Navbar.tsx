import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { knowledgeLinks } from '../constants/knowledgeLinks';
import { productLinks } from '../constants/productLinks';
import { hasTopBanner } from '../constants/navBanner';
import { cn } from '../lib/cn';
import SmartTradeLogo from './auth/SmartTradeLogo';
import MenuButton from './navigation/MenuButton';
import MobileSidebar from './navigation/MobileSidebar';

const aboutLinks = [
  { label: 'Why SmartTrade', to: '/why-smarttrade' },
  { label: 'Become An Affiliate', to: '/become-affiliate' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const topBannerPage = hasTopBanner(location.pathname);
  const navSolid = !topBannerPage || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setScrolled(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const closeMobile = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setKnowledgeOpen(false);
    setProductsOpen(false);
    scrollToTop();
  };

  const navLinkClass = (path: string) =>
    `h-full flex items-center px-3 xl:px-4 hover:bg-brand-orange transition-colors shrink-0 relative z-10 ${
      location.pathname === path ? 'bg-brand-orange/80' : ''
    }`;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 text-white transition-[background-color,box-shadow] duration-300',
          navSolid
            ? 'bg-brand-banner-top/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent shadow-none',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="shrink-0" onClick={closeMobile}>
              <SmartTradeLogo variant="light" size="md" />
            </Link>

            <nav className="hidden lg:flex items-center h-full flex-1 justify-center min-w-0 relative z-20">
              <Link to="/" onClick={scrollToTop} className={navLinkClass('/')}>
                Home
              </Link>

              <div className="group relative h-full shrink-0">
                <button
                  type="button"
                  className="h-full flex items-center space-x-1 px-3 xl:px-4 group-hover:bg-brand-orange transition-colors"
                >
                  <span>About Us</span>
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-brand-banner-top shadow-xl border-t border-white/10 hidden group-hover:block">
                  <div className="py-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={scrollToTop}
                        className="block px-6 py-3 hover:bg-white/10 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group relative h-full shrink-0">
                <button
                  type="button"
                  className="h-full flex items-center space-x-1 px-3 xl:px-4 group-hover:bg-brand-orange transition-colors"
                >
                  <span>Knowledge Center</span>
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-brand-banner-top shadow-xl border-t border-white/10 hidden group-hover:block">
                  <div className="py-2">
                    {knowledgeLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={scrollToTop}
                        className={`block px-6 py-3 hover:bg-white/10 transition-colors ${location.pathname === link.to ? 'bg-white/10' : ''}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group relative h-full shrink-0">
                <button
                  type="button"
                  className="h-full flex items-center space-x-1 px-3 xl:px-4 group-hover:bg-brand-orange transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-brand-banner-top shadow-xl border-t border-white/10 hidden group-hover:block">
                  <div className="py-2">
                    {productLinks.map((link) =>
                      link.to ? (
                        <Link
                          key={link.label}
                          to={link.to}
                          onClick={scrollToTop}
                          className={`block px-6 py-3 hover:bg-white/10 transition-colors ${location.pathname === link.to ? 'bg-white/10' : ''}`}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span
                          key={link.label}
                          className="block px-6 py-3 hover:bg-white/10 transition-colors cursor-default opacity-70"
                        >
                          {link.label}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <Link to="/news-blogs" onClick={scrollToTop} className={navLinkClass('/news-blogs')}>
                News & Blogs
              </Link>
              <Link to="/contact-us" onClick={scrollToTop} className={navLinkClass('/contact-us')}>
                Contact Us
              </Link>
            </nav>

            <div className="hidden lg:flex items-center shrink-0 pl-4 ml-2 border-l border-white/20 relative z-10">
              <div className="flex rounded-full overflow-hidden">
                <Link
                  to="/signup"
                  onClick={scrollToTop}
                  className="bg-white text-brand-blue px-6 py-2 font-semibold hover:bg-gray-100 transition-colors italic"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  onClick={scrollToTop}
                  className="bg-brand-orange text-white px-6 py-2 font-semibold hover:bg-opacity-90 transition-colors italic"
                >
                  Login
                </Link>
              </div>
            </div>

            <div className="lg:hidden flex items-center shrink-0">
              <MenuButton open={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </nav>

      <MobileSidebar
        open={isOpen}
        onClose={closeMobile}
        aboutOpen={aboutOpen}
        setAboutOpen={setAboutOpen}
        knowledgeOpen={knowledgeOpen}
        setKnowledgeOpen={setKnowledgeOpen}
        productsOpen={productsOpen}
        setProductsOpen={setProductsOpen}
      />
    </>
  );
}
