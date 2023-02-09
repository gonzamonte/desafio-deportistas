import React from "react";
import "./cuadradito.css";
import { useNavigate } from "react-router-dom";

function Cuadradito(props) {
  const navigate = useNavigate();

  const verMas = (e) => {
    e.preventDefault();
    console.log(props.deportista.imagen);
    console.log("apretaste vermas");
    navigate("/deportistas/buscar/" + props.deportista.id);
  };

  return (
    <div className="card">
      <form onSubmit={verMas}>
        <h5 className="nombre">{props.deportista.nombre}</h5>
        <img
          className="imagenDep"
          src={`/imgs/${props.deportista.imagen}`}
          alt="imagen"
        ></img>
        <h5 className="especialidad">{props.deportista.especialidad}</h5>
        <button className="botonVer">VER MAS</button>
      </form>
    </div>
  );
}

export default Cuadradito;
