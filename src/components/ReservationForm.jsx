import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ChevronRight, MessageSquare, Utensils } from 'lucide-react';

export default function ReservationForm() {
  return (
    <section id="reservation" className="py-10 md:py-24 bg-dark relative overflow-hidden">
      {/* Decorative Glow - Smaller on Mobile */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10">
        <div className="glass-card overflow-hidden flex flex-col lg:flex-row rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">

          {/* Left Side: Visual Content - Mobile-e height komano hoyeche */}
          <div className="lg:w-1/2 relative h-[250px] sm:h-[300px] lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
              alt="Restaurant Interior"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent lg:bg-dark/40" />

            <div className="absolute inset-0 flex flex-col justify-end lg:justify-center p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-2"
              >
                <Utensils size={14} className="text-primary" />
                <span className="text-primary tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-xs font-black">
                  Join the Party
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-5xl font-display font-bold text-white mb-2 md:mb-6 leading-tight tracking-tight"
              >
                Reserve Your <br className="hidden md:block" />
                <span className="primary-gradient italic tracking-tighter">Favorite Spot</span>
              </motion.h2>
              <p className="text-gray-300 text-[11px] md:text-base font-light max-w-sm leading-relaxed opacity-90">
                Planning a birthday or just a big hangout? Let us know.
              </p>
            </div>
          </div>

          {/* Right Side: Form Content - Compact Padding */}
          <div className="lg:w-1/2 p-5 sm:p-8 md:p-16 bg-white/[0.01]">
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>

              {/* Name & Email Section - Smaller Gaps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="space-y-1.5">
                  <label className="text-[9px] md:text-xs uppercase tracking-widest text-primary/70 font-bold ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-lg md:rounded-2xl px-3.5 py-2.5 md:py-3.5 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-gray-700 text-xs md:text-sm text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] md:text-xs uppercase tracking-widest text-primary/70 font-bold ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-lg md:rounded-2xl px-3.5 py-2.5 md:py-3.5 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-gray-700 text-xs md:text-sm text-white"
                  />
                </div>
              </div>

              {/* Date, Time, Guests Section - Smarter Stack */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6">
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <label className="text-[9px] md:text-xs uppercase tracking-widest text-primary/70 font-bold flex items-center gap-1.5 ml-1">
                    <Calendar size={12} className="text-primary" /> Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-lg md:rounded-2xl px-3.5 py-2.5 md:py-3.5 focus:outline-none focus:border-primary/50 transition-all text-gray-500 text-xs md:text-sm appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5 relative">
                  <label className="text-[9px] md:text-xs uppercase tracking-widest text-primary/70 font-bold flex items-center gap-1.5 ml-1">
                    <Clock size={12} className="text-primary" /> Time
                  </label>
                  <select className="w-full bg-white/[0.03] border border-white/5 rounded-lg md:rounded-2xl px-3.5 py-2.5 md:py-3.5 focus:outline-none focus:border-primary/50 transition-all text-gray-500 text-xs md:text-sm appearance-none cursor-pointer">
                    <option className="bg-dark text-white">12:00 PM</option>
                    <option className="bg-dark text-white">02:00 PM</option>
                    <option className="bg-dark text-white">06:00 PM</option>
                    <option className="bg-dark text-white">08:00 PM</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] md:text-xs uppercase tracking-widest text-primary/70 font-bold flex items-center gap-1.5 ml-1">
                    <Users size={12} className="text-primary" /> Guests
                  </label>
                  <select className="w-full bg-white/[0.03] border border-white/5 rounded-lg md:rounded-2xl px-3.5 py-2.5 md:py-3.5 focus:outline-none focus:border-primary/50 transition-all text-gray-500 text-xs md:text-sm appearance-none cursor-pointer">
                    <option className="bg-dark text-white">2 Ppl</option>
                    <option className="bg-dark text-white">4 Ppl</option>
                    <option className="bg-dark text-white">6 Ppl</option>
                    <option className="bg-dark text-white">10+ Ppl</option>
                  </select>
                </div>
              </div>

              {/* Special Requests - Reduced Height */}
              <div className="space-y-1.5">
                <label className="text-[9px] md:text-xs uppercase tracking-widest text-primary/70 font-bold flex items-center gap-1.5 ml-1">
                  <MessageSquare size={12} className="text-primary" /> Special Requests
                </label>
                <textarea
                  rows={2} // Mobile-e height komano hoyeche
                  placeholder="Any allergies or special occasions?"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-lg md:rounded-2xl px-3.5 py-2.5 md:py-3.5 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none text-xs md:text-sm placeholder:text-gray-700 text-white"
                />
              </div>

              {/* Submit Button - Compact & Bold */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 py-3 md:py-4 text-[13px] md:text-sm font-black shadow-lg shadow-primary/15 rounded-lg md:rounded-xl uppercase tracking-wider"
              >
                Confirm Booking <ChevronRight size={16} />
              </motion.button>

              <p className="text-center text-[9px] text-gray-600 italic">
                * We'll send an email confirmation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}