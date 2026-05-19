import { Globe, Download, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { id: 1, title: 'Basics of Trading', duration: '5:24', thumb: 'https://images.unsplash.com/photo-1611974717482-482fe0051142?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Indian Market Updates', duration: '12:10', thumb: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Trade Smarter', duration: '8:45', thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Platform Walkthrough', duration: '15:30', thumb: 'https://images.unsplash.com/photo-1642790103517-18107388d748?auto=format&fit=crop&q=80&w=800' },
];

export default function WebTradingSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background world map mockup */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Globe size={800} className="text-gray-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Best Web Trading Platform. Trade Smart. Trade Bold</p>
          <h2 className="text-[32px] md:text-[45px] font-semibold text-gray-900 mb-12 leading-[51px]">
            Initiate Smart Web Trading
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="flex items-center space-x-3 px-10 py-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all group">
              <div className="p-2 bg-gray-50 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <span className="text-xl font-bold italic">Web Trader</span>
            </button>
            <button className="flex items-center space-x-3 px-10 py-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all group">
              <div className="p-2 bg-gray-50 rounded-full group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Download size={24} />
              </div>
              <span className="text-xl font-bold italic">Get the App</span>
            </button>
          </div>
        </div>

        {/* Video Slider Mockup */}
        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="relative aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white group/card cursor-pointer">
                <img src={video.thumb} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/card:bg-black/20 transition-all">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white group-hover/card:scale-110 transition-transform">
                    <Play className="text-white fill-current ml-1" size={24} />
                  </div>
                </div>
                {/* Logo badge in corner */}
                <div className="absolute top-2 left-2 bg-brand-blue/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase tracking-tighter">
                   SmartTrade
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-brand-orange transition-colors md:-left-5">
            <ChevronLeft size={24} />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-brand-orange transition-colors md:-right-5">
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
