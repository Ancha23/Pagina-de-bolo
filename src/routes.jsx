import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { Contact } from "./pages/contacts";
import { BolosCaseiros } from "./pages/receitas dos bolos/bolos caseiros/caseiros";
import { BolosDeAniversario } from "./pages/receitas dos bolos/bolos de aniversario/aniversarios";
import { AllCapcakes } from "./pages/receitas dos bolos/capcakes/capcakes";
import { BolosDeCasamento } from "./pages/receitas dos bolos/bolos de casamento/casamentos";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "bolos caseiros",
    element: <BolosCaseiros />,
  },
  {
    path: "bolos de aniversario",
    element: <BolosDeAniversario />,
  },
  {
    path: "capcakes",
    element: <AllCapcakes />,
  },
  {
    path: "bolos de casamento",
    element: <BolosDeCasamento />,
  },
]);