
export default function CardStep({
  urlImage = '',
  dateStarted = '',
  dateEnded = '',
  title = '',
  info = '',
  url = '#',
  icon = '',
}) {

  return (
    <div className="w-full flex justify-between mb-8">
      <div className="relative flex flex-col items-center">
        <img src={icon} alt="Icon" />
        <div className="bg-[--color-border-main] h-full w-[2px] mt-6"></div>
      </div>
      <div className="max-w-[480px] text-left">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={urlImage} alt="logo" className="h-12" />
        </a>
        
        <p className="text-description my-3">{dateStarted} – {dateEnded}</p>
        <h3 className="text-[--color-text-heading-strong] mb-3">
          {title}
        </h3>
        <p className="text-description">
          {info}
        </p>
      </div>
    </div>
  );
}
