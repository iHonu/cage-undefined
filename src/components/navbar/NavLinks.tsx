import Link from "next/link";
import { ReactNode } from "react";
import ChevronIcon from "../icons/ChevronIcon";

interface SubLink {
  label: string;
  href: string;
}

interface NavLinkProps {
  label: string;
  href: string;
  dropdownItems?: SubLink[];
  icon?: ReactNode;
}

const NavLink = ({ label, href, dropdownItems, icon }: NavLinkProps) => {
  const hasDropdown = dropdownItems && dropdownItems.length > 0;

  return (
    <div className="relative group">
      <Link
        href={href}
        className="flex items-center gap-1 text-lg text-cream hover:text-cream/80 transition-colors"
      >
        {label}
        {hasDropdown && (
          <ChevronIcon className="transform group-hover:rotate-180 transition-transform duration-200 ml-1" />
        )}
        {icon}
      </Link>

      {/* Dropdown Menu */}
      {hasDropdown && (
        <div className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
          <div className="relative bg-[#1C1B23] rounded-md shadow-lg py-2">
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-cream hover:bg-cream/10 transition-colors text-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
