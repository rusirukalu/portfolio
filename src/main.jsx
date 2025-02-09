// This is the main entry point for the React application.
// It imports global styles, sets up the React root, and renders the App component
// inside React.StrictMode to help identify potential problems during development.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Find the root DOM element where the app will be mounted
const container = document.getElementById('root');
if (!container) {
  console.error('Root element not found. Please ensure there is an element with id="root" in your HTML file.');
} else {
  // Create a React root and render the application wrapped in <StrictMode>
  // React.StrictMode provides additional runtime checks and warnings in development.
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

/*
  Note:
  - This file does not accept any props, so PropTypes validation is not necessary here.
  - SEO optimizations (meta tags, title, and other head elements) are implemented within the App component 
    via React Helmet. This ensures that the entire application benefits from dynamic SEO optimizations.
  - Global UI/UX configurations, including the base styles in index.css and the font applied in the App component,
    help maintain a consistent look and feel across the application.
*/
