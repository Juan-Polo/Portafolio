import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // 🔹 Correcto
import "./assets/css/index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root")); // ✅ Usar directamente createRoot

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
