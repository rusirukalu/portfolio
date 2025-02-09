import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Default timeline data used if no timeline prop is provided.
const defaultTimeline = [
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

/**
 * About Component
 *
 * Renders a vertical timeline that outlines key milestones in a journey.
 * The timeline animates into view as the section scrolls into the viewport.
 *
 * SEO:
 *  • Uses React Helmet to inject meta tags for improved search engine indexing.
 *
 * Props:
 *  • timeline (Array): List of timeline objects, each with 'year', 'title', and 'description'.
 *  • title (String): The header title for the About section.
 */
function About({ timeline, title }) {
  // State to control when animations should trigger based on scroll position.
  const [isVisible, setIsVisible] = useState(false);

  // useEffect hook adds a scroll event listener to control the appearance of the component.
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        // Get element's distance from the top of the viewport
        const { top } = element.getBoundingClientRect();
        // Reveal the component when it's within 75% of the viewport height
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    // Initial check when component mounts
    handleScroll();
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* SEO Meta Tags inserted via React Helmet */}
      <Helmet>
        <title>About - {title}</title>
        <meta
          name="description"
          content="Explore my journey through significant educational and professional milestones in Software Engineering."
        />
        <meta
          name="keywords"
          content="About, Timeline, My Journey, Software Engineering, Education, Professional"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Main About Section */}
      <section
        id="about"
        className="relative min-h-screen bg-[#1a1a2e] py-16 sm:py-24 overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center -mt-10 mb-12 sm:mb-20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full" />
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line (visible on larger screens) */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-violet-500/20" />

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <div
                key={item.year + index} // Concatenate year with index for uniqueness
                className={`relative flex flex-col sm:flex-row items-center mb-8 sm:mb-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Year Bubble */}
                <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center mb-4 sm:mb-0">
                  <span className="text-white font-bold">{item.year}</span>
                </div>

                {/* Content Card for Timeline Event */}
                <div
                  className={`w-full sm:w-5/12 ${
                    index % 2 === 0
                      ? 'sm:pr-16 sm:text-right'
                      : 'sm:pl-16 sm:ml-auto'
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
    </>
  );
}

// PropTypes validation to ensure proper usage of About component props.
About.propTypes = {
  // 'timeline' should be an array of objects containing 'year', 'title', and 'description'
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  // 'title' represents the header text of the section.
  title: PropTypes.string,
};

// Default props in case none are provided.
About.defaultProps = {
  timeline: defaultTimeline,
  title: "My Journey",
};

export default About;
