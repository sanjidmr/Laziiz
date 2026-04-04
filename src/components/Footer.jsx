import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-xl overflow-hidden"
              >
                <img
                  src="/avicon.png"
                  alt="logo"
                  className="w-full h-full object-cover rounded-full p-0.5"
                />
              </motion.div>
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white">
                Laziiz
              </span>
            </Link>
            <p className="text-gray-500 font-light leading-relaxed max-w-md mb-8">
              The ultimate destination for premium fast food. We believe in high-quality
              ingredients, bold flavors, and lightning-fast service. Join the Laziiz revolution today.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
              <li className="flex justify-between">
                <span>Weekdays</span>
                <span className="text-primary font-bold">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Weekends</span>
                <span className="text-primary font-bold">11:00 - 01:00</span>
              </li>
              <li className="flex justify-between">
                <span>Holidays</span>
                <span className="text-primary font-bold">12:00 - 22:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-bold">
            © 2026 Laziiz. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
