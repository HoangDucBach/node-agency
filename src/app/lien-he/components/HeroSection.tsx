'use client';

import { TCompanyData, TPlatformData } from "@/types";
import { Divider, Link } from "@nextui-org/react";
import React from "react";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";

function ContactRowItem({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-row items-center justify-between w-full gap-2">
            <h6 className="text-2xl font-semibold text-default-foreground w-fit">{title}</h6>
            {children}
        </div>
    );
}

export default function HeroSection({
    companyData,
    platformData
}: {
    companyData: TCompanyData,
    platformData: TPlatformData
}) {
    return (
        <section id='lien-he' className="space-y-16 mx-32 md:mx-64">
            <h1 className="text-5xl md:text-6xl font-bold text-default-foreground">Liên hệ với chúng tôi</h1>
            <div className="flex flex-col justify-between gap-4 md:gap-8 w-full">
                <ContactRowItem title="Địa chỉ">
                    <p className="text-lg font-normal text-default-foreground break-words max-w-64 text-end">{companyData.address}</p>
                </ContactRowItem>
                <Divider />
                <ContactRowItem title="Hotline">
                    <p className="text-lg text-default-foreground">
                        0{companyData.contact?.phone}
                    </p>
                </ContactRowItem>
                <Divider />
                <ContactRowItem title="Email">
                    <p className="text-lg text-default-foreground">
                        {companyData.contact?.email}
                    </p>
                </ContactRowItem>
                <Divider />
                <ContactRowItem title="Nền tảng">
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
                </ContactRowItem>
            </div>
        </section>
    );
}
