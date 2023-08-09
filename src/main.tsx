import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./contexts/FilterContext/filterContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <GlobalStyles />
        <App />
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
