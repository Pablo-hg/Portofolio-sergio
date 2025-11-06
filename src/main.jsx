import i18n from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import en from "./language/en/main.json";
import es from "./language/es/main.json";

import App from "./App.jsx";
import "./index.css";
import "./styles/token.css";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: localStorage.getItem("lang") || "es",
  fallbackLng: "en",
  supportedLngs: ["es", "en"],
  load: "languageOnly",
  interpolation: { escapeValue: false },
});


// === RENDER APP ===
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
