/**
 * @file AboutSection.tsx
 * @description About Section component, this is the section containing the company's information
 * @version 1.0.0
 * @todo Style the section
 * @todo Add icon follow Figma Design
 */

// External imports
import { TAboutData, TAboutSectionData, TStatistic } from "@/types";
import { title } from "@/components/primitives";

function AboutCard({ data }: { data: TAboutData }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2>Về chúng tôi</h2>
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
    );
}
function StatisticCard({ data }: { data: TStatistic }) {
    function getIconByName(name: string) {
        switch (name) {
            case "Khách hàng":
                return null;
            case "Dự án":
                return null;
            case "Năm kinh nghiệm":
                return null;
            default:
                return null;
        }
    }
    return (
        <div className="flex flex-col items-center gap-4">
            {getIconByName(data.name)}
            <h2>{data.name}</h2>
            <p>{data.number}</p>
        </div>
    );
}

export default function AboutSection({ data }: { data: TAboutSectionData }) {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
            id="ve-chung-toi"
            aria-label="About section"
            role="region"
        >
            <div>
                {data.about && <AboutCard data={data.about} />}
            </div>
        </section>
    );
}
