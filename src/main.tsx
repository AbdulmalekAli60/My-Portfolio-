import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// External Libraries
import { BrowserRouter } from "react-router-dom";
// import i18n (needs to be bundled ;))
import "./i18n";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
// External Libraries
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
