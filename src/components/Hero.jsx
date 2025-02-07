import { useState, useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="relative min-h-screen bg-[#1a1a2e] overflow-hidden">
            {/* Main content */}
            <div className="relative flex min-h-screen items-center justify-center px-6 lg:px-8 -mt-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        {/* Animated greeting */}
                        <div className={`mb-8 transform transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <div className="inline-block rounded-full px-4 py-1.5 text-sm text-gray-300 border border-gray-700 hover:border-violet-500 transition-all duration-300 backdrop-blur-sm bg-gray-900/30">
                                Coffee <span className="text-violet-400">→</span> Code <span className="text-violet-400">→</span> Creativity
                            </div>
                        </div>

                        {/* Main heading with glow effect */}
                        <h1 className={`text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8 transform transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <span className="relative">
                                Hi, I&apos;m Rusiru
                                <span className="absolute -inset-1 bg-violet-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </span>
                        </h1>

                        {/* Enhanced typewriter */}
                        <div className={`transform transition-all duration-700 delay-200 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <TypewriterComponent
                                options={{
                                    strings: ['Frontend Developer', 'UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 100,
                                    wrapperClassName: "text-2xl font-medium text-violet-400"
                                }}
                            />
                        </div>

                        {/* CTA Buttons with enhanced effects */}
                        <div className={`mt-10 flex items-center justify-center gap-x-6 transform transition-all duration-700 delay-300 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <a 
                                href="#contact" 
                                className="group relative rounded-lg bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10">Let&apos;s talk</span>
                                <div className="absolute inset-0 bg-violet-400 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </a>

                            <a 
                                href="#projects" 
                                className="group text-sm font-semibold text-gray-300 transition-all duration-300 hover:text-violet-400"
                            >
                                View my work 
                                <span className="inline-block transition-all duration-300 group-hover:translate-x-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator with mobile responsive design */}
                <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-700 delay-400 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    {/* Desktop scroll indicator (hidden on mobile) */}
                    <div className="hidden md:flex w-6 h-10 border-2 border-gray-400 rounded-full justify-center p-1 hover:border-violet-400 transition-colors duration-300">
                        <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce hover:bg-violet-400 transition-colors duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;