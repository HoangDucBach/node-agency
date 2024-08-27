import clsx from "clsx";

import { IndustryType, TProjectData } from "@/types";
import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("./ProjectCard"), { ssr: false });

export function InfluencerMarketingProjectsSection({ data }: { data: TProjectData[] }) {
    return (
        <section
            className={clsx(
                'my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
            )}
            id="influencer-marketing"
        >
            {data.filter((project) => project.industry === IndustryType.INFLUENCER_MARKETING).map((project, index) => (
                <ProjectCard key={index} data={project} />
            ))}
        </section>
    );
}

export function DigitalActivationProjectsSection({ data }: { data: TProjectData[] }) {
    return (
        <section
            className={clsx(
                'my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
            )}
            id="digital-activation"
        >
            {data.filter((project) => project.industry === IndustryType.DIGITAL_ACTIVATION).map((project, index) => (
                <ProjectCard key={index} data={project} />
            ))}
        </section>
    );
}

export function SocialMediaMarketingProjectsSection({ data }: { data: TProjectData[] }) {
    return (
        <section
            className={clsx(
                'my-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
            )}
            id="social-media-marketing"
        >
            {data.filter((project) => project.industry === IndustryType.SOCIAL_MEDIA_MARKETING).map((project, index) => (
                <ProjectCard key={index} data={project} />
            ))}
        </section>
    );
}
