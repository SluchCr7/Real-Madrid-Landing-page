"use client";
import React, { useState, useEffect } from "react";
import { Menu, Moon, Sun, X, LogOut, User as UserIcon, Settings, ChevronDown } from "lucide-react";
import { RMLogo } from "./RMLogo";
import { useDarkMode } from "../hooks/useDarkMode";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Squad", href: "/squad" },
  { name: "Matches", href: "/matches" },
  { name: "Standings", href: "/standings" },
  { name: "News", href: "/news" },
  { name: "Stadium", href: "/stadium" },
  { name: "Trophies", href: "/trophies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const { isDark, toggle } = useDarkMode();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex flex-row items-center justify-between px-6 py-4 md:px-16 lg:px-20 ${isScrolled
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

          <div className="flex items-center gap-6 pl-8 border-l border-foreground/10">
            {user ? (
              <div className="relative">
                <motion.div
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-10 h-10 rounded-full cursor-pointer p-[2px] bg-gradient-to-tr from-rm-gold via-rm-gold/20 to-rm-gold border border-rm-gold/40 shadow-premium"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background">
                    <Image
                      src={user.profilePhoto?.url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                      alt={user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Professional User Dropdown */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute right-0 mt-4 w-72 bg-card/95 backdrop-blur-xl border border-border-subtle rounded-[32px] shadow-2xl overflow-hidden z-[60]"
                    >
                      {/* Header Section */}
                      <div className="bg-gradient-to-br from-rm-blue/10 to-rm-gold/10 p-6 border-b border-border-subtle">
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-rm-gold/40 shadow-lg">
                            <Image
                              src={user.profilePhoto?.url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                              alt={user.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-black uppercase text-foreground leading-none mb-1">{user.name}</span>
                            <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Official Madridista</span>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-4 flex flex-col gap-1">
                        {[
                          { icon: UserIcon, label: "Profile", href: "/profile" },
                          { icon: Settings, label: "Settings", href: "/settings" },
                        ].map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-foreground/[0.03] transition-colors group"
                          >
                            <item.icon className="w-4 h-4 text-foreground/40 group-hover:text-rm-gold transition-colors" />
                            <span className="text-xs font-black uppercase tracking-widest text-foreground group-hover:text-rm-gold transition-colors">{item.label}</span>
                          </Link>
                        ))}

                        <div className="h-[1px] w-full bg-border-subtle my-2" />

                        <button
                          onClick={() => { logout(); setIsUserMenuOpen(false); }}
                          className="flex items-center gap-4 p-4 rounded-2xl hover:bg-red-500/5 transition-colors group w-full text-left"
                        >
                          <LogOut className="w-4 h-4 text-red-500/60 group-hover:text-red-500 transition-colors" />
                          <span className="text-xs font-black uppercase tracking-widest text-red-500/60 group-hover:text-red-500 transition-colors">Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href="/login" className={`flex items-center text-xs font-black uppercase tracking-[0.4em] italic relative group ${textColorClass} hover:text-rm-gold`}>
                Login
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rm-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            )}

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

                <div className="h-[1px] w-full bg-white/10 my-4" />

                {user ? (
                  <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} whileHover={{ x: 10 }} className="group">
                    <div className="flex flex-col gap-6 mb-10 pb-10 border-b border-white/10">
                      <div className="relative w-24 h-24 rounded-[32px] overflow-hidden border-2 border-rm-gold/40 shadow-2xl p-[3px] bg-gradient-to-tr from-rm-gold via-transparent to-rm-gold">
                        <div className="relative w-full h-full rounded-[28px] overflow-hidden border-4 border-rm-blue-dark">
                          <Image
                            src={user.profilePhoto?.url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                            alt={user.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase text-rm-gold tracking-[0.4em] mb-2 italic">Official Madridista</span>
                        <span className="text-5xl font-black uppercase text-white leading-none tracking-tight italic">{user.name}</span>
                      </div>

                      <div className="flex flex-col gap-4 mt-4">
                        <button className="flex items-center gap-4 text-white/40 hover:text-rm-gold transition-colors font-black uppercase tracking-widest text-sm italic">
                          <UserIcon className="w-5 h-5" /> View Profile
                        </button>
                        <button className="flex items-center gap-4 text-white/40 hover:text-rm-gold transition-colors font-black uppercase tracking-widest text-sm italic">
                          <Settings className="w-5 h-5" /> Account Settings
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => { logout(); setIsOpen(false); }}
                      className="flex items-center gap-6 p-6 rounded-[32px] bg-red-500/10 border border-red-500/20 w-full hover:bg-red-500 hover:text-white transition-all group shadow-xl"
                    >
                      <LogOut className="w-8 h-8 text-red-500 group-hover:text-white transition-colors" />
                      <div className="flex flex-col items-start translate-y-[2px]">
                        <span className="text-[10px] uppercase font-black tracking-[0.4em] leading-none mb-1 opacity-60">Session</span>
                        <span className="text-2xl font-black uppercase leading-none italic">Sign Out</span>
                      </div>
                    </button>
                  </motion.li>
                ) : (
                  <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} whileHover={{ x: 10 }} className="group">
                    <Link href="/login" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase text-white hover:text-rm-gold transition-all duration-300 group-hover:italic">
                      Sign In / Register
                    </Link>
                  </motion.li>
                )}
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

