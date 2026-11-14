
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects") {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
