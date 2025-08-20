import ReactDOM from "react-dom/client";
import "./index.css";
import Routers from "./Routers.tsx";
import { FilterProvider } from "./contexts/FilterContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FilterProvider>
    <Routers />
  </FilterProvider>
);
