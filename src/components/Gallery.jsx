import { motion } from 'framer-motion';
import { Sparkles, Maximize2 } from 'lucide-react';
import r1 from "../assets/img/r1.jpg"
import r2 from "../assets/img/r2.jpg"
import r3 from "../assets/img/r3.jpg"
import r4 from "../assets/img/r4.jpg"
import r5 from "../assets/img/r5.jpg"
import r6 from "../assets/img/r6.jpg"
import r7 from "../assets/img/r7.jpg"
import r8 from "../assets/img/r8.jpg"

const galleryImages = [
  // Row 1: Dan-pasherta boro (Item 2)
  { id: 1, span: "col-span-1 row-span-1", img: r1, title: "Gourmet Pasta" },
  { id: 2, span: "col-span-1 row-span-2", img: r2, title: "Signature Pizza" },
  
  // Row 2: Bam-pasherta boro (Item 3)
  { id: 3, span: "col-span-1 row-span-2", img: r3, title: "Grilled Steak" },
  { id: 4, span: "col-span-1 row-span-1", img: r4, title: "Fresh Salad" },
  
  // Row 3: Dan-pasherta boro (Item 6)
  { id: 5, span: "col-span-1 row-span-1", img: r5, title: "Honey Pancakes" },
  { id: 6, span: "col-span-1 row-span-2", img: r6, title: "Berry Toast" },
  
  // Row 4: Bam-pasherta boro (Item 7)
  { id: 7, span: "col-span-1 row-span-2", img: r7, title: "Veggie Mix" },
  { id: 8, span: "col-span-1 row-span-1", img: r8, title: "Sweet Dessert" },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-32 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1 rounded-full mb-6"
          >
            <Sparkles size={12} className="text-primary" />
            <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">Visual Journal</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-8xl font-display font-medium leading-[0.85]">
            Art of <br /> 
            <span className="italic font-light text-primary/80 tracking-tighter">gallery</span>
          </h2>
        </div>

        {/* Bento Grid Layout - Mobile & Desktop both 2 columns */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 auto-rows-[160px] md:auto-rows-[280px]">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`${item.span} relative group overflow-hidden rounded-[2rem] md:rounded-[3.5rem] bg-white/5 border border-white/5`}
            >
              {/* Image */}
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* Sophisticated Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-12">
                <div className="overflow-hidden">
                  <motion.p 
                    initial={{ y: 20 }} 
                    whileInView={{ y: 0 }} 
                    className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2"
                  >
                    Gallery #{item.id}
                  </motion.p>
                  <motion.h4 
                    initial={{ y: 30 }} 
                    whileInView={{ y: 0 }} 
                    className="text-xl md:text-3xl font-display font-bold leading-tight"
                  >
                    {item.title}
                  </motion.h4>
                </div>
                
                <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl bg-white/5">
                    <Maximize2 size={18} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Minimalist Border Glow on Hover */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-all duration-500 rounded-[2rem] md:rounded-[3.5rem] pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <motion.button 
            whileHover={{ letterSpacing: "0.6em" }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/40 hover:text-primary transition-all duration-300 border-b border-white/10 hover:border-primary pb-2"
          >
            Follow Our Story
          </motion.button>
        </div>
      </div>
    </section>
  );
}