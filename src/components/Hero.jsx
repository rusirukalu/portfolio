import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import TypewriterComponent from 'typewriter-effect';

/**
 * Hero Component
 *
 * This component renders the hero section of a portfolio webpage.
 * It includes:
 *  • An animated greeting tagline
 *  • A main heading introducing the user by name
 *  • A typewriter effect to display roles/skills
 *  • Two call-to-action buttons for further engagement
 *  • A profile image with attractive animated glow effects
 *
 * SEO Optimizations:
 *  • React Helmet manages dynamic meta tags (title, description, keywords, viewport)
 *    to aid search engines in indexing the content properly.
 *
 * Props:
 *  • greeting: The tagline message displayed above the heading.
 *  • name: The name displayed in the main heading.
 *  • typewriterStrings: An array of strings for the typewriter effect.
 *  • profileImage: URL for the profile image.
 *  • profileImageAlt: Alt text for the profile image.
 *  • ctaLink: URL for the primary call-to-action button.
 *  • secondaryLink: URL for the secondary action link.
 */
function Hero({
  greeting,
  name,
  typewriterStrings,
  profileImage,
  profileImageAlt,
  ctaLink,
  secondaryLink,
}) {
  // State to control visibility of the animations once the component mounts.
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on component mount.
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* SEO Meta Tags with React Helmet */}
      <Helmet>
        <title>{name} - {typewriterStrings.join(' | ')}</title>
        <meta
          name="description"
          content={`Hello, I'm ${name}, a ${typewriterStrings.join(' and ')}. Welcome to my portfolio!`}
        />
        <meta
          name="keywords"
          content="Frontend Developer, UI/UX Designer, Portfolio, Coding, Creativity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Main Hero Section */}
      <section id="home" className="relative min-h-screen bg-[#1a1a2e] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen items-center justify-items-center">
            
            {/* Left Column: Text Content */}
            <div className="pt-20 md:pt-0 max-w-xl justify-self-start text-center md:text-left">
              
              {/* Animated Greeting Tagline */}
              <div className={`mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-block rounded-full px-4 py-1.5 text-sm text-gray-300 border border-gray-700 hover:border-violet-500 transition-all duration-300 backdrop-blur-sm bg-gray-900/30">
                  {greeting}
                </div>
              </div>

              {/* Main Heading */}
              <h1 className={`text-4xl md:text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="relative">
                  Hello, I&apos;m {name}
                </span>
              </h1>

              {/* Typewriter Effect Section */}
              <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <TypewriterComponent
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 100,
                    wrapperClassName: "text-xl md:text-2xl font-medium text-violet-400"
                  }}
                />
              </div>

              {/* Call-to-Action Buttons */}
              <div className={`mt-10 flex items-center justify-center md:justify-start gap-x-6 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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
                  <span className="inline-block transition-all duration-300 group-hover:translate-x-2">→</span>
                </a>
              </div>
            </div>
                    
            {/* Right Column: Profile Image and Animated Effects */}
            <div className={`transform transition-all duration-700 delay-200 relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] justify-self-center md:justify-self-end mt-8 md:mt-0 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              
              {/* Background Glow and Dashed Circle Effects */}
              <div className="absolute inset-8 md:inset-10 bg-violet-500/20 rounded-full blur-3xl z-20" />
              <div className="absolute inset-2 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-violet-400/30 animate-spin-regular z-10" />
              <div className="absolute inset-0 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-violet-400/50 animate-spin-wild z-10" />
              <div className="absolute inset-8 md:inset-10 bg-violet-500/20 rounded-full blur-3xl z-0" />
                        
              {/* Profile Image */}
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
    </>
  );
}

// PropTypes validation for all props passed to the Hero component.
Hero.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  typewriterStrings: PropTypes.arrayOf(PropTypes.string),
  profileImage: PropTypes.string,
  profileImageAlt: PropTypes.string,
  ctaLink: PropTypes.string,
  secondaryLink: PropTypes.string,
};

// Default prop values for the Hero component.
Hero.defaultProps = {
  greeting: "Coffee → Code → Creativity",
  name: "Rusiru",
  typewriterStrings: ["Frontend Developer", "UI/UX Designer"],
  profileImage: "https://res.cloudinary.com/dynj3cnew/image/upload/v1738967922/r3_wna55z.png",
  profileImageAlt: "Profile picture of Rusiru",
  ctaLink: "#contact",
  secondaryLink: "#work",
};

export default Hero;