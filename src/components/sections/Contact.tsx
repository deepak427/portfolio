"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Calendar, DollarSign, MessageSquare } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        timeline: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = `Project Inquiry from ${formData.name}`;
        const body = `
Hi Deepak,

I'm interested in working with you on a project.

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Project Details:
${formData.message}

Looking forward to hearing from you!

Best regards,
${formData.name}
        `.trim();

        window.location.href = `mailto:negid0253@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const budgetRanges = [
        "Under $5,000",
        "$5,000 - $15,000",
        "$15,000 - $30,000",
        "$30,000 - $50,000",
        "$50,000+"
    ];

    const timelines = [
        "ASAP (Rush job)",
        "1-2 weeks",
        "1 month",
        "2-3 months",
        "3+ months"
    ];

    return (
        <section id="contact" className="py-32 bg-background border-t border-border overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter leading-none mb-6">
                            LET'S BUILD <br />
                            <span className="gradient-text">SOMETHING GREAT</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Ready to scale your business with a reliable development partner?
                            Let's discuss your project and create something amazing together.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                                <p className="text-muted-foreground mb-8">
                                    I'm currently available for freelance projects and would love to help bring your ideas to life.
                                    Whether you need a complete platform or want to scale an existing product, let's talk.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a
                                    href="mailto:negid0253@gmail.com"
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-card/50 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-muted-foreground">negid0253@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="tel:+916398317883"
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-card/50 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <p className="text-muted-foreground">+91 63983 17883</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <MapPin size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-muted-foreground">India (Remote Worldwide)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4 pt-8">
                                <div className="text-center p-4 rounded-2xl bg-card/30 border border-border">
                                    <div className="text-2xl font-bold text-primary">24h</div>
                                    <div className="text-sm text-muted-foreground">Response Time</div>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-card/30 border border-border">
                                    <div className="text-2xl font-bold text-primary">100%</div>
                                    <div className="text-sm text-muted-foreground">Project Success</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl border border-border bg-card/30 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                                            <DollarSign size={16} className="inline mr-1" />
                                            Budget Range
                                        </label>
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                        >
                                            <option value="">Select budget range</option>
                                            {budgetRanges.map(range => (
                                                <option key={range} value={range}>{range}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                                            <Calendar size={16} className="inline mr-1" />
                                            Timeline
                                        </label>
                                        <select
                                            value={formData.timeline}
                                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                                        >
                                            <option value="">Select timeline</option>
                                            {timelines.map(timeline => (
                                                <option key={timeline} value={timeline}>{timeline}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                                        <MessageSquare size={16} className="inline mr-1" />
                                        Project Details *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell me about your project, goals, and any specific requirements..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all"
                                >
                                    Send Project Details
                                    <ArrowRight size={20} />
                                </motion.button>

                                <p className="text-xs text-muted-foreground text-center">
                                    I'll get back to you within 24 hours with a detailed proposal.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
