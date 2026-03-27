"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Globe, History, ArrowRight, ShieldCheck } from "lucide-react";

const events = [
  { id: 1, title: 'Santiago Bernabéu Stadium Tour', image: "/Images/Santiago.webp", category: "Tour", date: "Daily from 9:30 AM" },
  { id: 2, title: "Official Club Museum", image: "/Images/the best club.jpg", category: "Museum", date: "Permanent Exhibition" },
  { id: 3, title: "Real Madrid City", image: "/Images/City.webp", category: "Academy", date: "Valdebebas" },
];

export const ClubNews = () => {
  return (
    <section className="relative w-full py-40 bg-surface transition-colors duration-500 overflow-hidden border-t border-border-subtle">
      {/* Background Decorative Text */}
      <h3 className="absolute top-0 right-0 text-[18vw] font-black text-foreground/[0.03] uppercase select-none leading-none pointer-events-none italic">EST. 1902</h3>

      <div className="max-w-7xl mx-auto px-4 md:px-20 flex flex-col gap-20 relative z-10">
        <div className="flex flex-col items-start gap-4">
           <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[10px] italic underline underline-offset-8">Explore Madrid</span>
           <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground italic leading-none">
             Beyond the <span className="text-gold">Pitch</span>
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
              <div className="relative h-[550px] w-full rounded-[50px] overflow-hidden shadow-premium border border-border-subtle group-hover:border-rm-gold/40 transition-all border-b-8 border-b-rm-gold/40 group-hover:border-b-rm-gold transition-all duration-700">
                <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-12 flex flex-col justify-end">
                   <div className="mb-6">
                      <span className="px-4 py-1.5 bg-rm-gold text-rm-blue-dark text-[10px] font-black uppercase tracking-widest italic rounded-full shadow-gold">{event.category}</span>
                   </div>
                   <h3 className="text-3xl font-black uppercase text-white tracking-widest leading-none mb-6 italic group-hover:text-gold transition-colors">{event.title}</h3>
                   <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-widest">
                      <MapPin className="w-4 h-4 text-rm-gold" />
                      <span>{event.date}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* History / Legacy Call to Action - Ultra Premium Card */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 flex flex-col lg:flex-row items-center gap-16 p-16 bg-card backdrop-blur-3xl rounded-[70px] border border-border-subtle shadow-premium group"
        >
           <div className="relative h-[350px] w-full lg:w-[450px] shrink-0 rounded-[50px] overflow-hidden shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-1000">
              <Image src="/Images/pirri.webp" alt="Legacy" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-rm-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
           </div>
           <div className="flex flex-col gap-8 text-center lg:text-left">
              <div className="flex flex-col gap-2">
                <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[10px] flex items-center gap-3 justify-center lg:justify-start italic"> 
                    <History className="w-5 h-5" /> The History & Eternal Values
                </span>
                <div className="h-[1px] w-20 bg-rm-gold/30 hidden lg:block" />
              </div>
              <h3 className="text-4xl md:text-6xl font-black uppercase text-foreground italic tracking-tighter leading-none">
                THE MOST DECORATED <br /> <span className="text-gold">LEGACY</span> IN HISTORY
              </h3>
              <p className="max-w-2xl text-foreground/60 text-lg font-medium leading-relaxed">
                Founded in 1902, Real Madrid has redefined football excellence over more than a century. 
                Our values of honor, ambition, and never-say-die attitude define our eternal spirit.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start">
                  <button className="px-12 py-6 bg-rm-blue dark:bg-rm-gold text-white dark:text-rm-blue-dark font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:translate-y-[-4px] active:scale-95 transition-all flex items-center gap-4 shadow-xl">
                    Discover Our History <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-3 text-foreground/40 font-black uppercase tracking-widest text-[10px] italic">
                      <ShieldCheck className="w-5 h-5 text-rm-gold" /> Since 1902
                  </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
