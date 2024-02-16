import React, { useEffect, useState } from "react";
import "./Diario.scss";
import axios from "axios";

const Diario = () => {
  const id = localStorage.getItem("id");
  const userToken = localStorage.getItem("token");

  console.log(id);
  const [diario, setDiario] = useState([]);

  useEffect(() => {
    const getDiario = async () => {
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      const alimento = res.data.data.diario;
      setDiario(alimento);
      console.log(diario);
    };
    getDiario();
  }, []);
  console.log(diario);

  const eliminarNota = async (index) => {
    const res2 = await axios.patch(
      `http://localhost:3001/users/${id}`,
      { diario: diario },
      { headers: { Authorization: `Bearer ${userToken}` } }
    );
    console.log(res2);
  };
  return (
    <div>
      <div>
        {diario.map((nota, index) => (
          <div key={index}>
            <p>{nota.fecha}</p>
            <p>{nota.comentario}</p>
            <div>
              {nota.producto.map((alimento, index) => (
                <div key={index}>
                  <p>{alimento.name}</p>
                  <img src={alimento.image} />
                  <button
                    onClick={() => {
                      eliminarNota(alimento.id);
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
      <div>for</div>
    </div>
  );
};

export default Diario;
