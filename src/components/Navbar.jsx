import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="container nav-inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true" />
          IVÁN SILVEIRA
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a className="nav-contact" href="#contacto" onClick={closeMenu}>Contacto</a>
        </div>
      </div>
    </nav>
  );
}
