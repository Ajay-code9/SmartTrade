import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type SectionHeadingProps = {
  children: ReactNode;
  as?: 'h2' | 'h3';
  className?: string;
};

export default function SectionHeading({ children, as: Tag = 'h2', className }: SectionHeadingProps) {
  return (
    <Tag className={cn('text-xl md:text-2xl font-bold text-brand-navy mb-6', className)}>
      {children}
    </Tag>
  );
}
