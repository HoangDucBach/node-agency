// System imports
import fs from "fs";
import path from "path";

// External imports
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";
import yaml from "js-yaml";

// Internal imports
import { TProcessFile } from "@/types";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const ProcessSection = dynamic(() => import("./components/ProcessSection"));

type PageProps = {
    process: TProcessFile;
};

export const metadata: Metadata = {
    title: "Giải pháp",
    description: "Quy trình thực hiện giải pháp của chúng tôi",
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