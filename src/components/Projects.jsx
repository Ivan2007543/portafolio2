import React, { useState } from 'react';
import imagenMinispa from '../assets/Minispa.png';
import imagenHero from '../assets/Pokeapi.png'; // Asegúrate de que coincida con la mayúscula o minúscula exacta de tu archivo
import imagenaqua from '../assets/aquanova.png'; // <-- CORREGIDO: Cambiado de aqua.png a aquanova.png
import imagennova from '../assets/aquanova2.png';

export default function Projects() {
  const [indiceProyecto, setIndiceProyecto] = useState(0);
  const [indiceImagen, setIndiceImagen] = useState(0);

  const listaProyectos = [
    {
      id: 1,
      nombre: "Pokédex SPA",
      descripcion: "Aplicación interactiva construida con React que se conecta de forma asíncrona a la PokéAPI. Permite buscar Pokémon en tiempo real, filtrar parámetros específicos y visualizar dinámicamente sus sprites, estadísticas base y métricas biológicas detalladas en una interfaz fluida.",
      tecnologias: ["React", "JavaScript", "Tailwind CSS", "PokéAPI"],
      imagenes: [imagenMinispa, imagenHero] 
    },
    {
      id: 2,
      nombre: "Aqua_nova",
      descripcion: "Aquanvoa es uno de los proeyctos que hice junto a mis compañeros el cuatri pasado y se basa en un sistema para tomar registros, clientes, pedidos, e.t.c de una labanderia. Mis modulos se encargaban de registrar a los empleados, insumos y tipos de servicos que se ofrecian cuenta con una base de datos muy basica",
      tecnologias: ["javascript", "JavaScript", "CSS", "PostgreSQL", "Node.js", "Express"],
      imagenes: [imagenaqua, imagennova]
    }
  ];

  const proyectoActual = listaProyectos[indiceProyecto];

  const proyectoAnterior = () => {
    setIndiceImagen(0);
    setIndiceProyecto((prev) => (prev === 0 ? listaProyectos.length - 1 : prev - 1));
  };

  const siguienteProyecto = () => {
    setIndiceImagen(0);
    setIndiceProyecto((prev) => (prev === listaProyectos.length - 1 ? 0 : prev + 1));
  };

  const siguienteImagen = () => {
    setIndiceImagen((prev) => (prev === proyectoActual.imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="proyectos" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold border-b border-slate-800 pb-4 mb-10 text-sky-400">
          Proyectos y Trabajos
        </h2>
        
        <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
          <div className="flex flex-col">
            
            {/* Contenedor de la Imagen Interactiva */}
            <div 
              onClick={siguienteImagen}
              className="relative w-full h-64 md:h-96 overflow-hidden bg-slate-950 cursor-pointer group"
              title="Haz clic para ver más capturas de este proyecto"
            >
              <img 
                src={proyectoActual.imagenes[indiceImagen]} 
                alt={`${proyectoActual.nombre} - captura ${indiceImagen + 1}`} 
                className="w-full h-full object-cover opacity-90 transition-all duration-500 transform group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

              {/* Indicador de capturas */}
              <div className="absolute bottom-4 right-4 bg-slate-900/80 text-xs text-sky-400 px-3 py-1.5 rounded-full border border-slate-700 font-medium pointer-events-none">
                Captura {indiceImagen + 1} de {proyectoActual.imagenes.length}
              </div>

              {/* Hint visual */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="bg-sky-500 text-slate-950 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-xl">
                  Siguiente Captura ➔
                </span>
              </div>
            </div>

            {/* Contenedor de Detalles */}
            <div className="p-8 md:p-10 bg-slate-850">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {proyectoActual.nombre}
              </h3>
              
              <p className="text-slate-300 text-base mb-6 text-justify leading-relaxed max-w-3xl">
                {proyectoActual.descripcion}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {proyectoActual.tecnologias.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs md:text-sm bg-slate-950 text-sky-400 px-3.5 py-1.5 rounded-lg border border-slate-800 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Botón Izquierdo */}
          <button 
            onClick={proyectoAnterior}
            className="absolute top-1/3 left-4 -translate-y-1/2 bg-slate-900/80 hover:bg-sky-500 hover:text-slate-950 text-white p-3 rounded-full border border-slate-700 shadow-lg transition-all duration-200 focus:outline-none"
            aria-label="Proyecto anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botón Derecho */}
          <button 
            onClick={siguienteProyecto}
            className="absolute top-1/3 right-4 -translate-y-1/2 bg-slate-900/80 hover:bg-sky-500 hover:text-slate-950 text-white p-3 rounded-full border border-slate-700 shadow-lg transition-all duration-200 focus:outline-none"
            aria-label="Siguiente proyecto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Indicadores de posición de proyectos */}
        <div className="flex justify-center gap-3 mt-6">
          {listaProyectos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setIndiceProyecto(idx); setIndiceImagen(0); }}
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === indiceProyecto ? 'w-8 bg-sky-400' : 'w-2.5 bg-slate-700'}`}
              aria-label={`Ir al proyecto ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}