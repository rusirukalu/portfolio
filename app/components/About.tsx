"use client";

import { useState, useEffect } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface AboutProps {
  timeline?: TimelineItem[];
  title?: string;
}

const defaultTimeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Started BEng in Software Engineering",
    description:
      "Currently pursuing a degree in Software Engineering at London Metropolitan University.",
  },
  {
    year: "2024",
    title: "Completed HND in Software Engineering",
    description:
      "Graduated with a Higher National Diploma in Software Engineering from Pearson.",
  },
  {
    year: "2023",
    title: "Earned Diploma in IT",
    description:
      "Completed a Diploma in Information Technology, laying the foundation for my career.",
  },
];

function About({
  timeline = defaultTimeline,
  title = "My Journey",
}: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#1a1a2e] py-16 sm:py-24 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center -mt-10 mb-12 sm:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-violet-500/20" />

          {timeline.map((item: TimelineItem, index: number) => (
            <div
              key={item.year + index}
              className={`relative flex flex-col sm:flex-row items-center mb-8 sm:mb-12 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center mb-4 sm:mb-0">
                <span className="text-white font-bold">{item.year}</span>
              </div>

              <div
                className={`w-full sm:w-5/12 ${
                  index % 2 === 0
                    ? "sm:pr-16 sm:text-right"
                    : "sm:pl-16 sm:ml-auto"
                }`}
              >
                <div className="p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {item.description}
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

export default About;
