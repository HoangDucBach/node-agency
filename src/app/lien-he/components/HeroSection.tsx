'use client';

import { TCompanyData, TPlatformData } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import các biểu tượng cần thiết
import React from "react";

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
        <section id='lien-he' className="md:px-64 py-12">
            <h1 className="text-5xl font-semibold text-center mb-12">Liên hệ với chúng tôi</h1>
            <div className="bg-gray-50 p-12 rounded-lg shadow-lg mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <ContactItem
                        icon={<FontAwesomeIcon icon={faLocationDot} className="text-3xl" />}
                        title="Địa chỉ"
                        value="22 Đường 11 KDC CityLand Park Hills, Phường 10, Quận Gò Vấp, TP.HCM"
                    />
                    <ContactItem
                        icon={<FontAwesomeIcon icon={faPhone} className="text-3xl" />}
                        title="Hotline"
                        value="0587862888"
                    />
                    <ContactItem
                        icon={<FontAwesomeIcon icon={faEnvelope} className="text-3xl" />}
                        title="Email"
                        value="trang@node.com.vn"
                    />
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
