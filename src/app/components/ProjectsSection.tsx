/**
 * @file ProjectsSection.tsx
 * @description Project component, this is the section containing the company's implemented projects
 * @version 1.0.0
 * @todo Style the section
 */
// External imports

// Internal imports
import { TProjectData, TProjectsSectionData } from "@/types";


function ProjectCard({ project }: { project: TProjectData }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.customer}</p>
        </div>
    )
}

export function ProjectsSection({ data }: { data: TProjectData [] }) {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
            id="du-an"
            aria-label="Projects section"
            role="region"
        >
            {data && data.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </section>
    )
}