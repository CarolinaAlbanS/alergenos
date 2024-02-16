import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../../src/assets/scan2.png";
import img2 from "../../../src/assets/rectangle@3x.png";
import img3 from "../../../src/assets/ambulancia@3x.png";
import img4 from "../../../src/assets/viajas2.png";
import logo from "../../../src/assets/logo@3x.png";
import "./Bienvenida.scss";

const Bienvenida = () => {
  const owlCarouselRef = useRef(null);
  const [proximoButton, setProximoButton] = useState(true);
  const [mostrarSiguiente, setMostrarSiguiente] = useState(true);

  const handleSiguiente = () => {
    if (owlCarouselRef.current) {
      owlCarouselRef.current.next();
    }
  };

  const options = {
    items: 3,
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    animateOut: "fadeOut",
    nav: false,
    dots: true,
    center: true,
    margin: 10,
    responsive: {
      1100: {
        items: 2,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };

  const terminarButton = (
    <button className="Terminar">
      <Link to="/login">Terminar</Link>
    </button>
  );

  const siguienteButton = (
    <button className="Siguiente" onClick={handleSiguiente}>
      Siguiente
    </button>
  );

  const handleChanged = (event) => {
    console.log(event.property.value)
    if (
      event &&
      event.type === "changed" &&
      event.property.name === "position"
    ) {
      if (event.property.value === 3) {
        setProximoButton(false);   // Ocultar el botón "Terminar"
        setMostrarSiguiente(false);  // Ocultar el botón "Siguiente"
      } else {
        setProximoButton(true);   // Muestrar el botón "Terminar"
        setMostrarSiguiente(true);  // Muestra el botón "Siguiente"
      }
    }
  };
  return (
    <div className="principal">
      <img className="logo" src={logo} alt="logo" />
      <OwlCarousel
        className="owl-theme"
        {...options}
        ref={owlCarouselRef}
        onChanged={handleChanged}
      >
        <div className="item1">
          <h4 style={{ width: "300px" }}>
            <img src={img1} alt="img1" />
          </h4>
          <p className="title1">
            ¡Bienvenido a Applergic! Escanea el código de barras de tus
            productos y Applergic te dirá si es apto para ti.
          </p>
        </div>

        <div className="item2">
          <h4 style={{ width: "300px" }}>
            <img src={img2} alt="img2" />
          </h4>
          <p className="title2">Lleva tu Diario de compras y actividades.</p>
        </div>
        <div className="item3">
          <h4 style={{ height: "300px" }}>
            <img src={img3} alt="img3" />
          </h4>
          <p className="title3">
            En caso de emergencia nos pondremos en contacto con la persona que
            nos digas.
          </p>
        </div>
        <div className="item4">
          <h4 style={{ width: "300px" }}>
            <img src={img4} alt="img4" />
          </h4>
          <p className="title4">
            Viaja a donde quieras. Tendrás a tu disposición un traductor offline
            y tu informe de alergias e intolerancias traducido al idioma local.
          </p>
        </div>
      </OwlCarousel>
      <Link to="/login" className="saltar">
        Saltar
      </Link>
      {mostrarSiguiente && siguienteButton}
      {!proximoButton && terminarButton}
    </div>
  );
};

export default Bienvenida;
