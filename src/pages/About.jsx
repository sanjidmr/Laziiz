import { motion } from 'framer-motion';
import { Quote, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                alt="Our Kitchen"
                className="rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary rounded-full blur-[80px] opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-[80px] opacity-30" />
          </div>

          <div className="lg:w-1/2">
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
              Born from <span className="primary-gradient italic">Flame & Passion</span>
            </motion.h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Founded in 2018, Flame &amp; Crunch started as a small food truck with a big dream: 
              to redefine fast food. We believed that &quot;fast&quot; shouldn&apos;t mean &quot;compromised.&quot; 
              Every burger we flip and every pizza we toss is a testament to our commitment to quality.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Heart size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-300">Made with Love</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-300">Award Winning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chef Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop"
                alt="Executive Chef"
                className="rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
            >
              The Mastermind
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold mb-8"
            >
              Chef <span className="primary-gradient italic">Marco Rossi</span>
            </motion.h2>
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 text-primary/20 w-12 h-12" />
              <p className="text-gray-300 text-xl italic font-light leading-relaxed pl-8">
                &quot;Cooking is an art, but fast food is a science. At Flame &amp; Crunch, we&apos;ve mastered both. 
                We don&apos;t just serve meals; we serve experiences that stay with you.&quot;
              </p>
            </div>
            <p className="text-gray-500 font-light leading-relaxed">
              With over 15 years of experience in Michelin-starred kitchens, Chef Marco brought his 
              expertise to the world of street food, creating a menu that is as sophisticated as it is satisfying.
            </p>
          </div>
        </div>

        {/* Ambiance Gallery Preview */}
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block">The Vibe</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
            Our <span className="primary-gradient italic">Ambiance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop'
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="h-80 rounded-3xl overflow-hidden border border-white/10 group"
            >
              <img
                src={img}
                alt="Restaurant Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
