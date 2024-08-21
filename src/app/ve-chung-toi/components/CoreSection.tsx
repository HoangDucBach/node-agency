'use client';
import { TCompanyData } from "@/types";
import { motion } from "framer-motion";

interface CoreCardProps {
    title: string;
    description: string;
}

function getImage(title: string) {
    switch (title) {
        case 'Hiệu quả':
            return '/assets/image-effective-3d.jpg';
        case 'Tin cậy':
            return '/assets/image-trust-3d.jpg';
        case 'Phù hợp':
            return '/assets/image-research-3d.jpg';
        default:
            return '/assets/image-effective-3d.jpg';
    }
}

function CoreCard({ title, description }: CoreCardProps) {
    const image = getImage(title);

    return (
        <motion.div
            className="w-full aspect-video flex flex-col items-start p-8 justify-center gap-4"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '64px',
                filter: 'brightness(0.95)',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
        >
            <h3 className="font-bold text-7xl md:text-9xl text-white/95">{title}</h3>
            <p className="text-lg text-white max-w-96 break-words w-full">{description}</p>
        </motion.div>
    )
}

export default function CoreSection({ data }: { data: TCompanyData }) {
    return (
        <section id='cot-loi' className="w-full flex flex-col items-center gap-8">
            {
                data.cores && data.cores.map((coreValue, index) => (
                    <CoreCard
                        key={index}
                        title={coreValue.key}
                        description={coreValue.value}
                    />
                ))
            }
        </section>
    )
}