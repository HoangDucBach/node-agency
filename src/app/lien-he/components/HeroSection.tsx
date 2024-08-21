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
            <Accordion>
                <AccordionItem title="Thông tin" className="font-bold">
                    <Item title="Tên công ty" value={companyData.name} />
                    <Item title="Email" value={companyData.contact?.email || '-'} />
                    <Item title="Số điện thoại" value={"0" + companyData.contact?.phone || '-'} />
                </AccordionItem>
                <AccordionItem title="Nền tảng" className="font-bold">
                    <Item title="Facebook" value={
                        <a
                            href={platformData.facebook || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            Link
                        </a>
                    } />
                    <Item title="LinkedIn" value={
                        <a
                            href={platformData.linkedin || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            Link
                        </a>
                    } />
                    <Item title="TikTok" value={
                        <a
                            href={platformData.tiktok || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            Link
                        </a>
                    } />
                    <Item title="Instagram" value={
                        <a
                            href={platformData.instagram || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            Link
                        </a>
                    } />
                    <Item title="Twitter" value={
                        <a
                            href={platformData.twitter || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500"
                        >
                            Link
                        </a>
                    } />
                </AccordionItem>
                <AccordionItem title="Địa chỉ" className="font-bold">
                    <Item title="Địa chỉ" value={companyData.address || '-'} />
                </AccordionItem>
            </Accordion>
        </section>
    )
}