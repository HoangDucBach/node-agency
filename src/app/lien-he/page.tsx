import path from "path";
import fs from "fs";

import yaml from "js-yaml";
import React from "react";

import { TCompanyData, TCompanyFile, TContactFile, TContactInfo, TPlatformData, TPlatformFile, TStatistic, TStatisticFile } from "@/types";
import HeroSection from "./components/HeroSection";

interface ContactPageProps {
    company: TCompanyData;
    contact: TContactInfo;
    platform: TPlatformData;
}

const fetchCompanyData = () => {
    const heroSectionFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "cong-ty.yaml"),
        "utf8"
    );

    const companyFileData = yaml.load(heroSectionFile) as TCompanyFile;

    return companyFileData;

}

const fetchContactData = () => {
    const contactFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "lien-he.yaml"),
        "utf8"
    );

    const contactFileData = yaml.load(contactFile) as TContactFile;

    return contactFileData;
}

const fetchPlatformData = () => {
    const platformFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "nen-tang.yaml"),
        "utf8"
    );

    const platformFileData = yaml.load(platformFile) as TPlatformFile;

    return platformFileData;
}
const fetchData = async (): Promise<ContactPageProps> => {
    const companyData = fetchCompanyData();
    const contactData = fetchContactData();
    const platformData = fetchPlatformData();

    return {
        company: companyData.company,
        contact: contactData.contact,
        platform: platformData.platform
    };
}

export default async function Page() {
    const data = await fetchData();

    return (
        <div>
            <HeroSection companyData={data.company} platformData={data.platform}/>
        </div>
    )
}