"use client";

import { useState, useEffect, useMemo, MouseEvent } from "react";

interface NavLink {
  name: string;
  path: string;
}

interface NavbarProps {
  navLinks?: NavLink[];
  brandName?: string;
  brandLink?: string;
}

const defaultNavLinks: NavLink[] = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "skills", path: "#skills" },
  { name: "services", path: "#services" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

function Navbar({
  navLinks = defaultNavLinks,
  brandName = "<rusiru/>",
  brandLink = "#home",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const sections = useMemo(
    () =>
      navLinks.map((link) => ({
        id: link.name,
        path: link.path,
      })),
    [navLinks]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const currentSection = sections.find((section) => {
        const element = document.querySelector(section.path);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveLink(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    const closeMenu = (e: Event) => {
      if (isMenuOpen && !(e.target as Element).closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1a1a2e]/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <a
            href={brandLink}
            className="text-xl font-bold text-white hover:text-violet-400 transition-colors duration-300"
          >
            {brandName}
          </a>

          <button
            className="md:hidden text-gray-400 hover:text-violet-400 transition-all duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link: NavLink) => (
              <a
                key={link.name}
                href={link.path}
                className={`relative px-3 py-2 transition-all duration-300 ${
                  activeLink === link.name
                    ? "text-violet-400"
                    : "text-gray-300 hover:text-violet-400"
                } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-violet-400 after:left-0 after:bottom-0 after:transition-transform after:duration-300 after:origin-right after:scale-x-0 ${
                  activeLink === link.name
                    ? "after:scale-x-100 after:origin-left"
                    : ""
                } hover:after:scale-x-100 hover:after:origin-left`}
              >
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[#1a1a2e]/98 backdrop-blur-md z-50 transition-all duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">{brandName}</div>
          <button
            className="text-gray-400 hover:text-violet-400 transition-all duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="container mx-auto px-6 pt-8 flex justify-center items-center h-[80vh]">
          <ul className="space-y-6 text-center">
            {navLinks.map((link: NavLink, index: number) => (
              <li
                key={link.name}
                className={`transform transition-all duration-500 ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-2xl font-semibold transition-all duration-300 ${
                    activeLink === link.name
                      ? "text-violet-400"
                      : "text-gray-300 hover:text-violet-400"
                  }`}
                >
                  {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
