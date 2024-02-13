import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const QuienEres = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:3001/users/create", data);
    const cli = res.data.data._id;
    console.log(cli);
    localStorage.setItem("id", cli);
  };

  return (
    <div>
      <div>
        <Link to="/login">volver</Link>
      </div>
      <p>1 de 4</p>
      <h1>Dinos quien eres</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label html="img"></label>
        <input type="file" name="img" accept="image/png, image/jpg"></input>
        <label html="name"></label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        ></input>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="Dirección de email"
        ></input>
        <label htmlFor="phone"></label>
        <input
          type="numbre"
          id="phone"
          {...register("phone", { required: true })}
          placeholder="Móvil"
        ></input>
        <label htmlFor="password"></label>
        <input
          type="text"
          id="password"
          {...register("password", { required: true })}
          placeholder="Password"
        ></input>
        <button>Guardar perfil</button>
      </form>
    </div>
  );
};

export default QuienEres;
