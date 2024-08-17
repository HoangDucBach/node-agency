'use client';

import { useRef } from "react";
import { Button } from "@nextui-org/button";
import { FaAngleDown } from "react-icons/fa6";
import { motion, animate, useInView } from "framer-motion";

export function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);
    const h1Ref1 = useRef(null);
    const pRef = useRef(null);
    const buttonRef = useRef(null);
    const isInView1 = useInView(h1Ref1, { once: true });
    const isInViewP = useInView(pRef, { once: true });
    const isInViewButton = useInView(buttonRef, { once: true });

    const handleScroll = () => {
        const offsetTop = (window.scrollY + window.innerHeight)*3/4;

        animate(window.scrollY, offsetTop, {
            duration: 1,
            onUpdate: (latest) => window.scrollTo(0, latest),
            ease: "easeInOut"
        });
    };

    return (
        <section ref={heroRef} className="py-8 md:py-16 mb-72 md:mb-80">
            <div className="flex flex-col gap-4 items-center">
                <motion.h1
                    ref={h1Ref1}
                    className="text-6xl font-bold md:text-7xl text-default-foreground text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Quy trình thực hiện
                </motion.h1>
                <motion.p
                    ref={pRef}
                    className="text-base md:text-2xl text-default-foreground text-center mx-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInViewP ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Cùng khám phá cách mà <b>Node</b> tiếp cận với các vấn đề được đưa ra
                </motion.p>
                <motion.div
                    ref={buttonRef}
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInViewButton ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button
                        color="default"
                        radius="full"
                        isIconOnly
                        variant="bordered"
                        className="mt-14 md:mt-16"
                        onClick={handleScroll}
                    >
                        <FaAngleDown size={24} />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}