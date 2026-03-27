"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MessageCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  comments: number;
  isBig?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "All to play for at the Santiago Bernabéu after a tough game",
    image: "/Images/Real News One.webp",
    category: "Match Report",
    date: "2h ago",
    comments: 124,
    isBig: true,
  },
  {
    id: 2,
    title: "Vini Jr., MVP: “Time for a magical night at home\"",
    image: "/Images/Vin new.webp",
    category: "Interview",
    date: "4h ago",
    comments: 89,
  },
  {
    id: 3,
    title: "Kroos' dazzling assist for Vini Jr. to score",
    image: "/Images/Toni.webp",
    category: "Highlights",
    date: "5h ago",
    comments: 45,
  },
  {
    id: 4,
    title: "Kroos: “Home leg is the most important of the season”",
    image: "/Images/Toni2.webp",
    category: "Interview",
    date: "Yesterday",
    comments: 213,
  },
  {
    id: 5,
    title: "Rodrygo: “It's wide open for us back in our stadium”",
    image: "/Images/rodrigo.webp",
    category: "Club News",
    date: "Yesterday",
    comments: 156,
  },
  {
    id: 6,
    title: "Rüdiger: \"A good result before the return leg\"",
    image: "/Images/rudiger.webp",
    category: "Match Report",
    date: "Yesterday",
    comments: 67,
  },
];

export const NewsGrid = () => {
  return (
    <section className="w-full py-60 bg-background transition-colors duration-500 overflow-hidden relative">
      {/* Editorial Background Ghost Text */}
      <h3 className="absolute top-0 right-0 text-[28vw] font-black text-foreground/[0.025] uppercase select-none leading-none pointer-events-none italic tracking-tighter">NEWS</h3>

      <div className="max-w-[1800px] mx-auto px-4 md:px-20 flex flex-col gap-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
           <div className="flex flex-col gap-6">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-4"
             >
               <div className="w-16 h-[1px] bg-rm-gold" />
               <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[11px] italic">Latest Updates</span>
             </motion.div>
             <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-foreground italic leading-[0.85]">
               THE INSIDE <br /><span className="text-gold">STORY</span>
             </h2>
           </div>
           <Link href="/news" className="flex items-center gap-4 px-12 py-6 bg-card border border-border-subtle hover:border-rm-gold/40 hover:bg-foreground hover:text-background transition-all rounded-3xl group text-xs font-black uppercase tracking-widest italic shadow-premium">
              View All News <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Big Featured News */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative h-[700px] rounded-[60px] overflow-hidden cursor-pointer shadow-premium border border-border-subtle"
          >
            <Image src={newsData[0].image} alt={newsData[0].title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark via-rm-blue-dark/40 to-transparent p-16 flex flex-col justify-end">
               <div className="flex items-center gap-6 mb-6">
                 <span className="px-4 py-1.5 bg-rm-gold text-rm-blue-dark text-[10px] font-black uppercase tracking-[0.2em] italic rounded-lg shadow-gold">{newsData[0].category}</span>
                 <div className="flex items-center gap-3 text-white/80 text-[10px] font-black uppercase tracking-widest">
                    <Clock className="w-4 h-4 text-rm-gold" />
                    <span>{newsData[0].date}</span>
                 </div>
               </div>
               <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-widest leading-[0.9] italic group-hover:text-gold transition-colors underline-offset-8 group-hover:underline">{newsData[0].title}</h3>
            </div>
            
            <div className="absolute top-10 right-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 transform group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
            </div>
          </motion.div>

          {/* Side Small News */}
          <div className="grid grid-cols-1 gap-10">
            {newsData.slice(1, 3).map((news) => (
              <motion.div 
                key={news.id} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative h-[330px] rounded-[50px] overflow-hidden cursor-pointer shadow-premium border border-border-subtle transition-all hover:border-rm-gold/40"
              >
                <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                   <div className="flex items-center justify-between mb-4">
                        <span className="text-rm-gold text-[10px] font-black uppercase tracking-widest italic">{news.category}</span>
                        <TrendingUp className="w-4 h-4 text-rm-gold/40" />
                   </div>
                   <h3 className="text-2xl font-black uppercase text-white tracking-tighter leading-none italic group-hover:translate-x-2 transition-transform duration-500">{news.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regular masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {newsData.slice(3).map((news, idx) => (
             <motion.div 
               key={news.id} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               viewport={{ once: true }}
               className="group flex flex-col gap-6 cursor-pointer"
             >
                <div className="h-[300px] w-full relative rounded-[40px] overflow-hidden shadow-premium border border-border-subtle group-hover:border-rm-gold/30 transition-all">
                  <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-xl text-white text-[9px] font-black uppercase tracking-widest rounded-lg border border-white/10 italic">{news.category}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 px-2">
                   <div className="flex items-center gap-6 text-[10px] text-foreground/40 font-black uppercase tracking-widest italic">
                      <div className="flex items-center gap-2"><Clock className="w-3 h-3 text-rm-gold" /> {news.date}</div>
                      <div className="flex items-center gap-2"><MessageCircle className="w-3 h-3 text-rm-gold" /> {news.comments}</div>
                   </div>
                   <h4 className="text-3xl font-black uppercase text-foreground tracking-tighter leading-none italic group-hover:text-rm-gold transition-colors duration-300">{news.title}</h4>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Call to Action Premium Banner */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="w-full relative h-[450px] rounded-[70px] overflow-hidden group cursor-pointer shadow-premium flex items-center justify-center text-center p-12 border border-border-subtle"
        >
           <Image src="/Images/7209393501694149998.jpeg" alt="AD" fill className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-2000" />
           <div className="absolute inset-0 bg-rm-blue/20 mix-blend-overlay" />
           <div className="relative z-10 flex flex-col items-center gap-8">
              <span className="text-rm-gold text-xs font-black uppercase tracking-[0.6em] italic drop-shadow-md">Exclusive Collection</span>
              <h2 className="text-6xl md:text-[8rem] font-black uppercase text-white tracking-tighter italic leading-none max-w-4xl drop-shadow-2xl">OWN THE <span className="text-gold">WHITE JERSEY</span> 24/25</h2>
              <button className="px-12 py-6 bg-white text-rm-blue-dark font-black uppercase text-sm tracking-widest rounded-full hover:bg-rm-gold transition-all flex items-center gap-4 transform hover:translate-y-[-4px] active:scale-95 shadow-2xl">
                 Shop Collection <ArrowUpRight className="w-6 h-6" />
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
