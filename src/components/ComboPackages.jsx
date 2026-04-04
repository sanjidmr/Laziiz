import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { products } from '../components/products'; 
import FoodCard from '../components/FoodCard'; // Apnar existing component
import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComboPackages() {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // 36-39 number product mane index: 35, 36, 37, 38
      const selectedIndices = [35, 36, 37, 38];
      const selectedCombos = selectedIndices
        .map(index => products[index])
        .filter(item => item !== undefined); 

      setCombos(selectedCombos);
    }
  }, []);

  return (
    <section className="py-12 md:py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1 rounded-full mb-4 md:mb-6"
          >
            <Gift size={14} className="text-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Combo Packages
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-7xl font-display font-medium mb-3 md:mb-4 uppercase tracking-tighter"
          >
            Exclusive <span className="italic font-light text-primary/80">combos</span>
          </motion.h2>
          <p className="text-white/40 max-w-lg text-xs md:text-base font-light px-4">
            Savor our handpicked combinations designed for the ultimate shared dining experience.
          </p>
        </div>

        {/* Combo Grid: Mobile-e grid-cols-2 use kora hoyeche */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {combos.map((item, index) => (
            <FoodCard key={item.id || index} item={item} index={index} />
          ))}
        </div>

        {/* View All Combos */}
        <div className="mt-12 md:mt-16 text-center">
          <Link to="/menu" className="group inline-flex items-center gap-3 md:gap-4 text-white/40 hover:text-primary transition-all duration-300">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Explore All Packages</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:translate-x-2 transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}