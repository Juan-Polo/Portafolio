import React, { useState } from "react";
import "../assets/css/index.css";
import "../assets/css/Skills.css";
import { Icon } from "@iconify/react";

const skills = [
  { name: "HTML5", icon: "devicon:html5" },
  { name: "CSS3", icon: "devicon:css3" },
  { name: "JAVASCRIPT", icon: "logos:javascript" },
  { name: "LARAVEL", icon: "logos:laravel" },
  { name: "BOOTSTRAP", icon: "logos:bootstrap" },
  { name: "REACT", icon: "logos:react" },
  { name: "WORDPRESS", icon: "skill-icons:wordpress" },
  { name: "PYTHON", icon: "logos:python" },
];

const tools = [
  { name: "POSTMAN", icon: "devicon:postman" },
  { name: "GIT", icon: "logos:git-icon" },
  { name: "GITHUB", icon: "mdi:github" },
  { name: "VS CODE", icon: "logos:visual-studio-code" },
  { name: "PYCHARM", icon: "logos:pycharm" },
  { name: "VITE", icon: "logos:vitejs" },
  { name: "NPM", icon: "logos:npm-icon" },
  { name: "MYSQL", icon: "logos:mysql" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="skills-container">
      <div className="skills-header">
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
          aria-label="Ver habilidades"
        >
          Habilidades
        </button>
        <button
          className={activeTab === "tools" ? "active" : ""}
          onClick={() => setActiveTab("tools")}
          aria-label="Ver herramientas"
        >
          Herramientas
        </button>
      </div>

      {activeTab === "skills" && (
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <Icon icon={skill.icon} className="icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "tools" && (
        <div className="tools-list">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item">
              <Icon icon={tool.icon} className="icon" />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
