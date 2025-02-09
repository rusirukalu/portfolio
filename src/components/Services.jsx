import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

/**
 * Services Component
 *
 * This component displays a section showcasing various services.
 * It features an animated header and a grid of service cards that
 * fade and slide into view as the user scrolls.
 *
 * SEO:
 * • Uses React Helmet to dynamically add meta tags, improving indexing,
 *   social sharing, and overall SEO.
 *
 * Props:
 * • services (Array): An array of service objects. Each service object
 *   should include:
 *     – title: The service title.
 *     – icon: A CSS class string for the icon.
 *     – description: Brief information about the service.
 *     – features: An array of strings listing key features.
 * • headerTitle (String): The main title of the section.
 * • headerSubtitle (String): A short subtitle/description below the header.
 */
function Services({ services, headerTitle, headerSubtitle }) {
  // State to control the animation visibility as the section scrolls into view.
  const [isVisible, setIsVisible] = useState(false);

  // useEffect: Listen for window scroll events and update 'isVisible' based on element position.
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services');
      if (element) {
        const { top } = element.getBoundingClientRect();
        // Reveal the section when its top is within 75% of the viewport height.
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    // Attach scroll event listener.
    window.addEventListener('scroll', handleScroll);
    // Run initial check in case the section is already visible.
    handleScroll();

    // Cleanup event listener on component unmount.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SEO Meta Tags using React Helmet */}
      <Helmet>
        <title>Services - {headerTitle}</title>
        <meta name="description" content={headerSubtitle} />
        <meta name="keywords" content="Web Development, UI/UX Design, Frontend Solutions, React, Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Main Services Section */}
      <section id="services" className="relative min-h-screen bg-[#1a1a2e] py-24 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center -mt-5 mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">{headerTitle}</h2>
            <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">{headerSubtitle}</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
                          hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Gradient Overlay (visible on hover) */}
                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-lg bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className={`${service.icon} text-2xl text-violet-400 group-hover:text-violet-300`} aria-hidden="true" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Service Features List */}
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
    </>
  );
}

// PropTypes validation to ensure the component receives the correct props.
Services.propTypes = {
  // Array of service objects
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  // Header title string for the section
  headerTitle: PropTypes.string,
  // Header subtitle/description string
  headerSubtitle: PropTypes.string,
};

// Default props in case none are supplied.
Services.defaultProps = {
  headerTitle: 'Services',
  headerSubtitle: 'Transforming ideas into digital reality with expertise and creativity',
  services: [
    {
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'Building responsive and dynamic web applications with modern technologies',
      features: ['React', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'UI/UX Design',
      icon: 'fas fa-palette',
      description: 'Creating intuitive and engaging user interfaces with thoughtful design',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Frontend Solutions',
      icon: 'fas fa-laptop-code',
      description: 'Developing clean, efficient, and maintainable frontend solutions',
      features: ['Performance', 'Accessibility', 'Best Practices']
    }
  ]
};

export default Services;
