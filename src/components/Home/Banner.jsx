const Banner = ({ repeat = 5 }) => {
  const items = [
    '+4 años de experiencia',
    'Viviendo en Madrid, España',
    'Abierto a oportunidades en remoto a tiempo completo.'
  ];

  // Genera el contenido repetido "repeat" veces
  const repeatedContent = Array.from({ length: repeat }).flatMap(() =>
    items.flatMap((text, i) => [
      <span key={`${text}-${i}-${Math.random()}`} className="mx-6">{text}</span>,
      <span key={`dot-${text}-${i}-${Math.random()}`} className="mx-6">•</span>
    ])
  );

  return (
    <div className="absolute left-0 overflow-hidden w-full banner mt-12 bg-[#C14E36] text-white py-2">
      <div className="whitespace-nowrap animate-banner">{repeatedContent}</div>
      <style>{`
        @keyframes banner {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-banner {
          display: inline-block;
          min-width: 200%;
          animation: banner 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
