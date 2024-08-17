'use client';

// External imports
import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Internal imports
import { TAboutData } from "@/types";

const AboutCard = dynamic(() => import('./AboutCard'), { ssr: false });
const StatisticCard = dynamic(() => import('./StatisticCard'));

export default function AboutSection({ data }: { data: TAboutData }) {
    return (
        <motion.section
            animate={{ opacity: 1 }}
            aria-label="About section"
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:my-64"
            id="ve-chung-toi"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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