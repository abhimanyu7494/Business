import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import ThemeToggle from "./components/ThemeToggle";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import "./index.css";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Optional Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="pt-16 min-h-screen bg-[#0f172a] text-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Scroll to Top Button */}
      <ScrollTop />

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
