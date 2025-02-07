import { useState, useEffect } from 'react';

function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Tech Stack');

    const categories = {
        "Tech Stack": [
            { name: "React", icon: "devicon-react-original colored", description: "Building modern web applications" },
            { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored", description: "Crafting beautiful interfaces" },
            { name: "Framer Motion", icon: "devicon-framermotion-original", description: "Crafting smooth animations" },
            { name: "HTML5", icon: "devicon-html5-plain colored", description: "Building responsive layouts" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored", description: "Creating interactive experiences" },
            { name: "MongoDB", icon: "devicon-mongodb-plain colored", description: "Database management" }
        ],
        "Tools": [
            { name: "Git & GitHub", icon: "devicon-github-original", description: "Version control and collaboration" },
            { name: "VS Code", icon: "devicon-vscode-plain colored", description: "Advanced development environment" },
            { name: "Figma", icon: "fab fa-figma", description: "UI/UX design and prototyping" },
            { name: "Docker", icon: "devicon-docker-plain colored", description: "Container platform for applications" },
            { name: "Android Studio", icon: "devicon-androidstudio-plain colored", description: "Mobile app development environment" },
            { name: "Postman", icon: "devicon-postman-plain colored", description: "API testing and development" }
        ],
        "Other Skills": [
            { name: "Problem Solving", icon: "fas fa-puzzle-piece", description: "Analytical thinking and solutions" },
            { name: "UI/UX Design", icon: "fas fa-palette", description: "Creating intuitive interfaces" },
            { name: "Clean Code", icon: "fas fa-code", description: "Writing maintainable code" },
            { name: "Team Collaboration", icon: "fas fa-users", description: "Effective communication" }
        ]
    };

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('skills');
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
        <section id="skills" className="relative bg-[#1a1a2e] py-24 overflow-hidden min-h-screen">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className={`text-center -mt-10 mb-16 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies I work with to create amazing web experiences
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-12 space-x-4">
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === category 
                                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25' 
                                : 'bg-gray-800/50 text-gray-400 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories[activeCategory]?.map((skill, index) => (
                        <div 
                            key={skill.name}
                            className={`group p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
                                hover:border-violet-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center overflow-hidden">
                                    <i className={`${skill.icon} text-2xl text-violet-400 group-hover:text-violet-300 transition-all duration-300 transform group-hover:scale-110`}></i>
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                                        {skill.name}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}

export default Skills;