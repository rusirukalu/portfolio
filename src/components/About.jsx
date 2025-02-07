import { useState, useEffect } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    const timeline = [
        {
            year: "2024",
            title: "Started BEng in Software Engineering",
            description: "Currently pursuing a degree in Software Engineering at London Metropolitan University."
        },
        {
            year: "2024",
            title: "Completed HND in Software Engineering",
            description: "Graduated with a Higher National Diploma in Software Engineering from Pearson."
        },
        {
            year: "2023",
            title: "Earned Diploma in IT",
            description: "Completed a Diploma in Information Technology, laying the foundation for my career."
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('about');
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
        <section id="about" className="relative min-h-screen bg-[#1a1a2e] py-16 sm:py-24 overflow-hidden">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className={`text-center -mt-10 mb-12 sm:mb-20 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Journey</h2>
                    <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full" />
                </div>
    
                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line - Hidden on mobile, shown on larger screens */}
                    <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-violet-500/20" />
    
                    {/* Timeline items */}
                    {timeline.map((item, index) => (
                        <div 
                            key={item.year}
                            className={`relative flex flex-col sm:flex-row items-center mb-8 sm:mb-12 transition-all duration-700 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Year bubble */}
                            <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center mb-4 sm:mb-0">
                                <span className="text-white font-bold">{item.year}</span>
                            </div>
    
                            {/* Content card */}
                            <div className={`w-full sm:w-5/12 ${
                                index % 2 === 0 
                                    ? 'sm:pr-16 sm:text-right' 
                                    : 'sm:pl-16 sm:ml-auto'
                            }`}>
                                <div className="p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;