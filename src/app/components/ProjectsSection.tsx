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
            className="flex flex-col items-center justify-center gap-8 py-8 md:py-64"
            id="du-an"
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <RocketIcon size={128} />
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-default-foreground text-center"
            >
                Các dự án đã triển khai
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Button
                    as={Link}
                    radius="full"
                    variant="ghost"
                    color="primary"
                    href="../du-an"
                >
                    Khám phá ngay !
                </Button>
            </motion.div>
        </section>
    );
}