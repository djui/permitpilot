import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/geist";
import "@fontsource/fraunces/latin-400-italic.css";
import "@fontsource/fraunces/latin-ext-400-italic.css";
import Home from "../app/page";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
