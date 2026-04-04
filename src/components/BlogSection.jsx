import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Secret to the Perfect Flame-Grilled Burger",
    excerpt: "Discover the techniques and ingredients that make our burgers stand out from the rest.",
    date: "March 28, 2026",
    author: "Chef Marco",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Why Artisanal Pizza Crust Matters",
    excerpt: "We dive deep into the fermentation process and why we choose local flour for our dough.",
    date: "March 24, 2026",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "5 Fast Food Trends to Watch in 2026",
    excerpt: "From plant-based innovations to high-tech kitchens, see what's next for the industry.",
    date: "March 20, 2026",
    author: "David Chen",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Crunchy News
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold"
          >
            From Our <span className="primary-gradient italic">Journal</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Food Culture
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm font-light mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-primary font-display font-bold uppercase tracking-widest text-xs group/btn">
                  Read More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
