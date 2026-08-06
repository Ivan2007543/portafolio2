import profilePhoto from '../assets/perfil.png'

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-grid">
        <div>
          <span className="availability">Disponible para nuevos proyectos</span>
          <h1 className="hero-title">
            Iván Alejandro
            <span>Silveira Muñoz</span>
          </h1>
          <p className="hero-role">Estudiante de Ingeniería de Software y Sistemas Computacionales</p>
          <p className="hero-copy">
            Desarrollo experiencias web claras y funcionales mientras fortalezco mis conocimientos en
            programación. Me motiva aprender nuevas tecnologías y convertir cada proyecto en una
            oportunidad para crear soluciones cada vez más completas.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">Ver mis proyectos</a>
            <a className="button" href="#contacto">Hablemos</a>
          </div>
        </div>

        <div className="photo-shell">
          <div className="photo-placeholder">
            <img
              className="profile-photo"
              src={profilePhoto}
              alt="Retrato profesional de Iván Alejandro Silveira Muñoz"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
