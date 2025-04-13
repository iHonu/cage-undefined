"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import NavLink from "./NavLinks";

const NavBar = () => {
  const pathname = usePathname();
  const transparentNavbarPaths = ["/", "/donate", "/about/team"];
  const shouldBeTransparent = transparentNavbarPaths.includes(pathname || "");

  const links = [
    {
      label: "Our Impact",
      href: "/our-impact",
    },
    {
      label: "About",
      href: "/about",
      dropdownItems: [
        { label: "Our Story", href: "/about/story" },
        { label: "Team", href: "/about/team" },
        { label: "Partners", href: "/about/partners" },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Donate",
      href: "/donate",
    },
  ];

  return (
    <nav
      className={`
        relative w-full py-6 px-10
        ${
          shouldBeTransparent
            ? "absolute top-0 left-0 z-50 bg-[#08001E] backdrop-blur-sm"
            : "bg-[#181818]"
        }
      `}
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Logo and Score */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={77}
            height={54}
            priority
            className="w-auto h-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {links.map((link, index) => (
            <NavLink
              key={index}
              label={link.label}
              href={link.href}
              dropdownItems={link.dropdownItems}
            />
          ))}
        </div>
        <Button variant="primary">Apply</Button>
      </div>
    </nav>
  );
};

export default NavBar;
