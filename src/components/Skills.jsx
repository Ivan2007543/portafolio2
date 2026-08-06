const technicalSkills = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'React Native', 'Tailwind CSS',
  'Bootstrap', 'Node.js', 'Express', 'PostgreSQL', 'Git y GitHub', 'Visual Studio Code',
];

const softSkills = [
  'Aprendizaje autodidacta', 'Trabajo en equipo', 'Adaptabilidad',
  'Comunicación efectiva', 'Pensamiento analítico', 'Responsabilidad',
];

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <p className="eyebrow">02 / Capacidades</p>
        <h2 className="section-title">Herramientas que uso y habilidades que cultivo.</h2>
        <p className="section-intro">
          Una base técnica en crecimiento, acompañada de habilidades humanas que me permiten aprender,
          colaborar y adaptarme a los retos de cada proyecto.
        </p>
        <div className="skills-layout">
          <div className="skill-block">
            <h3>Habilidades técnicas</h3>
            <div className="tag-list">
              {technicalSkills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </div>
          <div className="skill-block">
            <h3>Habilidades profesionales</h3>
            <div className="tag-list">
              {softSkills.map((skill) => <span className="tag tag-accent" key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
