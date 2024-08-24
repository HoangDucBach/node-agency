'use client';

import { TServiceData } from "@/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/chip";
import { Listbox, ListboxItem } from "@nextui-org/listbox";

function ServiceCard({ service }: { service: TServiceData }) {
    const router = useRouter();

    return (
        <motion.div
            className={clsx(
                "flex flex-col items-start gap-4 w-full p-4 rounded-2xl cursor-pointer",
                "hover:-translate-y-8 hover:shadow-lg hover:bg-primary-400 text-default-foreground hover:text-secondary-foreground",
                "transition-all transform duration-500 ease-in-out my-8",
            )}
            role="button"
            onClick={() => router.push('/giai-phap')}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
        >
            <div className="flex flex-row gap-2 flex-wrap">
                {service.tags && service.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} variant="bordered" size="sm" color="primary">
                        {tag}
                    </Chip>
                ))}
            </div>
            <h2 className={clsx(
                "bg-clip-text inline-block",
                "text-3xl font-bold",
            )}>
                {service.name}
            </h2>
            <Listbox
                items={service.features?.map((feature, featureIndex) => ({ value: feature, label: feature }))}
            >
                {
                    (items) => (
                        <ListboxItem
                            variant="light"
                            color="primary"
                            key={items.value}
                        >
                            {items.label}
                        </ListboxItem>
                    )
                }
            </Listbox>
            <FaArrowRight className="text-3xl text-white mt-4" />
        </motion.div>
    );
}

export function ServiceSection({ data }: { data: TServiceData[] }) {
    return (
        <motion.section
            className="flex flex-col items-center justify-center gap-4 md:gap-8 py-8 w-full md:py-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <h1 className="text-4xl md:text-6xl text-default-foreground text-center font-bold">Cung cấp dịch vụ chuyên nghiệp</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 justify-items-center">
                {data && data.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </motion.section>
    );
}