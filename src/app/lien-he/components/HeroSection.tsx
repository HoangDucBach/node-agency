'use client';

import { TCompanyData, TPlatformData } from "@/types";
import { Link } from "@nextui-org/react";
import React from "react";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";

function ContactItem({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
                {icon}
                <p className="text-2xl font-semibold">{title}</p>
            </div>
            <p className="text-xl text-gray-700 text-center">{value}</p>
        </div>
    );
}

export default function HeroSection({
    companyData,
    platformData
}: {
    companyData: TCompanyData,
    platformData: TPlatformData
}) {
    return (
        <section id='lien-he' className="md:px-64 mb-32 md:mb-64 flex flex-col justify-start items-start gap-4">
            <h1 className="text-6xl md:text-7xl font-bold text-default-foreground">Liên hệ với chúng tôi</h1>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 w-full">
                <div className="flex-1">
                    <p className="text-xl font-normal text-default-foreground">{companyData.contact?.email}</p>
                    <p className="font-bold text-lg text-default-foreground">
                        0{companyData.contact?.phone}
                    </p>

                    <div className="flex space-x-6 mt-6">
                        <Link isExternal aria-label="Facebook" href={platformData.facebook}>
                            <FaFacebook className="text-[#1877F2]" size={24} />
                        </Link>
                        <Link isExternal aria-label="Linkedin" href={platformData.linkedin}>
                            <FaLinkedin className="text-[#0A66C2]" size={24} />
                        </Link>
                        <Link isExternal aria-label="Tiktok" href={platformData.tiktok}>
                            <FaTiktok className="text-black" size={24} />
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-default-foreground text-base max-w-64 whitespace-pre-line">{companyData.address}</p>
                </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-lg shadow-lg">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Họ và tên</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg h-14" 
                                placeholder="  Nhập họ và tên của bạn"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg h-14" 
                                placeholder="  Nhập địa chỉ email của bạn"
                            />
                        </div>
                    </div>
                    <div className="mb-8">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Tin nhắn</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg h-32" 
                            placeholder="  Nhập tin nhắn của bạn"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Gửi tin nhắn
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
