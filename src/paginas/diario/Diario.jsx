import React, { useEffect, useState } from "react";
import "./Diario.scss";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const resetDiario = async () => {
    const res = await axios.get(`http://localhost:3001/users/${userId}`);
    const alimento = res.data.data.diario;
    setDiario(alimento);
  };

  return (
    <div>
      <div>
        {diario &&
          diario.map((entrada, index) => (
            <div key={index}>
              <p>{entrada.fecha}</p>
              <p>{entrada.comentario}</p>
              <div>
                {entrada.producto.map((alimento, index) => (
                  <div key={index}>
                    <p>{alimento.name}</p>
                    <img src={alimento.image} />
                    <button
                      onClick={async () => {
                        console.log(entrada);
                        eliminarEntrada(entrada._id);
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <Link to="/informe">
        <button>Generar informe</button>
      </Link>
    </div>
  );
};

export default Diario;
