import { useState, useEffect } from 'react';

function Services() {
    const [isVisible, setIsVisible] = useState(false);

    const services = [
        {
            title: "Web Development",
            icon: "fas fa-code",
            description: "Building responsive and dynamic web applications with modern technologies",
            features: ["React", "JavaScript", "Tailwind CSS"]
        },
        {
            title: "UI/UX Design",
            icon: "fas fa-palette",
            description: "Creating intuitive and engaging user interfaces with thoughtful design",
            features: ["User Research", "Wireframing", "Prototyping"]
        },
        {
            title: "Frontend Solutions",
            icon: "fas fa-laptop-code",
            description: "Developing clean, efficient, and maintainable frontend solutions",
            features: ["Performance", "Accessibility", "Best Practices"]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('services');
            if (element) {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    

    return (
        <section id="services" className="relative min-h-screen bg-[#1a1a2e] py-24 overflow-hidden">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className={`text-center -mt-5 mb-16 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
                    <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Transforming ideas into digital reality with expertise and creativity
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
                                hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-lg bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <i className={`${service.icon} text-2xl text-violet-400 group-hover:text-violet-300`} />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400 
                                                group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-all duration-300"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;