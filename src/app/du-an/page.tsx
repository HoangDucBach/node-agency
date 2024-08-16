// System imports
import fs from "fs";
import path from "path";

// External imports
import React from "react";
import yaml from "js-yaml";

// Internal imports
import { TBrandData, TProjectData, TProjectsFile } from "@/types";
import HeroSection from "./components/HeroSection";
import { BrandsNavbar } from "./components/BrandsNavbar";
import { Metadata } from "next";

interface PageProps {
    projects: TProjectData[];
}
export const metadata: Metadata = {
    title: "Dự án",
    description: "Danh sách các dự án đã thực hiện",
};
const fetchData = async (): Promise<PageProps> => {
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
    const data = await fetchData();
    const brandsSet = new Set(data.projects.map((project) => project.customer));
    const brandsIteration = Array.from(brandsSet);
    const brands = brandsIteration.map((brand) => {
        return {
            logo: "/assets/logo-" + brand.toLowerCase().replace(' ', '-') + ".png",
            name: brand,
        } satisfies TBrandData;
    });
    console.log(brands);
    return (
        <>
            {/* <BrandsNavbar data={brands} /> */}
            <HeroSection data={data.projects} />
        </>
    )
}