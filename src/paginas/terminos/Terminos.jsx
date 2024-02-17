import React from 'react'
import './Terminos.scss'
import { Link } from 'react-router-dom'

const Terminos = () => {
  return (
    <div className='containerTerminos'>
      <div>
        <h2 className='title1'>TÉRMINOS Y CONDICIONES DE USO</h2>
        <p>Esta página web es propiedad y está operado por app alergic. Estos Términos establecen los términos y condiciones bajo los cuales puedes usar nuestra página web y nuestros servicios. Esta página web ofrece a los visitantes app alergic. Al acceder o usar la página web, aceptas haber leído, entendido y aceptado estar sujeto a estos Términos:</p>
      </div>
      <div>
        <h2 className='title2'>INFORMACIÓN RELEVANTE</h2>
        <p>En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña. El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para el uso de alguno de nuestros servicios. App alergic no asume la responsabilidad en caso de que entregue dicha clave a terceros.</p>

        <p>
        Todas las transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.
        </p>

        <p>
        Los precios de los servicios ofrecidos en esta web son válidos solamente en las suscripciones realizadas en este sitio web.
        </p>
      </div>


      <div>
        <h2 className='title3'>LICENCIA</h2>
        <p>App alergic a través de su sitio web concede una licencia para que los usuarios utilicen los servicios que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.</p>
      </div>
    </div>
    
  )
}

export default Terminos