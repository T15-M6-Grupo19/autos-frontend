import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import { CarProvider } from "./providers/CarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <GlobalStyles />
      <CarProvider>
          <App />
      </CarProvider>
    </BrowserRouter>
  </>
);
