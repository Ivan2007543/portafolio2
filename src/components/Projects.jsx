import { useState } from 'react';
import miniSpa from '../assets/Minispa.png';
import pokeApi from '../assets/Pokeapi.png';
import aquaNova from '../assets/aquanova.png';
import aquaNova2 from '../assets/aquanova2.png';

const projects = [
  {
    name: 'Pokédex SPA',
    category: 'Aplicación web interactiva',
    description: 'Aplicación desarrollada con React que consume la PokéAPI de forma asíncrona. Permite buscar Pokémon y consultar sus sprites, estadísticas y datos principales mediante una interfaz dinámica y fácil de navegar.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'PokéAPI'],
    images: [miniSpa, pokeApi],
  },
  {
    name: 'Aqua Nova',
    category: 'Sistema de gestión',
    description: 'Proyecto colaborativo para administrar la operación de una lavandería. Participé en los módulos de empleados, insumos y tipos de servicio, conectando la interfaz con una base de datos para centralizar la información del negocio.',
    technologies: ['JavaScript', 'CSS', 'PostgreSQL', 'Node.js', 'Express'],
    images: [aquaNova, aquaNova2],
  },
];

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const project = projects[projectIndex];

  const changeProject = (direction) => {
    setImageIndex(0);
    setProjectIndex((current) => (current + direction + projects.length) % projects.length);
  };

  const nextImage = () => setImageIndex((current) => (current + 1) % project.images.length);

  return (
    <section id="proyectos" className="section section-alt">
      <div className="container">
        <p className="eyebrow">03 / Portafolio</p>
        <h2 className="section-title">Proyectos que reflejan mi aprendizaje.</h2>
        <p className="section-intro">
          Una selección de trabajos académicos y personales en los que he aplicado desarrollo frontend,
          consumo de APIs, colaboración y fundamentos de backend.
        </p>

        <article className="project-card">
          <button className="project-image" type="button" onClick={nextImage} aria-label="Ver siguiente captura">
            <img src={project.images[imageIndex]} alt={`${project.name}, captura ${imageIndex + 1}`} />
            <span className="image-counter">Captura {imageIndex + 1} / {project.images.length}</span>
          </button>
          <div className="project-body">
            <span className="project-kicker">{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
            </div>
          </div>
        </article>

        <div className="project-nav">
          <button className="round-button" type="button" onClick={() => changeProject(-1)} aria-label="Proyecto anterior">←</button>
          <div className="dots">
            {projects.map((item, index) => (
              <button
                className={`dot ${index === projectIndex ? 'active' : ''}`}
                type="button"
                key={item.name}
                onClick={() => { setProjectIndex(index); setImageIndex(0); }}
                aria-label={`Ver ${item.name}`}
              />
            ))}
          </div>
          <button className="round-button" type="button" onClick={() => changeProject(1)} aria-label="Siguiente proyecto">→</button>
        </div>
      </div>
    </section>
  );
}
