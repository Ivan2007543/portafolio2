import React from 'react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold border-b border-slate-800 pb-4 mb-8 text-sky-400">Sobre Mí</h2>
        
        {/* Contenedor en dos columnas */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Bloque 1: Intereses Profesionales */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Intereses Profesionales</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                A lo largo de la carrera he logrado desarrollar habilidades en áreas como el desarrollo web. 
                He aprendido a utilizar Visual Studio Code, HTML y CSS para páginas web básicas, así como 
                JavaScript y React; tecnologías que me ayudan a generar aplicaciones web y móviles complejas 
                de manera más eficiente. A su vez, me entusiasma trabajar con la metodología Scrum, buscando 
                siempre adaptarme y mejorar en cada iteración.
              </p>
            </div>
          </div>
          
          {/* Bloque 2: Áreas de Aprendizaje */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Áreas de Aprendizaje</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                Algunas de las áreas en las que me gustaría seguir aprendiendo y creciendo profesionalmente 
                incluyen el dominio y diseño avanzado de bases de datos relacionales y no relacionales, la 
                implementación de arquitecturas de software limpias y la exploración de nuevas herramientas 
                en tendencia que optimicen mi forma de desarrollar aplicaciones web y moviles. Estoy comprometido 
                con la mejora continua y la adquisición de conocimientos que me permitan dar soluciones más efectivas en el desarrollo de software.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}