import { Link } from "react-router-dom"
import "./footerNavegation.scss"

export default function NavBar(){
    return (
        <nav>
    <ul>
     <Link to={"/inicio"}>
        <li> <img src="./img/icons/home.png" alt="Home" /> </li>
        </Link>
            <Link to={"/favoritos"}>
         <li> <img src="./img/icons/star_1.png" alt="Favoritos" /> </li>
         </Link>
         <Link to={"/diario"}>
        <li> <img src="./img/icons/diary.png" alt="Diario" /> </li>
        </Link>

        <li> <img src="./img/icons/share.png" alt="Compartir" /> </li> 
    </ul>
</nav>
    ) 
}

