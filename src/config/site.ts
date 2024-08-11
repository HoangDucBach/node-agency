// System imports
import fs from "fs";
import path from "path";

// External imports
import yaml from "js-yaml";
import { TCompanyFile, TPlatformFile, TServicesFile } from "@/types";

export type SiteConfig = typeof siteConfig;

function fetchData() {
  const companyFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "cong-ty.yaml"),
    "utf8"
  );

  const platformFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "nen-tang.yaml"),
    "utf8"
  );

  const serviceFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "dich-vu.yaml"),
    "utf8"
  );

  const companyFileData = yaml.load(companyFile) as TCompanyFile;

  const platformFileData = yaml.load(platformFile) as TPlatformFile;

  const serviceFileData = yaml.load(serviceFile) as TServicesFile;
  
  return {
    company: companyFileData.company,
    platform: platformFileData.platform,
    services: serviceFileData.services
  };
}

const siteData = fetchData();
const serviceTags = siteData.services.flatMap((service: any) => service.tags);
const platformTags = Object.keys(siteData.platform);

const keywords = Array.from(new Set([
  ...serviceTags,
  ...platformTags,
  siteData.company.name,
  siteData.company.shortName,
  siteData.company.description,
  "web design",
  "web development",
  "Interactive Activities",
  "Social Media Interaction",
  "Facebook Engagement",
  "Instagram Activities",
  "YouTube Interaction",
  "TikTok Engagement",
  "Influencer Marketing",
  "Influencer Collaboration",
  "Celebrity Endorsements",
  "Influencer Campaigns",
  "Marketing with Influencers",
  "Content Development",
  "Content Creation",
  "Market-Responsive Content",
  "Flexible Content Development",
  "Reliable Content Solutions",
  "Social Marketing",
  "Integrated Social Marketing",
  "Comprehensive Media Solutions",
  "Effective Social Media Strategies",
  "Business Promotion Through Social Media"
]));

export const siteConfig = {
  name: siteData.company.name,
  shortName: siteData.company.shortName,
  description: siteData.company.description,
  navItems: [
    {
      label: "Về chúng tôi",
      href: "#ve-chung-toi",
    },
    {
      label: "Dự án",
      href: "#du-an",
    },
    {
      label: "Giải pháp",
      href: "#giai-phap",
    },
    {
      label: "Liên hệ",
      href: "#lien-he",
    },
  ],
  links: {
    twitter: siteData.platform.twitter,
    facebook: siteData.platform.facebook,
    youtube: siteData.platform.youtube,
    instagram: siteData.platform.instagram,
    tiktok: siteData.platform.tiktok,
    linkedin: siteData.platform.linkedin
  },
  keywords: keywords
  
};
