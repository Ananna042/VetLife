import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/Home.jsx";
import Farmacia from "../components/Farmacia.jsx";
import PetShop from "../components/PetShop.jsx";
import Reserva from "../components/Reserva.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "farmacia", element: <Farmacia /> },
      { path: "petshop", element: <PetShop /> },
      { path: "reserva", element: <Reserva /> },
    ],
  },
]);

export default router;
