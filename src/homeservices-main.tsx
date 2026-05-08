import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import HomeServicesApp from "./HomeServicesApp";
import "./index.css"; // This ensures your Tailwind styles work

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HomeServicesApp />
  </BrowserRouter>
);
