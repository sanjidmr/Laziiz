import { motion } from 'framer-motion';
import { MapPin, Phone, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Contact <span className="primary-gradient italic">Us</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-12"
          >
            <h3 className="text-3xl font-display font-bold mb-8 uppercase tracking-tight">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold">Email Address</label>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary font-bold">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry about catering"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary font-bold">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 group hover:border-primary/30 transition-all">
                <MapPin className="text-primary mb-4" size={32} />
                <h4 className="font-display font-bold text-xl mb-2">Location</h4>
                <p className="text-gray-400 text-sm font-light">Burger Street, Foodie Lane<br />Mymensingh</p>
              </div>
              <div className="glass-card p-8 group hover:border-primary/30 transition-all">
                <Phone className="text-primary mb-4" size={32} />
                <h4 className="font-display font-bold text-xl mb-2">Call Us</h4>
                <p className="text-gray-400 text-sm font-light">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="glass-card overflow-hidden h-80 relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647254585714!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+15551234567" className="flex-1 btn-outline flex items-center justify-center gap-2 text-sm">
                <Phone size={18} /> Call Now
              </a>
              <a href="https://wa.me/1234567890" className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-display font-bold py-3 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
