"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight, MessageCircle } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-20 right-6 left-6 bg-card border border-border rounded-2xl p-6 z-50 shadow-2xl"
                        >
                            <nav className="space-y-4">
                                {menuItems.map((item, i) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="border-t border-border mt-6 pt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Theme</span>
                                    <ThemeToggle />
                                </div>

                                <a
                                    href="/Resume-Dec-End-2025.pdf"
                                    download="Deepak_Singh_Resume_2025.pdf"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between w-full p-3 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                                >
                                    <span className="font-medium">Download Resume</span>
                                    <Download size={16} />
                                </a>

                                <a
                                    href="https://wa.me/916398317883?text=Hi%20Deepak%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you.%20Could%20we%20schedule%20a%20call%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between w-full p-3 bg-green-500/10 text-green-600 rounded-xl hover:bg-green-500/20 transition-colors"
                                >
                                    <span className="font-medium">WhatsApp Chat</span>
                                    <MessageCircle size={16} />
                                </a>

                                <a
                                    href="#contact"
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between w-full p-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
                                >
                                    <span className="font-bold">Hire Me</span>
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}