import React, { useContext, useState } from "react";
import SelecAlergenos from "../selecAlergenos/SelecAlergenos";
import { AlergenosContext } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import './ConfirAlergenos.scss';


const ConfirAlergenos = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const { alergias, setAlergias } = useContext(AlergenosContext);

  const eliminarAlergia = (index) => {
    const nuevasAlergias = [...alergias];
    nuevasAlergias.splice(index, 1);
    setAlergias(nuevasAlergias);
  };

  console.log(alergias);
  const handleSubmit = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:3001/users/${id}`,
        { allergens: alergias },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res);
      navigate("/finishRegistro");
    } catch (error) {
      console.error("Error rn la peticion", error);
    }
  };

  return (
    <div className="confiAlergia">
      <div className="confiAlergia-superior">
        <Link to="/alergenos" className="confiAlergia-superior__link">
          <img src="/img/icons/angle-left_10513349.png" alt="icono volver" />
          volver
        </Link>
        <p className="confiAlergia-superior__pag">3 de 5</p>
      </div>
      <div className="confiAlergia-texto">
        <h1 className="confiAlergia-texto__titulo">Confirma tu elección.</h1>
        <p className="confiAlergia-texto__p">
          A continuación te reunimos los alimentos registrados como peligrosos
          para ti.
        </p>
      </div>
      <div className="confiAlergia-botones">
        {alergias.map((alergia, index) => (

          <div onClick={() => eliminarAlergia(index)} key={index}>
            <button className="confiAlergia-botones__boton">{alergia}</button>
          </div>
        ))}
      </div>
      <div className="confiAlergia-buttons">
        <Link to="/alergenos">
          <button className="confiAlergia-buttons__button">
            Añadir nuevos
          </button>
        </Link>


        <button onClick={handleSubmit} className="confiAlergia-buttons__button">
          Confirmar
        </button>

      </div>
    </div>
  );
};

export default ConfirAlergenos;
