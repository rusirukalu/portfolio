"use client";

import { useState, useEffect } from "react";

interface SocialLink {
  name: string;
  url: string;
  iconClass: string;
  displayName?: string;
}

interface ContactProps {
  headerTitle?: string;
  headerSubtitle?: string;
  emailAddress?: string;
  socialLinks?: SocialLink[];
}

const defaultSocialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rusirukalu",
    iconClass: "fab fa-github",
    displayName: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rusiru-salwathura-8a2b34303",
    iconClass: "fab fa-linkedin",
    displayName: "LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://x.com/rusiru_kalu",
    iconClass: "fab fa-twitter",
    displayName: "Twitter",
  },
  {
    name: "Behance",
    url: "https://behance.net/rusirusalwath",
    iconClass: "fab fa-behance",
    displayName: "Behance",
  },
];

function Contact({
  headerTitle = "Get in Touch",
  headerSubtitle = "Let's connect and create something amazing together",
  emailAddress = "rusirusalwathura@icloud.com",
  socialLinks = defaultSocialLinks,
}: ContactProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#1a1a2e] py-24 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">{headerTitle}</h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">{headerSubtitle}</p>
        </div>

        <div
          className={`max-w-3xl mx-auto space-y-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="group flex items-center justify-center space-x-4 cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i
                className="fas fa-envelope text-xl text-violet-400 group-hover:text-violet-300"
                aria-hidden="true"
              />
            </div>
            <a
              href={`mailto:${emailAddress}`}
              className="text-gray-400 group-hover:text-violet-400 transition-colors duration-300"
              aria-label="Send email"
            >
              {emailAddress}
            </a>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white text-center mb-8">
              Find me on
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((link: SocialLink, index: number) => (
                <a
                  key={link.name + index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2"
                  aria-label={`Visit ${link.name} profile`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <div className="relative z-10 flex items-center space-x-3">
                    <i
                      className={`${link.iconClass} text-2xl text-violet-400 group-hover:text-violet-300`}
                      aria-hidden="true"
                    />
                    {link.displayName && (
                      <span className="text-gray-400 group-hover:text-violet-300 transition-colors duration-300">
                        {link.displayName}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
