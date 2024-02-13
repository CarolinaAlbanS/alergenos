import './HeaderBurger.scss'
import React, { useState } from 'react';
 import BurgerBar from '../HeaderBarList/HeaderBarList'

const HeaderBurger = () => {
//usamos un useState para que se pueda ejecutar los cambios
  const [OpenMenu, setOpenMenu] = useState(false);

  //esta es la constante que nos va a permitir que cuando hagamos click muestre la lista
  const toggleMenu = () => {
    setOpenMenu(!OpenMenu);
  };

  //guardamos el valor de la variable
  let BurgerBarElementos = null;

  //y entonces aqui le estamos diciendo si OpenMenu es true me muestras la lista de enlaces
  if(OpenMenu){
    BurgerBarElementos = (
      <BurgerBar>
       <ul>
          
             <li> <img src="" alt="logo" /> Perfil</li>


             <li> <img src="./img/icons/star_1.png" alt="logo" /> Favorito</li>


             <li> <img src="./img/icons/diary.png" alt="logo" /> Diario</li>


             <li> <img src="" alt="logo" /> Compartir</li>


             <li> <img src="" alt="logo" /> Traductor</li>


             <li> <img src="" alt="logo" /> Terminos</li>


             <li> <img src="" alt="logo" /> Salir</li>
         </ul> 
    </BurgerBar>
    )
  }

  return (
    <div>
        <img src="./img/icons/burguer-menu.png" alt="burgerBar" className='burgerIcon' onClick={toggleMenu}/>
        {BurgerBarElementos}
        

        {/* {OpenMenu && (
        <BurgerBar>
          <ul>
                 <li>Perfil</li>
                 <li>Favorito</li>
                 <li>Diario</li>
                 <li>Compartir</li>
                 <li>Traductor</li>
                 <li>Terminos</li>
                 <li>Salir</li>
             </ul>
        </BurgerBar>
      )} */}
    </div>
      


    
  )
}

export default HeaderBurger
