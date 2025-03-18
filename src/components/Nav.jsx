import { Link } from "react-scroll";
import "../assets/css/Nav.css";
import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav role="navigation" aria-label="Menú principal">
      <div className="logo">
        <img src="./img/logo.png" alt="Logo del portafolio" />
      </div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        aria-controls="menu-nav"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <div className={`div-buttons${isMenuOpen ? "-open" : ""}`} id="menu-nav">
        {[
          { id: "home", text: "INICIO" },
          { id: "about", text: "SOBRE MI" },
          { id: "skills", text: "HABILIDADES" },
          { id: "projects", text: "PROYECTOS" },
          { id: "cv", text: "CURRÍCULUM" },
          { id: "contact", text: "CONTACTO" },
        ].map(({ id, text }, index) => (
          <Link
            key={id}
            to={id}
            smooth={true}
            duration={500}
            offset={-50}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
            aria-label={`Ir a la sección ${text}`}
          >
            <button
              type="button"
              style={{ animationDelay: `${index * 0.2}s` }}
              aria-label={text}
            >
              <span>{text}</span>
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
