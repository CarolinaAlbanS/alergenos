import { Link } from "react-router-dom";
import "./Portada.scss";
export default function Portada (){
    return (

        <div className="contenedorPortada">
            <h1 className="contenedorPortada__h1">Applergic</h1>

            <p>Mi guía alimentaria</p>
            <Link to={"/bienvenida"}>
            <img className="imagenPortada" src="./img/logoApplergicFigurasGirocut.png" alt="imagen de portada" />
            </Link>
        </div>
    )
}