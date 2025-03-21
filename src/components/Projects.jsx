import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import "../assets/css/index.css";
import "../assets/css/Projects.css";

const projects = [
  {
    title: "Our Little World",
    description:
      "Our Little World es una plataforma educativa desarrollada en Laravel (MVC) que facilita la gestión de cursos de primaria. Permite a los maestros personalizar grados, asignar imágenes, gestionar perfiles y organizar alumnos. Además, ofrece funcionalidades para subir horarios, PDFs, talleres, videos y actividades, permitiendo la entrega de tareas en PDF.",
    img: "./img/our.jpg",
    url: "URL_PROYECTO_1",
    githubUrl: "https://github.com/Juan-Polo/ourlittleworld-backend",
  },
  {
    title: "SENA Sonríe - Odontología",
    description:
      "Proyecto enfocado en la práctica y dominio de Bootstrap para crear un diseño responsive. Además, implementé un pequeño CRUD con Laravel para gestionar la información de forma dinámica, demostrando habilidades en el desarrollo web integral.",
    img: "./img/odontology.jpg",
    url: "URL_PROYECTO_2",
    githubUrl: "https://github.com/Juan-Polo/odontology-proyect",
  },
  {
    title: "Only Quality",
    description:
      "Página web informativa sobre fútbol con una sección de tienda en línea. Desarrollada íntegramente en HTML, CSS y JavaScript,.",
    img: "./img/quality.jpg",
    url: "",
    githubUrl: "https://github.com/Juan-Polo/Frontend---practice",
  },
];

const ProjectCard = ({ title, description, img, url, githubUrl }) => (
  <article className="project-card">
    <img src={img} alt={`Vista previa de ${title}`} loading="lazy" />
    <div className="project-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-links">
        {/* {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            Sitio web
          </a>
        )} */}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const nextProjects = () => {
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevProjects = () => {
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <section className="projects">
      <h1>Proyectos</h1>
      <div className="carousel-container">
        <button className="carousel-button-left" onClick={prevProjects}>
          <Icon icon="bxs:left-arrow" />
        </button>
        <div className="carousel-content">
          <motion.div
            key={page}
            className="project-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {projects
              .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
              .map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
          </motion.div>
        </div>
        <button className="carousel-button-right" onClick={nextProjects}>
          <Icon icon="bxs:right-arrow" />
        </button>
      </div>
      <div className="carousel-indicator">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === page ? "active" : ""}`}
            onClick={() => setPage(i)}
          >
            ●
          </span>
        ))}
      </div>
    </section>
  );
};

export default Projects;
