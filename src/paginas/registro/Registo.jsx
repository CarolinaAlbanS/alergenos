import React from "react";
import QuienEres from "../../componentes/quienEres/QuienEres";
import SelecAlergenos from "../../componentes/selecAlergenos/SelecAlergenos";
import Emergencia from "../../componentes/emergencia/Emergencia";

const Registo = () => {
  return (
    <div>
      <QuienEres></QuienEres>
      <SelecAlergenos></SelecAlergenos>
      <Emergencia></Emergencia>
    </div>
  );
};

export default Registo;
