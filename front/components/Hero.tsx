"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const panels = [
  {
    id: 1,
    title: "THE LEGACY",
    subtitle: "15 European Cups",
    description: "The undisputed kings of the continent. Witness the history of the white shirt.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop", 
    color: "from-black to-black",
  },
  {
    id: 2,
    title: "COURT KINGS",
    subtitle: "11 EuroLeagues",
    description: "The most successful basketball club in Europe. Unmatched royal dominance on the court.",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2600&auto=format&fit=crop", 
    color: "from-[#050b14] to-black",
  },
  {
    id: 3,
    title: "BERNABÉU",
    subtitle: "The New Colosseum",
    description: "Experience the most advanced stadium in world football. The heartbeat of Madrid.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2600&auto=format&fit=crop", 
    color: "from-rm-blue-dark to-black",
  },
  {
    id: 4,
    title: "THE SQUAD",
    subtitle: "A New Galaxy",
    description: "The finest talent on the planet assembled under one badge. Meet the 24/25 team.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop", 
    color: "from-rm-gold/20 to-black",
  }
];

export const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(1); // Default middle panel expanded

  return (
    <section className="relative w-full h-screen min-h-[800px] flex overflow-hidden bg-black pt-20 pb-0">
      
      {/* Absolute Header Overlay */}
      <div className="absolute top-28 left-0 w-full px-6 md:px-12 z-40 translate-y-2 pointer-events-none flex justify-between items-end">
          <div className="flex flex-col">
              <span className="text-rm-gold text-[10px] font-black uppercase tracking-[0.4em] italic mb-2">Real Madrid CF</span>
              <h1 className="text-5xl md:text-7xl font-black uppercase text-white tracking-widest italic leading-none drop-shadow-2xl">
                  HALA MADRID
              </h1>
          </div>
          <div className="hidden md:flex flex-col items-end text-right">
              <span className="text-white/50 text-[10px] uppercase font-bold tracking-[0.3em]">Established</span>
              <span className="text-white text-xl font-black tracking-widest italic">1902</span>
          </div>
      </div>

      {/* The Triptych Accordion */}
      <div className="w-full h-full flex flex-col md:flex-row gap-1 p-2 md:p-6 pb-6">
        {panels.map((panel, index) => {
          const isActive = hoveredIndex === index;

          return (
            <motion.div
              key={panel.id}
              onClick={() => setHoveredIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              animate={{
                flex: isActive ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 5) : 1,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden cursor-pointer rounded-[20px] md:rounded-[40px] group flex-shrink-0 min-h-[150px] md:min-h-0 ${isActive ? 'shadow-2xl shadow-rm-gold/10 z-20' : 'z-10'}`}
            >
              
              {/* Background Image */}
              <motion.div 
                  className="absolute inset-0 w-full h-full"
                  animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
              >
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    className={`object-cover object-center transition-all duration-1000 ${isActive ? 'grayscale-0 opacity-100' : 'grayscale-[50%] opacity-40 group-hover:opacity-60'}`}
                    priority
                  />
                  {/* Gradual darkness mask */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${panel.color} opacity-80 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
              </motion.div>

              {/* Inactive State Vertical Title (Hidden when active) */}
              <AnimatePresence>
                {!isActive && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none md:rotate-180 md:[writing-mode:vertical-rl]"
                    >
                        <span className="text-white/50 font-black text-2xl md:text-4xl uppercase tracking-[0.3em] whitespace-nowrap italic drop-shadow-lg">
                            {panel.title}
                        </span>
                    </motion.div>
                )}
              </AnimatePresence>

              {/* Active State Content */}
              <AnimatePresence>
                {isActive && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end pointer-events-none"
                    >
                        <motion.div 
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.5, delay: 0.3 }}
                           className="flex items-center gap-3 mb-4"
                        >
                            <div className="w-8 h-[2px] bg-rm-gold" />
                            <span className="text-rm-gold text-xs font-black uppercase tracking-[0.3em] italic">
                                {panel.subtitle}
                            </span>
                        </motion.div>

                        <motion.h2 
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.5, delay: 0.4 }}
                           className="text-4xl md:text-6xl xl:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.9] mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                        >
                            {panel.title}
                        </motion.h2>

                        <motion.p 
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.5, delay: 0.5 }}
                           className="max-w-md text-sm md:text-lg text-white/80 font-medium mb-8 italic drop-shadow-md hidden sm:block"
                        >
                            {panel.description}
                        </motion.p>

                        <motion.div 
                           initial={{ y: 20, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ duration: 0.5, delay: 0.6 }}
                           className="flex items-center gap-4 pointer-events-auto"
                        >
                            <button className="h-12 md:h-14 px-8 bg-rm-gold text-rm-blue-dark font-black uppercase text-[10px] md:text-xs tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(238,195,115,0.4)] group/btn">
                                Explore <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                            {index === 1 && (
                                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                    <Play className="w-4 h-4 md:w-5 md:h-5 fill-current ml-1" />
                                </button>
                            )}
                        </motion.div>
                    </motion.div>
                )}
              </AnimatePresence>

              {/* Number overlay */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 text-white/20 font-black text-4xl md:text-6xl italic pointer-events-none mix-blend-overlay">
                  0{panel.id}
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};