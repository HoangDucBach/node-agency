'use client';

// External imports
import React from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

// Internal imports
import { TCompanyData } from "@/types";
import { Button } from "@nextui-org/button";

function PosterArea() {
    return (
        <motion.h1 
            className="md:text-9xl text-7xl font-bold text-end text-primary-300 break-words"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-primary-500">NODE </span> 
            Marketing Agency
        </motion.h1>
    )
}

function IntroductionArea({ data }: { data: TCompanyData }) {
    const handleScroll = () => {
        scroller.scrollTo('tai-sao-nen-chon-chung-toi', {
            duration: 2000,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-6xl text-default-foreground font-bold">Giới thiệu về công ty</h1>
            <p className="text-2xl font-medium break-words text-default-500">{data.description}</p>
            <Button radius="full" color="primary" className="w-fit" onClick={handleScroll}>Tiếp tục</Button>
        </motion.div>
    )
}

export function HeroSection({ data }: { data: TCompanyData }) {
    return (
        <section
            className="flex xl:flex-row flex-col items-center justify-start gap-8 py-2 md:py-32 md:mb-32"
        >
            {data && <IntroductionArea data={data} />}
            <PosterArea />
        </section>
    )
}