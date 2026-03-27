"use client";
import React, { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { RMLogo } from "./RMLogo";
import { useDarkMode } from "../hooks/useDarkMode";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Squad", href: "/squad" },
  { name: "Matches", href: "/matches" },
  { name: "News", href: "/news" },
  { name: "Stadium", href: "/stadium" },
  { name: "Trophies", href: "/trophies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const { isDark, toggle } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColorClass = isScrolled ? "text-foreground" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex flex-row items-center justify-between px-6 py-4 md:px-20 lg:px-40 ${isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border-subtle shadow-premium py-3"
            : "bg-transparent py-8"
          }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => router.push('/')}
        >
          <RMLogo className={`w-12 h-12 ${isScrolled ? 'text-rm-blue dark:text-rm-gold' : 'text-rm-gold'} drop-shadow-gold`} fill="currentColor" />
          <div className="flex flex-col -gap-1">
            <span className={`text-xl font-black uppercase leading-none italic transition-colors ${isScrolled ? 'text-foreground' : 'text-white'} group-hover:text-rm-gold`}>Real Madrid</span>
            <span className={`text-[8px] uppercase tracking-[0.4em] font-black leading-none ${isScrolled ? 'text-foreground/40' : 'text-white/60'}`}>Club de Fútbol</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex flex-row items-center gap-12">
          <ul className="flex flex-row items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 relative group ${textColorClass} hover:text-rm-gold`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rm-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 pl-12 border-l border-foreground/10">
            <button
              onClick={toggle}
              className={`p-2 transition-colors ${textColorClass} hover:text-rm-gold`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="flex flex-row items-center gap-6">
              <Image src="/Images/adidas_gray.svg" alt="Adidas" width={28} height={28} className={`transition-all duration-500 ${isScrolled ? 'dark:invert' : 'invert brightness-200'} opacity-60 hover:opacity-100`} />
              <Image src="/Images/emirates_gray.svg" alt="Emirates" width={55} height={28} className={`transition-all duration-500 ${isScrolled ? 'dark:invert' : 'invert brightness-200'} opacity-60 hover:opacity-100`} />
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggle} className={textColorClass}>
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(true)} className={`${textColorClass} p-2`}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-rm-blue-dark flex flex-col p-10 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <RMLogo className="w-16 h-16 text-rm-gold" fill="#c1a058" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-3 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                    className="group"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black uppercase text-white hover:text-rm-gold transition-all duration-300 group-hover:italic"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-10 pt-10">
                <div className="flex gap-8 items-center">
                  <Image src="/Images/adidas_gray.svg" alt="Adidas" width={40} height={40} className="invert brightness-0 opacity-60" />
                  <Image src="/Images/emirates_gray.svg" alt="Emirates" width={80} height={40} className="invert brightness-0 opacity-60" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-rm-gold font-black italic">Hala Madrid</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold text-white">Official Club Website</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

