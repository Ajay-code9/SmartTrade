import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import Container from './Container';

type ContentSectionProps = {
  children: ReactNode;
  width?: 'wide' | 'narrow' | 'article';
  className?: string;
  containerClassName?: string;
};

export default function ContentSection({
  children,
  width = 'narrow',
  className,
  containerClassName,
}: ContentSectionProps) {
  return (
    <section className={cn('py-12 md:py-16', className)}>
      <Container width={width} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
