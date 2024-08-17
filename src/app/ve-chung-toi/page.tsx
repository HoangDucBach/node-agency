import path from "path";
import fs from "fs";

import yaml from "js-yaml";
import React from "react";

import { HeroSection } from "./components/hero-section/HeroSection";
import { HeroStatisticSection } from "./components/HeroStatisticSection";
import { TCompanyData, TCompanyFile, TStatistic, TStatisticFile } from "@/types";
import { StatisticSection } from "./components/StatisticSection";

interface AboutPageProps {
    company: TCompanyData;
    statistics: TStatistic[];
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

const fetchData = async (): Promise<AboutPageProps> => {
    const companyData = fetchCompanyData();
    const statisticsData = fetchStatisticsData();
    
    return {
        company: companyData.company,
        statistics: statisticsData.statistics,
    };
}

export default async function Page() {
    const data = await fetchData();

    return (
        <>
            <HeroSection data={data.company} />
            <HeroStatisticSection />
            <StatisticSection data={data.statistics} />
        </>
    )
}