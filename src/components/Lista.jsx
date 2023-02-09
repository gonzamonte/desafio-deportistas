import React from "react";
import "./lista.css";
import Cuadradito from "./Cuadradito";

function Lista(props) {
  return (
    <div className="cont-cuadrados">
      {props.listaDeportistas.map((deportista, indice) => {
        return <Cuadradito key={indice} deportista={deportista} />;
      })}
    </div>
  );
}

export default Lista;
