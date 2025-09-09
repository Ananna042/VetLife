import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="caja">
        <ul>
          <li>
            <Link to="/home" className="items">
              Home
            </Link>
          </li>
          <li>
            <Link to="/petshop" className="items">
              Pet Shop
            </Link>
          </li>
          <li>
            <Link to="/farmacia" className="items">
              Farmacia
            </Link>
          </li>
          <li>
            <Link to="/reserva" className="items">
              Reserva de turnos
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
