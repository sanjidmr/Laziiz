import { motion } from 'framer-motion';
import { Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FoodCard({ item }) {
  // Error Prevention: Jodi item na thake tahole null return korbe
  if (!item) return null;

  // Safety check for ID
  const productId = item.id ? item.id.toString() : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-card group overflow-hidden bg-white/5 border border-white/10 rounded-[2rem]"
    >
      {/* Image Section */}
      <Link to={`/product/${productId}`} className="relative h-64 overflow-hidden block">
        <img
          src={item.image}
          alt={item.name || item.Laziiz || "Food Item"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
            <Eye size={24} />
          </div>
        </div>
        
        {/* Floating Badges */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-primary border border-white/10">
          <Star size={12} fill="currentColor" />
          {item.rating || "5.0"}
        </div>
        {item.isOffer && (
          <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Special Offer
          </div>
        )}
      </Link>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4 gap-2">
          <Link to={`/product/${productId}`} className="flex-1">
            <h3 className="text-lg md:text-xl font-display font-bold group-hover:text-primary transition-colors line-clamp-1">
              {item.name || item.Laziiz}
            </h3>
          </Link>
          
          <div className="flex flex-col items-end shrink-0">
            {item.offerPrice ? (
              <>
                <span className="text-primary font-display font-bold text-lg md:text-xl">
                  {item.offerPrice}
                </span>
                <span className="text-gray-500 line-through text-[10px]">
                  {item.price}
                </span>
              </>
            ) : (
              <span className="text-primary font-display font-bold text-lg md:text-xl">
                {item.price}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm font-light mb-2 line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}