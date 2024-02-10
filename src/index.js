import React from "react";
import ReactDOM from "react-dom/client";
import { About_a, About_b, Home } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <About_a />
    <About_b />
  </React.StrictMode>
);
