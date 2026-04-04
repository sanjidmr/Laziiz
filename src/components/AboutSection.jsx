import { motion } from 'framer-motion';
import { Target, Eye, ChefHat } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                  alt="Restaurant Interior"
                  className="rounded-3xl h-64 w-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2070&auto=format&fit=crop"
                  alt="Burger Close-up"
                  className="rounded-3xl h-80 w-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-4 pt-12"
              >
                <img
                  src="https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop"
                  alt="Chef"
                  className="rounded-3xl h-80 w-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
                  alt="Kitchen"
                  className="rounded-3xl h-64 w-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full" />
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold mb-8"
            >
              Fueling Your <span className="primary-gradient italic">Cravings</span> Since 2015
            </motion.h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              Laziiz was born from a simple obsession: creating the perfect burger. 
              What started as a small food truck has evolved into a premium fast-food 
              destination where quality is never sacrificed for speed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1">Our Mission</h4>
                  <p className="text-gray-500 text-sm">To serve gourmet-quality fast food that excites the senses.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary flex-shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1">Our Vision</h4>
                  <p className="text-gray-500 text-sm">Becoming the global standard for premium casual dining.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28dea15ee548?q=80&w=1974&auto=format&fit=crop"
                  alt="Head Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl">Chef Marcus Vane</h4>
                <p className="text-primary text-xs uppercase tracking-widest font-bold mb-2">Executive Chef</p>
                <div className="flex gap-1 text-primary">
                  <ChefHat size={14} />
                  <span className="text-[10px] text-gray-400 uppercase font-bold">15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
