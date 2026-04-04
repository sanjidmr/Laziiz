import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LayoutGrid } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import CategorySection from '../components/CategorySection';
// menuData এর পরিবর্তে products import করা হলো
import { products } from '../components/products'; 

const compactCategories = [
  { id: 'All', name: 'All' },
  { id: 'Burger', name: 'Burgers' },
  { id: 'Pizza', name: 'Pizza' },
  { id: 'Chowmein', name: 'Chowmein' },
  { id: 'Pasta', name: 'Pasta' },
  { id: 'Appetizers', name: 'Appetizers' },
  { id: 'Drinks', name: 'Drinks' },
  { id: 'Dessert', name: 'Desserts' }
];

export default function Menu() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(() => {
    return location.state?.category || 'All';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        // Sticky bar threshold calculation
        const offset = menuRef.current.offsetTop - 100;
        setIsSticky(window.scrollY > offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.category) {
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // products ডাটা ফিল্টার করার লজিক
  const filteredMenu = products.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    
    // item.Laziiz বা item.name দুটোর যেকোনো একটা চেক করবে আপনার ডাটা ফরম্যাট অনুযায়ী
    const itemName = item.name || item.Laziiz || "";
    const itemDesc = item.description || "";
    
    const matchesSearch = itemName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         itemDesc.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      {/* Sticky Category Bar */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-20 left-0 w-full z-40 bg-dark/80 backdrop-blur-xl border-b border-white/10 py-4"
          >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {compactCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      window.scrollTo({ top: menuRef.current.offsetTop - 120, behavior: 'smooth' });
                    }}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 border ${
                      activeCategory === cat.id
                        ? 'bg-primary border-primary text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-primary/50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              <div className="hidden md:flex items-center gap-2 text-primary font-display font-bold text-xs uppercase tracking-widest">
                <LayoutGrid size={14} />
                <span>Menu</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Taste the Magic
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Our <span className="primary-gradient italic">Full Menu</span>
          </motion.h1>
        </div>

        {/* Category Selection Section */}
        <div className="mb-16">
          <CategorySection 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>

        {/* Search Bar */}
        <div ref={menuRef} className="flex justify-center mb-16 scroll-mt-32">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search your cravings (e.g. burger, pizza, pasta)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 focus:outline-none focus:border-primary transition-all duration-300 text-lg shadow-2xl focus:shadow-primary/10 text-white"
            />
          </div>
        </div>

        {/* Menu Grid using FoodCard component */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredMenu.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Found */}
        {filteredMenu.length === 0 && (
          <div className="text-center py-20 opacity-40">
            <Search size={64} className="mx-auto mb-4 text-gray-500" />
            <p className="text-xl font-display uppercase tracking-widest text-gray-400">
              No dishes found matching your search
            </p>
          </div>
        )}
      </div>
    </div>
  );
}