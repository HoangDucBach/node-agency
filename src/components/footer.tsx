// System imports
import fs from "fs";
import path from "path";

// External imports
import yaml from "js-yaml";
import React from "react";
import { Link } from "@nextui-org/link";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
// Internal imports
import { TCompanyFile, TContactFile, TFooterData, TPlatformFile } from "@/types";
import { Divider } from "@nextui-org/divider";
import { Logo } from "./icons";
import { siteConfig } from "@/config/site";

const fetchFooterData = (): TFooterData => {
    const companyFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "cong-ty.yaml"),
        "utf8"
    );

    const contactFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "lien-he.yaml"),
        "utf8"
    );

    const platformFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "nen-tang.yaml"),
        "utf8"
    );

    const platformFileData = yaml.load(platformFile) as TPlatformFile;
    const contactFileData = yaml.load(contactFile) as TContactFile;
    const companyFileData = yaml.load(companyFile) as TCompanyFile;

    return {
        company: companyFileData.company,
        contact: contactFileData.contact,
        platform: platformFileData.platform,

    }
};

export function Footer() {
    const data = fetchFooterData();

    return (
        <footer className="bg-background flex w-full flex-col py-4 px-4 max-w-7xl mx-auto">
            <div className="w-full px-4 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="md:pr-8 flex flex-col items-center lg:items-start">
                        <div className="flex items-center justify-start gap-4">
                            <Logo size={64}/>
                            <span className="text-medium font-semibold">{data.company.name.toUpperCase()}</span>
                        </div>
                        <p className="text-small text-default-foreground text-center lg:text-start max-w-4xl">{data.company.description}</p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <div>
                                    <h3 className="text-small font-semibold text-default-foreground">Công ty</h3>
                                    <ul className="mt-6 space-y-2">
                                        <li>
                                            <Link href="../ve-chung-toi" className="text-small text-default-foreground">Về chúng tôi</Link>
                                        </li>
                                        <li>
                                            <Link href="../giai-phap" className="text-small text-default-foreground">Giải pháp</Link>  
                                        </li>
                                        <li>
                                            <Link href="../du-an" className="text-small text-default-foreground">Dự án</Link>
                                        </li>
                                        <li>
                                            <Link href="../lien-he" className="text-small text-default-foreground">Liên hệ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <div>
                                    <h3 className="text-small font-semibold text-default-foreground">Nền tảng</h3>
                                    <div className="flex space-x-6 mt-6">
                                        <Link isExternal aria-label="Facebook" href={siteConfig.links.facebook}>
                                            <FaFacebook className="text-[#1877F2]" size={24}/>
                                        </Link>
                                        <Link isExternal aria-label="Youtube" href={siteConfig.links.youtube}>
                                            <FaLinkedin className="text-[#0A66C2]" size={24}/>
                                        </Link>
                                        <Link isExternal aria-label="Tiktok" href={siteConfig.links.tiktok}>
                                            <FaTiktok className="text-black" size={24}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <div>
                                    <h3 className="text-small font-semibold text-default-foreground">Địa chỉ</h3>
                                    <p className="text-small text-default-foreground mt-6 space-y-4">{data.company.address}</p>
                                </div>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <div>
                                    <h3 className="text-small font-semibold text-default-foreground">Liên hệ</h3>
                                    <ul className="mt-6 space-y-4">
                                        <li className="flex flex-row gap-4 items-center justify-start text-default-foreground">
                                            <h6 className="text-small">
                                                <MdAlternateEmail size={16}/>
                                            </h6>
                                            <p className="text-small">{data.contact?.email}</p>
                                        </li>
                                        <li className="flex flex-row gap-4 items-center justify-start text-default-foreground">
                                            <h6 className="text-small">
                                                <MdOutlineLocalPhone size={16}/>
                                            </h6>
                                            <p className="text-small">0{data.contact?.phone}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between gap-2 pt-8">
                    <Divider />
                    <p className="text-sm text-default-500">{data.company.copyright}</p>
                </div>
            </div>
        </footer>
    )
}