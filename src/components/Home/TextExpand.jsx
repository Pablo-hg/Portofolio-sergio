import { useState } from "react";

export default function TextExpand({ text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-auto">
      <p
        className={`transition-all duration-300 ease-in-out desc ${
          expanded ? "line-clamp-none" : "line-clamp-4"
        }`}
      >
        {text}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 underline mb-6 link"
      >
        {expanded ? "Leer menos" : "Leer más"}
      </button>
    </div>
  );
}
