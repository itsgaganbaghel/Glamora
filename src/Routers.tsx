import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

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
        element: <Shop />,
      },
    ],
  },
]);
const Routers = () => {
  return <RouterProvider router={appRouters} />;
};

export default Routers;
