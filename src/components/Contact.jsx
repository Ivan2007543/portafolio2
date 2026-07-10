import React from 'react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-sky-400">Contacto</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Si quieres ponerte en contacto conmigo aqui puedes contactarme: 
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <a href="mailto:Simi990504@gmail.com" className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
            📧 [Simi990504@gmail.com]
          </a>
          <a href="https://github.com/Ivan2007543" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
            💻 GitHub
          </a>
          <a href="https://www.linkedin.com/in/iv%C3%A1n-a-silveira-mu%C3%B1oz-b11678385/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors font-medium">
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}