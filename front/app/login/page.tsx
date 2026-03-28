"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        setIsLoading(true);
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
            console.log(`Sending to ${apiUrl}/users/login`);
            
            const response = await axios.post(`${apiUrl}/users/login`, {
                email,
                password
            });
            
            // On success, save user data via context and redirect
            login(response.data);
            router.push('/');
        } catch (err: any) {
            console.error("Login mapping error", err);
            setError(err.response?.data?.message || err.message || "An error occurred during login");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop"
                    alt="Santiago Bernabéu"
                    fill
                    className="object-cover object-center translate-y-20 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-md px-6 pt-24 pb-12"
            >
                {/* Form Card */}
                <div className="bg-card/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-b from-rm-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 select-none pointer-events-none" />
                    
                    <div className="mb-10 text-center relative z-10">
                        <Link href="/">
                           <Image 
                               src="/Images/Real-Madrid-Logo-1.svg" 
                               alt="Real Madrid" 
                               width={60} 
                               height={80} 
                               className="mx-auto mb-6 drop-shadow-gold"
                           />
                        </Link>
                        <h1 className="text-3xl font-black uppercase text-foreground tracking-widest italic mb-2">Welcome Back</h1>
                        <p className="text-foreground/60 text-sm font-medium tracking-wide">Enter your details to access your account.</p>
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
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 ml-2">Email Address</label>
                            <div className="relative flex items-center">
                                <Mail className="absolute left-4 w-5 h-5 text-foreground/40" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="madridista@example.com"
                                    className="w-full bg-background/50 border border-white/5 focus:border-rm-gold/50 rounded-full py-4 pl-12 pr-6 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-rm-gold/10 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 ml-2">Password</label>
                            <div className="relative flex items-center">
                                <Lock className="absolute left-4 w-5 h-5 text-foreground/40" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-background/50 border border-white/5 focus:border-rm-gold/50 rounded-full py-4 pl-12 pr-6 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-rm-gold/10 transition-all font-medium"
                                />
                            </div>
                            <div className="flex justify-end mt-1">
                                <Link href="#" className="text-xs text-rm-gold hover:text-white transition-colors tracking-wide">Forgot Password?</Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-4 bg-foreground text-background font-black uppercase tracking-[0.2em] py-4 rounded-full hover:bg-rm-gold hover:text-rm-blue-dark transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group/btn shadow-xl hover:shadow-rm-gold/40"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Sign In 
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/10 text-center relative z-10">
                        <p className="text-sm text-foreground/60">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-rm-gold font-bold hover:text-white transition-colors">
                                Register Now
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
