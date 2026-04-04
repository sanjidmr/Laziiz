import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import ReservationForm from '../components/ReservationForm';
import ContactSection from '../components/ContactSection';
import CategorySection from '../components/CategorySection';
import { menuData } from '../data/menuData';
import { useNavigate } from 'react-router-dom';
import FeaturedDishes from '../components/FeaturedDishes';
import MostPopuler from '../components/MostPopuler';
import ComboPackages from '../components/ComboPackages';
import Gallery from '../components/Gallery';







export default function Home() {
  const navigate = useNavigate();
  const featuredDishes = menuData.filter(item => item.rating >= 4.8).slice(0, 4);

  const handleCategoryClick = (categoryId) => {
    // Navigate to menu with the selected category
    navigate(`/menu`, { state: { category: categoryId } });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1974&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-primary tracking-[0.6em] uppercase text-xs font-bold mb-6 block"
            >
              Premium Fast Food Experience
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-bold leading-none mb-8"
            >
              Bite Into <br />
              <span className="primary-gradient italic">Pure Joy.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-xl"
            >
              Experience the perfect harmony of flame-grilled perfection and artisanal crunch. 
              Gourmet ingredients, bold flavors, and a vibe that&apos;s purely electric.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/menu" className="btn-primary flex items-center gap-2 group">
                Order Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/reservation" className="btn-outline">
                Book a Table
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Info */}
        <div className="absolute bottom-12 left-0 w-full hidden md:block">
          <div className="max-w-7xl mx-auto px-6 flex gap-12">
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
              <Clock className="text-primary" size={20} />
              <span>Open: 11:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
              <MapPin className="text-primary" size={20} />
              <span>456 Burger St, Mymensingh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <CategorySection onCategoryChange={handleCategoryClick} />

      <MostPopuler/>

    

      {/* Featured Dishes */}
      <FeaturedDishes/>

      <ComboPackages/>

      {/* Special Offers */}
      <section className="py-24 bg-dark-lighter relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-card p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.3em] mb-6 inline-block">Limited Time Offer</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Family Combo <br />
                <span className="primary-gradient italic">40% OFF</span>
              </h2>
              <p className="text-gray-400 text-lg font-light mb-10 max-w-md">
                Get 2 Monster Burgers, 1 Large Pizza, 4 Drinks, and a Dessert Platter at an unbeatable price.
              </p>
              <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
                Claim Offer Now <ArrowRight size={20} />
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop"
                  alt="Special Offer"
                  className="rounded-3xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full blur-[80px] opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
   

      {/* Reservation Form */}
      <ReservationForm />

      {/* Blog Section */}
      <Gallery/>

      {/* Quick Stats / Highlights */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Happy Clients', value: '10K+' },
              { label: 'Gourmet Dishes', value: '20+' },
              { label: 'Expert Chefs', value: '4+' },
              { label: 'Years of Joy', value: '08+' },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
