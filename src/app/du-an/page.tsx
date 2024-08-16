// System imports
import fs from "fs";
import path from "path";

// External imports
import React from "react";
import yaml from "js-yaml";

// Internal imports
import { TProjectData, TProjectsFile } from "@/types";
import HeroSection from "./components/HeroSection";

interface PageProps {
    projects: TProjectData [];
}

const fetchData = async (): Promise<PageProps> => {
    const projectsFile= fs.readFileSync(
        path.join(process.cwd(), "contents", "du-an.yaml"),
        "utf8"
    );

    const projectsFileData = yaml.load(projectsFile) as TProjectsFile;

    return {
        projects: projectsFileData.projects,
    };
}
export default async function Page() {
    const data = await fetchData();
    return (
        <>
            <HeroSection data={data.projects}/>
        </>
    )
}