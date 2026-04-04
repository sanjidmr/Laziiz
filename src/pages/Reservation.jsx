import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ChevronRight, Info } from 'lucide-react';

export default function Reservation() {
  return (
    <div className="pt-32 pb-24 bg-dark overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Secure Your Spot
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Book a <span className="primary-gradient italic">Table</span>
          </motion.h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-10 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-3xl font-display font-bold mb-6 uppercase">Why Book?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={16} />
                    </div>
                    <p className="text-sm font-medium">Skip the queue during peak hours</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={16} />
                    </div>
                    <p className="text-sm font-medium">Get the best seats in the house</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={16} />
                    </div>
                    <p className="text-sm font-medium">Special birthday/anniversary prep</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-4 rounded-2xl flex items-start gap-3">
                <Info size={20} className="flex-shrink-0" />
                <p className="text-xs font-light">Reservations are held for 15 minutes past the scheduled time.</p>
              </div>
            </div>

            <div className="md:w-2/3 p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary font-bold">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary font-bold">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <option>12:00 PM</option>
                      <option>02:00 PM</option>
                      <option>04:00 PM</option>
                      <option>06:00 PM</option>
                      <option>08:00 PM</option>
                      <option>10:00 PM</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                      <Users size={14} /> Guests
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-gray-400 appearance-none">
                      <option>1 Person</option>
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
                  Confirm Reservation <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
