// System imports
import fs from "fs";
import path from "path";

// External imports
import yaml from "js-yaml";
import React from "react";

// Internal imports
import { TCompanyData, TCompanyFile, TContactFile, TContactInfo, TFooterData, TPlatformData, TPlatformFile } from "@/types";

const fetchFooterData = (): TFooterData => {
    const companyFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "cong-ty.yaml"),
        "utf8"
    );

    const contactFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "lien-he.yaml"),
        "utf8"
    );

    const platformFile = fs.readFileSync(
        path.join(process.cwd(), "contents", "nen-tang.yaml"),
        "utf8"
    );

    const platformFileData = yaml.load(platformFile) as TPlatformFile;
    const contactFileData = yaml.load(contactFile) as TContactFile;
    const companyFileData = yaml.load(companyFile) as TCompanyFile;

    return {
        company: companyFileData.company,
        contact: contactFileData.contact,
        platform: platformFileData.platform,

    }
};

function CompanyInfo({ data }: { data: TCompanyData }) {
    return (
        <div>
            {/* Company logo*/}
            <p>{data.description}</p>
        </div>
    )
}
function ContactInfo({ data }: { data: TContactInfo }) {
    return (
        <div>
            <p>{data.email}</p>
            <p>{data.phone}</p>
        </div>
    )
}
function PlatformInfo({ data }: { data: TPlatformData }) {
    return (
        <div>
            {Object.entries(data).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
            ))}
        </div>
    )
}
export function Footer() {
    const data = fetchFooterData();
    
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            {data && (
                <>
                    <CompanyInfo data={data.company} />
                    <ContactInfo data={data.contact!} />
                    <PlatformInfo data={data.platform!} />
                </>
            )}
            <p>&copy; 2021 Company Name</p>
        </footer>
    )
}