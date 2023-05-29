import React, { useRef } from 'react';
import './App.css';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Header from './components/common/Header/Header';

function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  return (
    <>
    <Header aboutMeRef={aboutMeRef} projectsRef={projectRef}/>
    <Home/>
    <AboutMe ref={aboutMeRef}/>
    <Projects ref={projectRef}/>
    </>
  );
}

export default App;
