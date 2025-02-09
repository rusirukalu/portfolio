import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

/*
  Default navigation links configuration.
  Each object has a 'name' for display and a 'path' for linking to a section.
*/
const defaultNavLinks = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "skills", path: "#skills" },
  { name: "services", path: "#services" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" }
];

/*
  Navbar Component
  
  Props:
    • navLinks: Array of navigation objects; each object should have 'name' and 'path'.
    • brandName: String for the website’s brand or logo text.
    • brandLink: URL string for where the brand/logo should link (typically the home section).
  
  This component handles:
    • Changing the navbar background on scroll.
    • Detecting the active section based on current scroll position.
    • Toggling a mobile-friendly navigation overlay.
    • SEO optimizations (via React Helmet) for improved page indexing.
*/
function Navbar({ navLinks = defaultNavLinks, brandName = "<rusiru/>", brandLink = "#home" }) {
  // State to manage if the user has scrolled past a threshold (for background change)
  const [isScrolled, setIsScrolled] = useState(false);
  // State to toggle the mobile menu overlay
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to set the currently active navigation link based on scroll position
  const [activeLink, setActiveLink] = useState("");

  // Memoize sections so that the navLinks mapping is recalculated only when navLinks props change.
  const sections = useMemo(
    () =>
      navLinks.map((link) => ({
        id: link.name,
        path: link.path
      })),
    [navLinks]
  );

  // Listen to window scroll events to update the navbar background and active link.
  useEffect(() => {
    const handleScroll = () => {
      // Set background when scrolled beyond 20px.
      setIsScrolled(window.scrollY > 20);

      // Determine which section is active based on its position in the viewport.
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
    handleScroll(); // Initial check on mount.

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Close mobile menu when clicking anywhere outside the navigation area.
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <>
      {/* SEO Enhancement: Using Helmet to add meta tags and improve search engine visibility */}
      <Helmet>
        <title>{brandName} - Portfolio</title>
        <meta name="description" content="Portfolio website showcasing skills, work, services and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Additional SEO meta tags can be added here */}
      </Helmet>

      {/* Main navigation bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1a1a2e]/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          {/* Brand/Logo area – accessible link to home */}
          <a
            href={brandLink}
            className="text-xl font-bold text-white hover:text-violet-400 transition-colors duration-300"
          >
            {brandName}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gray-400 hover:text-violet-400 transition-all duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`relative px-3 py-2 transition-all duration-300 ${
                  activeLink === link.name ? "text-violet-400" : "text-gray-300 hover:text-violet-400"
                } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-violet-400 after:left-0 after:bottom-0 after:transition-transform after:duration-300 after:origin-right after:scale-x-0 ${
                  activeLink === link.name ? "after:scale-x-100 after:origin-left" : ""
                } hover:after:scale-x-100 hover:after:origin-left`}
              >
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#1a1a2e]/98 backdrop-blur-md z-50 transition-all duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">{brandName}</div>
          <button
            className="text-gray-400 hover:text-violet-400 transition-all duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="container mx-auto px-6 pt-8 flex justify-center items-center h-[80vh]">
          <ul className="space-y-6 text-center">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transform transition-all duration-500 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-2xl font-semibold transition-all duration-300 ${
                    activeLink === link.name ? "text-violet-400" : "text-gray-300 hover:text-violet-400"
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

// Define prop types for component validation.
Navbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ),
  brandName: PropTypes.string,
  brandLink: PropTypes.string
};

export default Navbar;