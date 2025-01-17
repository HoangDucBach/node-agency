'use client';

// External imports
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

// Internal imports
import { SearchDialog } from "./search";
import {
  Logo,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

// Updated siteConfig with new navigation items
const siteConfig = {
  navItems: [
    { label: "Về chúng tôi", href: "/ve-chung-toi" },
    { label: "Dự án", href: "/du-an" },
    { label: "Giải pháp", href: "/giai-phap" },
    { label: "Liên hệ", href: "/lien-he" },
  ],
  navMenuItems: [
    { label: "Về chúng tôi" },
    { label: "Dự án" },
    { label: "Giải pháp" },
    { label: "Liên hệ" },
  ],
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isOpen} onMenuOpenChange={setIsOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/" aria-label="Home">
            <Logo className="active:scale-95" size={64} />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex"><SearchDialog /></NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <SearchDialog />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={siteConfig.navItems[index].href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};