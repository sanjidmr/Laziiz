import { motion } from 'framer-motion';
import { MapPin, Phone, Mail} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";


export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
            >
              Find Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold mb-12"
            >
              Our <span className="primary-gradient italic">Hubs</span>
            </motion.h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">Main Branch</h4>
                  <p className="text-gray-400 font-light">Burger Street<br />Mymeningh</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">Call to Order</h4>
                  <p className="text-gray-400 font-light">+880 16458 32896</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">Support</h4>
                  <p className="text-gray-400 font-light">laziiz@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="font-display font-bold text-xl mb-6">Stay Connected</h4>
              <div className="flex gap-4">
                {[FaInstagram, FaFacebook, FaTwitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
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
        </div>
      </div>
    </section>
  );
}
