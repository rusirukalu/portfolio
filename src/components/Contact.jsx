import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

/**
 * Contact Component
 *
 * Renders a contact section that includes a header with a title and subtitle,
 * a clickable email link, and several social media link cards. The section
 * fades in as it scrolls into the viewport.
 *
 * SEO:
 * - Uses React Helmet to manage meta tags dynamically.
 *
 * Props:
 * - headerTitle (string): The main title of the contact section.
 * - headerSubtitle (string): A short description appearing under the title.
 * - emailAddress (string): Email contact information.
 * - socialLinks (array): An array of social link objects. Each object should include:
 *      • name: The name of the social platform.
 *      • url: The URL to the social profile.
 *      • iconClass: The CSS class for the platform icon.
 *      • displayName: (optional) Text to display – if not provided, only the icon will appear.
 */
function Contact({ headerTitle, headerSubtitle, emailAddress, socialLinks }) {
  // Local state to control when the component should animate into view.
  const [isVisible, setIsVisible] = useState(false);

  // useEffect: Add scroll listener to trigger fade-in effect when the section is near the viewport.
  useEffect(() => {
    const handleScroll = () => {
      // Get the contact section element by its id.
      const element = document.getElementById('contact');
      if (element) {
        // Check the element's position relative to the viewport.
        const { top } = element.getBoundingClientRect();
        // Trigger visibility if the section is within 75% of the viewport height.
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check immediately in case the section is already in view.
    handleScroll();

    // Cleanup the event listener on component unmount.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SEO Meta Tags using React Helmet for better indexing */}
      <Helmet>
        <title>Contact - {headerTitle}</title>
        <meta name="description" content={headerSubtitle} />
        <meta name="keywords" content="Contact, Get in Touch, Email, Social Links, Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Main Contact Section */}
      <section id="contact" className="relative min-h-screen bg-[#1a1a2e] py-24 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with fade-in transition */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">{headerTitle}</h2>
            <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">{headerSubtitle}</p>
          </div>

          {/* Contact Content */}
          <div
            className={`max-w-3xl mx-auto space-y-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Email Section */}
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

            {/* Social Links Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white text-center mb-8">Find me on</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name + index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-2"
                    aria-label={`Visit ${link.name} profile`}
                  >
                    {/* Gradient overlay for interactive feedback */}
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
    </>
  );
}

// PropTypes validation for the Contact component.
Contact.propTypes = {
  headerTitle: PropTypes.string,
  headerSubtitle: PropTypes.string,
  emailAddress: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
      displayName: PropTypes.string,
    })
  ),
};

// Default props for the Contact component.
Contact.defaultProps = {
  headerTitle: 'Get in Touch',
  headerSubtitle: "Let's connect and create something amazing together",
  emailAddress: 'rusirusalwathura@icloud.com',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/rusirukalu',
      iconClass: 'fab fa-github',
      displayName: 'GitHub',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rusiru-salwathura-8a2b34303',
      iconClass: 'fab fa-linkedin',
      displayName: 'LinkedIn',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/rusiru_kalu',
      iconClass: 'fab fa-twitter',
      displayName: 'Twitter',
    },
    {
      name: 'Behance',
      url: 'https://behance.net/rusirusalwath',
      iconClass: 'fab fa-behance',
      displayName: 'Behance',
    },
  ],
};

export default Contact;