import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ChevronRight } from 'lucide-react';

export default function ReservationForm() {
  return (
    <section id="reservation" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-80 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-dark/40" />
            <div className="absolute inset-0 flex flex-col justify-center p-12">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4"
              >
                Join the Party
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
              >
                Reserve Your <br />
                <span className="primary-gradient italic">Favorite Spot</span>
              </motion.h2>
              <p className="text-gray-200 font-light max-w-md">
                Planning a birthday or just a big hangout? Let us know and we&apos;ll prep the perfect table for you.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 md:p-16 bg-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <Calendar size={14} /> Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <Clock size={14} /> Time
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-400 appearance-none">
                    <option>12:00</option>
                    <option>14:00</option>
                    <option>16:00</option>
                    <option>18:00</option>
                    <option>20:00</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <Users size={14} /> Guests
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-400 appearance-none">
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>6 People</option>
                    <option>8+ People</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary font-bold">Special Requests</label>
                <textarea
                  rows={4}
                  placeholder="Any allergies or special occasions?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Book Table <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
