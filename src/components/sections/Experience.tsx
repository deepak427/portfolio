"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building, Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/data/experience";

const typeIcons = {
  "full-time": Building,
  "freelance": Briefcase,
  "contract": GraduationCap,
};

export function Experience() {
    return (
        <section id="about" className="py-32 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter mb-8">
                            MY JOURNEY
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            From student to full-time engineer, I've consistently delivered high-impact solutions 
                            that drive business growth and user satisfaction.
                        </p>
                        
                        {/* Key Achievements */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-muted-foreground">30,000+ users served across platforms</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-muted-foreground">99.9% uptime maintained in production</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-muted-foreground">₹75L+ revenue processed through platforms</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="space-y-8">
                            {experiences.map((exp, i) => {
                                const IconComponent = typeIcons[exp.type];
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group relative"
                                    >
                                        {/* Timeline Line */}
                                        {i < experiences.length - 1 && (
                                            <div className="absolute left-6 top-16 w-px h-24 bg-border" />
                                        )}
                                        
                                        <div className="flex gap-6">
                                            {/* Icon */}
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <IconComponent size={20} className="text-primary" />
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="flex-1 pb-8">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                                            {exp.company}
                                                        </h3>
                                                        <p className="text-lg text-foreground font-medium mb-1">
                                                            {exp.role}
                                                        </p>
                                                        <p className="text-sm font-mono text-muted-foreground">
                                                            {exp.year}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                                                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                                                            exp.type === 'full-time' ? 'bg-green-500/10 text-green-500' :
                                                            exp.type === 'freelance' ? 'bg-blue-500/10 text-blue-500' :
                                                            'bg-orange-500/10 text-orange-500'
                                                        }`}>
                                                            {exp.type.replace('-', ' ')}
                                                        </span>
                                                        <span className="text-xs font-mono text-muted-foreground/60 bg-muted px-2 py-1 rounded-full">
                                                            {exp.stack}
                                                        </span>
                                                    </div>
                                                </div>

                                                <ul className="space-y-3">
                                                    {exp.details.map((detail, dIndex) => (
                                                        <motion.li 
                                                            key={dIndex} 
                                                            initial={{ opacity: 0, x: 10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: (i * 0.1) + (dIndex * 0.05) }}
                                                            className="text-muted-foreground flex items-start gap-3"
                                                        >
                                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                            <span>{detail}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-16 border-t border-border"
                >
                    <h3 className="text-3xl font-bold font-heading mb-12 text-center">
                        TECHNICAL EXPERTISE
                    </h3>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                category: "Frontend",
                                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
                            },
                            {
                                category: "Backend", 
                                skills: ["Node.js", "Python", "PostgreSQL", "Redis", "REST APIs"]
                            },
                            {
                                category: "DevOps",
                                skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"]
                            },
                            {
                                category: "Mobile & AI",
                                skills: ["React Native", "OpenAI", "Machine Learning", "Firebase", "Analytics"]
                            }
                        ].map((category, i) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <h4 className="text-lg font-bold mb-4 text-primary">
                                    {category.category}
                                </h4>
                                <div className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <div key={skill} className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
