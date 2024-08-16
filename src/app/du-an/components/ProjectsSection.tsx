
import { Image } from "@nextui-org/image";
import { MdOutlineHandshake } from "react-icons/md";

import { Logo } from "@/components/icons";
import { IndustryType, TProjectData } from "@/types";

function ProjectCard({ data }: { data: TProjectData }) {
    return (
        <section className="flex flex-col gap-4 md:gap-8 w-full" id={data.customer}>
            <div className="space-y-2 border-l-2 rounded-none border-primary pl-4">
                <h6 className="text-4xl font-semibold text-default-foreground">{data.name}</h6>
                <p className={'text-default-500'}>{data.description}</p>
                <div className="flex flex-row items-center gap-4">
                    <Logo size={24} />
                    <MdOutlineHandshake size={24} className="text-default-500" />
                    <img
                        src={
                            "/assets/logo-" + data.customer.toLowerCase().replace(' ', '-') + ".png" ||
                            "/assets/logo-" + data.customer.toLowerCase().replace(' ', '-') + ".jpg"
                        }
                        alt={data.customer}
                        className="max-h-8 rounded-full object-cover"
                    />
                </div>
            </div>
            <p
                className="text-4xl font-bold text-primary"
                style={{
                    textShadow: '0px 10px 15px rgba(0, 112, 243, 0.40), 0px 4px 6px rgba(0, 0, 0, 0.05)'
                }}
            >
                {data.kpi && <>{data.kpi}% KPI</>}
            </p>
            <div className="flex flex-row flex-wrap gap-4  md:gap-8">
                {
                    data.images && data.images.map((image, index) => (
                        <Image
                            classNames={{
                                wrapper: 'bg-foreground-100'
                            }}
                            isLoading={!image.src}
                            key={index}
                            src={image.src}
                            alt={image.alt}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export function InfluencerMarketingProjectsSection({ data }: { data: TProjectData[] }) {
    return (
        <section className="flex flex-row flex-wrap gap-8">
            {data.filter((project) => project.industry === IndustryType.INFLUENCER_MARKETING).map((project, index) => (
                <ProjectCard key={index} data={project} />
            ))}
        </section>
    );
}
export function DigitalActivationProjectsSection({ data }: { data: TProjectData[] }) {
    return (
        <section className="flex flex-row flex-wrap gap-8">
            {data.filter((project) => project.industry === IndustryType.DIGITAL_ACTIVATION).map((project, index) => (
                <ProjectCard key={index} data={project} />
            ))}
        </section>
    );
}

export function SocialMediaMarketingProjectsSection({ data }: { data: TProjectData[] }) {
    return (
        <section className="flex flex-row flex-wrap gap-8">
            {data.filter((project) => project.industry === IndustryType.SOCIAL_MEDIA_MARKETING).map((project, index) => (
                <ProjectCard key={index} data={project} />
            ))}
        </section>
    );
}
export default function ProjectsSection({ data }: { data: TProjectData[] }) {

}