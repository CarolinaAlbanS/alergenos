import React, { useRef } from "react";
import { Link } from 'react-router-dom';
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
  
  const options = {
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 4000,
    animateOut: "fadeOut",
    nav: false,
    dots: true,
    center:true,
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

  const imgClick = () => {
    if (owlCarouselRef.current) {
      owlCarouselRef.current.next();
    }
  };


  return (
    <div className="principal">
      <img className="logo" src={logo} alt="logo"/>  
      <OwlCarousel className="owl-theme" {...options} ref={owlCarouselRef}>
        <div class="item1">
          <h4 style={{width:"300px"}}>
            <img src={img1} alt="img1" />
          </h4>
          <p className="title1">¡Bienvenido a Applergic!
          Escanea el código de barras de tus producto y Applergic te dirá si es apto para ti.</p>
        </div>
      
        <div class="item2">
          <h4 style={{ width:"300px"}}>
            <img src={img2} alt="img2" />
          </h4>
          <p className="title2">Lleva tu Diario de compras y actividades.</p>
        </div>
        <div class="item3">
          <h4 style={{height:"300px"}}>
            <img src={img3} alt="img3" />
          </h4>
          <p className="title3">En casa de emergencia nos pondremos en contacto con la persona que nos digas</p>
        </div>
        <div class="item4">
          <h4 style={{  width:"300px"}}>
            <img src={img4} alt="img4" />
          </h4>
          <p className="title4">Viaja a donde quieras.Tendras a tu disposicion un traductor off-line y tu informe de alergías e intolerancias traducido al idioma local.</p>
        </div>
      </OwlCarousel>
      <Link to="/login" className="saltar">Saltar</Link>
      <button className="siguiente" onClick={imgClick}>Siquiente</button>
      
    </div>
  );
};

export default Bienvenida;
