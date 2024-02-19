import React from "react";
import "./Compartir.scss";
import { Link } from "react-router-dom";

const Compartir = () => {
  const linkApp = "http://localhost:3000/";
  return (
    <div className="contenedorTituloCompartir">
      <div>
        <Link to="/inicio" className="volver">
          <img
            className="indice"
            src="./img/icons/angle-left_10513349.png"
            alt="flecha"
          ></img>{" "}
          Volver
        </Link>
      </div>
      <h1 className="tituloCompartir">
        Comparte nuestra app con tus conocidos:
      </h1>
      <div className="containerCompartir">
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
          <img
            className="imagenCompartir"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt="Gmail"
          />
          <p>Gmail</p>
        </a>

        <a href="https://www.whatsapp.com/?lang=es_LA">
          <img
            className="imagenCompartir"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="Whatsapp"
          />
          <p>Whatsapp</p>
        </a>

        <a href="https://www.instagram.com/?hl=es">
          <img
            className="imagenCompartir"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt="Instagram"
          />
          <p>Instagram</p>
        </a>

        <a href="https://twitter.com/?lang=es">
          <img
            className="imagenCompartir"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/450px-X_logo_2023.svg.png"
            alt="Twitter"
          />
          <p>Twitter</p>
        </a>

        <a href="https://es.linkedin.com/?src=go-pa&trk=sem-ga_campid.18146679037_asid.140850334975_crid.619061882350_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9061037&mcid=6968657504633266178&cid=&gad_source=1&gclid=CjwKCAiArLyuBhA7EiwA-qo80HDi_rS4ogqNgbbDNhFtRH7l3wbu_d-nMkAqaxi-dglSX8n7nnZtvhoCKX4QAvD_BwE&gclsrc=aw.ds">
          <img
            className="imagenCompartir"
            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
            alt="Tiktok"
          />
          <p>Linkedin</p>
        </a>

        <a href="https://www.facebook.com/?locale=es_ES">
          <img
            className="imagenCompartir"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
          />
          <p>Facebook</p>
        </a>
      </div>
    </div>
  );
};

export default Compartir;
