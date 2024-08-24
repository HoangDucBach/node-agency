'use client';

// Internal imports
import { RocketIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";

export default function ProjectsSection() {
    return (
        <section
            aria-label="Projects section"
            className="flex flex-col items-center justify-between gap-8 py-4 md:py-8 bg-primary-400 rounded-[32px]"
            id="du-an"
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-light text-primary-50"
            >
                NODE MARKETING AGENCY
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <RocketIcon size={64} className="text-primary-foreground" />
            </motion.div>
            <div className="flex flex-col gap-0 items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-primary-foreground text-center"
                >
                    Các dự án đã triển khai
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-base w-full break-words max-w-screen-sm md:text-xl text-primary-foreground text-center"
                >
                    Hãy cùng nhau khám phá phá dự án đã triển khai và đang triển khai của chúng tôi.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Button
                    as={Link}
                    radius="full"
                    variant="solid"
                    color="primary"
                    href="../du-an"
                >
                    Khám phá ngay !
                </Button>
            </motion.div>
        </section>
    );
}