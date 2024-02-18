import React from "react";
import "./Contraseña.scss";
import  { useState } from 'react';
import { Link } from "react-router-dom";

const Contraseña = () => {

  const [inputValue, setInputValue] = useState('');

  const MostrarAlerta = () =>{
     if(inputValue.trim() !== ''){
      alert("Revise su correo");
     }
    
  } 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }; 

  return (
    <section>
        <Link to={"/inicio"}>
      <div className="containerVolver">
        <img className="imgVolverContraseña" src="./img/icons/angle-left_10513349.png" alt="volver" />
        <p>Volver</p>
      </div>
      </Link>
        <div className="containerContraseña">
      <h3 className="h3Contraseña">¿Has olvidado tu contraseña?</h3>
      <h5>Introcuce tu email y restablecela</h5>
      <input type="text" className="inputContraseña" placeholder="email" value={inputValue} onChange={handleInputChange} ></input>
      <button type="submit" className="botonContraseña" onClick={MostrarAlerta} disabled={inputValue.trim() === ''}>Submit</button>
    </div>
    </section>
    
  );
};

export default Contraseña;
