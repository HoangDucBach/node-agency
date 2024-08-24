'use client';

import { TCompanyData, TContactInfo, TPlatformData } from "@/types";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

function Item({ title, value: children }: { title: string, value: React.ReactNode }) {
    return (
        <div className="flex flex-row justify-between w-full items-center">
            <p className="text-base text-default-500 font-semibold">{title}</p>
            <p className="text-base text-default-foreground font-normal">{children}</p>
        </div>
    )
}
export default function HeroSection({
    companyData,
    platformData
}: {
    companyData: TCompanyData,
    platformData: TPlatformData
}) {
    return (
        <section id='lien-he' className="md:px-64">
            <h1 className="text-4xl font-semibold text-default-foreground text-center">Liên hệ với chúng tôi</h1>
            <div>
                <div>
                    {/* Email */}
                    <p></p>

                    {/* Phone */}
                    <p></p>

                    {}
                </div>
            </div>
        </section>
    )
}