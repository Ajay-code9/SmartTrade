import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Clock, BarChart3, Globe } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import BannerSection from './layout/BannerSection';

const BROKERAGE_SAVED_CRORE = 135.4;
const COUNT_DURATION_MS = 2200;

function BrokerageCountUp() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(BROKERAGE_SAVED_CRORE * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setValue(BROKERAGE_SAVED_CRORE);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
      ₹ {value.toFixed(2)} Crore
    </div>
  );
}

const ROTATING_MARKETS = [
  'Indian Stocks (F&O)',
  'Indian Commodities',
  'COMEX',
  'US Stocks',
] as const;

const PAUSE_MS = 2000;
const NEXT_MS = 450;
const LONGEST_LABEL = 'Indian Stocks (F&O)';

function getStepDelay(char: string | undefined, deleting: boolean) {
  if (deleting) {
    if (char === ' ') return 32;
    return 38;
  }
  if (!char) return 52;
  if (char === ' ') return 68;
  if ('()&/'.includes(char)) return 78;
  return 54;
}

function RotatingMarketTitle() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROTATING_MARKETS[phraseIndex];
    const finishedTyping = !isDeleting && displayText === current;
    const finishedDeleting = isDeleting && displayText === '';

    let delay: number;
    if (finishedTyping) {
      delay = PAUSE_MS;
    } else if (finishedDeleting) {
      delay = NEXT_MS;
    } else if (isDeleting) {
      const lastChar = displayText[displayText.length - 1];
      delay = getStepDelay(lastChar, true);
    } else {
      const nextChar = current[displayText.length];
      delay = getStepDelay(nextChar, false);
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (finishedTyping) {
          setIsDeleting(true);
        } else {
          setDisplayText(current.slice(0, displayText.length + 1));
        }
      } else if (finishedDeleting) {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % ROTATING_MARKETS.length);
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <span className="inline-grid">
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap select-none" aria-hidden>
        {LONGEST_LABEL}
      </span>
      <span
        className="col-start-1 row-start-1 inline-flex items-center justify-self-center whitespace-nowrap"
        aria-live="polite"
        aria-atomic
      >
        <span>{displayText}</span>
        <span
          className="inline-block w-[2px] h-[0.82em] bg-white typewriter-cursor shrink-0 ml-0.5 rounded-sm"
          aria-hidden
        />
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <BannerSection mergeWithNav gradient bottomNotch="md" className="pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-medium mb-4"
        >
          Trade With Zero Brokerage & 500X Margin
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-8 tracking-tighter w-full text-center"
        >
          <RotatingMarketTitle />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mb-12"
        >
          Trade With TRADEADDA.live
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-16"
        >
          <button className="w-full md:w-auto px-8 py-3 rounded-md border-2 border-white text-white font-semibold hover:bg-white hover:text-brand-blue transition-all">
            Why TRADEADDA.live?
          </button>
          <button className="w-full md:w-auto px-8 py-3 rounded-md bg-brand-orange text-white font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Get Started
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <BrokerageCountUp />
          <div className="flex items-center justify-center space-x-4 uppercase tracking-widest text-sm font-semibold text-white">
            <span>BROKERAGE SAVED</span>
            <button className="bg-brand-orange px-4 py-1 rounded text-xs font-bold hover:bg-opacity-80 transition-all">Know More</button>
            <button className="bg-brand-orange px-4 py-1 rounded text-xs font-bold hover:bg-opacity-80 transition-all">Trade Now</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider">Zero Brokerage</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider">24/7 Deposit And Withdrawal</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
              <BarChart3 size={24} />
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider">Upto 500x Margin</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
              <Globe size={24} />
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-center">Indian + US Stocks & Commodities</p>
          </div>
        </div>
      </div>
    </BannerSection>
  );
}
