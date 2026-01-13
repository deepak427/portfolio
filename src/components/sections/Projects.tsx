"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Users, TrendingUp, Award } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

export function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <section id="work" className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-none mb-4">
                            PROVEN <br />
                            <span className="gradient-text">SUCCESS STORIES</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Real projects, real results. Here's how I've helped businesses scale and succeed.
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-mono text-muted-foreground mb-2">DELIVERED '23-25</p>
                        <p className="text-sm font-mono text-primary">CLIENT FIRST</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className={`group relative p-6 md:p-8 rounded-[2rem] border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-700 flex flex-col justify-between bg-card/40 backdrop-blur-xl shadow-2xl shadow-black/50 ${
                                // Dynamic sizing based on project importance
                                project.id === 1 ? 'md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[600px]' : // Nasvi - Large
                                project.id === 2 ? 'md:row-span-2 min-h-[400px] md:min-h-[600px]' : // Health Insurance - Tall
                                project.id === 3 ? 'lg:col-span-2 min-h-[300px] md:min-h-[400px]' : // Kshetra - Wide
                                'min-h-[300px] md:min-h-[400px]' // Others - Standard
                            } animate-in-view`}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-30 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-[2rem]"
                            >
                                <span className="sr-only">View Project</span>
                            </a>

                            {/* Dynamic Background Image */}
                            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 grayscale-[0.3] group-hover:grayscale-0"
                                    />
                                </div>
                                {/* Luxurious Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-80" />

                                {/* Subtle color tint for mobile/tablet - always visible with low opacity, stronger on hover */}
                                <div className={`absolute inset-0 opacity-15 md:opacity-0 md:group-hover:opacity-30 transition-opacity duration-1000 mix-blend-soft-light ${project.gradient}`} />
                                
                                {/* Additional subtle overlay for mobile warmth */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000" />
                            </div>

                            {/* Content Layer */}
                            <div className="relative z-20 flex justify-between items-start pointer-events-none mb-4 md:mb-20">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/10 bg-black/40 text-xs font-mono backdrop-blur-md text-white/80">
                                        {project.stats}
                                    </div>
                                    {project.metrics && (
                                        <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary/20 border border-primary/20 text-xs font-medium text-primary backdrop-blur-md shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]">
                                            Live
                                        </div>
                                    )}
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 bg-black/40 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-500 backdrop-blur-md group-hover:scale-110">
                                    <ArrowUpRight size={16} className="md:hidden" />
                                    <ArrowUpRight size={18} className="hidden md:block" />
                                </div>
                            </div>

                            <div className="relative z-20 pointer-events-none translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold font-heading mb-2 md:mb-3 text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 font-light mb-4 md:mb-6 text-sm md:text-lg line-clamp-3 md:line-clamp-2 leading-relaxed group-hover:text-white/90 transition-colors">
                                    {project.description}
                                </p>

                                {/* Detailed Metrics */}
                                {project.metrics && (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 md:mb-6 border-t border-white/10 pt-3 md:pt-4">
                                        {project.metrics.users && (
                                            <div>
                                                <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 mb-1">Impact</p>
                                                <div className="flex items-center gap-1 md:gap-1.5 text-xs text-white/90 font-medium">
                                                    <Users size={10} className="text-primary md:hidden" />
                                                    <Users size={12} className="text-primary hidden md:block" />
                                                    <span className="text-[10px] md:text-xs">{project.metrics.users}</span>
                                                </div>
                                            </div>
                                        )}
                                        {project.metrics.performance && (
                                            <div>
                                                <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 mb-1">Performance</p>
                                                <div className="flex items-center gap-1 md:gap-1.5 text-xs text-white/90 font-medium">
                                                    <TrendingUp size={10} className="text-primary md:hidden" />
                                                    <TrendingUp size={12} className="text-primary hidden md:block" />
                                                    <span className="text-[10px] md:text-xs">{project.metrics.performance}</span>
                                                </div>
                                            </div>
                                        )}
                                        {project.metrics.revenue && (
                                            <div className="col-span-2 md:col-span-1">
                                                <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 mb-1">Success</p>
                                                <div className="flex items-center gap-1 md:gap-1.5 text-xs text-white/90 font-medium">
                                                    <Award size={10} className="text-primary md:hidden" />
                                                    <Award size={12} className="text-primary hidden md:block" />
                                                    <span className="text-[10px] md:text-xs">{project.metrics.revenue}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[10px] md:text-[11px] font-medium tracking-wide text-white/50 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-[10px] md:text-[11px] font-medium tracking-wide text-white/50 px-1 md:px-2 py-1 md:py-1.5">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {projects.filter(p => p.testimonial).slice(0, 2).map((project) => (
                        <div key={project.id} className="p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold text-lg">
                                        {project.testimonial!.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-muted-foreground mb-3 italic">
                                        "{project.testimonial!.text}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-foreground">{project.testimonial!.author}</p>
                                        <p className="text-sm text-muted-foreground">{project.testimonial!.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-xl text-muted-foreground mb-6">
                        Ready to build something amazing together?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all"
                    >
                        Start Your Project
                        <ArrowUpRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
