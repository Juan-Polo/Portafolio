import React from "react";
import "../assets/css/index.css";
import "../assets/css/Cv.css";
import "../assets/css/AboutMe.css";

import BlurText from "./BlurText";
import { Icon } from "@iconify/react";

const CV_URL =
  "https://drive.google.com/file/d/14MkBhjkEwnu5TI5voTXzKBIg82ZoMsGH/preview";
const DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=14MkBhjkEwnu5TI5voTXzKBIg82ZoMsGH";
const FILE_NAME = "JuanPoloCV.pdf";

const Skills = () => {
  return (
    <section className="curriculum">
      <article className="cv-container">
        <h1>
          <BlurText
            text="Curriculum"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => {}}
          />
        </h1>
        <iframe
          src={CV_URL}
          title="CV Preview"
          className="cv-preview"
          loading="lazy"
          allowFullScreen
        ></iframe>
        <a
          href={DOWNLOAD_URL}
          download={FILE_NAME}
          className="cv-download"
          aria-label="Descargar Curriculum Vitae"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
      </article>

      <article className="experience-container">
        <h1>
          <BlurText
            text="Educación"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => {}}
          />
        </h1>
        <div className="education-item">
          <Icon
            icon="mdi:university"
            width="60px"
            height="60px"
            color="rgb(255, 202, 133)"
          />

          <p className="education-dates">
            TECNÓLOGO EN ANÁLISIS Y DESARROLLO DE SOFTWARE
          </p>
        </div>
        <h1 style={{ marginTop: "50px" }}>
          <BlurText
            text="Experiencia Laboral"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => {}}
          />
        </h1>
        <div className="experience-item">
          <h2
            style={{
              margin: "0",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",

              // Agrega un espacio entre el icono y el texto
            }}
          >
            <Icon
              icon="material-symbols:work"
              width="38px"
              height="38px"
              color="rgb(255, 202, 133)"
            />
            Desarrollador – Cari AI
          </h2>
          <p className="experience-dates">
            <Icon
              icon="mdi:calendar"
              width="38px"
              height="38px "
              color="rgb(255, 202, 133)"
            />
            [11/04/2032] - [11/04/2032"]
          </p>

          <p>
            <Icon
              icon="mdi:antenna"
              width="38px"
              height="38px"
              color="rgb(255, 202, 133)"
            />
            Remoto
          </p>
          <p>
            Participé en el desarrollo y optimización de chatbots con
            inteligencia artificial, mejorando su precisión y eficiencia para
            brindar una mejor experiencia de usuario. Trabajé en la integración
            de modelos de procesamiento de lenguaje natural y en la
            personalización de flujos conversacionales.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Skills;
