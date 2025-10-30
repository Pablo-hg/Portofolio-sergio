
export default function TestimonialCard({ logo, text, avatar, name, role }) {
  return (
    <div className="review text-left max-w-md">
      {/* Logo empresa */}
      <img className="mb-5" src={logo} alt={`Logo ${name}`} />

      <div className="w-auto">
        <p className="text-description line-clamp-4">{text}</p>
      </div>

      {/* Avatar y datos */}
      <div className="avatar items-center mt-6">
        <img
          className="w-12 h-12 mr-4 rounded-full object-cover"
          src={avatar}
          alt={`Foto de ${name}`}
        />
        <div className="text">
          <p className="name">{name}</p>
          <p className="info">{role}</p>
        </div>
      </div>
    </div>
  );
}
