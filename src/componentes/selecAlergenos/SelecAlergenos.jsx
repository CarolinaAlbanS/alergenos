//hago un array con todos los alergenos dentro el recorreocon un for y hago un boton que filtre
// por cada una de las primera letras que hay
import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlergenosContext } from "../../context/context";

const SelecAlergenos = () => {
  const alimentos = {
    A: [
      "Ácido benzoico",
      "Almendras",
      "Altramuces",
      "Anacardos",
      "Apio",
      "Arroz",
      "Avellana",
    ],
    C: ["Cacahuetes", "Cacao", "Castaña", "Cereales", "Coco", "Crustaceos"],
    F: [
      "Fenilalanina",
      "Fibras",
      "Fresas",
      "Fructosa",
      "Frutas",
      "Frutos con cáscara",
      "Frutos rojos",
    ],
    G: ["Gelatina", "Gisante", "Glucosa", "Gluten"],
    H: ["Huevo"],
    K: ["Kiwi"],
    L: ["Lactos", "Leche", "Legumbres", "Lentejas", "Lino", "LTP"],
    M: ["Maiz", "Marisco", "Melocotón", "Moluscos", "Moztaza"],
    N: ["Nueces"],
    P: ["Pescado", "Piñones", "Pistachos", "Plátanos"],
    R: ["Rosaceas"],
    S: ["Sésamo", "Soja", "Sorbitol", "Sulfitos"],
    T: ["Tomate", "Trazas", "Trigo"],
    U: ["Uva"],
    V: ["Vitamina D", "Vitamina E"],
    Y: ["Yuca"],
  };
  const id = localStorage.getItem("id");
  const { alergias, setAlergias } = useContext(AlergenosContext);

  const handleInputChange = (alimento) => {
    setAlergias([...alergias, alimento]);
    console.log(alergias);
  };

  return (
    <div>
      <div>
        {Object.keys(alimentos).map((categoria, index) => (
          <div key={index}>
            <a href={`#${categoria}`}>{categoria}</a>
          </div>
        ))}
      </div>
      <div>
        {Object.keys(alimentos).map((categoria, index) => (
          <div key={index}>
            <p id="categoria">{categoria}</p>
            <div>
              {alimentos[categoria].map((alimento, index) => (
                <div onClick={() => handleInputChange(alimento)} key={index}>
                  <button>{alimento}</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link to="/confirmacion">
        <button>Guardar</button>
      </Link>
    </div>
  );
};

export default SelecAlergenos;
