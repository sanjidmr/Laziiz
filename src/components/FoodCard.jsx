import { motion } from 'framer-motion';
import { Star, Eye, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function FoodCard({ item }) {
  if (!item) return null;

  const { addToCart } = useApp();
  const productId = item.id ? item.id.toString() : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden backdrop-blur-sm"
    >

      {/* Image Section */}
      <Link 
        to={`/product/${productId}`} 
        className="relative aspect-square md:h-64 overflow-hidden block"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
            <Eye size={20} />
          </div>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold text-yellow-400">
          <Star size={12} fill="currentColor" />
          {item.rating || "5.0"}
        </div>

        {/* Offer Badge */}
        {item.isOffer && (
          <div className="absolute top-3 left-3 bg-primary text-black text-[10px] font-black px-2 py-1 rounded-md">
            PROMO
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">

        {/* Name + Price */}
        <div className="flex justify-between items-start mb-2 gap-2">
          <Link to={`/product/${productId}`} className="flex-1">
            <h3 className="text-base md:text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
              {item.name}
            </h3>
          </Link>

          <div className="text-right leading-none">
            {item.offerPrice ? (
              <>
                <span className="text-primary font-bold text-lg">
                  {item.offerPrice}
                </span>
                <span className="text-gray-500 line-through text-xs block">
                  {item.price}
                </span>
              </>
            ) : (
              <span className="text-primary font-bold text-lg">
                 {item.price}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Add to Cart Button */}
        <div className="mt-auto">
          <button
            onClick={() => addToCart(item)}
            className="w-full py-2.5 bg-white/10 hover:bg-primary hover:text-black transition-all duration-300 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border border-white/10"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>

      </div>
    </motion.div>
  );
}