import React from 'react'
import HeaderBurger from './headerBurguer/HeaderBurger';
import FooterNavegacion from './footerNavegacion/FooterNavegacion'
import './Inicio.scss'
import { Link } from "react-router-dom"

 const Inicio = () => {
  return (
    <>
      <HeaderBurger/>

        <div className='contenedorInicio'>
          <img src="./img/logo-applergic-final@3x.png" alt="imagen" className='imagenAlergenosInicio'/>

          <div className='contenedorBotones'>
          <Link to={"/escaneo"}>
          <button className='botonEscanear'> <img src="./img/icons/barcode-w.png" alt="logoEscaneo" className='botonesIconos'/> Escanear</button>
          </Link>
          <p>Escanea un nuevo producto</p>
          
          <button className='botonBuscar'> <img src="./img/icons/search-w.png" alt="logoEscaneo" className='botonesIconos'/> Buscar</button>
            <p>Busca un comercio o restaurante para ti</p>

          <a href="https://www.comunidad.madrid/servicios/112"><button className='botonEmergencia'> <img src="./img/icons/sos.png" alt="logoEscaneo" className='botonesIconos'/> S.O.S</button></a>
          <p>¿Necesitas ayuda urgente? contactanos con emergencias</p>
          </div>
          
        </div>

      <FooterNavegacion></FooterNavegacion>
    </>
    
  )
}
export default Inicio;
