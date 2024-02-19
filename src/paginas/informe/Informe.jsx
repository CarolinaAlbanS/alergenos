import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "./Informe.scss";
import axios from "axios";

const Informe = () => {
  const [t, i18n] = useTranslation("global");
  const [user, setUser] = useState();
  const [diary, setDiary] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (!userId || !token) {
      navigate("/login");
    }
    const getUser = async () => {
      if (!userId) {
        return;
      }
      const userRes = await axios.get(`http://localhost:3001/users/${userId}`);
      setUser(userRes.data.data);
      setDiary(userRes.data.data.diario);
    };

    getUser();
  }, []);

  console.log(diary);
  return (
    <div className="informe-wrapper">
      <div className="informe">
        <div className="informe-top">
          <div className="informe-top-btns">
            <button
              className="informe-top-btns__btn"
              onClick={() => i18n.changeLanguage("es")}
            >
              ES
            </button>
            <button
              className="informe-top-btns__btn"
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </div>
          <img
            className="informe-top__close"
            src="/img/icons/close.png"
            alt="icono cerrar"
            onClick={() => navigate(-1)}
          />
        </div>

        {user && (
          <div className="informe-data">
            <span className="informe-data__title">
              {t("diario.This is the report based on your Diary")}
            </span>
            <p className="informe-data__date">
              {t("diario.Activity for the month of November 2023")}
            </p>
            <span className="informe-data__lang">{t("diario.Spanish")}</span>

            <div className="informe-data-user">
              <p className="informe-data-user__name">
                {t("diario.Name")}: {user.name}
              </p>
              <p className="informe-data-user__aller">
                <span>{t("diario.Allergies")}</span>:{" "}
                {user.allergens.join(", ")}
              </p>
            </div>
            <p>{t("diario.Date November 8, 2023")}</p>
            <p>{t("diario.products")}</p>

            <ul className="informe-data-ul">
              {diary &&
                diary.map((entry, index) => (
                  <li className="informe-data-ul-li" key={index}>
                    <img
                      className="informe-data-ul-li__img"
                      src={entry.producto[0].image}
                      alt={entry.producto[0].name}
                    />
                    <div className="informe-data-ul-li-info">
                      <span>{entry.producto[0].name}</span>
                      <p>{entry.comentario}</p>
                    </div>
                    <p className="informe-data-ul-li-info__p">
                      {t("diario.Ingredients")}:{" "}
                      {entry.producto[0].ingredients.join(", ")}
                    </p>
                  </li>
                ))}
            </ul>

            <Link className="informe__link" to="/inicio">
              Volver
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Informe;
