import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { AppContext } from './context/AppContext';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { routefromelement } from './routes';

const router = createBrowserRouter(routefromelement);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext.Provider
      value={{
        appName: 'SaraMessage',
        productsPath: '/products',
        happyCustomers: 3821,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  </StrictMode>
);
