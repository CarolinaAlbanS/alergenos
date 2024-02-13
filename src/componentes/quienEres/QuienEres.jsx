import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const QuienEres = () => {
  //   const inicioState = {
  //     nombre: " ",
  //     email: " ",
  //     movil: " ",
  //     password: " ",
  //   };
  const state = { filepreview: null };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  return (
    <div>
      <div>
        <Link to="/login">volver</Link>
      </div>
      <p>1 de 4</p>
      <h1>Dinos quien eres</h1>
      <form>
        <input type="file" name="myImage" onChange={this.onChange} />
        <img class="img-preview" src={this.state.filepreview} />
        <label html="nombre"></label>
        <input
          type="text"
          id="nombre"
          {...register("nombre", { required: true })}
          // onInput={handleSubmit(onSubmit)}
        ></input>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          // onInput={handleSubmit(onSubmit)}
          placeholder="Dirección de email"
        ></input>
        <label htmlFor="movil"></label>
        <input
          type="numbre"
          id="movil"
          {...register("movil", { required: true })}
          onInput={handleSubmit(onSubmit)}
          placeholder="Móvil"
        ></input>
        <label htmlFor="password"></label>
        <input
          type="text"
          id="password"
          {...register("password", { required: true })}
          onInput={handleSubmit(onSubmit)}
          placeholder="Password"
        ></input>
        <button type="submit">Guardar perfil</button>
      </form>
    </div>
  );
};

export default QuienEres;
