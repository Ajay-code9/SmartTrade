import type { ReactNode } from 'react';
import PageHeader from './PageHeader';
import Container from './Container';

type LegalArticleLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function LegalArticleLayout({ title, children }: LegalArticleLayoutProps) {
  return (
    <main>
      <PageHeader title={title} />
      <article className="py-12 md:py-16">
        <Container width="narrow" className="text-gray-700 leading-relaxed space-y-8">
          {children}
        </Container>
      </article>
    </main>
  );
}
