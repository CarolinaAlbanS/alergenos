import React, { useState } from 'react'
import './ModalFavs.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ModalFavs = ({product, productStatus, setShowModal}) => {

    const navigate = useNavigate();

    const modalMsg = {
        warn: '¿Seguro que quieres añadir este producto a favoritos? Contiene ingredientes a los que tienes alergia',
        unknown: '¿Seguro que quieres añadir este producto a favoritos? No tenemos suficiente información como para garantizar que no contenga alérgenos',
        ok: '¿Quieres añadir este producto a favoritos?'
    }

    const addToFavs = async (product) => {
        try {
            const userId = localStorage.getItem("id");
            //buscar el id del producto escaneado en nuestra colección
            const productMongo = await axios.get(`http://localhost:3001/productos/code/${product.barcode}`)
            const productId = productMongo.data.data._id;

            //recoger usuario para acceder a su propiedad favorites
            const user = await axios.get(`http://localhost:3001/users/${userId}`);
            //recuperar el array de ids de productos favoritos del usuario
            const userFavsArr = user.data.data.favorites.map(fav => fav._id);

            const patchFavs = await axios.patch(`http://localhost:3001/users/${userId}`, {favorites: [...userFavsArr, productId]});

    
            console.log('Producto añadido a favoritos:');
        } catch (err) {
            console.log('Error al añadir el producto a favoritos:', err.message);
        }
    }

    const [modalContent, setModalContent] = useState('a');

    return (
        <div className='modal'>
            <div className={'modal-box ' + (modalContent === 'b' && 'modal-box--hidden')}>

                <p className='modal-box__msg'>{modalMsg[productStatus]}</p>

                {productStatus !== 'ok' && <img src='/img/icons/star-warn.png' alt='icono aviso' className='modal-box__warn'/>}

                <div className='modal-box-btns'>
                    <button 
                        onClick={()=>{addToFavs(product); setModalContent('b')}}
                        className={'modal-box-btns__btn ' + (productStatus === 'ok' && 'modal-box-btns__btn--default')}>AÑADIR A FAVORITOS
                    </button>
                    <button 
                        onClick={()=>setShowModal(false)}
                        className={'modal-box-btns__btn ' + (productStatus !== 'ok' && 'modal-box-btns__btn--default')}>CANCELAR
                    </button>
                </div>
            </div>

            <div className={'modal-box ' + (modalContent === 'a' && 'modal-box--hidden')}>
                <p className='modal-box__msg'>Producto añadido a favoritos</p>

                <img src='/img/icons/circle-ok.png' alt='icono aviso' className='modal-box__warn'/>

                <div className='modal-box-btns'>
                    <button 
                        onClick={()=>{setShowModal(false); setModalContent('a')}}
                        className='modal-box-btns__btn modal-box-btns__btn--default'>OK
                    </button>
                    <button 
                        onClick={()=> {setShowModal(false); navigate('/favoritos')}}
                        className='modal-box-btns__btn'>IR A FAVORITOS
                    </button>
                </div>
        
            </div>
        </div>
    )
}

export default ModalFavs
