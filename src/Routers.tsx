import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import { lazy } from "react";
import { SuspenseWithFallback } from "./Components/SuspenseWithFallback";

const Shop = lazy(() => import("./Pages/Shop"));
const ProductDetails = lazy(() => import("./Components/Shop/ProductDetails"));

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: SuspenseWithFallback(<Shop />),
      },
      {
        path: "/product/:id",
        element: SuspenseWithFallback(<ProductDetails />),
      },
    ],
  },
]);
const Routers = () => {
  return <RouterProvider router={appRouters} />;
};

export default Routers;
