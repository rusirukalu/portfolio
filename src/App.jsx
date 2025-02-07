import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useScrollBehavior } from "./hooks/useScrollBehavior";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  useScrollBehavior();

  return (
    <div className="font-['JetBrains_Mono'] bg-[#1a1a2e] min-h-screen">
    <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
    </Router>
    </div>
  );
}

export default App;