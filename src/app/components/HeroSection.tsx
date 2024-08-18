'use client';

// System imports

// External imports
import clsx from "clsx";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { animateScroll } from 'react-scroll';

// Internal imports
import { THeroData } from "@/types";

export default function HeroSection({ data }: { data: THeroData }) {
    return (
        <motion.section
            animate={{ opacity: 1 }}
            aria-label="Hero section"
            className="flex flex-col items-center justify-center gap-8 mb-32 pb-16 md:mb-64 md:pb-32 md:mt-16 relative"
            id="hero"
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <Chip color="primary" radius="full" variant="bordered" size="md">{data.tagline}</Chip>
            </motion.div>

            <motion.div
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex flex-col gap-8 max-w-2xl text-center justify-center z-10"
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="relative w-full h-full">
                    <img
                        alt="Pattern gradient line and rocket"
                        className="w-full h-full absolute top-4 left-0 object-fill z-0"
                        src="/assets/pattern-gradient-line-and-rocket.svg"
                        width={"100%"}
                        height={"100%"}
                    />
                    <h1
                        className={clsx(
                            "font-extrabold",
                            "text-5xl",
                            "md:!text-6xl",
                            "z-10"
                        )}
                    >
                        {data.title}
                    </h1>
                </div>
                <p className="text-base font-medium text-default-500">{data.description}</p>

                <div className="inline-flex flex-row items-center justify-center gap-4">
                    {data.ctas && data.ctas.map((cta, index) => {
                        if (index === 0) {
                            return (
                                <Button
                                    color="primary"
                                    radius="full"
                                    size="md"
                                    variant="bordered"
                                    key={index}
                                >
                                    {cta.label}
                                </Button>
                            );
                        }

                        return (
                            <Button
                                href={cta.href}
                                key={index}
                                radius="full"
                                // scroll 1 vh smoothly
                                onClick={() => {
                                    animateScroll.scrollTo(640, {
                                        duration: 500,
                                        smooth: true
                                    });
                                }}
                            >
                                {cta.label}
                            </Button>
                        );
                    })}
                </div>
            </motion.div>
        </motion.section>
    );
}