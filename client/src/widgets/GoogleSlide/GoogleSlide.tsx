import { useState } from "react";

function GoogleSlide() {
  const [slideLink] = useState(
    "https://docs.google.com/presentation/d/e/2PACX-1vQ-OyDThIE1nywQIrCGcWIJ0qalNedmy5gXK3WQUTvhuD2GSe-OPr6hKTaiv8G2Qm1oJAzjVTs7PZr6/embed?start=true&loop=true&delayms=3000"
  );

  return (
    <div>
      <iframe
        className="absolute inset-0 w-full h-full rounded-lg shadow-sm"
        src={slideLink}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleSlide;
