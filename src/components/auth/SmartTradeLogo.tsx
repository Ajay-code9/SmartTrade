import { Link } from 'react-router-dom';
import { LOGO_IMAGE } from '../../constants/assets';

type SmartTradeLogoProps = {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showLink?: boolean;
};

const sizeMap = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-11',
} as const;

export default function SmartTradeLogo({
  variant = 'light',
  size = 'md',
  showLink = false,
}: SmartTradeLogoProps) {
  const heightClass = sizeMap[size];

  const content = (
    <img
      src={LOGO_IMAGE}
      alt="SmartTrade"
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
