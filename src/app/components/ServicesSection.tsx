/**
 * @file ServicesSection.tsx
 * @description Service component, this is the section containing the company's services
 * @version 1.0.0
 * @todo Style the section
 */
// External imports

// Internal imports
import { TServiceData, TServicesSectionData } from "@/types"

function ServiceCard({ service }: { service: TServiceData}) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
        </div>
    )
}
export default function ServicesSection({data}: {data: TServiceData []}) {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
            id="chung-toi-cung-cap-dich-vu-gi"
            aria-label="Hero Service section"
            role="region"
        >
            {data && data.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </section>
    )
}