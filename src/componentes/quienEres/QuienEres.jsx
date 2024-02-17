import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./QuienEres.scss";

const QuienEres = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await axios.post("http://localhost:3001/users/create", data);
      const cli = res.data.data._id;
      console.log(cli);
      localStorage.setItem("id", cli);
      navigate("/confirCuenta");
    } catch (error) {
      console.error("fallo en la llamada", error);
    }
  };

  return (
    <div className="quien">
      <div className="quien-top">
        <Link to="/login" className="quien-top__link">
          <img src="/img/icons/angle-left_10513349.png" alt="icono volver" />
          volver
        </Link>
        <p className="quien-top__pag">1 de 5</p>
      </div>

      <h1 className="quien__title">Dinos quien eres</h1>

      <form className="quien-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="quien-form-file" htmlFor="imgInput">
          <img
            src="/img/icons/camera1.png"
            className="quien-form-file__img"
            alt="icono camara"
          />
          Sube tu imagen
          <input
            className="quien-form-file__input"
            type="file"
            name="img"
            id="imgInput"
            accept="image/png, image/jpg"
          />
        </label>

        <input
          className="quien-form__input"
          type="text"
          id="name"
          {...register("name", { required: true })}
          placeholder="Nombre"
        ></input>
        <label htmlFor="email"></label>
        <input
          className="quien-form__input"
          type="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="Dirección de email"
        ></input>

        <label htmlFor="phone"></label>
        <input
          className="quien-form__input"
          type="numbre"
          id="phone"
          {...register("phone", { required: true })}
          placeholder="Móvil"
        ></input>

        <label htmlFor="password"></label>
        <input
          className="quien-form__input"
          type="password"
          id="password"
          {...register("password", { required: true })}
          placeholder="Password"
        ></input>

        <button className="quien-form__btn">Guardar perfil</button>
      </form>
    </div>
  );
};

export default QuienEres;
