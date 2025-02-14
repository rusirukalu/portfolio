// LandingPage.jsx
// This component serves as the main landing page by composing several key sections.
// It incorporates SEO optimizations using React Helmet and follows best practices for code organization and UI/UX design.

import { Helmet } from "react-helmet";

// Importing individual sections of the landing page
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Work from "../components/Work";

/**
 * LandingPage Component
 *
 * This is the main page of the portfolio which composes multiple sections:
 *  • Hero: Introductory section with a welcome message and call-to-action.
 *  • About: Brief background and journey information.
 *  • Skills: Showcase of technical and creative skills.
 *  • Services: List of professional services offered.
 *  • Contact: Ways for visitors to connect.
 *  • Work: Portfolio projects and case studies.
 *
 * SEO Optimizations:
 *  • Uses React Helmet to dynamically inject meta tags (title, description, keywords,
 *    and viewport) for improved search engine indexing.
 *
 * UI/UX Considerations:
 *  • The component is structured in a modular layout, enhancing readability,
 *    maintainability, and user navigation.
 *
 * Props:
 *  • None (currently, this component does not require external props,
 *    but the propTypes declaration is added for future extensibility).
 */
function LandingPage() {
  return (
    <>
      {/* SEO Meta Tags for the Landing Page */}
      <Helmet>
        <title>My Portfolio | Landing Page</title>
        <meta
          name="description"
          content="Welcome to my portfolio showcasing projects, skills, and services. Explore my work and get in touch to collaborate!"
        />
        <meta
          name="keywords"
          content="Portfolio, Developer, UI/UX, Web Design, About, Skills, Services, Contact"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>

      {/* Render each section of the landing page */}
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Work />
    </>
  );
}

// PropTypes validation: Currently, no props are used, but this serves as a placeholder for future enhancements.
LandingPage.propTypes = {};

export default LandingPage;
