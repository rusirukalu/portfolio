function Footer() {
    return (
        <footer className="relative bg-[#12121f] backdrop-blur-sm py-20 border-t border-gray-800/30 bg-gradient-to-b from-[#1a1a2e]/50 to-[#12121f]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white hover:text-violet-400 transition-colors duration-300 cursor-pointer">
                            &lt;rusiru/&gt;
                        </h2>
                        <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                            Frontend Developer crafting seamless web experiences with modern technologies.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/rusirukalu" target="_blank" rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                <i className="devicon-github-original text-xl"></i>
                            </a>
                            <a href="https://linkedin.com/in/rusiru-salwathura-8a2b34303" target="_blank" rel="noopener noreferrer"
                                className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                <i className="devicon-linkedin-plain text-xl"></i>
                            </a>
                            <a href="https://x.com/rusiru_kalu" target="_blank" rel="noopener noreferrer"
                                className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                <i className="devicon-twitter-original text-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#work" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                                    Work
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Contact</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <i className="fas fa-envelope text-xl text-gray-400 group-hover:text-violet-400 transition-colors duration-300"></i>
                                <span className="text-gray-400">rusirusalwathura@icloud.com</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <i className="fas fa-location-dot text-xl text-gray-400 group-hover:text-violet-400 transition-colors duration-300"></i>
                                <span className="text-gray-400">Galle, Sri Lanka</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <div className="flex justify-center mt-12">
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group p-2 rounded-full bg-gray-800/50 hover:bg-violet-500/20 transition-all duration-300 cursor-pointer"
                    >
                        <i className="fas fa-arrow-up text-gray-400 group-hover:text-violet-400 transition-colors duration-300"></i>
                    </button>
                </div>


                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} rusiru. All rights reserved.
                    </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                                Privacy Policy |
                            </a>
                            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;