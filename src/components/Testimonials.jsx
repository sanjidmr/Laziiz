import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mike Thompson',
    role: 'Burger Connoisseur',
    content: 'The Monster Beef Burger is hands down the best I\'ve ever had. The flame-grilled taste is real, and the crunch is just perfect. 10/10!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Local Foodie',
    content: 'Finally a place that gets fast food right. It feels premium but still has that comforting, greasy-in-a-good-way vibe. The pizza is a must-try.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'David Chen',
    role: 'Student',
    content: 'The student deals are incredible. Great portions, amazing flavor, and the staff are super friendly. Laziiz is my new go-to spot.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Fan Favorites
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold"
          >
            What Our <span className="primary-gradient italic">Fans Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500"
            >
              <Quote className="text-primary/20 w-12 h-12 mb-6 group-hover:text-primary/40 transition-colors" />
              <p className="text-gray-300 text-lg italic mb-8 font-light leading-relaxed">
                &quot;{t.content}&quot;
              </p>
              <div className="mt-auto flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display font-bold text-xl">{t.name}</h4>
                <p className="text-xs text-primary uppercase tracking-widest mt-1 font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
