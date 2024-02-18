import React, { useEffect, useState } from "react";
import "./Diario.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Diario.scss";

const Diario = () => {
  const [diario, setDiario] = useState([]);

  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(userId);

  useEffect(() => {
    resetDiario();
  }, []);

  const eliminarEntrada = async (entradaId) => {
    try {
      await axios.delete(
        `http://localhost:3001/users/${userId}/diario/${entradaId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      resetDiario();
    } catch (e) {
      console.log(e);
    }
  };
  console.log(diario[0]);

  const resetDiario = async () => {
    const res = await axios.get(`http://localhost:3001/users/${userId}`);
    const alimento = res.data.data.diario;
    setDiario(alimento);
  };

  return (
    <div className="diario">
      <h3 className="diario__title">Diario</h3>
      <div className="diario-grid">
        {diario &&
          diario.map((entrada, index) => (
            <div className="diario-grid-item" key={index}>
              <img
                className="diario-grid-item__imagen"
                src="/img/icons/close.png"
                alt="Eliminar"
                onClick={async () => {
                  eliminarEntrada(entrada._id);
                }}
              />
              <p>{entrada.fecha}</p>
              <p>{entrada.comentario}</p>
              <div>
                {entrada.producto.map((alimento, index) => (
                  <div key={index}>
                    <span className="diario-grid-item__name">
                      {alimento.name}
                    </span>
                    <img
                      src={
                        alimento.image
                          ? alimento.image
                          : "/img/icons/product.jpeg"
                      }
                      alt={alimento.name}
                      className="diario-grid-item__img"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <Link className="diario__boton" to="/informe">
        Generar informe
      </Link>
    </div>
  );
};

export default Diario;
