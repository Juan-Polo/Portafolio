import "../assets/css/Nav.css";
import React, { useEffect, useState } from "react";
import "../assets/css/Landing-page.css";
import { Icon } from "@iconify/react";

const Landing = () => {
  return (
    <div className="div-presentacion">
      <div className="div-text-presentacion">
        <h1>
          ¡Hola! Mi nombre es <p>Juan Manuel Polo Villegas</p>
        </h1>
        <h2>
          Soy un desarrollador Full Stack apasionado por la tecnología y la
          innovación
        </h2>
        <div className="icons-social">
          <a
            href="https://www.linkedin.com/in/juan-manuel-polo-villegas-30964a329/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="devicon:linkedin" />
          </a>

          <a
            href="https://github.com/Juan-Polo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="akar-icons:github-fill" />
          </a>

          <a
            href="https://wa.me/573107141132
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="logos:whatsapp-icon" />
          </a>
        </div>
      </div>

      <div className="div-foto">
        <img src="./img/avatar.png" alt="Avatar" />
      </div>
    </div>
  );
};

export default Landing;
