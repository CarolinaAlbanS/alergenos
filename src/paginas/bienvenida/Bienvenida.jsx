import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Bienvenida.scss";
import img1 from "../../../src/assets/scan2.png";
import img2 from "../../../src/assets/rectangle@3x.png";
import img3 from "../../../src/assets/ambulancia@3x.png";
import img4 from "../../../src/assets/viajas2.png";
import logo from "../../../src/assets/logo@3x.png";
import direct from "../../assets/angle-right_10513350.png";



function Bienvenida() {
  let sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (sliderRef) {
      sliderRef.slickNext();
      setCurrentSlide(currentSlide + 1);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className="slider-container">
    <div className="logo">
        <img className="logo" src={logo} alt="imagen1" />
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="item1">
          <img className="item1" src={img1} alt="imagen1" />
          <p className="title">
            ¡Bienvenido a Applergic! Escanea el código de barras de tus
            productos y Applergic te dirá si es apto para ti.
          </p>
        </div>
        <div className="item2">
          <img className="item2" src={img2} alt="imagen2" />
          <p className="title">Lleva tu Diario de compras y actividades.</p>
        </div>
        <div className="item3">
          <img className="item3" src={img3} alt="imagen3" />
          <p className="title">
            En caso de emergencia nos pondremos en contacto con la persona que
            nos digas.
          </p>
        </div>
        <div className="item4">
          <img className="item4" src={img4} alt="imagen4" />
          <p className="title">
            Viaja a donde quieras. Tendrás a tu disposición un traductor offline
            y tu informe de alergias e intolerancias traducido al idioma local.
          </p>
        </div>
      </Slider>
      <div className="botones">
      <Link to="/login" className="saltar">
        Saltar
      </Link>
        {currentSlide === 3 ? (
          <span className="button">
            <Link to="/login">Terminar</Link>
          </span>
        ) : (
          <span className="button" onClick={next}>
            Siguiente <img  className="flecha" src={direct} alt ="log"></img>
          </span>
        )}

      </div>
      
    </div>
  );
}

export default Bienvenida;
