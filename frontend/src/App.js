import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";


import { data } from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
      <Link to="./components/Products" > Products</Link> 
      <Link to="./components/Cart"> My Cart </Link>
    </div>
  );
}
