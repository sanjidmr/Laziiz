import { motion } from 'framer-motion';
import { Tag, Zap, Gift } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Family Combo Deal',
    desc: '2 Large Pizzas + 4 Drinks + Large Fries',
    discount: '25% OFF',
    code: 'FAMILY25',
    color: 'bg-primary',
    icon: Gift
  },
  {
    id: 2,
    title: 'Student Special',
    desc: 'Any Burger + Fries + Soft Drink',
    discount: 'ONLY ৳9.99',
    code: 'STUDENT10',
    color: 'bg-secondary',
    icon: Zap
  },
  {
    id: 3,
    title: 'Weekend Feast',
    desc: 'Buy 1 Pasta, Get 1 Half Price',
    discount: 'BOGO 50%',
    code: 'WEEKEND',
    color: 'bg-red-500',
    icon: Tag
  }
];

export default function SpecialOffers() {
  return (
    <section id="offers" className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Exclusive Deals
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold"
          >
            Special <span className="primary-gradient italic">Offers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className={`h-full p-10 rounded-[2.5rem] ${offer.color} overflow-hidden relative shadow-2xl transition-transform duration-500 group-hover:-rotate-2`}>
                {/* Decorative Circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <offer.icon className="text-white w-12 h-12 mb-6" />
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-white/80 font-medium mb-8 leading-relaxed">{offer.desc}</p>
                  
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 mb-8">
                    <p className="text-white text-4xl font-display font-bold mb-1">{offer.discount}</p>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Use Code: {offer.code}</p>
                  </div>
                  
                  <button className="w-full py-4 bg-white text-dark font-bold rounded-xl uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors">
                    Claim Offer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
