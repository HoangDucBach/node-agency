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

export default function HeroServiceSection() {
    return (
        <section
            aria-label="Hero Service section"
            className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 md:my-64 my-32"
            id="chung-toi-cung-cap-dich-vu-gi"
        >
            <h1 className={clsx(
                "text-7xl md:text-9xl font-bold text-default-foreground",
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