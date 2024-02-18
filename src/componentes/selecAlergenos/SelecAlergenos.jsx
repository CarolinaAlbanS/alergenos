//hago un array con todos los alergenos dentro el recorreocon un for y hago un boton que filtre
// por cada una de las primera letras que hay
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlergenosContext } from "../../context/context";
import './SelecAlergenos.scss';

const SelecAlergenos = () => {

  const alimentos = {
    A: [
      "Ácido benzoico",
      "Almendras",
      "Altramuces",
      "Anacardos",
      "Apio",
      "Arroz",
      "Avellana",
    ],
    C: ["Cacahuetes", "Cacao", "Castaña", "Cereales", "Coco", "Crustaceos"],
    F: [
      "Fenilalanina",
      "Fibras",
      "Fresas",
      "Fructosa",
      "Frutas",
      "Frutos con cáscara",
      "Frutos rojos",
    ],
    G: ["Gelatina", "Gisante", "Glucosa", "Gluten"],
    H: ["Huevo"],
    K: ["Kiwi"],
    L: ["Lactos", "Leche", "Legumbres", "Lentejas", "Lino", "LTP"],
    M: ["Maiz", "Marisco", "Melocotón", "Moluscos", "Moztaza"],
    N: ["Nueces"],
    P: ["Pescado", "Piñones", "Pistachos", "Plátanos"],
    R: ["Rosaceas"],
    S: ["Sésamo", "Soja", "Sorbitol", "Sulfitos"],
    T: ["Tomate", "Trazas", "Trigo"],
    U: ["Uva"],
    V: ["Vitamina D", "Vitamina E"],
    Y: ["Yuca"],
  };

  const { alergias, setAlergias } = useContext(AlergenosContext);
  const [activeLetters, setActiveLetters] = useState([]);


  
  const handleInputChange = (e, alimento) => {
    //si no está añadido, añadir
    if(!alergias.includes(alimento)) {
      setAlergias([...alergias, alimento]);
      e.currentTarget.classList.add('alerg-list-section-btns__btn--selected');

      //sinó eliminar
    } else {
      const index = alergias.indexOf(alimento);
      const newAlergias = [...alergias];
      newAlergias.splice(index, 1);
      setAlergias(newAlergias);
      e.target.classList.remove('alerg-list-section-btns__btn--selected');
    }
  };

  useEffect(()=>{
    //crear array de letras seleccionadas
    const newActiveLetters = new Set(activeLetters);

    alergias.forEach(al => {
      if (!newActiveLetters.has(al[0])) {
        newActiveLetters.add(al[0]);
        setActiveLetters([...newActiveLetters]);
      } 
    });

    console.log(newActiveLetters)
    console.log(alergias)
    //añadir clase y su href coincide con algún valor del array previo
    function checkSelectedLetters() {
      const letters$$ = document.querySelectorAll('.alerg-index-letter__a');
      letters$$.forEach(lttr => {
        const lttrStr = lttr.getAttribute('href').split('').pop();
        if(activeLetters.includes(lttrStr)) {
          lttr.classList.add('selected');
        }
      })
    }
    checkSelectedLetters();
  }, [alergias, activeLetters])


  const checkIsOpen = (e) => {
      e.currentTarget.children[0].children[1].classList.toggle('alerg-list-section__letter__arrow--open')
  }

  

  return (
    <div className="alerg">

      <div className="alerg-top">
        <Link to="/login" className="alerg-top__link">
          <img src="/img/icons/angle-left_10513349.png" alt="icono volver"/>
          volver
        </Link>
        <p className="alerg-top__pag">3 de 5</p>
      </div>

      <h1 className="alerg__title">Ahora selecciona tus alergias e intolerancias</h1>

      <p className="alerg__subtitle">Los elementos marcados serán identificados en tus búsquedas como peligrosos para ti</p>


      <div className="alerg-index">
        {Object.keys(alimentos).map((categoria, index) => (
          <div key={index} className="alerg-index-letter">
            <a href={`#${categoria}`} className="alerg-index-letter__a">{categoria}</a>
          </div>
        ))}
      </div>


      <div className="alerg-list">
        {Object.keys(alimentos).map((categoria, index) => (

          <details className="alerg-list-section" key={index} open onToggle={checkIsOpen}>
            <summary id={categoria} className="alerg-list-section__letter">
              <span>{categoria}</span>
              <img 
                src="./img/icons/angle-left_10513349.png" 
                alt="icono desplegar"
                className="alerg-list-section__letter__arrow"
                />
            </summary> 

            <div className="alerg-list-section-btns">
              {alimentos[categoria].map((alimento, index) => (
                
                <button  
                  onClick={(e) => handleInputChange(e, alimento)} 
                  key={index}
                  className="alerg-list-section-btns__btn">
                  {alimento}
                </button>
                
              ))}
            </div>            
          </details>
        ))}
      </div>

      <Link to="/confirmacion">
        <button className="alerg__btn">Guardar</button>
      </Link>

    </div>
  );
};

export default SelecAlergenos;
