/**
 * @file HeroSection.tsx
 * @description Hero Section component, this opens the page, it is the first thing the user sees
 * @version 1.0.0
 * @todo Style the section
 */

// System imports


// External imports
import { THeroSectionData } from "@/types";
import { title } from "@/components/primitives";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";

export default function HeroSection({ data }: { data: THeroSectionData }) {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
            id="hero"
            aria-label="Hero section"
            role="region"
        >
            <Chip color="default" size="md">{data.tagline}</Chip>
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 dangerouslySetInnerHTML={{ __html: data.title }} className={title()} />
                <p>{data.description}</p>
                {data.ctas && data.ctas.map((cta, index) => (
                    <Button key={index} href={cta.href}>{cta.label}</Button>
                ))}
            </div>
        </section>
    );
}