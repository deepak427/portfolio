"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "@/components/ui/mobile-menu";

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
        >
            <div className="container mx-auto flex items-center justify-between relative">
                <Link href="/" className="text-xl font-bold tracking-tighter z-50">
                    DEEPAK<span className="text-primary">.DEV</span>
                </Link>

                {/* Desktop Navigation - Centered */}
                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 px-8 py-3 bg-card/50 backdrop-blur-md border border-border rounded-full">
                    {[
                        { name: "Work", href: "#work" },
                        { name: "About", href: "#about" },
                        { name: "Contact", href: "#contact" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-3 lg:gap-4 z-50">
                    <ThemeToggle />

                    {/* Resume Download */}
                    <a
                        href="/Resume-Dec-End-2025.pdf"
                        download="Deepak_Singh_Resume_2025.pdf"
                        className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-full hover:bg-muted/80 transition-all duration-300"
                        title="Download Resume"
                    >
                        <Download size={16} />
                        <span className="hidden lg:inline">Resume</span>
                    </a>

                    {/* Hire Me CTA */}
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:bg-primary/90 transition-all duration-300"
                    >
                        <span className="hidden lg:inline">Hire Me</span>
                        <span className="lg:hidden">Hire</span>
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* Mobile Menu */}
                <MobileMenu />
            </div>
        </motion.header>
    );
}
