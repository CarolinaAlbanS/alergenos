import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Perfil.scss";

function Perfil() {
  const [userData, setUserData] = useState({});
  const userId = localStorage.getItem("id");
  useEffect(() => {
    async function perfil() {
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
    <div>
      <div className="btn1">
        <Link to="/inicio" className="favoritos">
          Inicio
        </Link>
        <Link to="/favoritos" className="inicio">
          Favoritos
        </Link>
      </div>
      <h1 className="hola-perfil">Hola soy...</h1>
      <div className="img1">
        <img src={userData.img} alt="perfil" />
      </div>
      <div className="datos">
        <h3>{userData.name}</h3>
        <p>Email: {userData.email}</p>
      </div>
      <div className="datosPerfil">
        <h4>Tengo alergia:</h4>
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
      
      {userData.emergency && <div className="contactoEmergencia">
        <h4>Contacto de emergencia:</h4>
        <p>Nombre:</p>
        <p>{userData.emergency.name}</p>
        <p>Telefono:</p>
        <p>{userData.emergency.phone}</p>
        <p>Compañia:</p>
        <p>{userData.emergency.seguro}</p>
      </div>}
    </div>
  );
}

export default Perfil;
