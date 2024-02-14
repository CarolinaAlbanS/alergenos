import React, { useState } from 'react'
import './ModalFavs.scss';
import axios from 'axios';

const ModalFavs = ({product, productStatus, setShowModal}) => {

    const modalMsg = {
        warn: '¿Seguro que quieres añadir este producto a favoritos? Contiene ingredientes a los que tienes alergia',
        unknown: '¿Seguro que quieres añadir este producto a favoritos? No tenemos suficiente información como para garantizar que no contenga alérgenos',
        ok: '¿Quieres añadir este producto a favoritos?'
    }

    const addToFavs = async () => {
        //id
        const putProduct = await axios.put('http://localhost:3001/users')
        console.log(product);
        // const newProduct
    }

    const [modalContent, setModalContent] = useState('a');

    return (
        <div className='modal'>
            <div className={'modal-box ' + (modalContent === 'b' && 'modal-box--hidden')}>

                <p className='modal-box__msg'>{modalMsg[productStatus]}</p>

                {productStatus !== 'ok' && <img src='./img/icons/warning.png' alt='icono aviso' className='modal-box__warn'/>}

                <div className='modal-box-btns'>
                    <button 
                        onClick={()=>{addToFavs(); setModalContent('b')}}
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

                <img src='/img/icons/ok.png' alt='icono aviso' className='modal-box__warn'/>

                <div className='modal-box-btns'>
                    <button 
                        onClick={()=>{setShowModal(false)}}
                        className='modal-box-btns__btn modal-box-btns__btn--default'>OK
                    </button>
                    <button 
                        onClick={()=>setShowModal(false)}
                        className='modal-box-btns__btn'>IR A FAVORITOS
                    </button>
                </div>
        
            </div>
        </div>
    )
}

export default ModalFavs
