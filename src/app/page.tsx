// System imports
import fs from "fs";
import path from "path";

// External imports
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import yaml from "js-yaml";

// Internal imports
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HeroSection from "./components/HeroSection";
import { TAboutData, TAboutSectionData, TBrandsSectionData, THeroSectionData, TProjectsSectionData, TServicesSectionData } from "@/types";
import HeroServiceSection from "./components/HeroServiceSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import BrandsSection from "./components/BrandsSection";

const heroData: THeroSectionData = {
  title: "Welcome to Our Site",
  description: "This is a description of our site.",
};
interface HomePageProps {
  hero: THeroSectionData;
  brands: TBrandsSectionData;
  about: TAboutSectionData;
  services: TServicesSectionData;
  projects: TProjectsSectionData;

}

async function fetchHeroSectionData(): Promise<HomePageProps> {
  const heroSectionFile = fs.readFileSync(
    path.join(process.cwd(), "contents", "_.yaml"),
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

  const heroSectionData = yaml.load(heroSectionFile) as THeroSectionData;
  const aboutSectionData = yaml.load(aboutSectionFile) as TAboutSectionData;
  const brandsSectionData = yaml.load(brandsSectionFile) as TBrandsSectionData ;
  const servicesSectionData = yaml.load(servicesSectionFile) as TServicesSectionData ;
  const projectsSectionData = yaml.load(projectsSectionFile) as TProjectsSectionData ;

  console.log(aboutSectionData);

  return {
    hero: heroSectionData,
    brands: brandsSectionData,
    about: aboutSectionData,
    services: servicesSectionData,
    projects: projectsSectionData
  };
}

export default async function Home() {
  const data = await fetchHeroSectionData();

  return (
    <>
      <HeroSection data={data.hero} />
      <BrandsSection data={data.brands} />
      <AboutSection data={data.about}/>
      <HeroServiceSection />
      <ServicesSection data={data.services} />
      <ProjectsSection data={data.projects} />
    </>
  );
}