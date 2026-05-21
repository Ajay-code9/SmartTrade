import { Link } from 'react-router-dom';
import { LOGO_IMAGE } from '../../constants/assets';

type TradeAddaLogoProps = {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showLink?: boolean;
};

const sizeMap = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-11',
} as const;

export default function TradeAddaLogo({
  variant = 'light',
  size = 'md',
  showLink = false,
}: TradeAddaLogoProps) {
  const heightClass = sizeMap[size];

  const content = (
    <img
      src={LOGO_IMAGE}
      alt="TRADEADDA"
      className={`${heightClass} w-auto object-contain object-left ${
        variant === 'dark' ? 'brightness-0' : ''
      }`}
    />
  );

  if (showLink) {
    return (
      <Link to="/" className="inline-flex shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}
