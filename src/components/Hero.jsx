import { useState, useEffect } from 'react';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#1a1a2e] bg-gradient-to-br from-[#1a1a2e] via-[#2d1b69] to-[#1a1a2e]">
            {/* First gradient background */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-violet-500 to-violet-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}>
                </div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:50px_50px]" />
                <div className="absolute h-full w-full bg-gradient-to-b from-black/0 via-black/5 to-black/20" />
            </div>

            <div className="relative flex min-h-screen items-center justify-center px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    {/* Top banner */}
                    <div className={`hidden sm:mb-8 sm:flex sm:justify-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative rounded-full px-3 py-1 text-sm text-gray-300 ring-1 ring-gray-700 hover:ring-violet-500 transition-all duration-300">
                            Frontend Developer based in Sri Lanka{' '}
                            <a href="#contact" className="font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-300">
                                Contact me <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="text-center">
                        {/* Animated heading */}
                        <h1 className={`text-5xl font-bold tracking-tight text-white sm:text-7xl transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">H</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">i</span>
                            <span className="inline-block">,</span>
                            <span className="inline-block"> </span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">I</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">'</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">m</span>
                            <span className="inline-block"> </span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">&nbsp;</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">R</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">u</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">s</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">i</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">r</span>
                            <span className="inline-block hover:text-violet-400 transition-colors duration-300">u</span>
                        </h1>

                        {/* Description */}
                        <p className={`mt-8 text-lg leading-8 text-gray-300 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            Crafting responsive websites with modern tech and clean code.
                        </p>

                        {/* CTA Buttons */}
                        <div className={`mt-10 flex items-center justify-center gap-x-6 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <a 
                                href="#contact" 
                                className="group relative rounded-lg bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10">Contact Me</span>
                                <div className="absolute inset-0 bg-violet-400 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </a>

                            <a 
                                href="#projects" 
                                className="group relative text-sm font-semibold leading-6 text-gray-300 transition-all duration-300"
                            >
                                View Work 
                                <span className="inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:text-violet-400">
                                    →
                                </span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className={`mt-45 flex justify-center gap-5 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-violet-400 transition-colors duration-300 transform hover:scale-110"
                            >
                                <i className="fab fa-github text-xl"></i>
                                <span className="sr-only">Github</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-violet-400 transition-colors duration-300 transform hover:scale-110"
                            >
                                <i className="fab fa-linkedin text-xl"></i>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-violet-400 transition-colors duration-300 transform hover:scale-110"
                            >
                                <i className="fab fa-twitter text-xl"></i>
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>

                    </div>
                </div>

                {/* Scroll Indicator */}
                {/* <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Hero;