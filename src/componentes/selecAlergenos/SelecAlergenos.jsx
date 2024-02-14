//hago un array con todos los alergenos dentro el recorreocon un for y hago un boton que filtre
// por cada una de las primera letras que hay
import React from "react";

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

  return (
    <div>
      <div>
        {Object.keys(alimentos).map((categoria, index) => (
          <div key={index}>
            <button>{categoria}</button>
          </div>
        ))}
      </div>
      <div>
        {Object.keys(alimentos).map((categoria, index) => (
          <div key={index}>
            <p>{categoria}</p>
            <div>
              {alimentos[categoria].map((alimento, index) => (
                <button key={index}>{alimento}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelecAlergenos;
