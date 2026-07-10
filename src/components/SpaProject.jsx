import React, { useState } from 'react';
// Cambia estas rutas por los nombres y carpetas reales de tus capturas de CD_Store
import cdStore1 from '../assets/Carritos.png'; 
import cdStore2 from '../assets/Prueba.png'; 
import cdStore3 from '../assets/calificación.png'; // O la tercera captura que tengas lista

export default function SpaProject() {
  // Estado para controlar la imagen actual del carrusel (3 imágenes)
  const [indiceImagen, setIndiceImagen] = useState(0);

  const imagenesProyecto = [cdStore1, cdStore2, cdStore3];

  const siguienteImagen = () => {
    setIndiceImagen((prev) => (prev === imagenesProyecto.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="spa" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold border-b border-slate-800 pb-4 mb-8 text-sky-400">
          Proyecto SPA Final
        </h2>
        
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
          
          {/* CAROUSEL DE IMÁGENES DEL PROYECTO */}
          <div 
            onClick={siguienteImagen}
            className="relative w-full h-64 md:h-80 overflow-hidden bg-slate-950 cursor-pointer group"
            title="Haz clic para ver el siguiente avance"
          >
            <img 
              src={imagenesProyecto[indiceImagen]} 
              alt={`Avance de CD_Store - captura ${indiceImagen + 1}`} 
              className="w-full h-full object-cover opacity-90 transition-all duration-500 transform group-hover:scale-105"
            />
            
            {/* Degradado oscuro inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

            {/* Contador de imágenes en la esquina */}
            <div className="absolute bottom-4 right-4 bg-slate-900/80 text-xs text-sky-400 px-3 py-1.5 rounded-full border border-slate-700 font-medium pointer-events-none">
              Avance {indiceImagen + 1} de {imagenesProyecto.length}
            </div>

            {/* Letrero flotante en Hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-sky-500 text-slate-950 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-xl">
                Siguiente Captura ➔
              </span>
            </div>
          </div>

          {/* CONTENEDOR DE DETALLES DEL PROYECTO */}
          <div className="p-8">
            <div className="mb-6">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">
                Plataforma de Música Física
              </span>
              <h3 className="text-3xl font-bold text-white">CD_Store</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Problema que resuelve</h4>
                <p className="text-slate-300 text-sm mb-4 text-justify leading-relaxed">
                  Mi proyecto busca que en nuestra ciudad sea más accesible la compra y venta de 
                  discos y formatos físicos, así como permitir que bandas o músicos independientes 
                  puedan mostrar su trabajo y promocionarse mediante esta SPA.
                </p>

                <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Público Objetivo</h4>
                <p className="text-slate-300 text-sm mb-4 text-justify leading-relaxed">
                  Coleccionistas de formatos físicos, amantes de la música, melómanos locales y 
                  músicos o agrupaciones independientes que buscan una plataforma de difusión directa.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Funcionalidades Principales</h4>
                <ul className="list-disc list-inside text-slate-300 text-sm mb-4 space-y-1">
                  <li>Búsqueda de álbumes en Tiempo Real</li>
                  <li>Filtros especializados por formato (CD/Vinilo)</li>
                  <li>Carrito de Compras Dinámico</li>
                  <li>Simulación de Checkout y pasarela</li>
                  <li>Confirmación y resumen de pedido</li>
                </ul>

                <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Estado Actual</h4>
                <span className="inline-block mt-1 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs font-medium text-sky-400">
                  En Desarrollo Full-Stack
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}