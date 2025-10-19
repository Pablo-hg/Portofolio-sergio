import TextExpand from "./TextExpand";

export default function TestimonialCard({ logo, text, avatar, name, role }) {
  return (
    <div className="review text-left max-w-md">
      {/* Logo empresa */}
      <img className="mb-5" src={logo} alt={`Logo ${name}`} />

      {/* Texto expandible */}
      <TextExpand text={text} />

      {/* Avatar y datos */}
      <div className="avatar items-center">
        <img
          className="w-12 h-12 mr-4 rounded-full object-cover"
          src={avatar}
          alt={`Foto de ${name}`}
        />
        <div className="text">
          <p className="high">{name}</p>
          <p className="tags">{role}</p>
        </div>
      </div>
    </div>
  );
}
