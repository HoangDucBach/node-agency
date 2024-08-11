/**
 * Type definitions for YAML files
 * @packageDocumentation YAML contents types
 */

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
* Type for company information, including all basic information of company
*/
export type TCompanyData = {
    name: string;
    short_name?: string;
    location?: string;
    industry?: string;
    contact?: TContactInfo;
};

/*
* Type for about information, including company description and statistic information
*/
export type TAboutData = {
    description: string;
    statistic: TStatistic[];
};

/*
* Type for project information which company has done
*/
export type TProjectData = {
    name: string;
    logo?: string;
    customer: string;
    industry?: string;
    description?: string;
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
    description: string;
    icon: string | null;
    tags: string[];
};

/* -------------------------------------------------------------------------- */
/*                                 ALL TYPES OF SECTIONS                      */
/* -------------------------------------------------------------------------- */

/*
* Type for hero section information which is displayed on top of the page
*/
export type THeroSectionData = {
    tagline?: string;
    title: string;
    description?: string;
    image?: string;
    ctas?: TCTA[];
};

export type TBrandsSectionData = {
    brands: TBrandData[];
};

export type TServicesSectionData = {
    services: TServiceData[];
};

export type TProjectsSectionData = {
    projects: TProjectData[];
};

export type TContactSectionData = {
    contact: TContactInfo;
};

export type TAboutSectionData = {
    about: TAboutData;
};

/*
* Type for statistic information of company
*/
export type TStatistic = {
    number: number;
    name: string;
};

export type TBrandDataList = {
    brands: TBrandData[];
};

export type TServiceDataList = {
    services: TServiceData[];
};

export type TProjectDataList = TProjectData[];