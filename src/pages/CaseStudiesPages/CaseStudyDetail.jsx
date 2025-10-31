import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const Iberdrola = lazy(() => import('./Iberdrola'));
const Roadstr = lazy(() => import('./Roadstr'));
const Sesh = lazy(() => import('./Sesh'));

export default function CaseStudyDetail() {
  const { name } = useParams();

  const renderCaseStudy = () => {
    switch (name) {
      case 'iberdrola':
        return <Iberdrola />;
      case 'roadstr':
        return <Roadstr />;
      case 'sesh':
        return <Sesh />;
      default:
        return (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado 😕</h1>
            <p>Revisa la URL o vuelve a la página de <a href="/case-studies" className="text-blue-500 hover:underline">Case Studies</a>.</p>
          </div>
        );
    }
  };

  return (
    <Suspense fallback={<div className="text-center mt-10">Cargando proyecto...</div>}>
      {renderCaseStudy()}
    </Suspense>
  );
}
