'use client';

import { useState } from "react";
import { Image } from "@nextui-org/image";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import truncateHtml from "truncate-html"
import { TProjectData } from "@/types";
import { LogoBrand } from "@/components/brand";

function truncateText(text: string, wordLimit: number) {
    const words = text.split(" ");

    if (words.length > wordLimit) {
        return {
            truncated: words.slice(0, wordLimit).join(" ") + "...",
            isTruncated: true
        };
    }

    return {
        truncated: text,
        isTruncated: false
    };
}

export default function ProjectCard({ data }: { data: TProjectData }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    function ProjectPost() {
        return (
            <>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    size="2xl"
                    placement="center"
                >
                    <ModalContent>
                        <ModalHeader>
                            <div className="flex flex-row items-center gap-2">
                                <LogoBrand
                                    name={data.customer}
                                    className="w-8 aspect-square rounded-full object-contain bg-foreground-100"
                                />
                                <h6 className="text-sm font-medium text-default-500">{data.customer}</h6>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-lg font-semibold text-foreground-900">{data.name}</h6>
                                <p
                                    dangerouslySetInnerHTML={{ __html: data.description || "" }}
                                    className="text-foreground-900 text-base"
                                />
                            </div>
                            <div>
                                <p
                                    className="text-4xl font-bold text-primary"
                                    style={{
                                        textShadow: "0px 10px 15px rgba(0, 112, 243, 0.40), 0px 4px 6px rgba(0, 0, 0, 0.05)"
                                    }}
                                >
                                    {data.kpi}% KPI
                                </p>
                            </div>
                            <div
                                className="grid grid-cols-1 gap-2 mt-4 overflow-y-scroll max-h-[50vh]"
                            >
                                {
                                    data.images && data.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image.src}
                                            alt={data.name}
                                            className="object-cover w-full shadow-md shadow-black/5 bg-foreground-100"
                                            loading="lazy"
                                        />
                                    ))
                                }
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={onClose}>Đóng</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }

    return (
        <div
            className={clsx(
                "relative flex w-full flex-none flex-col gap-3",
                "cursor-pointer",
            )}
            id={data.name}
            onClick={onOpen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onOpen();
                }
            }}
        >
            <ProjectPost />
            {
                data.images && data.images.length > 0 ? (
                    <Image
                        className={clsx(
                            "object-cover w-full aspect-square shadow-md shadow-black/5 bg-foreground-100",
                            "hover:scale-[1.05] transition-transform duration-300"
                        )}
                        src={data?.images[0].src}
                        alt={data.name}
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-foreground-100" />
                )
            }
            <div className="z-10 flex flex-col w-full h-fit gap-2">
                <h6 className="text-lg font-semibold text-default-foreground">{data.name}</h6>
                <p className="text-default-500 text-base">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: truncateHtml(data.description!, { length: 16, byWords: true })
                        }}
                    />
                    <span
                        className="text-primary font-semibold cursor-pointer"
                    >
                        {" "}Đọc thêm
                    </span>
                </p>
                <div className="flex flex-row items-center gap-2">
                    <LogoBrand
                        name={data.customer}
                        className="w-8 aspect-square rounded-full object-contain bg-foreground-100"
                    />
                    <h6 className="text-sm font-medium text-default-500">{data.customer}</h6>
                </div>
            </div>
        </div>
    )
}