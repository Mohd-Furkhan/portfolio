import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Component/Navbar.jsx";
import Home from "./pages/Home/Component/Home.jsx";
import About from "./pages/About/Component/About.jsx";
import Projects from "./pages/Projects/Component/Projects.jsx";
import Skills from "./pages/Skills/Component/Skills.jsx";
import Contact from "./pages/Contact/Component/Contact.jsx";
import Resume from "./pages/Resume/Component/Resume.jsx";
import Footer from "./pages/Footer/Component/Footer.jsx";

function App()
{
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;