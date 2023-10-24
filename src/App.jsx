// En App.js o en tu archivo de enrutamiento
import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail';
import NoFound from "./views/NoFound"
import Cart from './views/Cart';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NoFound />} />
    </Routes>
  );
}

export default App;
