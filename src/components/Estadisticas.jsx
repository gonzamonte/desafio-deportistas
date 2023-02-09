import React from "react";
import "./estadisticas.css";
import { getEstadisticas } from "../api/Rule_estadisticas";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Estadisticas() {
  const { id } = useParams();
  const [arrayEstadisticas, setArrayEstadisticas] = useState([]);
  useEffect(() => {
    getEstadisticas(id).then((data) => {
      setArrayEstadisticas(data);
    });
  }, [id]);
  return (
    <div className="total">
      <div className="contInfo">
        <h3>{arrayEstadisticas[0]?.nombre}</h3>
        <div>{arrayEstadisticas[0]?.especialidad}</div>
        <div>Edad: {arrayEstadisticas[0]?.edad}</div>
        <div>Altura:{arrayEstadisticas[0]?.altura}</div>
        <div>Peso:{arrayEstadisticas[0]?.peso}</div>
        <div>Nacionalidad:{arrayEstadisticas[0]?.nacionalidad}</div>
        <div>Record Personal: {arrayEstadisticas[0]?.record}</div>
        <h3>Descripcion</h3>
        <div>{arrayEstadisticas[0]?.descripcion}</div>
      </div>
      <div className="contEstadisticas">
        <h3>Estadisticas</h3>
        <div>Energia:{arrayEstadisticas[0]?.energia}</div>
        <div>Fuerza:{arrayEstadisticas[0]?.fuerza}</div>
        <div>Resistencia:{arrayEstadisticas[0]?.resistencia}</div>
        <div>Agilidad:{arrayEstadisticas[0]?.agilidad}</div>
        <div>Aguante a lesiones: {arrayEstadisticas[0]?.aguante}</div>
        <div>Dedicacion: {arrayEstadisticas[0]?.dedicacion}</div>
        <div>Profesionalismo: {arrayEstadisticas[0]?.profesionalismo}</div>
      </div>
      ;
    </div>
  );
}

export default Estadisticas;
