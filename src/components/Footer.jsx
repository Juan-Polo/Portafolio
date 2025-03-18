import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../assets/css/Footer.css";
import "../assets/css/Landing-page.css";

import { Icon } from "@iconify/react";

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ta8l0t",
        "template_4px35or",
        form.current,
        "aFoZLYIN2LUUpc3O4"
      )
      .then(() => {
        setStatus({ message: "Correo enviado con éxito ✅", type: "success" });
        form.current.reset();
      })
      .catch(() => {
        setStatus({ message: "Error al enviar el correo ❌", type: "error" });
      });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="form-container">
          <h2>
            <Icon
              icon="mdi:contact"
              style={{ fontSize: "2.5rem", color: "rgb(255, 202, 133)" }}
            />
            Contáctame
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Tu nombre" required />
            <input
              type="tel"
              name="phone"
              placeholder="Número telefónico"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <input type="text" name="subject" placeholder="Tema" required />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows="4"
              required
            />
            <button className="button-form" type="submit">
              Enviar
            </button>
          </form>
          {status && <p className={status.type}>{status.message}</p>}
        </div>

        <div className="map-container">
          <h2>
            <Icon
              icon="mdi:location"
              style={{ fontSize: "2.5rem", color: "rgb(255, 202, 133)" }}
            />
            Ubicación
          </h2>
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.1972301041073!2d-76.61155422985682!3d2.4412575307686972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30030ff9207c27%3A0xf76217f9f8464ebe!2sParque%20Caldas!5e0!3m2!1ses-419!2sco!4v1740004837458!5m2!1ses-419!2sco"
            width="100%"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="rights-reserved">
        <button
          className="scroll-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver arriba"
        >
          <Icon icon="bxs:chevrons-up" style={{ fontSize: "27px" }} />
        </button>

        <p>© 2025 Juan Manuel Polo Villegas. Todos los derechos reservados.</p>

        <div className="icons-social">
          <a
            href="https://www.linkedin.com/in/juan-manuel-polo-villegas-30964a329/"
            aria-label="LinkedIn"
          >
            <Icon icon="devicon:linkedin" />
          </a>
          <a href="https://github.com/Juan-Polo" aria-label="GitHub">
            <Icon icon="akar-icons:github-fill" />
          </a>
          <a href="https://wa.me/573107141132" aria-label="WhatsApp">
            <Icon icon="logos:whatsapp-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
