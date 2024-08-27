import path from "path";
import fs from "fs";

import yaml from "js-yaml";
import React from "react";

import { HeroSection } from "./components/hero-section/HeroSection";
import { HeroStatisticSection } from "./components/HeroStatisticSection";
import { TCompanyData, TCompanyFile, TServiceData, TServicesFile, TStatistic, TStatisticFile } from "@/types";
import { StatisticSection } from "./components/StatisticSection";
import CoreSection from "./components/CoreSection";
import { ServiceSection } from "./components/ServiceSection";

interface AboutPageProps {
    company: TCompanyData;
    statistics: TStatistic[];
    services: TServiceData[];
}

const fetchCompanyData = () => {
    const heroSectionFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "cong-ty.yaml"),
        "utf8"
    );

    const companyFileData = yaml.load(heroSectionFile) as TCompanyFile;

    return companyFileData;

}

const fetchStatisticsData = () => {
    const statisticsFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "thong-ke.yaml"),
        "utf8"
    );

    const statisticsFileData = yaml.load(statisticsFile) as TStatisticFile;

    return statisticsFileData;
}

const fetchServiceData = () => {
    const serviceFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "dich-vu.yaml"),
        "utf8"
    );

    const serviceFileData = yaml.load(serviceFile) as TServicesFile;

    return serviceFileData;
}

const fetchData = async (): Promise<AboutPageProps> => {
    const companyData = fetchCompanyData();
    const statisticsData = fetchStatisticsData();
    const serviceData = fetchServiceData();

    return {
        company: companyData.company,
        statistics: statisticsData.statistics,
        services: serviceData.services
    };
}

export default async function Page() {
    const data = await fetchData();

    return (
        <>
            <HeroSection data={data.company} />
            <StatisticSection data={data.statistics} />
            <HeroStatisticSection />
            <CoreSection data={data.company} />
            <ServiceSection data={data.services} />
        </>
    )
}