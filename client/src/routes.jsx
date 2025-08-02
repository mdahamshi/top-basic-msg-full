import Errorpage from './pages/Errorpage';
import { createRoutesFromElements, Route } from 'react-router-dom';
import React from 'react';
import Root from './pages/Root';
import Home, { loader as homeLoader } from './pages/Home';
import NewMessage from './components/NewMessage';
export const routefromelement = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route errorElement={<Errorpage />}>
      <Route index loader={homeLoader} element={<Home />} />
      <Route path="new" />
      <Route path="*" element={<Errorpage />} />
    </Route>
  </Route>
);
