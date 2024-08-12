/**
 * @file HeroServiceSection.tsx
 * @description Hero Service component, this is the intro
 * @version 1.0.0
 * @todo Style the section
 * @todo Add typewriter effect to the title
 */

import { Button } from "@nextui-org/button";
import clsx from "clsx";

export default function HeroServiceSection() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:my-64 my-32"
            id="chung-toi-cung-cap-dich-vu-gi"
            aria-label="Hero Service section"
            role="region"
        >
            <h1 className={clsx(
                "text-7xl md:text-9xl font-bold text-default-foreground",
            )}>
                Chúng tôi cung cấp <span className="text-primary">dịch vụ</span> gì?
            </h1>

            {/* todo: add right arrow-icon  */}
            <Button href="#dich-vu" >Kham pha ngay !</Button>
        </section>
    )
};