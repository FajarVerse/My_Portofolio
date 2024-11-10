import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import "./index.css";
import DarkModeContextProvider from "./assets/context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>
);
