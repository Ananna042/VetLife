import { useState } from "react";

export default function Home() {
  const [mensaje] = useState("Esto es el Home");
  const [pagina, setPagina] = useState(false);

  return (
    <div>
      {pagina ? (
        <h2>{mensaje}</h2>
      ) : (
        <button onClick={() => setPagina(true)}>Ir al Home</button>
      )}
    </div>
  );
}
