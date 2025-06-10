"use client";

import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink: string;
  githubLink?: string;
  behanceLink?: string;
  category: string;
  featured?: boolean;
}

interface WorkProps {
  projects?: Project[];
  filters?: string[];
}

const defaultProjects: Project[] = [
  {
    title: "E-commerce Dashboard",
    description:
      "Modern e-commerce admin dashboard with real-time analytics and inventory management",
    tech: ["React", "Tailwind CSS", "Redux", "Chart.js"],
    image: "/ecommerce-dashboard.png",
    liveLink: "https://dashboard-demo.com",
    githubLink: "https://github.com/username/dashboard",
    category: "Web App",
    featured: true,
  },
  {
    title: "Travel App UI Design",
    description:
      "Complete UI/UX design for a mobile travel application with booking system",
    tech: ["Figma", "Prototyping", "UI Design", "User Research"],
    image: "/travel-app-ui.png",
    liveLink: "https://figma.com/travel-app",
    behanceLink: "https://behance.net/travel-app",
    category: "UI/UX",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website with smooth animations and responsive design",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/portfolio.png",
    liveLink: "https://portfolio.com",
    githubLink: "https://github.com/username/portfolio",
    category: "Web App",
  },
  {
    title: "Finance App Design System",
    description: "Comprehensive design system for a fintech application",
    tech: ["Design System", "Component Library", "Style Guide"],
    image: "/finance-app.png",
    liveLink: "https://figma.com/finance-app",
    behanceLink: "https://behance.net/finance-app",
    category: "UI/UX",
  },
];

const defaultFilters: string[] = ["All", "Web App", "UI/UX"];

function Work({
  projects = defaultProjects,
  filters = defaultFilters,
}: WorkProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project: Project) => project.category === activeFilter
        );

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("work");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const SkeletonCard = () => (
    <div className="bg-gray-800/30 rounded-xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-700/30" />
      <div className="p-6 space-y-4">
        <div className="h-6 w-2/3 bg-gray-700/30 rounded" />
        <div className="h-4 w-full bg-gray-700/30 rounded" />
        <div className="h-4 w-3/4 bg-gray-700/30 rounded" />
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-gray-700/30 rounded-full" />
          <div className="h-8 w-20 bg-gray-700/30 rounded-full" />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="work"
      className="relative min-h-screen bg-[#1a1a2e] py-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Work</h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my web development projects and UI/UX designs
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center mb-12 gap-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {filters.map((filter: string) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                  : "bg-gray-800/50 text-gray-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(6)].map((_, index: number) => (
                <SkeletonCard key={index} />
              ))
            : filteredProjects.map((project: Project, index: number) => (
                <div
                  key={project.title}
                  className={`group relative bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-violet-500 text-white text-sm rounded-full transform rotate-3">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors duration-300"
                      >
                        <span>View Project</span>
                        <svg
                          className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                      <div className="flex gap-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                          >
                            <i className="fab fa-github text-xl" />
                          </a>
                        )}
                        {project.behanceLink && (
                          <a
                            href={project.behanceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                          >
                            <i className="fab fa-behance text-xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
