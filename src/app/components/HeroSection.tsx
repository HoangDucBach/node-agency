/**
 * @file HeroSection.tsx
 * @description Hero Section component, this opens the page, it is the first thing the user sees
 * @version 1.0.0
 * @todo Style the section
 */
'use client';
// System imports


// External imports
import { THeroData } from "@/types";
import { title } from "@/components/primitives";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function HeroSection({ data }: { data: THeroData }) {
    return (
        <motion.section
            className="flex flex-col items-center justify-center gap-8 mt-8 mb-32 pb-16 md:mb-64 md:pb-32 md:mt-16 relative"
            id="hero"
            aria-label="Hero section"
            role="region"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.img
                src="/assets/pattern-key-tags-background.svg"
                alt="Pattern key tags background"
                className="w-fit h-fit absolute inset-0 m-auto"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <Chip color="default" size="md">{data.tagline}</Chip>
            </motion.div>

            <motion.div
                className="inline-flex flex-col gap-8 max-w-2xl text-center justify-center z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="relative w-full h-full">
                    <h1 dangerouslySetInnerHTML={{ __html: data?.title || '' }}
                        className={clsx(
                            title(),
                            "md:!text-6xl"
                        )}
                    />
                    <img
                        src="/assets/pattern-gradient-line-and-rocket.svg"
                        alt="Pattern gradient line and rocket"
                        className="w-full h-full absolute top-4 left-0 object-fill"
                    />
                </div>
                <p>{data.description}</p>
                <div className="inline-flex flex-row items-center justify-center gap-4">
                    {data.ctas && data.ctas.map((cta, index) => {
                        if (index === 0) {
                            return <Button variant="bordered" radius="full" key={index} color="primary" size="md">{cta.label}</Button>
                        }
                        return <Button key={index} href={cta.href}>{cta.label}</Button>
                    })}
                </div>
            </motion.div>
        </motion.section>
    );
}