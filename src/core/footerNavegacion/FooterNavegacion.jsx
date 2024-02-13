import { Link } from "react-router-dom"
import "./FooterNavegacion.scss"

export default function NavBar(){
    return (
        <nav>
    <ul className="lista-footer">
     <Link to={"/inicio"}>
        <li> <img src="./img/icons/home.png" alt="Home" className="imagen-footer"/> </li>
        </Link>
            <Link to={"/favoritos"}>
         <li> <img src="./img/icons/star_1.png" alt="Favoritos" className="imagen-footer"/> </li>
         </Link>
         <Link to={"/diario"}>
        <li> <img src="./img/icons/diary.png" alt="Diario" className="imagen-footer"/> </li>
        </Link>

        <li> <a href="https://wetransfer.com/"><img src="./img/icons/share.png" alt="Compartir" className="imagen-footer"/></a>  </li> 
    </ul>
</nav>
    ) 
}

