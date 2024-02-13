import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, watch } = useForm();

  //se ejecuta al enviar formulario
  const onSubmit = (data) => {
    // try{
    //   const respuesta = await fetch(URL, {
    //     method: 'GET',
    //     HEADERS: {
    //       "content.Type": "application/json",
    //     },
    //     body: JSON.stringify(data)
    //   });
    // }
    // axios. post (loclas hosts, data)
  };
  return (
    <>
      <div>
        <img src="/img/image@3x.png" />
      </div>
      <div>
        <h2>¡Bienvenido de nuevo!</h2>
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
          type="text"
          id="password"
          {...register("password", { required: true })}
          onInput={handleSubmit(onSubmit)}
          placeholder="Password"
        ></input>
        <Link to="/contrseña">
          <p>¿OLvidaste tu contraseña?</p>
        </Link>
        <button type="submit">Entrar</button>
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
    </>
  );
};

export default Login;
