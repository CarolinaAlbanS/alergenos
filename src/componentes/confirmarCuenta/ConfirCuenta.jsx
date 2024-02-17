import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./ConfirCuenta.scss";

const ConfirCuenta = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios
        .post("http://localhost:3001/users/authenticate", data)
        .then((res) => {
          localStorage.setItem("id", res.data.data.user._id);
          console.log(res.data.data.user._id);
          localStorage.setItem("token", res.data.data.token);
          console.log(res.data.data.token);
        });
      console.log(res);

      navigate("/emergencia");
      // console.log(data);
    } catch (error) {
      console.error("Error en la peticion", error);
    }
  };
  return (
    <div className="confiCuenta">
      <div className="confiCuenta-superior">
        <Link to="/registro" className="confiCuenta-superior__link">
          <img src="/img/icons/angle-left_10513349.png" alt="icono volver" />
          volver
        </Link>
        <p className="confiCuenta-superior__p">2 de 5</p>
      </div>
      <h2 className="confiCuenta__titulo">Confirmanos tu email y contraseña</h2>
      <form
        className="confiCuenta-formulario"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email"></label>
        <input
          className="confiCuenta-formulario__input"
          type="email"
          id="email"
          {...register("email", { required: true })}
          // onInput={handleSubmit(onSubmit)}
          placeholder="Dirección de email"
        ></input>
        <label htmlFor="password"></label>
        <input
          className="confiCuenta-formulario__input"
          type="password"
          id="password"
          {...register("password", { required: true })}
          // onInput={handleSubmit(onSubmit)}
          placeholder="Password"
        ></input>
        <button className="confiCuenta-formulario__button">Confirmar</button>
      </form>
    </div>
  );
};

export default ConfirCuenta;
