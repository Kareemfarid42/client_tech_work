import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MloApp from "./MloApp";
import "./index.css"; // This ensures your Tailwind styles work

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MloApp />
  </BrowserRouter>
);