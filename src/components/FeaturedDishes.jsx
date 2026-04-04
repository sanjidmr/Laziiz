import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../components/products';
import FoodCard from '../components/FoodCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedDishes() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const shuffleProducts = () => {
      // Products data load hoyeche kina check kora
      if (!products || products.length === 0) return;

      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 8 : 12;

      // Premium Randomization Logic
      const shuffled = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

      setFeaturedProducts(shuffled);
    };

    shuffleProducts();

    // Window resize handle kora
    window.addEventListener('resize', shuffleProducts);
    return () => window.removeEventListener('resize', shuffleProducts);
  }, []);

  return (
    <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-0 pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-3 mb-4"
            >
              <span className="w-12 h-[1px] bg-primary hidden md:block"></span>
              <span className="text-primary tracking-[0.5em] uppercase text-[10px] md:text-xs font-bold">
                Chef's Special Selection
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-medium text-white leading-[0.9]"
            >
              Featured <br />
              <span className="italic font-light text-primary/80">Dishes</span>
            </motion.h2>
          </div>

          <Link to="/menu"> {/* Menu page-er route path ekhane hobe */}
            <motion.button
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 text-white/80 hover:text-primary transition-colors text-[10px] md:text-sm font-bold uppercase tracking-widest border-b border-white/10 hover:border-primary pb-2 w-fit mx-auto md:mx-0"
            >
              Explore Full Menu
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* Products Grid - Mobile-e 2 column, Desktop-e 4 column */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          <AnimatePresence mode='popLayout'>
            {featuredProducts.length > 0 ? (
              featuredProducts.map((dish, index) => (
                <motion.div
                  key={dish.id || index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {/* FIX: Ekhane 'dish' pass kora hoyeche jeno data dekha jay */}
                  <FoodCard item={dish} index={index} />
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-white/20">Loading...</p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}