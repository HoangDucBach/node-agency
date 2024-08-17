// System imports
import fs from "fs";
import path from "path";

// External imports
import React from "react";
import yaml from "js-yaml";

// Internal imports
import { TProjectData, TProjectsFile } from "@/types";
import HeroSection from "./components/HeroSection";
import { Metadata } from "next";

interface PageProps {
    projects: TProjectData[];
}
export const metadata: Metadata = {
    title: "Dự án",
    description: "Danh sách các dự án đã thực hiện"
};
const fetchData = (): PageProps => {
    const projectsFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "du-an.yaml"),
        "utf8"
    );

    const projectsFileData = yaml.load(projectsFile) as TProjectsFile;

    return {
        projects: projectsFileData.projects,
    };
}

export default async function Page() {
    const data = fetchData();
    
    return (
        <>
            <HeroSection data={data.projects} />
        </>
    )
}