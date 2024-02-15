import React from 'react'
import {useTranslation} from "react-i18next";


const Diario = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
     <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
     <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
      <div>
      <p>{t("diario.return")}</p>
    <h1>{t("diario.This is the report based on your Diary")}</h1>
    <p>{t("diario.Activity for the month of November 2023")}</p>
    <h1>{t("diario.Spanish")}</h1>
    <p>{t("diario.Name")}</p>
    <p>{t("diario.Allergic to")}</p>
    <p>{t("diario.Date November 8, 2023")}</p>
    <p>{t("diario.New APTOS products included in your diary.")}</p>
    </div>
    </div>
  )
}

export default Diario