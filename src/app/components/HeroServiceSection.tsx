/**
 * @file HeroServiceSection.tsx
 * @description Hero Service component, this is the intro
 * @version 1.0.0
 * @todo Style the section
 * @todo Add typewriter effect to the title
 */
'use client';

// External imports
import clsx from "clsx";
import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function HeroServiceSection() {
    return (
        <section
            aria-label="Hero Service section"
            className={clsx(
                "flex flex-col items-center justify-center gap-8 relative h-screen w-full",
                "overflow-visible"
            )}
            id="chung-toi-cung-cap-dich-vu-gi"
        >

            <motion.img
                src="/assets/pattern-colors-firework.svg"
                alt="Firework pattern"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 overflow-visible"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                width="100%"
                height="100%"
            />
            <h1 className={clsx(
                "text-7xl md:text-9xl font-bold text-default-foreground z-10",
            )}>
                <Typewriter
                    cursor
                    cursorStyle='_'
                    deleteSpeed={50}
                    delaySpeed={2000}
                    loop={0}
                    typeSpeed={70}
                    words={['Chúng tôi cung cấp dịch vụ gì?']}
                />
            </h1>
        </section>
    );
}