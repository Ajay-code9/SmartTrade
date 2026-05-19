import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    date: 'May 16, 2026',
    title: 'How to Convert Physical Shares to Demat in 2026: Complete Guide',
    image: 'https://images.unsplash.com/photo-1611974717482-482fe0051142?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    date: 'May 15, 2026',
    title: 'NSDL vs CDSL: Which Depository Is Better in 2026? Complete Guide',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    date: 'May 06, 2026',
    title: 'The Free Vs Paid Equity Trading Platform in India: Which One?',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    date: 'May 02, 2026',
    title: 'Upcoming IPO 2026 in India: Complete List, Dates, GMP, Price',
    image: 'https://images.unsplash.com/photo-1642790103517-18107388d748?auto=format&fit=crop&q=80&w=800'
  }
];

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
              <div key={blog.id} className="group/card cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 border border-gray-100">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" />
                  <div className="absolute top-4 left-0 bg-brand-orange text-white px-4 py-1.5 rounded-r-full text-xs font-bold shadow-lg">
                    {blog.date}
                  </div>
                  {/* Decorative logo or icon in corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                     <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current opacity-70"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-700 leading-snug group-hover/card:text-brand-blue transition-colors">
                  {blog.title}
                </h3>
              </div>
            ))}
          </div>

          <button className="absolute -left-6 top-[35%] -translate-y-1/2 w-12 h-12 bg-brand-orange text-white shadow-xl rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <ChevronLeft size={32} />
          </button>
          <button className="absolute -right-6 top-[35%] -translate-y-1/2 w-12 h-12 bg-brand-orange text-white shadow-xl rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
