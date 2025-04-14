import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import NavLink from "./NavLinks";

interface NavLink {
  label: string;
  href: string;
  dropdownItems?: {
    label: string;
    href: string;
  }[];
}

interface DesktopNavProps {
  links: NavLink[];
  shouldBeTransparent: boolean;
}

const DesktopNav = ({ links, shouldBeTransparent }: DesktopNavProps) => {
  return (
    <nav
      className={`
        w-full py-6 px-10
        ${
          shouldBeTransparent
            ? "absolute top-0 left-0 z-50 bg-[#08001E]/60 backdrop-blur-sm"
            : "bg-[#181818]"
        }
      `}
    >
      <div className="mx-auto flex items-center justify-between">
        <Link href="/" className="flex-none">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={77}
            height={54}
            priority
            className="h-auto"
          />
        </Link>

        <div className="flex-1 flex items-center justify-center space-x-8 max-w-2xl mx-auto px-4">
          {links.map((link, index) => (
            <NavLink
              key={index}
              label={link.label}
              href={link.href}
              dropdownItems={link.dropdownItems}
            />
          ))}
        </div>

        <div className="flex-none">
          <Button variant="primary">Apply</Button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
