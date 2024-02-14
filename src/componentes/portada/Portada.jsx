import { Link } from "react-router-dom";
import "./Portada.scss";
export default function Portada (){
    return (
        <div className="ContenedorPortada">
            <h1>Applergic</h1>
            <p>Mi guía alimentaria</p>
            <Link to={"/bienvenida"}>
            <img className="imagenPortada" src="./img/logoApplergicFigurasGiro.png" alt="imagen de portada" />
            </Link>
        </div>
    )
}