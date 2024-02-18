import React from "react";
import "./satisfacion.scss"
import { Link } from "react-router-dom";

const Satisfacion = () => {
    return (
        <div>
             <Link to="/inicio" className="inicio">
      <img  className="indice"src="./img/icons/angle-left_10513349.png" alt="flecha"></img> Volver
      </Link>
        <h1 className="gracias">Gracias por su valoración</h1>
        <div className="sonrisita">
        <img  className="indice1"src="./img/icons/sonira3.png" alt="flecha"></img>
        </div>
        </div>
        )
    };
    
    export default Satisfacion;