import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { products } from '../components/products';
import FoodCard from '../components/FoodCard';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MostPopular() {
  const [popularDishes, setPopularDishes] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // 4th(3), 9th(8), 15th(14), 25th(24) indices
      const selectedIndices = [3, 8, 14, 24];
      const selectedProducts = selectedIndices
        .map(index => products[index])
        .filter(item => item !== undefined);

      setPopularDishes(selectedProducts);
    }
  }, []);

  return (
    <section className="py-12 md:py-24 bg-[#050505] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center md:justify-start gap-2 mb-3"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-primary uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                Exclusive Selection
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-7xl font-display font-medium leading-tight"
            >
              Most <span className="italic font-light text-primary/80">Populer </span> <br className=" md:block" />
              Dishes
            </motion.h2>
          </div>

          <Link to="/menu"> {/* Menu page-er route path ekhane hobe */}
            <motion.button
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 text-white/80 hover:text-primary transition-colors text-[10px] md:text-sm font-bold uppercase tracking-widest border-b border-white/10 hover:border-primary pb-2 w-fit mx-auto md:mx-0"
            >
              Full Menu
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* Popular Grid: Mobile-e grid-cols-2, Desktop-e grid-cols-4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {popularDishes.map((item, index) => (
            <FoodCard key={item.id || index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}