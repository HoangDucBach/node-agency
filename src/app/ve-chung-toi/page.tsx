import { API_URL } from "@/config/constants";
import { HeroSection } from "./components/HeroSection";
import { HeroStatisticSection } from "./components/HeroStatisticSection";
import { TCompanyData, TCompanyFile, TStatistic, TStatisticFile } from "@/types";
import { StatisticSection } from "./components/StatisticSection";

interface AboutPageProps {
    company: TCompanyData;
    statistics: TStatistic[];
}
const fetchCompanyData = async () => {
    const apiUrl = API_URL
    const response = await fetch(`${apiUrl}/cong-ty`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Internal-Request': 'true',
        },
    });
    return await response.json();
}

const fetchStatisticsData = async () => {
    const apiUrl = API_URL
    const response = await fetch(`${apiUrl}/thong-ke`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Internal-Request': 'true',
        },
    });
    return await response.json();
}
const fetchData = async (): Promise<AboutPageProps> => {
    const companyData = await fetchCompanyData() as TCompanyFile;
    const statisticsData = await fetchStatisticsData() as TStatisticFile;
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