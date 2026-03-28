"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setIsLoading(true);
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
            console.log(`Sending to ${apiUrl}/users`);
            
            const response = await axios.post(`${apiUrl}/users`, {
                name,
                email,
                password
            });
            
            // On success (status 201), the backend returns the same user profile + token as login
            login(response.data);
            router.push('/');
        } catch (err: any) {
            console.error("Signup mapping error", err);
            setError(err.response?.data?.message || err.message || "An error occurred during signup");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
                    alt="Real Madrid Players"
                    fill
                    className="object-cover object-center translate-y-20 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-xl px-4 pt-24 pb-12"
            >
                {/* Form Card */}
                <div className="bg-card/60 backdrop-blur-3xl border border-white/10 rounded-[50px] p-8 md:p-14 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                    <div className="absolute inset-0 rounded-[50px] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 select-none pointer-events-none" />
                    
                    <div className="mb-10 text-center relative z-10">
                        <Link href="/">
                           <Image 
                               src="/Images/Real-Madrid-Logo-1.svg" 
                               alt="Real Madrid" 
                               width={50} 
                               height={70} 
                               className="mx-auto mb-6 drop-shadow-gold"
                           />
                        </Link>
                        <h1 className="text-4xl font-black uppercase text-foreground tracking-widest italic mb-2">Join the Club</h1>
                        <p className="text-foreground/60 text-sm font-medium tracking-wide">Create your Madridista account today.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }} 
                                animate={{ opacity: 1, height: 'auto' }} 
                                className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-sm font-medium"
                            >
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p>{error}</p>
                            </motion.div>
                        )}

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 ml-2">Full Name</label>
                            <div className="relative flex items-center">
                                <User className="absolute left-5 w-5 h-5 text-foreground/40" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Jude Bellingham"
                                    className="w-full bg-background/50 border border-white/5 focus:border-rm-gold/50 rounded-full py-4 pl-14 pr-6 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-rm-gold/10 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 ml-2">Email Address</label>
                            <div className="relative flex items-center">
                                <Mail className="absolute left-5 w-5 h-5 text-foreground/40" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="madridista@example.com"
                                    className="w-full bg-background/50 border border-white/5 focus:border-rm-gold/50 rounded-full py-4 pl-14 pr-6 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-rm-gold/10 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 ml-2">Password</label>
                                <div className="relative flex items-center">
                                    <Lock className="absolute left-5 w-5 h-5 text-foreground/40" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-background/50 border border-white/5 focus:border-rm-gold/50 rounded-full py-4 pl-14 pr-6 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-rm-gold/10 transition-all font-medium"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 ml-2">Confirm</label>
                                <div className="relative flex items-center">
                                    <Lock className="absolute left-5 w-5 h-5 text-foreground/40" />
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-background/50 border border-white/5 focus:border-rm-gold/50 rounded-full py-4 pl-14 pr-6 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-rm-gold/10 transition-all font-medium"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-6 bg-rm-gold text-rm-blue-dark font-black uppercase tracking-[0.2em] py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group/btn shadow-[0_0_40px_rgba(238,195,115,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                        >
                            {isLoading ? (
                                <Loader2 className="w-6 h-6 animate-spin text-black" />
                            ) : (
                                <>
                                    Create Account 
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/10 text-center relative z-10">
                        <p className="text-sm text-foreground/60">
                            Already a member?{' '}
                            <Link href="/login" className="text-rm-gold font-bold hover:text-white transition-colors">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
