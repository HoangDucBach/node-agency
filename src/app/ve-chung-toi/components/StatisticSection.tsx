'use client';
// External imports
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from 'react-countup';
import { RiCustomerService2Line } from "react-icons/ri";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { FaRankingStar } from "react-icons/fa6";

// Internal imports
import { TStatistic } from "@/types";


function StatisticCard({ data }: { data: TStatistic }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getIcon = (name: string) => {
        switch (name) {
            case 'Dự án':
                return <PiProjectorScreenChartFill className="text-6xl text-primary-500" />
            case 'Khách hàng':
                return <RiCustomerService2Line className="text-6xl text-primary-500" />
            case 'Năm kinh nghiệm':
                return <FaRankingStar className="text-6xl text-primary-500" />
            case 'Dịch vụ chính':
                return <HiOutlineMegaphone className="text-6xl text-primary-500" />
            default:
                return <RiCustomerService2Line className="text-6xl text-primary-500" />
        }
    }
    return (
        <motion.div
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            className="flex flex-col items-center gap-4 p-4 rounded-2xl w-fit min-h-[100px]"
            initial={{ opacity: 0, y: 20 }}
            key={data.name}
            ref={ref}
            transition={{ duration: 0.5 }}
        >
            {getIcon(data.name)}
            <p className="text-6xl font-bold text-primary-600">
                {isInView && <CountUp end={data.number} duration={2} />} +
            </p>
            <h1 className="text-sm font-medium text-default-500">{data.name}</h1>
        </motion.div>
    )
}

export function StatisticSection({ data }: { data: TStatistic[] }) {
    return (
        <section className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-8 mt-16 md:mt-64">
            <h1 className="text-4xl md:text-5xl text-default-foreground font-bold">12 NĂM MỘT HÀNH TRÌNH</h1>
            <div className="w-full flex flex-row md:gap-8 gap-2 justify-between items-center flex-wrap md:flex-nowrap">
                {
                    data.map((item, index) => (
                        <React.Fragment key={index}>
                            <StatisticCard data={item} />
                            {index < data.length - 1 && <div className="hidden md:block h-8 rounded-full w-[1px] bg-default-500" />}
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}