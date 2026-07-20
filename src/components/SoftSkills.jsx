import React from 'react';

export default function SoftSkills() {
  // Quitamos los corchetes para que el texto luzca más limpio y profesional
  const habilidades = [
    "Autodidactismo",   
    "Empatía",
    "Adaptabilidad",
    "Flexibilidad",
    "Pensamiento Preventivo",
    "Trabajo en Equipo",
    "Comunicación Efectiva",
    
  ];

  return (
    <section id="habilidades" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center"> {/* Agregado text-center aquí */}
        <h2 className="text-3xl font-bold border-b border-slate-800 pb-4 mb-10 text-sky-400 inline-block px-6">
         Soft Skills 
        </h2>
        
        {/* Cambiado a justify-center para equilibrar las tarjetas en cualquier pantalla */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {habilidades.map((skill, index) => (
            <span 
              key={index} 
              className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm font-medium text-slate-300 shadow-md transition-all duration-300 hover:border-sky-500/50 hover:text-sky-400 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}