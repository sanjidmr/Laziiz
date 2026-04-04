import { motion } from 'framer-motion';
import { Beef, Pizza as PizzaIcon, Soup, Utensils, GlassWater, IceCream, LayoutGrid } from 'lucide-react';
import di1 from "../assets/img/di1.jpg"
import a1 from "../assets/img/a1.jpg"

const categories = [
  {
    id: 'All',
    name: 'All Categories',
    subtitle: 'Explore our full menu',
    icon: LayoutGrid,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    color: 'from-gray-500/20 to-gray-900/40'
  },
  {
    id: 'Burger',
    name: 'Burgers',
    subtitle: 'Juicy & Delicious Burgers',
    icon: Beef,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop',
    color: 'from-orange-500/20 to-orange-900/40'
  },
  {
    id: 'Pizza',
    name: 'Pizza',
    subtitle: 'Artisanal Wood-Fired Pizza',
    icon: PizzaIcon,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    color: 'from-red-500/20 to-red-900/40'
  },
  {
    id: 'Chowmein',
    name: 'Chowmein',
    subtitle: 'Authentic Wok-Tossed Noodles',
    icon: Soup,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1974&auto=format&fit=crop',
    color: 'from-yellow-500/20 to-yellow-900/40'
  },
  {
    id: 'Pasta',
    name: 'Pasta',
    subtitle: 'Creamy & Savory Italian Pasta',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop',
    color: 'from-green-500/20 to-green-900/40'
  },
  {
    id: 'Appetizers',
    name: 'Appetizers',
    subtitle: 'Crispy & Savory Starters',
    icon: Soup,
    image: a1,
    color: 'from-amber-500/20 to-amber-900/40'
  },
  {
    id: 'Drinks',
    name: 'Drinks',
    subtitle: 'Refreshing Cold Beverages',
    icon: GlassWater,
    image: di1,
    color: 'from-blue-500/20 to-blue-900/40'
  },
  {
    id: 'Dessert',
    name: 'Desserts',
    subtitle: 'Sweet Treats & Delights',
    icon: IceCream,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1974&auto=format&fit=crop',
    color: 'from-pink-500/20 to-pink-900/40'
  }
];

const CategoryCard = ({ category, isActive, onClick }) => {
  const Icon = category.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(category.id)}
      className={`relative group cursor-pointer overflow-hidden rounded-3xl h-56 md:h-64 transition-all duration-500 border ${
        isActive 
          ? 'border-primary ring-2 ring-primary/20 shadow-2xl shadow-primary/30' 
          : 'border-white/10 hover:border-white/30'
      }`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} via-black/60 to-black/20 transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-70 group-hover:opacity-80'}`} />
      </div>

      <div className="absolute inset-0 z-10 p-5 md:p-6 flex flex-col justify-end">
        <div className={`mb-3 md:mb-4 p-2.5 md:p-3 rounded-2xl w-fit backdrop-blur-md border border-white/10 transition-all duration-500 ${isActive ? 'bg-primary text-white' : 'bg-white/10 text-white group-hover:bg-white/20'}`}>
          <Icon size={20} className="md:w-6 md:h-6" />
        </div>
        
        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 tracking-tight">
          {category.name}
        </h3>
        <p className="text-white/70 text-[10px] font-medium uppercase tracking-widest leading-tight">
          {category.subtitle}
        </p>

        {isActive && (
          <motion.div
            layoutId="activeGlow"
            className="absolute inset-0 border-2 border-primary rounded-3xl pointer-events-none"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default function CategorySection({ activeCategory, onCategoryChange }) {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-dark">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header: Centered on Mobile, Left-aligned on Desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-14 gap-6 px-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-3 md:mb-4 block">
              What are you craving?
            </span>
            <h2 className="text-3xl md:text-6xl font-display font-bold">
              Food <span className="primary-gradient italic">Categories</span>
            </h2>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => onCategoryChange('All')}
            className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
          >
            Reset Filter <LayoutGrid size={14} className="group-hover:rotate-90 transition-transform duration-500" />
          </motion.button>
        </div>

        {/* Categories Grid/Scroll: Horizontal on Mobile, Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x snap-mandatory">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="min-w-[180px] md:min-w-full snap-start"
            >
              <CategoryCard
                category={category}
                isActive={activeCategory === category.id}
                onClick={onCategoryChange}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS to hide scrollbar while keeping functionality */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}