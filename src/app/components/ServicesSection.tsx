'use client';

import { TServiceData } from "@/types"
import { Chip } from "@nextui-org/chip"
import clsx from "clsx"
import { motion, useAnimation } from "framer-motion"
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
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className={clsx(
                "flex flex-col items-start max-w-[360px] gap-4",
                "md:col-span-2", // Mỗi phần tử chiếm 1 cột trên desktop
                index % 2 === 0 ? 'md:col-start-1 md:items-end' : 'md:col-start-2 items-start',
            )}
        >
            <div className="flex flex-row gap-2 flex-wrap">
                {service.tags && service.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} variant="bordered" size="sm">
                        {tag}
                    </Chip>
                ))}
            </div>
            <h2 className={clsx(
                "bg-clip-text inline-block text-transparent bg-gradient-to-r from-primary-900 to-primary-500",
                "text-5xl font-bold",
                index % 2 === 0 ? 'text-end' : 'text-start',
            )}>
                {service.name}
            </h2>
            <p className={clsx(
                "w-full text-base text-default-foreground break-words",
                index % 2 === 0 ? 'text-end' : 'text-start',
            )}>
                {service.description}
            </p>
        </motion.div>
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
            className="relative grid grid-cols-1 md:grid-cols-[auto,auto,auto] gap-32 md:gap-64 py-8 md:py-10 justify-items-center"
            id="chung-toi-cung-cap-dich-vu-gi"
        >
            {data && data.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} onInView={(inView) => handleInView(index, inView)} />
            ))}
            <motion.div
                id="follow-line"
                className="w-1 h-[360px] rounded-full bg-gradient-to-b bg-primary-500/50 via-primary-500 to-primary-500/50 shadow-primary-500 absolute left-1/2 z-20 hidden md:block"
                initial={{ y: 0 }}
                animate={{ y: activeIndex * 450 }}
                transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.div id="root-line" className="h-full w-1 rounded-full bg-default absolute left-1/2 z-10 hidden md:block"/>
            <div className="rounded-full w-[50vw] aspect-square blur-[250px] absolute -left-64 top-0 -translate-x-1/2 bg-primary-500/50 -z-10"/>
            <div className="rounded-full w-[50vw] aspect-square blur-[250px] absolute -right-64 bottom-0 translate-x-1/2 bg-primary-500/50 -z-10"/>
        </section>
    )
}