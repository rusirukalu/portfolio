import { useState, useEffect } from "react";

function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["home", "about", "projects"];

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, []);

    useEffect(() => {
        const closeMenu = (e) => {
            if (isMenuOpen && !e.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300
                ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-white transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer hover:text-purple-400">
                        &lt;rusiru/&gt;
                    </div>

                    <button 
                        className="md:hidden text-gray-400 hover:text-purple-400 transition-all duration-300 transform"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg 
                            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen 
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            }
                        </svg>
                    </button>

                    <ul className="hidden md:flex space-x-8 font-semibold">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link}`}
                                    onClick={() => setActiveLink(link)}
                                    className={`relative px-3 py-2 transition-all duration-300
                                        ${activeLink === link
                                            ? 'text-purple-400'
                                            : 'text-gray-300 hover:text-purple-400'}
                                        after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
                                        after:left-0 after:bottom-0 after:transition-all after:duration-300 
                                        hover:after:w-full`}
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Separate full-screen mobile menu */}
            <div className={`fixed inset-0 bg-gray-900/95 backdrop-blur-md z-60 transition-all duration-300 transform
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-white">
                        &lt;rusiru/&gt;
                    </div>
                    <button 
                        className="text-gray-400 hover:text-purple-400 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="container mx-auto px-6 pt-8">
                    <ul className="space-y-6">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link}`}
                                    onClick={() => {
                                        setActiveLink(link);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block text-2xl font-semibold transition-all duration-300
                                        ${activeLink === link
                                            ? 'text-purple-400'
                                            : 'text-gray-300 hover:text-purple-400'}`}
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
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