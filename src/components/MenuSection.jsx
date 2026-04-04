import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';

const categories = ['Burger', 'Pizza', 'Chowmein', 'Pasta'];

const menuItems = [
  {
    Laziiz: 'Double Cheese Blast',
    price: '৳12.99',
    desc: 'Double beef patty, triple cheese, house special sauce.',
    category: 'Burger',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop'
  },
  {
    Laziiz: 'BBQ Chicken Pizza',
    price: '৳16.50',
    desc: 'Grilled chicken, BBQ sauce, red onions, cilantro.',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop'
  },
  {
    Laziiz: 'Hakka Noodles',
    price: '৳10.99',
    desc: 'Stir-fried noodles with fresh veggies and soy sauce.',
    category: 'Chowmein',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop'
  },
  {
    Laziiz: 'Creamy Alfredo',
    price: '৳13.99',
    desc: 'Penne pasta in rich white cream sauce with mushrooms.',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1645112481338-351233c64831?q=80&w=2070&auto=format&fit=crop'
  },
  {
    Laziiz: 'Zesty Veggie Burger',
    price: '৳9.50',
    desc: 'Plant-based patty, avocado, sprouts, spicy mayo.',
    category: 'Burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop'
  },
  {
    Laziiz: 'Meat Lovers Pizza',
    price: '৳19.99',
    desc: 'Pepperoni, sausage, bacon, ham, and extra cheese.',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Burger');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            The Full Spread
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold mb-8"
          >
            Explore Our <span className="primary-gradient italic">Menu</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.Laziiz}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card overflow-hidden group food-card-hover"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.Laziiz}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="btn-primary w-full py-3 text-xs flex items-center justify-center gap-2">
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                      {item.Laziiz}
                    </h3>
                    <span className="text-primary font-display font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex text-primary">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Plus key={star} size={12} className="rotate-45" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500 uppercase font-bold">Top Rated</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <button className="btn-outline group flex items-center gap-3 mx-auto">
            View Full Menu <Plus className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
