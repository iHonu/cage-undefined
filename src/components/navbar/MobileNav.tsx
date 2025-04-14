import Link from "next/link";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
  dropdownItems?: {
    label: string;
    href: string;
  }[];
}

interface MobileNavProps {
  links: NavLink[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ links, isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">
      <div className="flex items-center justify-between h-[48px] pl-4 bg-[#08001E]/60">
        <Link href="/" className="flex items-center z-[100]">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={38}
            height={27}
            priority
            className="h-auto"
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none px-4 h-full flex items-center justify-center bg-primary z-[100]"
        >
          <div className="relative w-6 h-5">
            <span
              className={`
              absolute left-0 top-0 w-6 h-0.5 bg-white transition-all duration-300
              ${isMenuOpen ? "rotate-45 translate-y-2" : ""}
            `}
            ></span>
            <span
              className={`
              absolute left-0 top-2 w-6 h-0.5 bg-white transition-all duration-300
              ${isMenuOpen ? "opacity-0" : ""}
            `}
            ></span>
            <span
              className={`
              absolute left-0 top-4 w-6 h-0.5 bg-white transition-all duration-300
              ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
            fixed inset-0 bg-primary transition-transform duration-300
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
          pt-[60px] z-[90]
        `}
      >
        <div className="flex flex-col w-full">
          {links.map((link, index) => (
            <div key={index} className="w-full">
              <Link
                href={link.href}
                className="block w-full px-6 py-4 text-white text-right text-xl border-b border-white/20 hover:bg-primary/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdownItems && (
                <div className="bg-primary w-full">
                  {link.dropdownItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block w-full px-8 py-3 text-white/90 text-right text-lg border-b border-white/10 hover:bg-primary/80"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
