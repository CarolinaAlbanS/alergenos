import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  //   const id = localStorage.getItem("id");
  return (
    <div>
      <h2>¿Estas seguro que quieres cerrar sesion?</h2>
      <div>
        <Link>
          <button to="/portada">Si</button>
        </Link>
        <button>No</button>
      </div>
    </div>
  );
};

export default Logout;
