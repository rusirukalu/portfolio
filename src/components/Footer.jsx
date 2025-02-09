import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

/**
 * Footer Component
 *
 * Renders a website footer that includes a brand area, quick navigation links,
 * contact information, and social media links. It also features a scroll-to-top button
 * and a bottom bar with copyright and legal links.
 *
 * SEO:
 * - Uses React Helmet to dynamically add meta tags (title, description, keywords, viewport)
 *   to improve search engine indexing.
 *
 * Accessibility:
 * - Uses proper ARIA roles (role="contentinfo") and aria-labels on interactive elements.
 * - Ensures sufficient color contrast and focuses on clear navigation.
 *
 * Props:
 * - brandTitle (string): The brand/logo text.
 * - brandDescription (string): A brief description or tagline.
 * - socialLinks (array): List of social link objects containing { name, url, iconClass, displayName }.
 * - quickLinks (array): List of quick link objects containing { label, href }.
 * - contactInfo (object): Contains email and location properties.
 * - privacyPolicyLink (string): URL for the Privacy Policy.
 * - termsOfServiceLink (string): URL for the Terms of Service.
 */
function Footer({
  brandTitle,
  brandDescription,
  socialLinks,
  quickLinks,
  contactInfo,
  privacyPolicyLink,
  termsOfServiceLink,
}) {
  return (
    <>
      {/* SEO Meta Tags via React Helmet */}
      <Helmet>
        <title>{brandTitle}</title>
        <meta
          name="description"
          content={`${brandTitle} | ${brandDescription}. Get connected and explore more through our quick links and contact section.`}
        />
        <meta
          name="keywords"
          content="Footer, Contact, Quick Links, Social Media, Web Portfolio, Accessible Footer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Main Footer Section with Contentinfo role for accessibility */}
      <footer role="contentinfo" className="relative bg-[#12121f] py-20 border-t border-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2
                className="text-xl font-bold text-white hover:text-violet-400 transition-colors duration-300 cursor-pointer"
                tabIndex="0"
              >
                {brandTitle}
              </h2>
              <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                {brandDescription}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name + index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <i className={`${social.iconClass} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Quick Links</h2>
              {/* Enclose links within a nav element with proper aria label */}
              <nav aria-label="Quick Links">
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={link.label + index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Contact</h2>
              <div className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex items-center gap-4 group cursor-pointer" tabIndex="0">
                  <i className="fas fa-envelope text-xl text-gray-400 group-hover:text-violet-400 transition-colors duration-300" aria-hidden="true"></i>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 group-hover:text-violet-400 transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                {/* Location */}
                <div className="flex items-center gap-4 group cursor-pointer" tabIndex="0">
                  <i className="fas fa-location-dot text-xl text-gray-400 group-hover:text-violet-400 transition-colors duration-300" aria-hidden="true"></i>
                  <span className="text-gray-400">{contactInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll-to-Top Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group p-2 rounded-full bg-gray-800/50 hover:bg-violet-500/20 transition-all duration-300 cursor-pointer"
              aria-label="Scroll to top"
            >
              <i className="fas fa-arrow-up text-gray-400 group-hover:text-violet-400 transition-colors duration-300"></i>
            </button>
          </div>

          {/* Bottom Bar with Copyright and Legal Links */}
          <div className="mt-20 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © {new Date().getFullYear()} {brandTitle.replace(/<|\/|>/g, '')}. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href={privacyPolicyLink}
                  className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href={termsOfServiceLink}
                  className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// PropTypes validation for Footer component
Footer.propTypes = {
  brandTitle: PropTypes.string,
  brandDescription: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
      displayName: PropTypes.string, // optional; not used if not provided
    })
  ),
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  contactInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
  privacyPolicyLink: PropTypes.string,
  termsOfServiceLink: PropTypes.string,
};

// Default props for Footer component
Footer.defaultProps = {
  brandTitle: "<rusiru/>",
  brandDescription:
    "Frontend Developer crafting seamless web experiences with modern technologies.",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/rusirukalu",
      iconClass: "devicon-github-original",
      displayName: "GitHub",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rusiru-salwathura-8a2b34303",
      iconClass: "devicon-linkedin-plain",
      displayName: "LinkedIn",
    },
    {
      name: "Twitter",
      url: "https://x.com/rusiru_kalu",
      iconClass: "devicon-twitter-original",
      displayName: "Twitter",
    },
  ],
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  contactInfo: {
    email: "rusirusalwathura@icloud.com",
    location: "Galle, Sri Lanka",
  },
  privacyPolicyLink: "#",
  termsOfServiceLink: "#",
};

export default Footer;
