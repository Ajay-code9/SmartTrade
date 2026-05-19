import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type MockupHeroProps = {
  children: ReactNode;
  className?: string;
};

export default function MockupHero({ children, className }: MockupHeroProps) {
  return (
    <div
      className={cn('w-full lg:w-1/2 relative min-h-[420px] flex items-center justify-center', className)}
    >
      {children}
    </div>
  );
}
