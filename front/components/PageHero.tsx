"use client";
import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  category?: string;
}

export const PageHero = ({ title, subtitle, backgroundImage, category }: PageHeroProps) => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-rm-blue-dark">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={backgroundImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
      
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-rm-blue-dark/60 via-transparent to-background z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-rm-blue-dark via-transparent to-rm-blue-dark opacity-40 z-1" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          {category && (
            <span className="text-rm-gold font-black uppercase tracking-[0.6em] text-[10px] italic border-b border-rm-gold/30 pb-2">
              {category}
            </span>
          )}
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white italic leading-none">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 === 1 ? "text-gold" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="max-w-2xl text-white/60 text-lg md:text-xl font-medium italic tracking-wide">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rm-gold/40 to-transparent" />
    </section>
  );
};
