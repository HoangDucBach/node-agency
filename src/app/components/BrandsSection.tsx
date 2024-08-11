/**
 * @file BrandsSection.tsx
 * @description Brand Section component, this contains all brands the company has worked with
 * @version 1.0.0
 * @todo Style the section
 */

import { TBrandsSectionData } from "@/types";

export default function BrandsSection({data}:{data: TBrandsSectionData}) {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
            id="brands"
            aria-label="Brands section"
            role="region"
        >
            <div>
            </div>
        </section>
    );

}