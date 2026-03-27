"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, History, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const events = [
  { id: 1, title: 'Santiago Bernabéu Stadium Tour', image: "/Images/Santiago.webp", category: "Tour", date: "Daily from 9:30 AM", href: "/stadium" },
  { id: 2, title: "Official Club Museum", image: "/Images/the best club.jpg", category: "Museum", date: "Permanent Exhibition", href: "/about" },
  { id: 3, title: "Real Madrid City", image: "/Images/City.webp", category: "Academy", date: "Valdebebas", href: "/about" },
];

export const ClubNews = () => {
  return (
    <section className="relative w-full py-60 bg-surface transition-colors duration-500 overflow-hidden border-t border-border-subtle">
      {/* Background Ghost Text */}
      <h3 className="absolute top-0 right-0 text-[28vw] font-black text-foreground/[0.025] uppercase select-none leading-none pointer-events-none italic tracking-tighter">1902</h3>

      <div className="max-w-[1800px] mx-auto px-4 md:px-20 flex flex-col gap-24 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-[1px] bg-rm-gold" />
            <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[11px] italic">Explore Madrid</span>
          </motion.div>
          <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-foreground italic leading-[0.85]">
            BEYOND THE <br /><span className="text-gold">PITCH</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {events.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group cursor-pointer"
            >
              <Link href={event.href}>
                <div className="relative h-[600px] w-full rounded-[50px] overflow-hidden shadow-premium border border-border-subtle group-hover:border-rm-gold/40 transition-all duration-700">
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                     <div className="mb-6 flex items-center justify-between">
                        <span className="px-4 py-1.5 bg-rm-gold text-rm-blue-dark text-[10px] font-black uppercase tracking-widest italic rounded-full shadow-gold">{event.category}</span>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
                           <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                     </div>
                     <h3 className="text-4xl font-black uppercase text-white tracking-tighter leading-none italic group-hover:text-gold transition-colors">{event.title}</h3>
                     <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest mt-4">
                        <MapPin className="w-4 h-4 text-rm-gold" />
                        <span>{event.date}</span>
                     </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* History / Legacy Call to Action */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col lg:flex-row items-center gap-20 p-16 md:p-24 bg-card backdrop-blur-3xl rounded-[80px] border border-border-subtle shadow-premium group"
        >
           <div className="relative h-[400px] w-full lg:w-[500px] shrink-0 rounded-[60px] overflow-hidden shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-1000">
              <Image src="/Images/pirri.webp" alt="Legacy" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0 transition-filter" />
              <div className="absolute inset-0 bg-rm-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
           </div>
           <div className="flex flex-col gap-10 text-center lg:text-left">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                   <div className="w-12 h-[1px] bg-rm-gold" />
                   <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[11px] italic flex items-center gap-2">
                       <History className="w-4 h-4" /> Legacy & Values
                   </span>
                </div>
              </div>
              <h3 className="text-5xl md:text-7xl font-black uppercase text-foreground italic tracking-tighter leading-[0.9]">
                THE MOST <br /> DECORATED <span className="text-gold">LEGACY</span>
              </h3>
              <p className="max-w-2xl text-foreground/50 text-xl font-medium leading-relaxed italic">
                Founded in 1902, Real Madrid has redefined football excellence over more than a century. 
                Our values of honor, ambition, and never-say-die attitude define our eternal spirit.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start">
                  <Link href="/about" className="px-14 py-7 bg-foreground text-background font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-rm-gold hover:text-rm-blue-dark hover:translate-y-[-4px] active:scale-95 transition-all flex items-center gap-4 shadow-2xl shadow-foreground/10">
                    Discover Our History <ArrowRight className="w-5 h-5" />
                  </Link>
                  <div className="flex items-center gap-3 text-foreground/30 font-black uppercase tracking-widest text-[10px] italic">
                      <ShieldCheck className="w-5 h-5 text-rm-gold" /> Est. 1902
                  </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
