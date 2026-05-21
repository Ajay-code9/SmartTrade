import { Link } from 'react-router-dom';
import type { BlogPost } from '../../constants/blogPosts';
import { MEDIA_IMAGES } from '../../constants/mediaImages';

interface BlogCardProps {
  post: BlogPost;
  size?: 'large' | 'small';
  showAuthor?: boolean;
}

export default function BlogCard({ post, size = 'large', showAuthor = false }: BlogCardProps) {
  if (size === 'small') {
    return (
      <Link to="/news-blogs" className="flex gap-3 group">
        <div className="w-20 h-16 shrink-0 rounded overflow-hidden border border-gray-100">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = MEDIA_IMAGES.tradingChart;
            }}
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
            {post.title}
          </h4>
          {showAuthor && (
            <p className="text-xs text-brand-blue font-medium mt-1">TRADEADDA</p>
          )}
          <p className="text-xs text-gray-400 mt-0.5">{post.date}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/news-blogs"
      className="group block border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = MEDIA_IMAGES.tradingChart;
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-400 mt-2">{post.date}</p>
      </div>
    </Link>
  );
}
