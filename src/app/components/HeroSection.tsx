'use client';

// System imports

// External imports
import clsx from "clsx";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { animateScroll } from 'react-scroll';

// Internal imports
import { THeroData } from "@/types";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function HeroSection({ data }: { data: THeroData }) {
    return (
        <motion.section
            animate={{ opacity: 1 }}
            aria-label="Hero section"
            className={clsx(
                "flex flex-col items-start justify-center gap-8 p-4 md:p-8 relative text-white shadow-inner shadow-[0px 4px 16px rgba(0,0,0,0.1)]",
                "mb-32 md:mb-64"
            )}
            id="hero"
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(\'/assets/image-hero.png\')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '32px',
                aspectRatio: '16/9',
            }}
        >
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                {data.tagline && (
                    <span
                        style={{
                            letterSpacing: '4px',
                        }}
                    >
                        {data.tagline.toUpperCase()}
                    </span>
                )}
            </motion.div>

            <motion.div
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex flex-col gap-8 max-w-2xl text-left justify-center z-10"
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="relative w-full h-full">
                    <h1
                        className={clsx(
                            "font-extrabold",
                            "text-4xl",
                            "md:text-6xl",
                            "z-10"
                        )}
                    >
                        {data.title}
                    </h1>
                </div>
                <p className="text-base">{data.description}</p>

                <div className="inline-flex flex-row items-center justify-start gap-4">
                    {data.ctas && data.ctas.map((cta, index) => {
                        if (index === 0) {
                            return (
                                <Button
                                    as={Link}
                                    color="primary"
                                    radius="full"
                                    size="md"
                                    variant="shadow"
                                    key={index}
                                    href={cta.href}
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
                                isIconOnly
                                variant="light"
                                startContent={
                                    <Image
                                        src="/assets/icon-play.svg"
                                        alt="Play icon"
                                        width={64}
                                        height={64}
                                    />
                                }
                                onClick={() => {
                                    animateScroll.scrollTo(640, {
                                        duration: 500,
                                        smooth: true
                                    });
                                }}
                            />

                        );
                    })}
                </div>
            </motion.div>
        </motion.section>
    );
}