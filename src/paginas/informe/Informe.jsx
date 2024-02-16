import React, { useEffect, useState } from 'react'
import {useTranslation} from "react-i18next";
import { useNavigate } from 'react-router-dom';
import './Informe.scss';
import axios from 'axios';


const Informe = () => {
  const [t, i18n] = useTranslation("global");
  const [user, setUser] = useState();
  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem('id');
      const userRes = await axios.get(`http://localhost:3001/users/${userId}`);
      setUser(userRes.data.data);
      setDiary(userRes.data.data.diario)

    }

    getUser();
  }, [])

  console.log(diary);
  return (
    <div className='informe-wrapper'>
      <div className='informe'>
        <div className='informe-top'>
          <div className='informe-top-btns'>

            <button className='informe-top-btns__btn' onClick={()=> i18n.changeLanguage("es")}>ES</button>
            <button className='informe-top-btns__btn' onClick={()=> i18n.changeLanguage("en")}>EN</button>
          </div>
          <img className="informe-top__close" src="/img/icons/close.png" alt="icono cerrar" onClick={()=>navigate(-1)}/>   
        </div>

        
        { user &&
          <div className='informe-data'>
            <span className="informe-data__title">{t("diario.This is the report based on your Diary")}</span>
            <p className='informe-data__date'>{t("diario.Activity for the month of November 2023")}</p>
            <span className='informe-data__lang'>{t("diario.Spanish")}</span>

            <div className='informe-data-user'>
              <p className='informe-data-user__name'>{t("diario.Name")}: {user.name}</p>
              <p className='informe-data-user__aller'>{t("diario.Allergies")}: {user.allergies}</p>
            </div>
            <p>{t("diario.Date November 8, 2023")}</p>
            <p>{t("diario.New APTOS products included in your diary.")}</p>

            <ul className='informe-data-ul'>
              { diary && diary.map((entry, index) => (  
                  <li className='informe-data-ul-li' key={index}>

                    <img className='informe-data-ul-li__img' src={entry.producto[0].image} alt={entry.producto[0].name}/>
                    <div className='informe-data-ul-li-info'>
                      <span>{entry.producto[0].name}</span>
                      <p>{entry.comentario}</p>
                    </div>
                    <p>{t("diario.Ingredients")}: {entry.producto[0].ingredients}</p>
                  </li>

                ))
              }
            </ul>

            <button className='informe__btn'>Guardar en PDF</button>
          </div>
        }
          
        
      </div>
    </div>
  )
}

export default Informe