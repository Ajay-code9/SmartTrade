import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Width = 'wide' | 'narrow' | 'article';

const widthClass: Record<Width, string> = {
  wide: 'max-w-7xl',
  narrow: 'max-w-4xl',
  article: 'max-w-3xl',
};

type ContainerProps = {
  children: ReactNode;
  width?: Width;
  className?: string;
};

export default function Container({ children, width = 'wide', className }: ContainerProps) {
  return (
    <div className={cn(widthClass[width], 'mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
