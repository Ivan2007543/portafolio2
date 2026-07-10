import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:py-32 bg-slate-950 text-slate-100 flex items-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Nombre limpio sin comillas */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Ivan Alejandro Silveira Muñoz
        </h1>
        
        {/* Perfil limpio sin corchetes */}
        <p className="text-xl md:text-2xl font-medium text-sky-400 mb-6">
          Ingeniería de software y sistemas computacionales
        </p>
        
        {/* Descripción limpia sin corchetes */}
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
          Soy un estudiante de Ingeniería de Software interesado por el desarrollo web full-stack 
          , me gusta aprender nuevas técnicas para mejorar mis habilidades y participar en proyectos interesantes e inovadores. 
          Mi objetivo es crecer profesionalmente y dar lo mejor de mi en cada proyecto en el que participe.
        </p>
      </div>
    </section>
  );
}