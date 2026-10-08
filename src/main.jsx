import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";

// Self-hosted webfonts first, then the global token layer.
import "./assets/fonts/fonts.css";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
