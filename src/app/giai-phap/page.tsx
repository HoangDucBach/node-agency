// System imports
import fs from "fs";
import path from "path";

// External imports
import React from "react";
import yaml from "js-yaml";

// Internal imports
import { TProcessFile } from "@/types";
import {HeroSection} from "./components/HeroSection";
import { ProcessSection } from "./components/ProcessSection";

type PageProps = {
    process: TProcessFile;
};
function fetchPageData(): PageProps {
    const processFile= fs.readFileSync(
        path.join(process.cwd(), "contents", "quy-trinh-thuc-hien.yaml"),
        "utf8"
    );

    const processFileData = yaml.load(processFile) as TProcessFile;
    return {
        process: processFileData,
    }
}
export default function Page() {
    const data = fetchPageData();
    return (
        <>
            <HeroSection/>
            <ProcessSection data={data.process}/>
        </>
    );
}