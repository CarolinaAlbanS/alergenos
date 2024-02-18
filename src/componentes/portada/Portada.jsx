import { Link } from "react-router-dom";
import "./Portada.scss";
import {useState} from 'react';

export default function Portada (){
    const [vw, setVw] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>setVw(window.innerWidth));

    return (
        <div className="contenedorPortada">
            <h1 className="contenedorPortada__h1">Applergic</h1>

            <p>Mi guía alimentaria</p>
            <Link to={"/bienvenida"} className="contenedorPortada-link">

            {vw < 500
                ? <img className="imagenPortada" src="./img/logoApplergicFigurasGirocut.png" alt="imagen de portada" />
                : <img className="imagenPortada imagenPortada--desk" src="/img/logoApplergicFigurasGiro@3x.png" alt="imagen portada"/>
            }
            
            </Link>
        </div>
    )
}