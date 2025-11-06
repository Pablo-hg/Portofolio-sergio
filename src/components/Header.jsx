import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";

export default function Header() {
  const { t, i18n } = useTranslation();
  const nameCV = "Pablo_Horcajada_González_CV_";

  // Detecta idioma y asigna el PDF correspondiente
  const pdfUrl = i18n.language === "es"
    ? `../../pdf/${nameCV}es.pdf`
    : `../../pdf/${nameCV}en.pdf`;

  return (
    <header className="backdrop-blur-lg sticky left-0 top-0 z-50 py-4 w-full bg-white">
      <nav className="flex items-center text-textColor-link-base justify-between container">
        <NavLink className="name" to="/">Sergio DM</NavLink>
        <NavLink to="/case-studies">{t('case-studies')}</NavLink>
        <NavLink to="/about-me">{t('about-me')}</NavLink>

        {/* Enlace al PDF correcto */}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 border rounded-lg hover:bg-[--color-accent-primary] hover:text-white transition-colors"
        >
          CV
        </a>

        <a
          href="https://www.linkedin.com/in/sergio-d%C3%ADaz-mart%C3%ADn-0b1b4218a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <LanguageSelector />
      </nav>
    </header>
  );
}
