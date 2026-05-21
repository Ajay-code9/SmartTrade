import { Fragment, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TradeAddaLogo from '../auth/TradeAddaLogo';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { knowledgeLinks } from '../../constants/knowledgeLinks';
import { productLinks } from '../../constants/productLinks';

const aboutLinks = [
  { label: 'Why TRADEADDA', to: '/why-tradeadda' },
  { label: 'Become An Affiliate', to: '/become-affiliate' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
];

type MobileSidebarProps = {
  open: boolean;
  onClose: () => void;
  aboutOpen: boolean;
  setAboutOpen: (v: boolean) => void;
  knowledgeOpen: boolean;
  setKnowledgeOpen: (v: boolean) => void;
  productsOpen: boolean;
  setProductsOpen: (v: boolean) => void;
};

function NavItem({
  to,
  label,
  onClick,
  active,
}: {
  to: string;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center rounded-xl px-4 py-3 text-[15px] font-medium transition-all ${
        active
          ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
          : 'text-white/90 hover:bg-white/10 hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
}

function Accordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-semibold text-white"
      >
        {label}
        <ChevronDown
          size={18}
          className={`shrink-0 text-white/70 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-0.5 border-t border-white/10 px-2 py-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubLink({ to, label, onClick, active }: { to: string; label: string; onClick: () => void; active?: boolean }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
        active ? 'bg-white/15 text-white font-medium' : 'text-white/75 hover:bg-white/10 hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
}

export default function MobileSidebar({
  open,
  onClose,
  aboutOpen,
  setAboutOpen,
  knowledgeOpen,
  setKnowledgeOpen,
  productsOpen,
  setProductsOpen,
}: MobileSidebarProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-brand-navy/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />

          <motion.aside
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed top-0 right-0 z-[70] flex h-full w-[min(320px,88vw)] flex-col bg-gradient-to-b from-brand-blue via-brand-dark-blue to-brand-footer shadow-2xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">Menu</p>
                <TradeAddaLogo variant="light" size="sm" />
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="scrollbar-sidebar flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-2">
              <NavItem to="/" label="Home" onClick={onClose} active={location.pathname === '/'} />

              <Accordion label="About Us" open={aboutOpen} onToggle={() => setAboutOpen(!aboutOpen)}>
                {aboutLinks.map((link) => (
                  <Fragment key={link.to}>
                    <SubLink
                      to={link.to}
                      label={link.label}
                      onClick={onClose}
                      active={location.pathname === link.to}
                    />
                  </Fragment>
                ))}
              </Accordion>

              <Accordion
                label="Knowledge Center"
                open={knowledgeOpen}
                onToggle={() => setKnowledgeOpen(!knowledgeOpen)}
              >
                {knowledgeLinks.map((link) => (
                  <Fragment key={link.to}>
                    <SubLink
                      to={link.to}
                      label={link.label}
                      onClick={onClose}
                      active={location.pathname === link.to}
                    />
                  </Fragment>
                ))}
              </Accordion>

              <Accordion label="Products" open={productsOpen} onToggle={() => setProductsOpen(!productsOpen)}>
                {productLinks.map((link) =>
                  link.to ? (
                    <Fragment key={link.label}>
                      <SubLink
                        to={link.to}
                        label={link.label}
                        onClick={onClose}
                        active={location.pathname === link.to}
                      />
                    </Fragment>
                  ) : (
                    <span
                      key={link.label}
                      className="block rounded-lg px-3 py-2.5 text-sm text-white/40 cursor-default"
                    >
                      {link.label}
                    </span>
                  ),
                )}
              </Accordion>

              <NavItem
                to="/news-blogs"
                label="News & Blogs"
                onClick={onClose}
                active={location.pathname === '/news-blogs'}
              />
              <NavItem
                to="/contact-us"
                label="Contact Us"
                onClick={onClose}
                active={location.pathname === '/contact-us'}
              />
            </nav>

            <div className="border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] space-y-3 bg-black/10">
              <Link
                to="/signup"
                onClick={onClose}
                className="block w-full rounded-xl bg-white py-3 text-center text-sm font-bold italic text-brand-blue shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                onClick={onClose}
                className="block w-full rounded-xl bg-brand-orange py-3 text-center text-sm font-bold italic text-white shadow-lg shadow-brand-orange/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Login
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
