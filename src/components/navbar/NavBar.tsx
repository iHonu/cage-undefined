import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import NavLink from "./NavLinks";

const NavBar = () => {
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
    <nav className="relative w-full bg-[#1C1B23] py-6 px-10">
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
