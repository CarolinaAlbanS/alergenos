import "./HeaderBarList.scss"

export default function BurgerBar(){
    return(
        <nav>
            <ul className="listaHeaderBarList">
             <li> <img src="./img/icons/user.png" alt="logo" className="imagenHeaderBarList" /> Perfil</li>
             <li> <img src="./img/icons/star_1.png" alt="logo" className="imagenHeaderBarList" /> Favorito</li>
             <li> <img src="./img/icons/diary.png" alt="logo" className="imagenHeaderBarList" /> Diario</li>
             <li> <img src="./img/icons/share.png" alt="logo" className="imagenHeaderBarList" /> Compartir</li>
             <li> <img src="./img/icons/translation.png" alt="logo" className="imagenHeaderBarList" /> Traductor</li>
             <li> <img src="./img/icons/terms.png" alt="logo" className="imagenHeaderBarList" /> Terminos</li>
             <li> <img src="./img/icons/exit.png" alt="logo" className="imagenHeaderBarList" /> Salir</li>
         </ul>
        </nav>
    )
}