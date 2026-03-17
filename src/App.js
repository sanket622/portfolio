import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

import Home from "./containers/home";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import About from "./containers/about";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";
import particles from "./utils/particles";
import "./App.scss";

function App() {
  const location = useLocation();

  // ✅ Correct particles init
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const renderParticleInJsHomePage = location.pathname === "/";

  return (
    <div className="App">
      
      {/* Particles */}
      {renderParticleInJsHomePage && (
        <Particles id="particles" init={particlesInit} options={particles} />
      )}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;