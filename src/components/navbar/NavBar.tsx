"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const transparentNavbarPaths = ["/", "/donate", "/about/team"];
  const shouldBeTransparent = transparentNavbarPaths.includes(pathname || "");

  const links = [
    {
      label: "Our Impact",
      href: "/our-impact",
    },
    {
      label: "Services",
      href: "/services",
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
    <>
      <div className="md:hidden">
        <MobileNav
          links={links}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <div className="hidden md:block">
        <DesktopNav links={links} shouldBeTransparent={shouldBeTransparent} />
      </div>
    </>
  );
};

export default NavBar;
