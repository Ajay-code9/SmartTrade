import { useMemo, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogCard from '../components/blog/BlogCard';
import BlogPageSidebar from '../components/blog/BlogPageSidebar';
import {
  featuredSlides,
  recentPosts,
  RECENT_POSTS_PER_PAGE,
  RECENT_POSTS_TOTAL_PAGES,
  futureTradingPosts,
  marginTradingPosts,
  mainHighlightPosts,
  trendingStocksPosts,
  dayTradingPosts,
} from '../constants/blogPosts';

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{children}</h2>;
}

export default function NewsBlogsPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [page, setPage] = useState(1);
  const featured = featuredSlides[slideIndex];

  const paginatedRecentPosts = useMemo(() => {
    const start = (page - 1) * RECENT_POSTS_PER_PAGE;
    return recentPosts.slice(start, start + RECENT_POSTS_PER_PAGE);
  }, [page]);

  const pageNumbers = useMemo(
    () => Array.from({ length: RECENT_POSTS_TOTAL_PAGES }, (_, i) => i + 1),
    [],
  );

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Featured | Recent | Future Trading sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="relative group rounded-lg overflow-hidden border border-gray-200">
              <div className="aspect-[4/3] relative">
                <img src={featured.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-lg md:text-xl font-bold uppercase leading-tight drop-shadow">
                    {featured.title}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSlideIndex((i) => (i === 0 ? featuredSlides.length - 1 : i - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={() => setSlideIndex((i) => (i === featuredSlides.length - 1 ? 0 : i + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            {featured.category && (
              <a href="#" className="text-brand-blue text-sm mt-3 inline-block hover:underline">
                {featured.category}
              </a>
            )}
            <p className="text-gray-400 text-sm mt-1">{featured.date}</p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-2 leading-snug">
              {featuredSlides[0].title}
            </h2>
            {featured.excerpt && (
              <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">{featured.excerpt}</p>
            )}
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-bold text-gray-900 text-lg mb-6">Recent Post</h3>
            <ul key={page} className="divide-y divide-gray-200">
              {paginatedRecentPosts.map((post) => (
                <li key={post.id} className="py-4 first:pt-0">
                  <a href="#" className="block group">
                    <h4 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{post.date}</p>
                    <span className="text-green-600 text-sm font-medium mt-2 inline-block group-hover:underline">
                      Read More &raquo;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <nav className="flex gap-1 mt-6" aria-label="Recent posts pagination">
              {pageNumbers.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  aria-current={page === n ? 'page' : undefined}
                  className={`min-w-8 h-8 px-1 text-sm transition-colors ${
                    page === n
                      ? 'font-bold text-gray-900 cursor-default'
                      : 'font-medium text-brand-blue hover:underline'
                  }`}
                >
                  {n}
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <BlogPageSidebar variant="future" futurePosts={futureTradingPosts} />
          </div>
        </div>

        {/* SmartTrade.live highlights + Margin Trading sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-9">
            <SectionHeading>SmartTrade.live</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mainHighlightPosts.map((post) => (
                <div key={post.id}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 bg-gray-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-4">Margin Trading</h3>
            <div className="grid grid-cols-2 gap-4">
              {marginTradingPosts.map((post) => (
                <div key={post.id}>
                  <BlogCard post={post} size="small" showAuthor />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trending + Day Trading + Connect sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9 space-y-14">
            <section>
              <SectionHeading>Trending in Stocks</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trendingStocksPosts.map((post) => (
                  <div key={post.id}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </section>
            <section>
              <SectionHeading>Day Trading</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dayTradingPosts.map((post) => (
                  <div key={post.id}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="lg:col-span-3">
            <BlogPageSidebar variant="connect" />
          </div>
        </div>
      </div>
    </main>
  );
}
