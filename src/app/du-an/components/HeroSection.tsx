'use client';

import { IndustryType, TProjectData } from "@/types";
import { Tab, Tabs } from "@nextui-org/react";
import { InfluencerMarketingProjectsSection } from "./ProjectsSection";

export default function HeroSection({ data }: { data: TProjectData[] }) {

    return (
        <section className="flex flex-col gap-8 md:gap-16">
            <h1 className="text-6xl text-default-foreground font-bold">Dự án nổi bật</h1>
            <Tabs
                variant="light"
                radius="full"
            >
                <Tab
                    key={IndustryType.INFLUENCER_MARKETING}
                    title="Influencer Marketing"
                >

                    <InfluencerMarketingProjectsSection data={data} />
                </Tab>
                <Tab
                    key={IndustryType.DIGITAL_ACTIVATION}
                    title="Digital Activation"
                >
                </Tab>
            </Tabs>
        </section>
    );
}