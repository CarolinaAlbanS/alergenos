import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Escaneo from "./paginas/escaneo/Escaneo";
import Bienvenida from "./paginas/bienvenida/Bienvenida";
import Login from "./paginas/login/Login";
import Registo from "./paginas/registro/Registo";
import Favoritos from "./paginas/favoritos/Favoritos";
import Diario from "./paginas/diario/Diario";
import Inicio from "./paginas/inicio/Inicio";
import Terminos from "./paginas/terminos/Terminos";

import Valoracion from "./paginas/valoracion/Valoracion";
import Emergencia from "./componentes/emergencia/Emergencia";
import SelecAlergenos from "./componentes/selecAlergenos/SelecAlergenos";

import ConfirAlergenos from "./componentes/confirAlergenos/ConfirAlergenos";
import Compartir from "./paginas/compartir/Compartir";

import FinishRegistro from "./componentes/finalRegistro/FinishRegistro";

import Portada from "./componentes/portada/Portada";
import Perfil from "./componentes/perfil/Perfil";
import Logout from "./paginas/logout/Logout";
import ConfirCuenta from "./componentes/confirmarCuenta/ConfirCuenta"
import Informe from "./paginas/informe/Informe";
import Satisfacion from "./paginas/satifacion/Satisfacion";
import Contraseña from "./componentes/contraseña/Contraseña";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/escaneo" element={<Escaneo />}></Route>
          <Route path="/bienvenida" element={<Bienvenida />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registo />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          <Route path="/diario" element={<Diario />}></Route>
          <Route path="/terminos" element={<Terminos />}></Route>
          <Route path="/valoracion" element={<Valoracion />}></Route>
          <Route path="/" element={<Portada />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/confirCuenta" element={<ConfirCuenta />}></Route>
          <Route path="/satisfacion" element={<Satisfacion />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/emergencia" element={<Emergencia />}></Route>
          <Route path="/alergenos" element={<SelecAlergenos />}></Route>
          <Route path="/contraseña" element={<Contraseña />}></Route>

          <Route path="/confirmacion" element={<ConfirAlergenos />}></Route>

          <Route path="/compartir" element={<Compartir />}></Route>

          <Route path="/perfil" element={<Perfil />}></Route>
          <Route path="/informe" element={<Informe />}></Route>
          <Route path="/finishRegistro" element={<FinishRegistro />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
