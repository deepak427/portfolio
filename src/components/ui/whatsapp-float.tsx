"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
    const whatsappUrl = "https://wa.me/916398317883?text=Hi%20Deepak%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you.%20Could%20we%20schedule%20a%20call%3F";

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={24} />
            
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        </motion.a>
    );
}