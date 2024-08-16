import { IndustryType, TProjectData } from "@/types";
import { Image } from "@nextui-org/image";

function ProjectCard({ data }: { data: TProjectData }) {
    return (
        <div className="flex flex-col gap-4 md:gap-8 w-fit">
            <div className="space-y-2 border-l-2 rounded-none border-primary">
                <h6 className="text-4xl font-semibold text-default-foreground ml-4">{data.name}</h6>
                <p className={'text-default-500 ml-4'}>{data.description}</p>
            </div>
            <p
                className="text-4xl font-bold text-primary"
                style={{
                    textShadow: '0px 10px 15px rgba(0, 112, 243, 0.40), 0px 4px 6px rgba(0, 0, 0, 0.05)'
                }}
            >
                {data.kpi && <>{data.kpi}% KPI</>}
            </p>
            <div>
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
        </div>
    )
}
export function InfluencerMarketingProjectsSection({ data }: { data: TProjectData[] }) {
    return (
        <div className="flex flex-row flex-wrap gap-8">
            {data.filter((project) => project.industry === IndustryType.INFLUENCER_MARKETING).map((project, index) => (
                <ProjectCard key={index} data={project} />
            ))}
        </div>
    );
}
export default function ProjectsSection({ data }: { data: TProjectData[] }) {

}