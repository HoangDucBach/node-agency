'use client';

import { motion } from "framer-motion";
import { HiFire } from "react-icons/hi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { RiCustomerService2Line, RiServiceFill } from "react-icons/ri";

import { TStatistic } from "@/types";

export default function StatisticCard({ data }: { data: TStatistic }) {
    function getIconByName(name: string) {
        switch (name) {
            case "Khách hàng":
                return <RiCustomerService2Line size={32} />;
            case "Dự án":
                return <PiProjectorScreenChartFill size={32} />;
            case "Năm kinh nghiệm":
                return <HiFire size={32} />;
            default:
                return <RiServiceFill size={32} />;
        }
    }

    return (
        <motion.div
            className="flex flex-col items-start gap-2 bg-foreground-100 rounded-2xl p-4 border border-default w-full h-fit"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            {getIconByName(data.name)}
            <div className="w-full flex flex-col gap-0">
                <p className="text-2xl font-bold text-default-500">{data.number}+</p>
                <p className="text-base font-bold">{data.name}</p>
            </div>
        </motion.div>
    );
}