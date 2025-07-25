"use client";

import { useState, useEffect } from "react";
import TypewriterComponent from "typewriter-effect";

interface HeroProps {
  greeting?: string;
  name?: string;
  typewriterStrings?: string[];
  profileImage?: string;
  profileImageAlt?: string;
  ctaLink?: string;
  secondaryLink?: string;
}

function Hero({
  greeting = "Coffee → Code → Creativity",
  name = "Rusiru",
  typewriterStrings = ["Frontend Developer", "UI/UX Designer"],
  profileImage = "https://res.cloudinary.com/dynj3cnew/image/upload/v1738967922/r3_wna55z.png",
  profileImageAlt = "Profile picture of Rusiru",
  ctaLink = "#contact",
  secondaryLink = "#work",
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#1a1a2e] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen items-center justify-items-center">
          <div className="pt-20 md:pt-0 max-w-xl justify-self-start text-center md:text-left">
            <div
              className={`mb-8 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-block rounded-full px-4 py-1.5 text-sm text-gray-300 border border-gray-700 hover:border-violet-500 transition-all duration-300 backdrop-blur-sm bg-gray-900/30">
                {greeting}
              </div>
            </div>

            <h1
              className={`text-4xl md:text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="relative">Hello, I&apos;m {name}</span>
            </h1>

            <div
              className={`transform transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <TypewriterComponent
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                  wrapperClassName:
                    "text-xl md:text-2xl font-medium text-violet-400",
                }}
              />
            </div>

            <div
              className={`mt-10 flex items-center justify-center md:justify-start gap-x-6 transform transition-all duration-700 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <a
                href={ctaLink}
                className="group relative rounded-lg bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 transition-all duration-300 hover:scale-105 overflow-hidden"
                aria-label="Let's talk"
              >
                <span className="relative z-10">Let&apos;s talk</span>
                <div className="absolute inset-0 bg-violet-400 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>

              <a
                href={secondaryLink}
                className="group text-sm font-semibold text-gray-300 transition-all duration-300 hover:text-violet-400"
                aria-label="View my work"
              >
                View my work
                <span className="inline-block transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          <div
            className={`transform transition-all duration-700 delay-200 relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] justify-self-center md:justify-self-end mt-8 md:mt-0 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="absolute inset-8 md:inset-10 bg-violet-500/20 rounded-full blur-3xl z-20" />
            <div className="absolute inset-2 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-violet-400/30 animate-spin-regular z-10" />
            <div className="absolute inset-0 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-violet-400/50 animate-spin-wild z-10" />
            <div className="absolute inset-8 md:inset-10 bg-violet-500/20 rounded-full blur-3xl z-0" />

            <img
              src={profileImage}
              alt={profileImageAlt}
              className="relative z-30 w-[250px] h-[250px] md:w-[400px] md:h-[400px] mx-auto object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-8 md:inset-10 bg-violet-500/20 rounded-full blur-3xl z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
