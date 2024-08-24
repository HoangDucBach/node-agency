'use client';

import { TServiceData } from "@/types"
import { Chip } from "@nextui-org/chip";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import clsx from "clsx"
import { useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"


function ServiceCard({ service, index, onInView }: { service: TServiceData, index: number, onInView: (inView: boolean) => void }) {
    const controls = useAnimation()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                onInView(entry.isIntersecting)
                controls.start({
                    opacity: entry.isIntersecting ? 1 : 0.25,
                    y: entry.isIntersecting ? 0 : 50,
                    transition: { duration: 0.5, delay: index * 0.2 }
                })
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [controls, index, onInView])

    return (
        <div
            ref={ref}
            className={clsx(
                "flex flex-col items-start gap-4 w-full p-4 rounded-2xl cursor-pointer",
                "hover:-translate-y-8 hover:shadow-lg hover:bg-primary-400 text-default-foreground hover:text-secondary-foreground",
                "transition-all transform duration-500 ease-in-out my-8",
            )}
        >
            <div className="flex flex-row gap-2 flex-wrap">
                {service.tags && service.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} variant="bordered" size="sm" color="primary">
                        {tag}
                    </Chip>
                ))}
            </div>
            <h2 className={clsx(
                "bg-clip-text inline-block",
                "text-3xl font-bold",
            )}>
                {service.name}
            </h2>

            <Listbox
                items={service.features?.map((feature, featureIndex) => ({ value: feature, label: feature }))}
            >
                {
                    (items) => (
                        <ListboxItem
                            variant="light"
                            color="primary"
                            key={items.value}
                        >
                            {items.label}
                        </ListboxItem>
                    )
                }
            </Listbox>
        </div>
    )
}

export default function ServicesSection({ data }: { data: TServiceData[] }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleInView = (index: number, inView: boolean) => {
        if (inView) {
            setActiveIndex(index)
        }
    }

    return (
        <section
            aria-label="Hero Service section"
            className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 py-8 md:py-10 justify-items-center"
            id="chung-toi-cung-cap-dich-vu-gi"
        >
            {data && data.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} onInView={(inView) => handleInView(index, inView)} />
            ))}
        </section>
    )
}