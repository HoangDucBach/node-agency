'use client';

// External imports
import { Image } from "@nextui-org/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Internal imports
import { TProcessData, TProcessFile, TWorkData } from "@/types";

function WorkCard({ data }: { data: TWorkData }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col gap-2 my-4 md:my-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <h3 className="text-2xl text-default-foreground">{data.name}</h3>
            <p className="text-base text-default-foreground">{data.description}</p>
        </motion.div>
    );
}

function ProcessCard({ data }: { data: TProcessData }) {
    const { name, description, image, works } = data;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            ref={ref}
            id={data.name}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="flex flex-col gap-4 md:gap-8">
                <h2 className="text-6xl text-default-foreground">{name}</h2>
                <p className="text-base text-default-foreground">{description}</p>
                <Image src={image} alt={name} />
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
                <ul>
                    {works &&
                        works.map((item, index) => (
                            <li key={index}>
                                <WorkCard data={item} />
                            </li>
                        ))}
                </ul>
            </div>
        </motion.section>
    );
}

export function ProcessSection({ data }: { data: TProcessFile }) {
    return (
        <div className="flex flex-col gap-16 md:gap-32">
            {data.processes.map((item, index) => (
                <ProcessCard key={index} data={item} />
            ))}
        </div>
    );
}