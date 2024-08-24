'use client';

// External imports
import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Internal imports
import { TAboutData } from "@/types";
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';

const AboutCard = dynamic(() => import('./AboutCard'), { ssr: false });

export default function AboutSection({ data }: { data: TAboutData }) {
    return (
        <motion.section
            animate={{ opacity: 1 }}
            aria-label="About section"
            className="flex flex-col items-center justify-center gap-4"
            id="ve-chung-toi"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className='text-3xl font-bold text-default-foreground'>Về chúng tôi</h1>
            <div className="flex flex-col gap-8 items-center justify-center md:flex-row">
                {data && <AboutCard data={data} />}
            </div>
            <Button
                as={Link}
                color="primary"
                radius="full"
                variant="ghost"
                href="../ve-chung-toi"
                endContent={<FaArrowRightLong />}
            >
                Xem thêm
            </Button>
        </motion.section>
    );
}