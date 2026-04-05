import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-dark relative overflow-hidden">
      {/* Decorative Blur Background for Mobile */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* Text Content Section */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary tracking-[0.3em] uppercase text-[10px] md:text-xs font-black mb-3 block"
            >
              Find Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-display font-bold mb-8 md:mb-12 leading-tight"
            >
              Our <span className="primary-gradient italic">Hubs</span>
            </motion.h2>

            {/* Info Cards - Mobile-e space komano hoyeche */}
            <div className="grid grid-cols-1 gap-6 md:gap-10">
              {[
                { icon: MapPin, title: "Main Branch", desc: "Burger Street, Mymensingh" },
                { icon: Phone, title: "Call to Order", desc: "+880 16458 32896" },
                { icon: Mail, title: "Support", desc: "laziiz@gmail.com" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 md:gap-6 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-primary flex-shrink-0 group-hover:border-primary/50 transition-colors">
                    <item.icon size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base md:text-xl text-white/90">{item.title}</h4>
                    <p className="text-gray-400 font-light text-xs md:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Icons Section */}
            <div className="mt-10 md:mt-16">
              <h4 className="font-display font-bold text-sm md:text-xl mb-4 md:mb-6 text-white/80">Stay Connected</h4>
              <div className="flex gap-3 md:gap-4">
                {[FaInstagram, FaFacebook, FaTwitter].map((Icon, i) => (
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    key={i}
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-lg"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section - Mobile-e agey thakbe jodi image priority hoy, na hoyle niche thakbe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-[300px] md:h-[500px] order-1 lg:order-2 rounded-[2rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative"
          >
            {/* Dark Overlay for modern look on Map */}
            <div className="absolute inset-0 bg-dark/10 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58079.17646199465!2d90.36443477810793!3d24.74399233092122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f0450918ef7%3A0x63359fb96cf4b46c!2sMymensingh!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}