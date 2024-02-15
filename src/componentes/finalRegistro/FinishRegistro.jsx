import React from 'react'
import { Link } from "react-router-dom";
import "./FinishRegistro.scss";


function FinishRegistro() {
  return (
    <div>
    <div className='volver2'>
     <Link to="/escaneo" className="volver1">
        Volver
      </Link>
      <p className='paginacion4'>4 de 4</p>
      <Link to="/escaneo" className="x1">
        X
      </Link>
      </div>
      <div className='foto1'>
      <img class="picture1"src= "./img/ok@3x.png" alt="logo"></img>
      </div>
      <h1 className='titleone'>Hemos terminado,ya puedes escanear tu primer producto</h1>
      <div className='botonir'>
      <Link to="/escaneo" className="escanear">
        Escanea un producto
      </Link>
      </div>
    </div>
  )
}

export default FinishRegistro
