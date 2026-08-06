import { useState } from 'react';
import cdStore1 from '../assets/carritos.png';
import cdStore2 from '../assets/Prueba.png';
import cdStore3 from '../assets/calificación.png';

const images = [cdStore1, cdStore2, cdStore3];

export default function SpaProject() {
  const [imageIndex, setImageIndex] = useState(0);
  const nextImage = () => setImageIndex((current) => (current + 1) % images.length);

  return (
    <section id="spa" className="section">
      <div className="container">
        <p className="eyebrow">04 / Proyecto destacado</p>
        <h2 className="section-title">Una experiencia enfocada en la música física.</h2>
        <p className="section-intro">
          CD Store combina catálogo, filtros y carrito de compra en una SPA inspirada en la cultura de
          los discos y en la identidad visual de la música alternativa.
        </p>

        <article className="featured-card">
          <button className="featured-image" type="button" onClick={nextImage} aria-label="Ver siguiente captura de CD Store">
            <img src={images[imageIndex]} alt={`CD Store, captura ${imageIndex + 1}`} />
            <span className="image-counter">Captura {imageIndex + 1} / {images.length}</span>
          </button>
          <div className="featured-body">
            <span className="project-kicker">Plataforma de música física</span>
            <h3>CD Store</h3>
            <p>
              Una propuesta para facilitar la compra y venta local de discos y vinilos, además de dar
              visibilidad a músicos independientes. El proyecto me permitió practicar el manejo de estado,
              la creación de componentes y el diseño de flujos de compra.
            </p>
            <ul className="feature-list">
              <li>Búsqueda de álbumes en tiempo real</li>
              <li>Filtros por género y formato</li>
              <li>Carrito dinámico con control de cantidades</li>
              <li>Simulación de checkout y resumen de pedido</li>
              <li>Sistema de calificaciones</li>
            </ul>
            <span className="status">En desarrollo full-stack</span>
          </div>
        </article>
      </div>
    </section>
  );
}
