import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './styles/global.ts';
import { BrowserRouter } from 'react-router-dom';
import { CarProvider } from './providers/CarContext.tsx';
import { UserProvider } from './providers/UserContext/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <UserProvider>
        <CarProvider>
          <App />
        </CarProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
