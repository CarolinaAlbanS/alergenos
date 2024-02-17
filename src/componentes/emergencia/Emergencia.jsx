import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Emergencia.scss";

const Emergencia = () => {
  const id = localStorage.getItem("id");
  console.log(id);
  const token = localStorage.getItem("token");
  console.log(token);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.patch(
        `http://localhost:3001/users/${id}`,
        { emergency: [data] },
        { headers: { Authorization: `Bearer ${token}` } },
        console.log(data)
      );
      console.log(res);
      navigate("/alergenos");
    } catch (error) {
      console.error("fallo en la llamada:", error);
    }
  };

  return (
    <div className="emergencia">
      <div className="emergencia-superior">
        <Link to="/confirCuenta" className="emergencia-superior__link">
          <img src="/img/icons/angle-left_10513349.png" alt="icono volver" />
          volver
        </Link>
        <p className="emergencia-superior__pag">3 de 5</p>
      </div>

      <div className="emergencia-titulo">
        <h2 className="emergencia-titulo__h2">
          Vamos a añadir tu contacto en caso de emergencia.
        </h2>
        <p className="emergencia-titulo__p">
          Nos pondremos en contacto con tu persona de confianza y/o compañia de
          seguros en caso de emergencia.
        </p>
      </div>
      <form className="emergencia-formulario" onSubmit={handleSubmit(onSubmit)}>
        <label html="name"></label>
        <input
          className="emergencia-formulario__input"
          type="text"
          id="name"
          {...register("name", { required: true })}
          placeholder="Nombre"
        ></input>
        <label htmlFor="email"></label>
        <input
          className="emergencia-formulario__input"
          type="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="Dirección de email"
        ></input>
        <label htmlFor="phone"></label>
        <input
          className="emergencia-formulario__input"
          type="numbre"
          id="phone"
          {...register("phone", { required: true })}
          placeholder="Móvil"
        ></input>
        <label htmlFor="seguro"></label>
        <input
          className="emergencia-formulario__input"
          type="text"
          id="seguro"
          {...register("seguro", { required: true })}
          placeholder="Compañia de seguros ó Nº poliza"
        ></input>
        <button className="emergencia-formulario__button">Guardar</button>
      </form>
      <Link className="emergencia-prisa" to="/inicio">
        Registrar mi contacto de emergencias en otro momento
      </Link>
    </div>
  );
};

export default Emergencia;
