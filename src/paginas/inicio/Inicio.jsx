import React from 'react'
import HeaderBurger from './headerBurguer/HeaderBurger';
import FooterNavegacion from './footerNavegacion/FooterNavegacion'
import './Inicio.scss'
import { Link } from "react-router-dom"
import { useState } from 'react';

 const Inicio = () => {
    const [OpenTlf, setOpenTlf] = useState(false)

    const toggleTlf = () => {
      setOpenTlf(!OpenTlf);
    }
  return (
    <>
      <HeaderBurger/>

        <div className='contenedorInicio'>
          <img src="./img/logo-applergic-final@3x.png" alt="imagen" className='imagenAlergenosInicio'/>

          <div className='contenedorBotones'>

            <Link to={"/escaneo"}>
              <button className='botonEscanear'> <img src="./img/icons/barcode-w.png" alt="logoEscaneo" className='botonesIconos'/> Escanear</button>
            </Link>

            <p className='parrafosInicio'>Escanea un nuevo producto</p>
          

            <a href="https://www.google.es/maps/search/restaurantes/@40.7242019,-3.9176994,12z?entry=ttu"><button className='botonBuscar'> <img src="/img/icons/search-w.png" alt="logoBuscar" className='botonesIconos'/> Buscar</button></a>
            <p className='parrafosInicio'>Busca un comercio o restaurante para ti</p>

            <button onClick={toggleTlf} className='botonEmergencia'> <img src="https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/E4ACEB5F-C865-4C45-83DE-64CFE3B27BBE.png" alt="logoEscaneo" className='botonesIconos'/> S.O.S</button>

          {OpenTlf &&  <a className='numeroTelefono' href='112'>Llamar al 112</a>}
         
          <p className='parrafosInicio'>¿Necesitas ayuda urgente? contactamos con emergencias</p>
          </div>
          
        </div>

      <FooterNavegacion></FooterNavegacion>
    </>
    
  )
}
export default Inicio;
