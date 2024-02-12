import Escanear from "../../componentes/escanear/Escanear"
import './Escaneo.css';

//esto es PÁGINA
const Escaneo = () => {
  return (
    <div className="escanear">
        <span className="escanear__title">Escaneando...</span>
        <Escanear></Escanear>
    </div>
  )
}

export default Escaneo
