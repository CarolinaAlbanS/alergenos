import React, { useContext, useState } from "react";
import SelecAlergenos from "../selecAlergenos/SelecAlergenos";
import { AlergenosContext } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './ConfirAlergenos.scss'

const ConfirAlergenos = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const { alergias } = useContext(AlergenosContext);
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
    <div className="contenedorConfirmarAlergia">
      <div>
        <h1>Confirma tu elección.</h1>
      </div>
      <div>
        <p>
          A continuación te reunimos los alimentos registrados como peligrosos
          para ti.
        </p>
      </div>
      <div className="contenedorBotonAlergias">
        {alergias.map((alergia, index) => (
          <div key={index}>
            <button className="botonSeleccionAlergia">{alergia}</button>
          </div>
        ))}
      </div>
      <div className="contenedorAñadirConfirmar">
      <Link to="/alergenos">
        <button className="botonAñadirAlergia">Añadir nuevos</button>
      </Link>
      
        <button onClick={handleSubmit} className="botonConfirmarAlergias">Confirmar</button>
      </div>
    </div>
  );
};

export default ConfirAlergenos;
