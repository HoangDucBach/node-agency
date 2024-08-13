'use client';

// Internal imports
import { RocketIcon } from "@/components/icons";
import { TProjectData } from "@/types";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function ProjectCard({ project }: { project: TProjectData }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.customer}</p>
        </div>
    );
}

export function ProjectsSection() {
    const router = useRouter();

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
                <RocketIcon className="shadow-2xl" size={128} />
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
                <Button radius="full" variant="ghost" color="primary" onClick={() => { router.push('../du-an') }}>
                    Khám phá ngay !
                </Button>
            </motion.div>
        </section>
    );
}