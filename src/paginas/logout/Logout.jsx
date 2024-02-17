import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Logout.scss";

const Logout = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(id);
  const navigate = useNavigate();
  const handleLogout = async (id) => {
    const res = await axios.post("http://localhost:3001/users/logout");
    navigate("/");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
  };

  return (
    <div className="logout">
      <h2 className="logout__titulo">
        ¿Estas seguro que quieres cerrar sesion?
      </h2>
      <div className="logout-botones">
        <button className="logout-botones__boton1" onClick={handleLogout}>
          Si
        </button>
        <div className="logout-botones__boton2">
          <Link to="/inicio">No</Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
