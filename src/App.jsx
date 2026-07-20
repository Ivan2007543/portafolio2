import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SpaProject from './components/SpaProject';
import Contact from './components/Contact';
import SoftSkills from './components/SoftSkills';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased selection:bg-sky-500/30 selection:text-sky-300">
      {/* Barra de navegación común */}
      <Navbar />
      
      {/* Secciones organizadas secuencialmente */}
      <main>
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects />
        <SpaProject />
        <Contact />
         
      </main>
    </div>
  );
}

export default App;