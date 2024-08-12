import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      default: 'Về chúng tôi',
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
      icon: "/favicon.ico",
    },
    keywords: siteConfig.keywords,
  };
export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </>
    )
}