// System imports
import fs from "fs";
import path from "path";

// External imports
import yaml from "js-yaml";

// Internal imports
import HeroSection from "./components/HeroSection";
import { TAboutData, TAboutFile, TBrandData, TBrandsFile, THeroData, THeroFile, TProjectData, TProjectsFile, TServiceData, TServicesFile } from "@/types";
import HeroServiceSection from "./components/HeroServiceSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import BrandsSection from "./components/BrandsSection";

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

  const heroFileData = yaml.load(heroSectionFile) as THeroFile;
  const brandsFileData = yaml.load(brandsSectionFile) as TBrandsFile;
  const aboutFileData = yaml.load(aboutSectionFile) as TAboutFile;
  const serviceFileData = yaml.load(servicesSectionFile) as TServicesFile;
  const projectsFileData = yaml.load(projectsSectionFile) as TProjectsFile;

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
      <HeroServiceSection />
      <ServicesSection data={data.services} />
      <ProjectsSection data={data.projects} />
    </>
  );
}