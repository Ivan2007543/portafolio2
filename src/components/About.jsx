const interests = [
  {
    title: 'Desarrollo web',
    text: 'Me interesa construir interfaces útiles, accesibles y fáciles de mantener con tecnologías modernas.',
  },
  {
    title: 'Bases de datos',
    text: 'Quiero profundizar en el diseño, modelado y administración de bases de datos relacionales y no relacionales.',
  },
  {
    title: 'Videojuegos',
    text: 'Me gustaría explorar la programación de videojuegos, sus motores, mecánicas y lógica interactiva.',
  },
  {
    title: 'Aprendizaje continuo',
    text: 'Busco conocer nuevas herramientas y buenas prácticas para mejorar la calidad de cada proyecto.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section section-alt">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">01 / Perfil</p>
          <h2 className="section-title">Curiosidad técnica con enfoque práctico.</h2>
          <div className="about-copy">
            <p>
              Soy estudiante de Ingeniería de Software y Sistemas Computacionales, con interés especial
              en el desarrollo web y en comprender cómo se construyen productos digitales desde la idea
              inicial hasta una solución funcional.
            </p>
            <p>
              Disfruto trabajar en equipo, recibir retroalimentación y aprender durante el proceso. Mi
              meta es crecer como desarrollador, fortalecer mis fundamentos y aportar soluciones claras,
              responsables y bien pensadas.
            </p>
          </div>
        </div>
        <div className="interest-grid">
          {interests.map((interest, index) => (
            <article className="info-card" key={interest.title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{interest.title}</h3>
              <p>{interest.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
