import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <li>Inicio</li>
        <li>Categoría B</li>
        <li>Categoría A</li>
        <li>Categoría C</li>
        <CartWidget/>
      </ul>
    </div>
  );
}

export default NavBar;