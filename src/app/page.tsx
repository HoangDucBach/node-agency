// System imports
import fs from "fs";
import path from "path";

// External imports
import yaml from "js-yaml";

// Internal imports
import { TAboutData, TAboutFile, TBrandData, TBrandsFile, TDocumentsFile, THeroData, THeroFile, TProjectData, TProjectsFile, TServiceData, TServicesFile } from "@/types";
import fuse from "@/utils/fuse";
import dynamic from "next/dynamic";

const BrandsSection = dynamic(() => import("./components/BrandsSection"), { ssr: false });
const AboutSection = dynamic(() => import("./components/about-section/AboutSection"), { ssr: false });
const ServicesSection = dynamic(() => import("./components/ServicesSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"), { ssr: false });
const HeroSection = dynamic(() => import("./components/HeroSection"), { ssr: false });

interface HomePageProps {
  hero: THeroData;
  about: TAboutData;
  brands: TBrandData[];
  services: TServiceData[];
  projects: TProjectData[];

}

async function fetchPageData(): Promise<HomePageProps> {
  const heroSectionFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "hero.yaml"),
    "utf8"
  );

  const aboutSectionFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "ve-chung-toi.yaml"),
    "utf8"
  );

  const brandsSectionFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "cac-thuong-hieu.yaml"),
    "utf8"
  );

  const servicesSectionFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "dich-vu.yaml"),
    "utf8"
  );

  const projectsSectionFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "du-an.yaml"),
    "utf8"
  );

  const documentsFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "tim-kiem.yaml"),
    "utf8"
  );

  const heroFileData = yaml.load(heroSectionFile) as THeroFile;
  const brandsFileData = yaml.load(brandsSectionFile) as TBrandsFile;
  const aboutFileData = yaml.load(aboutSectionFile) as TAboutFile;
  const serviceFileData = yaml.load(servicesSectionFile) as TServicesFile;
  const projectsFileData = yaml.load(projectsSectionFile) as TProjectsFile;
  const documentsFileData = yaml.load(documentsFile) as TDocumentsFile;

  // Set collecction for fuse
  fuse.setCollection(documentsFileData.documents);

  return {
    hero: heroFileData.hero,
    brands: brandsFileData.brands,
    about: aboutFileData.about,
    services: serviceFileData.services,
    projects: projectsFileData.projects
  };
}

export default async function Home() {
  const data = await fetchPageData();

  return (
    <>
      <HeroSection data={data.hero} />
      <BrandsSection data={data.brands} />
      <AboutSection data={data.about} />
      <ServicesSection data={data.services} />
      <ProjectsSection />
    </>
  );
}