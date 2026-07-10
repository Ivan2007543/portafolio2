import React from 'react';

export default function Navbar() {
  
  // Función que maneja el desplazamiento suave por código
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Evita el salto brusco nativo
    const element = document.getElementById(targetId);
    if (element) {
      // Calculamos la posición restando un margen para la navbar fija
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // <- Aquí ocurre la magia del movimiento suave
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 text-slate-100 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-sky-400">Portafolio</div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')} className="hover:text-sky-400 transition-colors">Inicio</a>
          <a href="#sobre-mi" onClick={(e) => handleScroll(e, 'sobre-mi')} className="hover:text-sky-400 transition-colors">Sobre Mí</a>
          <a href="#proyectos" onClick={(e) => handleScroll(e, 'proyectos')} className="hover:text-sky-400 transition-colors">Proyectos</a>
          <a href="#spa" onClick={(e) => handleScroll(e, 'spa')} className="hover:text-sky-400 transition-colors">Proyecto SPA</a>
                    <a href="#habilidades" onClick={(e) => handleScroll(e, 'habilidades')} className="hover:text-sky-400 transition-colors">Habilidades</a>

          <a href="#contacto" onClick={(e) => handleScroll(e, 'contacto')} className="hover:text-sky-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}