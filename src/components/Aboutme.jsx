import "../assets/css/AboutMe.css";
import React, { memo } from "react";
import BlurText from "./BlurText";

const AboutMe = () => {
  const handleAnimationComplete = () => {};

  return (
    <section className="about-me">
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
            <span className="span-underlined"> Juan Manuel Polo Villegas</span>,
            un entusiasta del desarrollo con ganas de aprender y crear. Me
            encanta convertir ideas en código y enfrentar desafíos tecnológicos.
            Mi enfoque se basa en la eficiencia, la optimización y la
            innovación. Siempre estoy en búsqueda de nuevos retos para seguir
            creciendo y mejorar mis habilidades.
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
          {[
            { label: "Cargo", value: "Desarrollador Full Stack" },
            { label: "Teléfono", value: "+57 310 714 11 32" },
            { label: "Email", value: "juanmanuelpolovillegas@gmail.com" },
            { label: "Dirección", value: "Popayán - Cauca" },
          ].map((item) => (
            <p key={item.label}>
              <span className="span-underlined">{item.label}: </span>
              <span className="span-contact">{item.value}</span>
            </p>
          ))}
        </div>
      </address>
    </section>
  );
};

export default memo(AboutMe);
