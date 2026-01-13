"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Star, Users, Zap } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    const words = [
        "Building", "Digital", "Solutions", "That", "Scale."
    ];

    const stats = [
        { icon: Users, value: "30k+", label: "Users Served" },
        { icon: Zap, value: "99.9%", label: "Uptime" },
        { icon: Star, value: "4.8/5", label: "Client Rating" }
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center relative z-10">
                {/* Centered Typography for Maximum Impact */}
                <motion.div style={{ opacity, scale }} className="text-center flex flex-col items-center w-full max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                        className="mb-8"
                    >
                        <div className="inline-block px-4 py-2 mb-4 border border-border/50 rounded-full bg-secondary/10 backdrop-blur-sm">
                            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
                                ✨ Available for Global Projects
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tighter leading-[0.9] mb-8 md:mb-10 flex flex-wrap justify-center gap-x-3 sm:gap-x-6 gap-y-2">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                                className="inline-block text-foreground drop-shadow-2xl"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-3xl mb-12 text-center"
                    >
                        <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground font-light leading-relaxed mb-6 md:mb-8 px-4 sm:px-0">
                            I'm <span className="text-foreground font-semibold">Deepak Singh</span>. I engineer <span className="text-secondary font-medium">premium digital experiences</span> that merge technical precision with aesthetic excellence.
                        </p>
                    </motion.div>

                    {/* Stats - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 mb-10 md:mb-12 px-4 sm:px-0"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center gap-1 md:gap-2">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest text-center">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 px-4 sm:px-0"
                    >
                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-foreground text-background font-bold rounded-full hover:bg-white/90 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] w-full sm:w-auto justify-center"
                        >
                            View My Work
                            <ArrowDown size={18} className="sm:hidden" />
                            <ArrowDown size={20} className="hidden sm:block" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 border border-border/50 bg-card/30 backdrop-blur-md rounded-full text-foreground hover:bg-card/50 transition-all w-full sm:w-auto justify-center"
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-6 text-xs font-mono text-muted-foreground"
            >
                <div className="flex items-center gap-2">
                    <div className="w-px h-8 bg-muted-foreground/30" />
                    <span className="rotate-90 origin-left">SCROLL TO EXPLORE</span>
                </div>
            </motion.div>
        </section >
    );
}
