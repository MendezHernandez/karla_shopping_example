import React, { useState } from "react";
import "../styles/Navbar.css";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const categorias = ["Novedades", "Mujer", "Hombre", "Unisex"];
  const [valueInput, setValueInput] = useState("");
  let navigate = useNavigate();
  let location = useLocation();

  const searchFragance = () => {
    if (valueInput.length > 3) {
      navigate(`/buscar/${valueInput}`);
    } else {
      alert("Por favor, escriba al menos 4 palabras en el buscador");
    }
  };

  return (
    <nav>
      <div className="categories-container">
        {location.pathname === "/" && (
          <ul>
            {categorias.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "var(--black-color)",
                    }}
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <form onSubmit={searchFragance} className="search-input-container">
        <input
          type="text"
          placeholder="Escribe para buscar una fragancia..."
          required
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <button type="submit" className="btn-search" to={`/buscar`}>
          Buscar
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
