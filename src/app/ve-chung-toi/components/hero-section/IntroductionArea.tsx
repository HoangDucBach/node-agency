'use client';

// External imports
import React from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

// Internal imports
import { TCompanyData } from "@/types";
import { Button } from "@nextui-org/button";


export default function IntroductionArea({ data }: { data: TCompanyData }) {
    const handleScroll = () => {
        scroller.scrollTo('tai-sao-nen-chon-chung-toi', {
            duration: 2000,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4 items-start justify-center w-full"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl text-default-foreground font-bold text-nowrap">Giới thiệu về công ty</h1>
            <p className="text-base md:text-2xl break-words text-default-500 max-w-screen-sm text-start">{data.description}</p>
            <Button
                color="primary"
                className="w-fit"
                radius="full"
                onClick={handleScroll}
            >
                Tiếp tục
            </Button>
        </motion.div>
    )
}
