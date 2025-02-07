import { useState, useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="relative min-h-screen bg-[#1a1a2e] overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen items-center justify-items-center">
                    {/* Left Content */}
                    <div className="pt-20 md:pt-0 max-w-xl justify-self-start text-center md:text-left">
                        {/* Animated greeting */}
                        <div className={`mb-8 transform transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <div className="inline-block rounded-full px-4 py-1.5 text-sm text-gray-300 border border-gray-700 hover:border-violet-500 transition-all duration-300 backdrop-blur-sm bg-gray-900/30">
                                Coffee <span className="text-violet-400">→</span> Code <span className="text-violet-400">→</span> Creativity
                            </div>
                        </div>

                        {/* Main heading */}
                        <h1 className={`text-4xl md:text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8 transform transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <span className="relative">
                                Hello, I&apos;m Rusiru
                            </span>
                        </h1>

                        {/* Typewriter */}
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
                                    wrapperClassName: "text-xl md:text-2xl font-medium text-violet-400"
                                }}
                            />
                        </div>

                        {/* CTA Buttons */}
                        <div className={`mt-10 flex items-center justify-center md:justify-start gap-x-6 transform transition-all duration-700 delay-300 ${
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
                                href="#work" 
                                className="group text-sm font-semibold text-gray-300 transition-all duration-300 hover:text-violet-400"
                            >
                                View my work 
                                <span className="inline-block transition-all duration-300 group-hover:translate-x-2">→</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Image with animated circle */}
                    <div className={`transform transition-all duration-700 delay-200 relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] justify-self-center md:justify-self-end mt-8 md:mt-0 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                        {/* Glow effects */}
                        <div className="absolute inset-8 md:inset-10 bg-violet-500/20 rounded-full blur-3xl z-2" />

                        {/* Animated dashed circles */}
                        <div className="absolute inset-2 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-violet-400/30 animate-spin-regular" />
                        <div className="absolute inset-0 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-violet-400/50 animate-spin-wild" />

                        {/* Additional glow effects */}
                        <div className="absolute inset-8 md:inset-10 bg-violet-500/20 rounded-full blur-3xl z-0" />
                        
                        {/* Image */}
                        <img 
                            src="https://res.cloudinary.com/dynj3cnew/image/upload/v1738967922/r3_wna55z.png"
                            alt="Rusiru"
                            className="relative z-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] mx-auto object-contain drop-shadow-2xl"
                        />

                        <div className="absolute inset-8 md:inset-10 bg-violet-500/20 rounded-full blur-3xl z-1" />
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-700 delay-400 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    {/* Desktop scroll indicator */}
                    <div className="hidden md:flex w-6 h-10 border-2 border-gray-400 rounded-full justify-center p-1 hover:border-violet-400 transition-colors duration-300">
                        <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce hover:bg-violet-400 transition-colors duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
