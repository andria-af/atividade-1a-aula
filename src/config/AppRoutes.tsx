import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListaMercado } from "../Pages/ListaMercado";
import { ListaFarmacia } from "../Pages/ListaFarmacia";
import { ListaCasa } from "../Pages/ListaCasa";

const router = createBrowserRouter([
  {
    path: "/lista-mercado",
    element: <ListaMercado/>,
  },
  {
    path: "/lista-farmacia",
    element: <ListaFarmacia/>,
  },
  {
    path: "/lista-casa",
    element: <ListaCasa/>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
