import "./Portada.scss";
export default function Portada (){
    return (
        <div className="ContenedorPortada">
            <h1>Applergic</h1>
            <p>Mi guía alimentaria</p>
            <img className="imagenPortada" src="./img/logoApplergicFigurasGiro.png" alt="imagen de portada" />
        </div>
    )
}