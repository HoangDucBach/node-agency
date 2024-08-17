'use client';

// External imports
import React from "react";

// Internal imports
import { TCompanyData } from "@/types";
import dynamic from "next/dynamic";

const IntroductionArea = dynamic(() => import("./IntroductionArea"), { ssr: false });
const PosterArea = dynamic(() => import("./PosterArea"), { ssr: false });

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