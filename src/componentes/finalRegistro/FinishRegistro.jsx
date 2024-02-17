import React from "react";
import { Link } from "react-router-dom";
import "./FinishRegistro.scss";

function FinishRegistro() {
  return (
    <div className="final">
      <div className="final-superior">
        <Link to="/confirmacion" className="final-superior__link">
          <img src="/img/icons/angle-left_10513349.png" alt="icono volver" />
          volver
        </Link>
        <p className="final-superior__p">5 de 5</p>
      </div>
      <div className="final-foto">
        <img class="final-foto__img" src="./img/ok@3x.png" alt="logo"></img>
      </div>
      <h1 className="final__title">
        Hemos terminado,ya puedes escanear tu primer producto
      </h1>
      <div className="final__button">
        <Link to="/escaneo" className="escanear">
          Escanea un producto
        </Link>
      </div>
    </div>
  );
}

export default FinishRegistro;
