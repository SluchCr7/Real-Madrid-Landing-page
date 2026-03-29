"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Trophy, Users, History, Star, ArrowRight, Globe, Zap } from "lucide-react";
import Image from "next/image";
import { BiBasketball } from "react-icons/bi";

const trophies = [
  {
    name: "EuroLeague",
    count: 11,
    description: "The European Cup record holders. Undisputed kings of the continent.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop",
    year: "2023, 2018, 2015, 1995..."
  },
  {
    name: "Liga Endesa (ACB)",
    count: 37,
    description: "Dominating the Spanish league since its inception.",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2000&auto=format&fit=crop",
    year: "Recent: 2024, 2022, 2019"
  },
  {
    name: "Copa del Rey",
    count: 28,
    description: "The knockout kings of Spain.",
    image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=2000&auto=format&fit=crop",
    year: "Recent: 2024, 2020, 2017"
  },
  {
    name: "Intercontinental",
    count: 5,
    description: "Conquering the world stage.",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2000&auto=format&fit=crop",
    year: "Last: 2015"
  }
];

const legends = [
  { name: "Sergio Llull", role: "Guard | #23", info: "The soul of the team and clutch master.", img: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?q=80&w=800&auto=format&fit=crop" },
  { name: "Edy Tavares", role: "Center | #22", info: "The defensive wall and EuroLeague's best rim protector.", img: "https://images.unsplash.com/photo-1505666287802-931dc8394b5f?q=80&w=800&auto=format&fit=crop" },
  { name: "Facundo Campazzo", role: "Guard | #7", info: "Magic on the court and defensive dynamo.", img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=800&auto=format&fit=crop" },
  { name: "Rudy Fernández", role: "Forward | #5", info: "A modern legend and defensive specialist.", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop" }
];

export default function BasketballPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);

  return (
    <main className="relative bg-[#050b14] text-white overflow-hidden" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/40 via-transparent to-[#050b14] z-10" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2600&auto=format&fit=crop"
            alt="Basketball Arena"
            fill
            className="object-cover grayscale-[30%]"
            priority
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="w-12 h-[1px] bg-rm-gold" />
            <span className="text-rm-gold text-sm font-black uppercase tracking-[0.5em] italic">Real Madrid Baloncesto</span>
            <span className="w-12 h-[1px] bg-rm-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8"
          >
            KINGS OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rm-gold via-white to-rm-gold">THE COURT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-medium italic mb-12"
          >
            The most successful basketball club in Europe. A legacy defined by 11 continental crowns and unmatched dominance in Spanish history.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="h-16 px-10 bg-rm-gold text-rm-blue-dark font-black uppercase tracking-widest text-xs rounded-full flex items-center gap-4 hover:bg-white transition-all shadow-[0_10px_40px_rgba(193,160,88,0.3)] group">
              View Squad <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="h-16 px-10 bg-white/5 border border-white/10 backdrop-blur-xl text-white font-black uppercase tracking-widest text-xs rounded-full flex items-center gap-4 hover:bg-white/10 transition-all">
              Team History
            </button>
          </motion.div>
        </div>


      </section>

      {/* Trophies Showcase - Horizontal Scroll Style */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <span className="text-rm-gold text-[10px] font-black uppercase tracking-[0.4em] italic mb-4 block">Achievement</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
                A CABINET OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rm-gold to-white">SUPREMACY.</span>
              </h2>
              <p className="text-white/50 font-medium italic text-lg leading-relaxed">
                No club in Europe has defined the modern era of basketball quite like Real Madrid. Every year is a race for immortality.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-[1px] bg-white/20" />
              <span className="text-white/30 font-black text-6xl italic">11x CL</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trophies.map((trophy, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] rounded-[40px] overflow-hidden border border-white/5"
              >
                <Image
                  src={trophy.image}
                  alt={trophy.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/20 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />

                <div className="absolute bottom-0 left-0 w-full p-10">
                  <span className="text-rm-gold text-4xl font-black italic block mb-2">{trophy.count}</span>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{trophy.name}</h3>
                  <p className="text-white/60 text-sm italic font-medium mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {trophy.description}
                  </p>
                  <div className="w-full h-[1px] bg-white/10 group-hover:bg-rm-gold/50 transition-all" />
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/20 mt-4 block">{trophy.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Squad Section - Elite Gallery */}
      <section className="py-32 bg-[#0a0f18] relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute top-1/2 left-0 w-full text-[20vw] font-black text-white/5 italic -translate-y-1/2 uppercase select-none pointer-events-none whitespace-nowrap overflow-hidden leading-none">
          WHITE GIANTS WHITE GIANTS WHITE GIANTS
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
              THE <span className="text-rm-gold">GALACTICOS</span> OF <br />
              BASKETBALL
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 italic font-medium">Meet the elite athletes carrying the weight of history every night at the WiZink Center.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legends.map((player, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative h-[450px] rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={player.img}
                    alt={player.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent opacity-80" />

                  {/* Hover Info Panel */}
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-rm-gold/90 backdrop-blur-md">
                    <p className="text-rm-blue-dark font-black italic text-sm text-center">
                      {player.info}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-rm-gold text-[10px] font-black uppercase tracking-[0.3em] block mb-2">{player.role}</span>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter group-hover:text-gold transition-all">{player.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Reveal Section */}
      <section className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden bg-black">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rm-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-rm-blue/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12"
          >
            <BiBasketball className="w-16 h-16 text-rm-gold mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight mb-12">
              ESTABLISHED 1931. <br />
              MODERN <span className="text-rm-gold">DOMINANCE.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-8">
              <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-rm-gold/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rm-gold/20 flex items-center justify-center text-rm-gold font-black">1931</div>
                  <h4 className="text-xl font-black italic uppercase">Founding Era</h4>
                </div>
                <p className="text-white/50 italic leading-relaxed text-lg">
                  Ángel Cabrera founded the section. From the very beginning, the goal was simple: to be the best in Spain. By the 50s, the royal dominance had begun.
                </p>
              </div>
              <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-rm-gold/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rm-gold/20 flex items-center justify-center text-rm-gold font-black">11x</div>
                  <h4 className="text-xl font-black italic uppercase">The Ferrándiz Legacy</h4>
                </div>
                <p className="text-white/50 italic leading-relaxed text-lg">
                  Under Pedro Ferrándiz, Real Madrid became a global powerhouse, winning the European Cup multiple times and setting records that stand today.
                </p>
              </div>
            </div>
            <div className="space-y-8 md:mt-24">
              <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-rm-gold/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rm-gold/20 flex items-center justify-center text-rm-gold font-black">Laso</div>
                  <h4 className="text-xl font-black italic uppercase">The Pablo Laso Era</h4>
                </div>
                <p className="text-white/50 italic leading-relaxed text-lg">
                  A decade of spectacular basketball. 22 trophies in 11 years, returning the club to the pinnacle of European basketball (2015, 2018).
                </p>
              </div>
              <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-rm-gold/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rm-gold/20 flex items-center justify-center text-rm-gold font-black">2023</div>
                  <h4 className="text-xl font-black italic uppercase">The 11th Legend</h4>
                </div>
                <p className="text-white/50 italic leading-relaxed text-lg">
                  Chus Mateo led the team to an epic 11th EuroLeague title in Kaunas, proving once again that Real Madrid never gives up. Undecima.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 p-16 rounded-[40px] bg-gradient-to-r from-rm-blue/40 to-transparent border border-white/10 text-center"
          >
            <h3 className="text-3xl font-black italic uppercase mb-8">Ready to witness the action?</h3>
            <button className="h-16 px-12 bg-white text-rm-blue-dark font-black uppercase text-xs tracking-widest rounded-full hover:bg-rm-gold hover:text-white transition-all">
              Buy Tickets
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
