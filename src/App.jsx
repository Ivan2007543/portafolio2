import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SpaProject from './components/SpaProject';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SpaProject />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Iván Alejandro Silveira Muñoz</span>
          <span>Diseñado y desarrollado con atención al detalle.</span>
        </div>
      </footer>
    </div>
  );
}
