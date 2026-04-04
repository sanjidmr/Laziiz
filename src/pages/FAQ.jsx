import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer home delivery?",
    answer: "Yes! We offer home delivery within a 10km radius of our restaurant. You can order directly through our website or via popular delivery apps."
  },
  {
    question: "Are there vegetarian options available?",
    answer: "Absolutely. We have a wide range of vegetarian burgers, pizzas, and pastas. Look for the green leaf icon on our menu!"
  },
  {
    question: "How can I book a table for a large group?",
    answer: "For groups larger than 8 people, we recommend calling us directly or using our reservation page at least 24 hours in advance."
  },
  {
    question: "Do you have gluten-free options?",
    answer: "We offer gluten-free pizza crusts and pasta upon request. Please inform our staff about any allergies when ordering."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open from 11:00 AM to 11:00 PM on weekdays, and until 1:00 AM on weekends."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Got Questions?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Common <span className="primary-gradient italic">Queries</span>
          </motion.h1>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-display font-bold text-lg uppercase tracking-tight flex items-center gap-3">
                  <HelpCircle className="text-primary" size={20} />
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
