import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.scss';

const Login = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  // useEffect(() => {}, []);

  //se ejecuta al enviar formulario
  const onSubmit = async (data) => {
    try {
      const res = await axios
        .post("http://localhost:3001/users/authenticate", data)
        .then((res) => {
          localStorage.setItem("id", res.data.data.user._id);
          localStorage.setItem("token", res.data.data.token);
        });

      navigate("/inicio");
    } catch (error) {
      console.error("Error en la peticion", error);
    }
  };
  return (
    <div className="login">

      <div className="login-portada">
        <img className="login-portada__img" src="/img/image@3x.png" alt="portada login: imagen de comida"/>
      </div>

      <div className="login-wrap">
        <div className="login-wrap-txt">
          <h2 className="login-wrap-txt__h2">¡Bienvenido de nuevo!</h2>
          <p>Por favor, introduce tus datos para continuar,</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            // onInput={handleSubmit(onSubmit)}
            placeholder="Dirección de email"
          ></input>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            // onInput={handleSubmit(onSubmit)}
            placeholder="Password"
          ></input>
          <Link to="/contrseña">
            <p>¿OLvidaste tu contraseña?</p>
          </Link>
          <button>Entrar</button>
        </form>
        <div>
          <p>¿nuevo en Applergic?</p>
          <Link to="/registro">
            <h4>Crea tu cuenta aquí</h4>
          </Link>
          <Link to="/inicio">
            <p>Me registraré en otro momento</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
