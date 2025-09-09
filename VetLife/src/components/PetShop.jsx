import { useState } from "react";

export default function PetShop() {
  const [mensaje] = useState("Esto es el Home");
  const [pagina, setPagina] = useState(false);

  return (
    <div>
      {pagina ? (
        <h2>{mensaje}</h2>
      ) : (
        <button onClick={() => setPagina(true)}>Ir al Pet Shop</button>
      )}
    </div>
  );
}
