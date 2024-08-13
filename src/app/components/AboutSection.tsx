'use client';

// External imports
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiServiceFill } from "react-icons/ri";
import { HiFire } from "react-icons/hi";

// Internal imports
import { TAboutData, TStatistic } from "@/types";
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

function AboutCard({ data }: { data: TAboutData }) {
    const router = useRouter();
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
            <Button
                color="default"
                radius="full"
                variant="ghost"
                onClick={() => { router.push('../ve-chung-toi') }}
                endContent={<FaArrowRightLong />}
            >
                Xem thêm
            </Button>

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
            <div className="flex flex-col gap-8 items-center justify-center md:flex-row">
                {data && <AboutCard data={data} />}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {data.statistic && data.statistic.map((statistic) => {
                        return <StatisticCard key={statistic.name} data={statistic} />
                    })}
                </div>
            </div>
        </motion.section>
    );
}