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
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-6xl text-default-foreground font-bold">Giới thiệu về công ty</h1>
            <p className="text-2xl font-medium break-words text-default-500">{data.description}</p>
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
