import DefaultImage from '../assets/img/bg/bgDefault.png';
import Button from '../components/Button';

export default function Card({
  className = '',
  urlImage = '',
  urlLogo = '',
  nameCard = '',
  tags = [],
  title = '',
  info = '',
  url = '#'
}) {
  const figureImg = urlImage || DefaultImage;
  const logoImg = urlLogo || '';

  return (
    <div className={`card card-side w-full flex gap-20 ${className}`}>
      <figure style={{ backgroundImage: `url(${figureImg})` }}></figure>
      <div className="card-body pt-14 px-0 pb-0">
        <img className="mb-5" src={logoImg} width={130} alt={nameCard} />
        <div className="tags flex mb-3 gap-2">
          {tags.map((tag, i) => (
            <div key={i} className="tag-toggle">
              {tag}
            </div>
          ))}
        </div>
        <h3 className="card-title mb-3">{title}</h3>
        <p className="desc mb-8">{info}</p>
        <div className="flex">
          <Button className="btn-Secondary" href={url} txt="Ver proyecto" />
        </div>
      </div>
    </div>
  );
}
