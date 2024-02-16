import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ConfirCuenta = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios
        .post("http://localhost:3001/users/authenticate", data)
        .then((res) => {
          localStorage.setItem("id", res.data.data.user._id);
          localStorage.setItem("token", res.data.data.token);
        });
      console.log(res);

      navigate("/emergencia");
    } catch (error) {
      console.error("Error en la peticion", error);
    }
  };
  return (
    <div>
      <div>
        <h1>Confirmanos tu email y contraseña</h1>
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
        <button>Confirmar</button>
      </form>
    </div>
  );
};

export default ConfirCuenta;
