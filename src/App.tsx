import React, { useRef } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects/Projects";
import Header from "./components/common/Header/Header";
import Contact from "./components/Contact/Contact";

function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header aboutMeRef={aboutMeRef} projectsRef={projectRef} />
      <Home />
      <AboutMe ref={aboutMeRef} />
      <Projects ref={projectRef} />
      <Contact/>
    </>
  );
}

export default App;
