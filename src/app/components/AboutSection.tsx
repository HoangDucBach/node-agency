'use client';

// External imports
import React from 'react';
import { motion } from 'framer-motion';
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiFire } from "react-icons/hi";

// Internal imports
import { TAboutData, TStatistic } from "@/types";

function AboutCard({ data }: { data: TAboutData }) {
    return (
        <motion.div
            className="flex flex-col items-center md:items-end justify-center gap-4 w-full h-fit"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <h2 className="text-4xl text-default-foreground font-bold">Về chúng tôi</h2>
            <p dangerouslySetInnerHTML={{ __html: data.description }} className="!w-full max-w-[20em] break-words text-center md:text-end" />
        </motion.div>
    );
}

function StatisticCard({ data }: { data: TStatistic }) {
    function getIconByName(name: string) {
        switch (name) {
            case "Khách hàng":
                return <RiCustomerService2Line size={32} />;
            case "Dự án":
                return <PiProjectorScreenChartFill size={32} />;
            case "Năm kinh nghiệm":
                return <HiFire size={32} />;
            default:
                return null;
        }
    }

    return (
        <motion.div
            className="flex flex-col items-start gap-2 bg-foreground-100 rounded-2xl p-4 border border-default w-full h-fit col-start-1"
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

function SpecialCard({ data }: { data: TStatistic }) {
    return (
        <motion.div
            className="flex flex-col items-start gap-2 bg-foreground-100 rounded-2xl p-4 border border-default row-start-1 col-start-2 col-span-2 row-span-2"
            initial={{ opacity: 0, y: 50 }}
            style={{
                backgroundImage: `url('/assets/patern-mesh-green-background.png')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <HiFire size={32} />
            <div className="w-full flex flex-col gap-0">
                <p className="text-6xl font-bold text-[#09A32E]">{data.number}+</p>
                <p className="text-base font-bold text-white ">{data.name}</p>
                <p className='text-base text-white w-full break-words max-w-[20em]'>{data.description}</p>
            </div>
        </motion.div>
    );
}

export default function AboutSection({ data }: { data: TAboutData }) {
    return (
        <motion.section
            aria-label="About section"
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:my-64"
            id="ve-chung-toi"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex flex-col gap-8 items-center justify-center md:flex-row md:items-start">
                {data && <AboutCard data={data} />}
                <div className="grid grid-cols-3 grid-rows-2 gap-4 md:gap-8 w-full">
                    {data.statistic && data.statistic.map((statistic) => {
                        if (statistic.name === "Năm kinh nghiệm") {
                            return <SpecialCard key={statistic.name} data={statistic} />
                        }
                        
                        return <StatisticCard key={statistic.name} data={statistic} />
                    })}
                </div>
            </div>
        </motion.section>
    );
}