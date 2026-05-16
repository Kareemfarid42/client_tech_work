import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProfessionalsApp from "./ProfessionalsApp";
import "./index.css"; // This ensures your Tailwind styles work

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ProfessionalsApp />
  </BrowserRouter>
);
