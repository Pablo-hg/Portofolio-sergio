import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import EnFlag from "../assets/svg/flags/en.svg";
import EsFlag from "../assets/svg/flags/es.svg";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  // idioma actual real de i18next
  const currentLang = i18n.language.startsWith("es") ? "es" : "en";

  const changeLang = (selected) => {
    i18n.changeLanguage(selected);               // cambia inmediatamente
    localStorage.setItem("lang", selected);      // guarda preferencia
  };

  // sincroniza al montar (por si hay un valor guardado)
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== currentLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => changeLang("en")}
        className={`p-1 rounded-full transition-transform duration-150 hover:scale-110 ${
          currentLang === "en" ? "ring-2 ring-[--color-accent-primary]" : ""
        }`}
        aria-label="English"
      >
        <img src={EnFlag} alt="English" className="w-6 h-6 rounded-full" />
      </button>

      <button
        onClick={() => changeLang("es")}
        className={`p-1 rounded-full transition-transform duration-150 hover:scale-110 ${
          currentLang === "es" ? "ring-2 ring-[--color-accent-primary]" : ""
        }`}
        aria-label="Español"
      >
        <img src={EsFlag} alt="Español" className="w-6 h-6 rounded-full" />
      </button>
    </div>
  );
}
