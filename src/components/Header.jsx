import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
  const [texto, setTexto] = useState("");
  const onChangeInput = (e) => {
    console.log(e);
    setTexto(e.target.value);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="./imgs/logo.jpg" alt="logo" className="imgLogo" />
      </Link>
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar"
          className="buscar"
          onChange={onChangeInput}
        />
        <button
          className="botonBuscar"
          onClick={() => {
            props.filtrar(texto);
            console.log(texto);
          }}
        >
          BUSCAR
        </button>
      </div>
    </div>
  );
}

export default Header;
