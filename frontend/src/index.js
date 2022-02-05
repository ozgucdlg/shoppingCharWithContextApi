import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

import Products from "./components/Products";
import Cart from "./components/Cart";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
     <Route exact path="/" component={Products} />
      <Route path="/components/cart" component={Cart} />
      <App />
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);
