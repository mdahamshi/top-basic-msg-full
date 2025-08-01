import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { AppProvider } from './context/AppContext';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { routefromelement } from './routes';

const router = createBrowserRouter(routefromelement);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
