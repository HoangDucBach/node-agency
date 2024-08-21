'use client';

import { TServiceData } from "@/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function ServiceCard({ service }: { service: TServiceData }) {
    const router = useRouter();

    return (
        <motion.div
            className={clsx(
                "rounded-[32px] border-2 w-full h-fit border-default/50 p-8",
                "text-default-foreground hover:text-primary-foreground ",
                "hover:bg-primary-400 hover:shadow-lg shadow-primary-500 hover:-translate-y-2",
                "transition-all transform duration-500 ease-in-out cursor-pointer",
            )}
            role="button"
            onClick={() => router.push('/giai-phap')}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
        >
            <h6 className="text-2xl font-bold w-full">{service.name}</h6>
            <FaArrowRight className="text-2xl text-primary-50" />
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