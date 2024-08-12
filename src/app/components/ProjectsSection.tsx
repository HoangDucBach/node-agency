// Internal imports
import { TProjectData } from "@/types";

function ProjectCard({ project }: { project: TProjectData }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.customer}</p>
        </div>
    );
}

export function ProjectsSection({ data }: { data: TProjectData[] }) {
    return (
        <section
            aria-label="Projects section"
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
            id="du-an"
        >
            {data && data.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </section>
    );
}