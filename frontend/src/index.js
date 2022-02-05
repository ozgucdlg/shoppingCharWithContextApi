import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import App from "./App";

import Products from "./components/Products";
import Cart from "./components/Cart";

const rootElement = document.getElementById("root");
ReactDOM.render(
  
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/components/Cart" element={<Cart />} />
      <Route path="/components/Products" element={<Products />} />
      
      </Routes>
    </BrowserRouter>
  ,
  rootElement
);
