import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Emergencia = () => {
  const id = localStorage.getItem("id");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.patch(`http://localhost:3001/users/${id}`, data);
      console.log(res);
      navigate("/alergenos");
    } catch (error) {
      console.error("fallo en la llamada:", error);
    }
  };

  return (
    <div>
      <div>
        <Link to="/login">volver</Link>
      </div>
      <div>
        <p>2 de 4</p>
        <h1>Vamos a añadir tu contacto en caso de emergencia.</h1>
        <h4>
          Nos pondremos en contacto con tu persona de confianza y/o compañia de
          seguros en caso de emergencia.
        </h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label html="name"></label>
        <input
          type="text"
          id="name"
          {...register("emergency.name", { required: true })}
          placeholder="Dirección de email"
        ></input>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          {...register("emergency.email", { required: true })}
          placeholder="Dirección de email"
        ></input>
        <label htmlFor="phone"></label>
        <input
          type="numbre"
          id="phone"
          {...register("emergency.phone", { required: true })}
          placeholder="Móvil"
        ></input>
        <label htmlFor="seguro"></label>
        <input
          type="text"
          id="seguro"
          {...register("emergency.seguro", { required: true })}
          placeholder="Compañia de seguros ó Nº poliza"
        ></input>
        <button>Guardar</button>
      </form>
      <Link to="/inicio">
        Registrar mi contacto de emergencias en otro momento
      </Link>
    </div>
  );
};

export default Emergencia;
