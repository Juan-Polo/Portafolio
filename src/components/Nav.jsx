import { Link } from "react-scroll";
import "../assets/css/Nav.css";
import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src="./img/logo.png" alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`div-buttons${isMenuOpen ? "-open" : ""}`}>
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
          >
            <button style={{ animationDelay: `${index * 0.2}s` }}>
              <span>{text}</span>
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
