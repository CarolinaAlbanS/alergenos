import React from 'react'
import './Compartir.scss'

const Compartir = () => {
    const linkApp = "http://localhost:3000/";
  return (
    <div className='containerCompartir'>

        <h1>Comparte nuestra app con tus conocidos:</h1>

        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
        <img className='imagenCompartir' src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" />
        <p>Gmail</p>
        </a>
        
        <a href="https://www.whatsapp.com/?lang=es_LA">
        <img className='imagenCompartir' src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Whatsapp" />
        <p>Whatsapp</p>
        </a>

        <a href="https://www.instagram.com/?hl=es">
        <img className='imagenCompartir' src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
        <p>Instagram</p>
        </a>

        <a href="https://twitter.com/?lang=es">
        <img className='imagenCompartir' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/450px-X_logo_2023.svg.png" alt="Twitter" />
        <p>Twitter</p>
        </a>

        <a href="https://www.tiktok.com/es/">
        <img className='imagenCompartir' src="https://cdn.pixabay.com/photo/2021/01/30/06/42/tiktok-5962992_1280.png" alt="Tiktok" />
        <p>Tiktok</p>
        </a>

        <a href="https://www.facebook.com/?locale=es_ES">
        <img className='imagenCompartir' src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" />    
        <p>Facebook</p>
        </a>

    </div>
  )
}

export default Compartir