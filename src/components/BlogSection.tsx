import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MEDIA_IMAGES } from '../constants/mediaImages';
import { recentPosts } from '../constants/blogPosts';

const blogs = recentPosts.slice(0, 4).map((post) => ({
  id: post.id,
  date: post.date,
  title: post.title,
  image: post.image,
}));

export default function BlogSection() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[45px] font-semibold text-gray-900 mb-4 leading-[51px]">
            Stay Updated with Zero Brokerage Trading Platform
          </h2>
          <p className="text-2xl text-gray-400 font-light">Your Latest Market Insights Here</p>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.id} to="/news-blogs" className="group/card block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 border border-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = MEDIA_IMAGES.tradingChart;
                    }}
                  />
                  <div className="absolute top-4 left-0 bg-brand-orange text-white px-4 py-1.5 rounded-r-full text-xs font-bold shadow-lg">
                    {blog.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-700 leading-snug group-hover/card:text-brand-blue transition-colors">
                  {blog.title}
                </h3>
              </Link>
            ))}
          </div>

          <Link
            to="/news-blogs"
            className="absolute -left-6 top-[35%] -translate-y-1/2 w-12 h-12 bg-brand-orange text-white shadow-xl rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="View all blogs"
          >
            <ChevronLeft size={32} />
          </Link>
          <Link
            to="/news-blogs"
            className="absolute -right-6 top-[35%] -translate-y-1/2 w-12 h-12 bg-brand-orange text-white shadow-xl rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="View all blogs"
          >
            <ChevronRight size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
