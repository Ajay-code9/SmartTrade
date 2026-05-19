import { cn } from '../../lib/cn';

type SectionBottomNotchProps = {
  size?: 'sm' | 'md';
  className?: string;
};

/** White downward triangle anchored to the bottom edge of a banner section */
export default function SectionBottomNotch({ size = 'md', className }: SectionBottomNotchProps) {
  const border =
    size === 'sm'
      ? 'border-l-[16px] border-r-[16px] border-t-[16px]'
      : 'border-l-[20px] border-r-[20px] border-t-[20px]';

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute bottom-0 left-1/2 z-30 -translate-x-1/2',
        className,
      )}
    >
      <div
        className={cn(
          'h-0 w-0 border-l-transparent border-r-transparent border-t-white',
          border,
        )}
      />
    </div>
  );
}
