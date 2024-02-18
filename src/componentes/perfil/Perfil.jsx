import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Perfil.scss";

function Perfil() {
  const [userData, setUserData] = useState({});
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  useEffect(() => {
    if (!userId || !token) {
      navigate("/login");
    }
    async function perfil() {
      if (!userId) {
        return;
      }
      try {
        const usuario = await axios.get(
          `http://localhost:3001/users/${userId}`
        );
        console.log(usuario.data.data);
        setUserData(usuario.data.data);
      } catch (error) {
        console.error("Error :", error);
      }
    }
    perfil();
  }, []);

  return (
    <div className="contenedorMovilPerfil">
      <div className="containerInicioTitulo">
        <Link to="/inicio" className="Linkkinicio">
          <img
            src="./img/icons/angle-left_10513349.png"
            alt="Home"
            className="imagen-inicio"
          />{" "}
          <p>Volver</p>
        </Link>
      </div>

      <h1 className="hola-perfil">Bienvenid@ {userData.name}</h1>

      <section className="seccionPerfil">
        <div className="img1">
          <img src={userData.img} alt="perfil" className="imagenProducto" />
        </div>

        <div className="containerPerfil">
          <div className="containerTexto">
            <div className="datos">
              {/* <h3>{userData.name}</h3> */}
              <div>
                <h4>Email:</h4> <p>{userData.email}</p>
              </div>
              <div className="datosPerfil"></div>
              <h4>Mis alergias:</h4>
              {userData?.allergens?.map((users, index) => (
                <p key={index}>{users}</p>
              ))}
            </div>
            <div className="favorits">
              <h4>Favoritos:</h4>
              {userData?.favorites?.map((users, index) => (
                <p key={index}>{users}</p>
              ))}
            </div>

            {userData.emergency && (
              <div className="contactoEmergencia">
                <h4>Contacto de emergencia:</h4>
                <p>Nombre:</p>
                <p>{userData.emergency.name}</p>
                <p>Telefono:</p>
                <p>{userData.emergency.phone}</p>
                <p>Compañia:</p>
                <p>{userData.emergency.seguro}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Perfil;
