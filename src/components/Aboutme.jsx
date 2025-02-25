import "../assets/css/AboutMe.css";
import React from "react";
import BlurText from "./BlurText";

const handleAnimationComplete = () => {};
const AboutMe = () => {
  return (
    <section className="about-me">
      <div>
        <article>
          <h1>
            <BlurText
              text="Sobre mi"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <div className="container-me">
            <p>
              Hola, soy
              <span className="span-underlined">
                {" "}
                Juan Manuel Polo Villegas
              </span>
              , un entusiasta del desarrollo con ganas de aprender y crear. Me
              encanta convertir ideas en código y enfrentar desafíos
              tecnológicos. Mi enfoque se basa en la eficiencia, la optimización
              y la innovación. Siempre estoy en búsqueda de nuevos retos para
              seguir creciendo y mejorar mis habilidades.
            </p>
          </div>
        </article>

        <address>
          <h1>
            <BlurText
              text="Contactos"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <div className="container-contact">
            <p>
              <span className="span-underlined"> Cargo: </span>
              <span className="span-contact">Desarrollador Full Stack</span>
            </p>
            <p>
              <span className="span-underlined">Teléfono: </span>
              <span className="span-contact">+57 310 714 11 32</span>
            </p>
            <p>
              <span className="span-underlined">Email: </span>
              <span className="span-contact">
                juanmanuelpolovillegas@gmail.com
              </span>
            </p>
            <p>
              <span className="span-underlined">Dirección: </span>
              <span className="span-contact">Popayán - Cauca</span>
            </p>
          </div>
        </address>
      </div>
    </section>
  );
};

export default AboutMe;
