import { useState, useEffect } from 'react';

function Contact() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('contact');
            if (element) {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="contact" className="relative min-h-screen bg-[#1a1a2e] py-24 overflow-hidden">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className={`text-center mb-16 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
                    <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Let&apos;s connect and create something amazing together
                    </p>
                </div>

                {/* Contact Content */}
                <div className={`max-w-3xl mx-auto space-y-12 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    {/* Email */}
                    <div className="group flex items-center justify-center space-x-4 cursor-pointer">
                        <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-envelope text-xl text-violet-400 group-hover:text-violet-300" />
                        </div>
                        <a href="mailto:rusirusalwathura@icloud.com" 
                           className="text-gray-400 group-hover:text-violet-400 transition-colors duration-300">
                            rusirusalwathura@icloud.com
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white text-center mb-8">Find me on</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="https://github.com/yourusername" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="group relative p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
                                    hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                <div className="relative z-10 flex items-center space-x-3">
                                    <i className="fab fa-github text-2xl text-violet-400 group-hover:text-violet-300" />
                                    <span className="text-gray-400 group-hover:text-violet-300 transition-colors duration-300">GitHub</span>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/yourusername" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="group relative p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
                                    hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                <div className="relative z-10 flex items-center space-x-3">
                                    <i className="fab fa-linkedin text-2xl text-violet-400 group-hover:text-violet-300" />
                                    <span className="text-gray-400 group-hover:text-violet-300 transition-colors duration-300">LinkedIn</span>
                                </div>
                            </a>

                            <a href="https://twitter.com/yourusername" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="group relative p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
                                    hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                <div className="relative z-10 flex items-center space-x-3">
                                    <i className="devicon-twitter-original text-2xl text-violet-400 group-hover:text-violet-300" />
                                </div>
                            </a>

                            <a href="https://behance.net/yourusername" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="group relative p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
                                    hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                <div className="relative z-10 flex items-center space-x-3">
                                    <i className="fab fa-behance text-2xl text-violet-400 group-hover:text-violet-300" />
                                    <span className="text-gray-400 group-hover:text-violet-300 transition-colors duration-300">Behance</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;