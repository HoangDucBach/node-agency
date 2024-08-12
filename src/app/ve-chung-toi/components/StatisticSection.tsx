'use client';
// External imports
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from 'react-countup';

// Internal imports
import { TStatistic } from "@/types";

function StatisticCard({ data }: { data: TStatistic }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            className="flex flex-col items-center gap-4 p-4 rounded-2xl w-full"
            initial={{ opacity: 0, y: 20 }}
            key={data.name}
            ref={ref}
            transition={{ duration: 0.5 }}
        >
            <p className="text-2xl font-semibold text-foreground-900">
                {isInView && <CountUp end={data.number} duration={2} />} +
            </p>
            <h1 className="text-sm font-medium text-default-500">{data.name}</h1>
        </motion.div>
    )
}

export function StatisticSection({ data }: { data: TStatistic[] }) {
    return (
        <section className="w-full">
            <div className="w-full flex flex-row gap-8 justify-between items-center">
                {
                    data.map((item, index) => (
                        <React.Fragment key={index}>
                            <StatisticCard data={item} />
                            {index < data.length - 1 && <div className="h-8 rounded-full w-[1px] bg-default-500" />}
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}