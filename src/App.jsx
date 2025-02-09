import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useScrollBehavior } from "./hooks/useScrollBehavior";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

/**
 * App Component
 *
 * This is the root component of the application. It sets up global SEO meta tags using React Helmet,
 * applies a global scroll behavior, and manages routing via React Router. Common components such as
 * the Navbar and Footer are rendered on all pages.
 *
 * SEO:
 *  • React Helmet is used to add dynamic meta tags (title, description, keywords, viewport, and language)
 *    to help search engines index the site.
 *
 * UI/UX:
 *  • The useScrollBehavior hook ensures smooth scroll management across the application.
 *  • Global styling including fonts and background colors are defined in the main container.
 *
 * Props:
 *  • (None) - PropTypes validation is added for future extensibility.
 */
function App() {
  // Apply custom scroll behavior for smoother navigation
  useScrollBehavior();

  return (
    <>
      {/* Global SEO Meta Tags */}
      <Helmet>
        <title>My Portfolio | Landing Page</title>
        <meta
          name="description"
          content="Explore my portfolio showcasing projects, skills, and experience in frontend development and UI/UX design."
        />
        <meta
          name="keywords"
          content="portfolio, frontend, developer, UI/UX, web design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>

      {/* Main Application Container */}
      <div className="font-['JetBrains_Mono'] bg-[#1a1a2e] min-h-screen">
        <Router>
          {/* Global Navigation Bar */}
          <Navbar />

          {/* Routing Section */}
          <main>
            <Routes>
              {/* Define route for the landing page */}
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </Router>
      </div>
    </>
  );
}

// Since the App component doesn't receive any props, PropTypes is defined as an empty object.
// This setup makes the component ready for future props if needed.
App.propTypes = {};

export default App;