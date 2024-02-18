import "./HeaderBarList.scss";
import { Link } from "react-router-dom";

export default function BurgerBar() {
  return (
    <div className="burger">
    <nav>
      <ul className="listaHeaderBarList">
        <div className="iconoRutaBarList">
        <Link to={"/perfil"} className="perfil">
          <li className="liHeaderBarList">
            {" "}
            <img
              src="./img/icons/user.png"
              alt="logo"
              className="imagenHeaderBarList"
            />{" "}
          <p>Perfil</p>
          </li>
        </Link>
        </div>
        <div className="iconoRutaBarList">
        <Link to={"/favoritos"} className="links">
          <li className="liHeaderBarList">
            {" "}
            <img
              src="./img/icons/star_1.png"
              alt="logo"
              className="imagenHeaderBarList"
            />{" "}
            Favorito
          </li>
        </Link>
        </div>
        <div className="iconoRutaBarList">
        <Link to={"/diario"}>
          <li className="liHeaderBarList">
            {" "}
            <img
              src="./img/icons/diary.png"
              alt="logo"
              className="imagenHeaderBarList"
            />{" "}
            Diario
          </li>
        </Link>
        </div>
        <div className="iconoRutaBarList">
        <Link to={"/compartir"}>
          <li className="liHeaderBarList">
            {" "}
            <img
              src="./img/icons/share.png"
              alt="logo"
              className="imagenHeaderBarList"
            />
            Compartir
          </li>
        </Link>
        </div>
          <div className="iconoRutaBarList">
             <Link to={"/informe"}>
           
             <li className="liHeaderBarList"> <img src="./img/icons/translation.png" alt="logo" className="imagenHeaderBarList" />Informe </li>
             </Link>
             </div>
             <div className="iconoRutaBarList">
             <Link to={"/valoracion"}>
             
                <li className="liHeaderBarList"> <img src="./img/icons/added.png" alt="logo" className="imagenHeaderBarList" /> Valoracion</li>
             </Link>
             </div>
             <div className="iconoRutaBarList">
             <Link to={"/terminos"}>
             
                <li className="liHeaderBarList"> <img src="./img/icons/terms.png" alt="logo" className="imagenHeaderBarList" /> Terminos</li>
             </Link>
             </div>
             
           <Link to={"/logout"}>



            
                    <li className="liHeaderBarList">
                      {" "}
                      <img
                        src="./img/icons/exit.png"
                        alt="logo"
                        className="imagenHeaderBarList"
                      />{" "}
                      Salir
                    </li>

                </Link>

         </ul>
        </nav>
      </div>
    )
}

      


