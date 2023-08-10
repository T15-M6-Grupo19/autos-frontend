import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './styles/global.ts';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './provider/SlideContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
        <GlobalProvider>
          <App />
        </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
