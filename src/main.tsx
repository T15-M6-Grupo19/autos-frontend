import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./provider/SlideContext.tsx";
import { FilterProvider } from "./contexts/FilterContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <GlobalProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
