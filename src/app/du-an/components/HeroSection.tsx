'use client';

import { Tab, Tabs } from "@nextui-org/react";
import { DigitalActivationProjectsSection, InfluencerMarketingProjectsSection, SocialMediaMarketingProjectsSection } from "./projects-section/ProjectsSection";

import { IndustryType, TProjectData } from "@/types";

export default function HeroSection({ data }: { data: TProjectData[] }) {

    return (
        <section className="flex flex-col gap-4 md:gap-8" id={'hero'}>
            <h1 className="text-5xl md:text-6xl text-default-foreground font-bold">Dự án nổi bật</h1>
            <Tabs
                variant="light"
                radius="full"
                fullWidth
            >
                <Tab
                    key={IndustryType.INFLUENCER_MARKETING}
                    title="Influencer Marketing"
                >

                    <InfluencerMarketingProjectsSection data={data} />
                </Tab>
                <Tab
                    key={IndustryType.SOCIAL_MEDIA_MARKETING}
                    title="Social Media Marketing"
                >
                    <SocialMediaMarketingProjectsSection data={data} />
                </Tab>
                <Tab
                    key={IndustryType.DIGITAL_ACTIVATION}
                    title="Digital PR/ Activation"
                >
                    <DigitalActivationProjectsSection data={data} />
                </Tab>
            </Tabs>
        </section>
    );
}