import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h2>¿Estas seguro que quieres cerrar sesion?</h2>
      <div>
        <button onClick={handleLogout}>Si</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default Logout;
