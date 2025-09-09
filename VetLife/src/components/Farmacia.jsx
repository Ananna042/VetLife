import { useState } from "react";

export default function Home() {
  const [mensaje] = useState("Esto es la Farmacia");
  const [pagina, setPagina] = useState(false);

  return (
    <div>
      {pagina ? (
        <h2>{mensaje}</h2>
      ) : (
        <button onClick={() => setPagina(true)}>Ir al Farmacia</button>
      )}
    </div>
  );
}
