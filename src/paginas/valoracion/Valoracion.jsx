import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../../src/assets/logoApplergicFigurasGiro@3x.png";
import "./Valoracion.scss";
import { FaStar } from "react-icons/fa";

function Valoracion() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
    <div className="volver">
      <Link to="/escaneo" className="escaneo">
        Volver
      </Link>
      </div>
      <div className="logo1">
      <img src={logo1} alt="logo"></img>
      </div>
      <h4 class="titleh4">¡Gracias por usar Applergic!</h4>
      <h5 class="titleh5">Por favor,evalua tu experiencia.</h5>
      <div className="estrellas">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="star"
              size={50}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      </div>
      <div className="sugerencias1">
      <a class="sugerencias" href=" enviar sugerencias" title="enviar">
        Enviar sugerencias
      </a>
      </div>
    </div>
    
  );
}

export default Valoracion;
