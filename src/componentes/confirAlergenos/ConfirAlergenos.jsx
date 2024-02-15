import React, { useContext, useState } from "react";
import SelecAlergenos from "../selecAlergenos/SelecAlergenos";
import { AlergenosContext } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ConfirAlergenos = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const { alergias } = useContext(AlergenosContext);
  const handleSubmit = async () => {
    try {
      const res = await axios.patch(`http://localhost:3001/users/${id}`, {
        allergens: alergias,
      });
      navigate("/finalRegistro");
    } catch (error) {
      console.error("Error rn la peticion", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Confirma tu elección.</h1>
      </div>
      <div>
        <p>
          A continuación te serumimos los alimentos registrados como peligrosos
          para ti.
        </p>
      </div>
      <div>
        {alergias.map((alergia, index) => (
          <div key={index}>
            <button>{alergia}</button>
          </div>
        ))}
      </div>
      <Link to="/alergenos">
        <button>Añadir</button>
      </Link>
      <div>
        <button onClick={handleSubmit}>Confirmar</button>
      </div>
    </div>
  );
};

export default ConfirAlergenos;
