import "./HeaderBarList.scss"
import { Link } from "react-router-dom"

export default function BurgerBar(){
    return(
        <nav>
            <ul className="listaHeaderBarList">
             
             <li className="liHeaderBarList"> <img src="./img/icons/user.png" alt="logo" className="imagenHeaderBarList" /> Perfil</li>

             <Link to={"/favoritos"} className="links">
             
             <li className="liHeaderBarList"> <img src="./img/icons/star_1.png" alt="logo" className="imagenHeaderBarList" /> Favorito</li>
             </Link>

             <Link to={"/diario"}>
             
             <li className="liHeaderBarList"> <img src="./img/icons/diary.png" alt="logo" className="imagenHeaderBarList" /> Diario</li>
             </Link>

             
             <li className="liHeaderBarList"> <img src="./img/icons/share.png" alt="logo" className="imagenHeaderBarList" /> Compartir</li>

             <Link to={"/traductor"}>
             
             <li className="liHeaderBarList"> <img src="./img/icons/translation.png" alt="logo" className="imagenHeaderBarList" /> Traductor</li>
             </Link>
             <Link to={"/terminos"}>
             
             <li className="liHeaderBarList"> <img src="./img/icons/terms.png" alt="logo" className="imagenHeaderBarList" /> Terminos</li>
             </Link>
             <Link to={"/login"}>
             
             <li className="liHeaderBarList"> <img src="./img/icons/exit.png" alt="logo" className="imagenHeaderBarList" /> Salir</li>
             </Link>
         </ul>
        </nav>
    )
}