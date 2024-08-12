'use client';

import React from "react";
import { motion } from "framer-motion";

export function HeroStatisticSection() {
    return (
        <motion.section
            id="tai-sao-nen-chon-chung-toi"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
            className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 w-full"
        >
            <h1 className="lg:text-9xl text-7xl text-default-foreground font-bold">
                Tại sao nên chọn chúng tôi ?
            </h1>
        </motion.section>
    );
}