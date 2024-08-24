import { motion } from "framer-motion";


import { TAboutData } from "@/types";

export default function AboutCard({ data }: { data: TAboutData }) {

    return (
        <motion.div
            className="flex flex-col items-center md:items-end justify-center gap-4 w-full h-fit"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <p dangerouslySetInnerHTML={{ __html: data.description }} className="!w-full max-w-[32em] break-words text-center" />
        </motion.div>
    );
}