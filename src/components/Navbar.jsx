import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Home, 
  UtensilsCrossed, 
  Info, 
  Phone, 
  Calendar,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar({ onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { cartCount } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Top background transparency
      setScrolled(currentScrollY > 50);

      // Auto-hide Logic: 10px tolerance deya hoyeche jate khub sensitive na hoy
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Scrolling Down
      } else {
        setVisible(true); // Scrolling Up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Menu', path: '/menu', icon: UtensilsCrossed },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Reserve', path: '/reservation', icon: Calendar },
  ];

  return (
    <>
      {/* Top Navbar: Desktop & Mobile Logo/Cart/Order */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark/90 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-xl overflow-hidden"
            >
              <img src="/avicon.png" alt="logo" className="w-full h-full object-cover rounded-full p-0.5" />
            </motion.div>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white font-display">
              Laziiz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-primary group ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {link.name}
                <motion.span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
          </div>

          {/* Cart & Order Button (Order Now is only here on Top) */}
          <div className="flex items-center gap-3 md:gap-6">
            <button onClick={onOpenCart} className="relative group">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-primary transition-all duration-300">
                <ShoppingBag size={18} className="md:w-5 md:h-5" />
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-primary text-white text-[8px] md:text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-primary/40">
                  {cartCount}
                </span>
              )}
            </button>
            <Link to="/menu" className="relative overflow-hidden px-4 py-2 md:px-7 md:py-2.5 rounded-full bg-primary text-white text-[10px] md:text-xs uppercase tracking-widest font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 group">
              <span className="relative z-10 font-bold">Order Now</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Dock (Fixed & Centered) */}
      <AnimatePresence>
        {visible && (
          <motion.div 
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="md:hidden fixed bottom-6 left-1/2 z-50 w-[92%] max-w-md"
          >
            <div className="bg-dark/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-around items-center">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex flex-col items-center justify-center gap-1 min-w-[60px] py-1 transition-all"
                  >
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      className={`p-2.5 rounded-2xl transition-all duration-300 ${
                        isActive ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-gray-400'
                      }`}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <span className={`text-[9px] font-bold uppercase tracking-tighter ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}