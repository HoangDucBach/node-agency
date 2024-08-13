/**
 * @file BrandsSection.tsx
 * @description Brand Section component, this contains all brands the company has worked with
 * @version 1.0.0
 * @todo Style the section
 */
'use client';

// System imports

// External imports
import React from "react";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

// Internal imports
import { TBrandData } from "@/types";

function BrandsLogoCard({ brand }: { brand: TBrandData }) {
    return (
        <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            key={brand.name}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className={clsx(
                "flex flex-col items-center justify-center gap-2",
                "aspect-[2/1] w-32 rounded-2xl p-4"
            )}
        >
            <img
                alt={brand.name}
                className="object-cover"
                src={brand.logo || ''}
            />
        </motion.div>
    );
}

export default function BrandsSection({ data }: { data: TBrandData[] }) {
    const brands = data;

    return (
        <motion.section
            animate={{ opacity: 1 }}
            aria-label="Brands section"
            className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 w-full md:my-32 my-24"
            id="brands"
            initial={{ opacity: 0 }}
            role="region"
            transition={{ duration: 1 }}
        >
            <motion.h2
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-center"
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                whileInView={{ scale: 1.1 }}
            >
                Các thương hiệu đã hợp tác
            </motion.h2>
            <Marquee autoFill speed={25}>
                <div className="flex flex-row gap-4 px-4">
                    {brands.map((brand) => (
                        <BrandsLogoCard key={brand.name} brand={brand} />
                    ))}
                </div>
            </Marquee>
        </motion.section>
    );
}