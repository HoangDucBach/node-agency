/**
 * @file BrandsSection.tsx
 * @description Brand Section component, this contains all brands the company has worked with
 * @version 1.0.0
 * @todo Style the section
 */
'use client';
// System imports

// External imports 
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

// Internal imports
import { TBrandData, TBrandsFile } from "@/types";
import React from "react";
import clsx from "clsx";

function BrandsLogoCard({ brand }: { brand: TBrandData }) {
    return (
        <motion.div
            className={clsx(
                "flex flex-col items-center justify-center gap-2",
                "aspect-[2/1] bg-foreground-100 w-64 rounded-2xl p-4"
            )}
            key={brand.name}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            <img
                src={brand.logo || ''}
                alt={brand.name}
                className="object-cover"
            />
        </motion.div>
    );
}

export default function BrandsSection({ data }: { data: TBrandData[] }) {
    const brands = data;
    return (
        <motion.section
            className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 w-full md:my-32 my-24"
            id="brands"
            aria-label="Brands section"
            role="region"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className="text-3xl font-bold text-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                Các thương hiệu đã hợp tác
            </motion.h2>
            <Marquee
                speed={25}
                autoFill
            >
                <div
                    className="flex flex-row gap-4 px-4"
                >
                    {
                        brands.map((brand) => (
                            <BrandsLogoCard brand={brand} key={brand.name} />
                        ))
                    }
                </div>
            </Marquee>
        </motion.section>
    );
}