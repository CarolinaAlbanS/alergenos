import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <img src="public" />
      </div>
      <div>
        <h2>¡Bienvenido de nuevo!</h2>
        <p>Por favor, introduce tus datos para continuar,</p>
      </div>
      <form>
        <input type="text" placeholder="Dirección de email"></input>
        <input type="text" placeholder="Password"></input>
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
