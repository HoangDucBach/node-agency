/**
 * Type definitions for YAML files
 * @packageDocumentation YAML contents types
 */

import { TDocument } from "@/utils";

/* -------------------------------------------------------------------------- */
/*                                 YAML FILE TYPES                            */
/* -------------------------------------------------------------------------- */
export type TPlatformFile = {
    platform: TPlatformData;
};

export type TCompanyFile = {
    company: TCompanyData;
};

export type TContactFile = {
    contact: TContactInfo;
};

export type TAboutFile = {
    about: TAboutData;
};

export type TBrandsFile = {
    brands: TBrandData[];
};

export type TServicesFile = {
    services: TServiceData[];
};

export type TProjectsFile = {
    projects: TProjectData[];
};

export type THeroFile = {
    hero: THeroData;
};

export type TStatisticFile = {
    statistics: TStatistic[];
};

export type TDocumentsFile = {
    documents: TDocument[];
};

export type TProcessFile = {
    processes: TProcessData[];
};
/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */

/*
* Type for contact information
*/
export type TContactInfo = {
    email?: string;
    phone?: string;
};

/*
* Type for platform information
*/
export type PlatformType = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok';
export type TPlatformData = {
    [key in PlatformType]?: string;
};

/*
* Type for hero information, including tagline, title, description, image, and call to action buttons
*/
export type THeroData = {
    tagline?: string;
    title: string;
    description?: string;
    image?: string;
    ctas?: TCTA[];
}
/*
* Type for company information, including all basic information of company
*/
export type TCompanyData = {
    name: string;
    shortName?: string;
    description?: string;
    address?: string;
    core?: string | string[];
    industry?: string;
    contact?: TContactInfo;
    copyright?: string;
};

/*
* Type for about information, including company description and statistic information
*/
export type TAboutData = {
    description: string;
    statistic: TStatistic[];
};

/**
 * Type for statistic information of company
 */
export type TStatisticData = {
    number: number;
    name: string;
    description?: string;
};

export type TWorkData = {
    name: string;
    description?: string;
};
export type TProcessData = {
    name: string;
    description?: string;
    image?: string;
    works?: TWorkData[];
};
/*
* Type for project information which company has done
*/
export enum IndustryType {
    INFLUENCER_MARKETING = 'Influencer Marketing',
    SOCIAL_MEDIA_MARKETING = 'Social Media Marketing'
}
export type TProjectData = {
    name: string;
    customer: string;
    description?: string;
    industry?: IndustryType;
    kpi?: string | number;
    images?: {
        src: string;
        alt: string;
    };
};

/*
* Type for CTA (Call to action) button
*/
export type TCTA = {
    label: string;
    href: string;
};


/*
* Type for brand information which company has worked with
*/
export type TBrandData = {
    name: string;
    logo: string | null;
};

/*
* Type for service information which company provides
*/
export type TServiceData = {
    name: string;
    description?: string;
    features?: string[];
    icon?: string | null;
    tags?: string[];
};

/*
* Type for statistic information of company
*/
export type TStatistic = {
    number: number;
    name: string;
    description?: string;
};


/* -------------------------------------------------------------------------- */
/*                                 TYPE OF FOOTER AND HEADER                  */
/* -------------------------------------------------------------------------- */

export type TFooterData = {
    company: TCompanyData;
    contact?: TContactInfo;
    platform?: TPlatformData;
    copyright?: string;
};