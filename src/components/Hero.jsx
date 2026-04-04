import { motion } from 'framer-motion';
import { ShoppingCart, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop"
          alt="Gourmet Burger"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            New: Truffle Glazed Burger Available Now
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif font-bold leading-[0.9] mb-6 uppercase italic"
          >
            Bite Into <br />
            <span className="primary-gradient">Pure Joy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl"
          >
            Experience the ultimate fusion of flame-grilled perfection and 
            hand-crafted crunch. Fast food, redefined for the modern palate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <button className="btn-primary flex items-center gap-3">
              Order Now <ShoppingCart size={20} />
            </button>
            <button className="btn-outline flex items-center gap-3">
              Book a Table <Calendar size={20} />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-8"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  className="w-12 h-12 rounded-full border-4 border-dark object-cover"
                  alt="User"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-dark bg-primary flex items-center justify-center text-white font-bold text-xs">
                5k+
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Happy Customers</p>
              <p className="text-gray-400 text-sm">Join our community of food lovers</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 hidden xl:block z-20"
      >
        <div className="glass-card p-6 flex items-center gap-4 border-primary/20">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
            <Flame size={32} />
          </div>
          <div>
            <p className="text-white font-bold text-xl">Hot & Fresh</p>
            <p className="text-gray-400 text-sm">Delivered in 30 mins</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { Flame } from 'lucide-react';
