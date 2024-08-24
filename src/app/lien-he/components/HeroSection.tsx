'use client';

import { TCompanyData, TPlatformData } from "@/types";
import { Link } from "@nextui-org/react";
import React from "react";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";

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
        <section id='lien-he' className="md:px-64 mb-32 md:mb-64 flex flex-col justify-start items-start gap-4">
            <h1 className="text-6xl md:text-7xl font-bold text-default-foreground">Liên hệ với chúng tôi</h1>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 w-full">
                <div className="flex-1">
                    <p className="text-xl font-normal text-default-foreground">{companyData.contact?.email}</p>
                    <p className="font-bold text-lg text-default-foreground">
                        0{companyData.contact?.phone}
                    </p>

                    <div className="flex space-x-6 mt-6">
                        <Link isExternal aria-label="Facebook" href={platformData.facebook}>
                            <FaFacebook className="text-[#1877F2]" size={24} />
                        </Link>
                        <Link isExternal aria-label="Linkedin" href={platformData.linkedin}>
                            <FaLinkedin className="text-[#0A66C2]" size={24} />
                        </Link>
                        <Link isExternal aria-label="Tiktok" href={platformData.tiktok}>
                            <FaTiktok className="text-black" size={24} />
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-default-foreground text-base max-w-64 whitespace-pre-line">{companyData.address}</p>
                </div>
            </div>
        </section>
    )
}