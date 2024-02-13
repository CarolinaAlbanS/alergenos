import React from 'react'
import './ModalConfirm.scss';
import axios from 'axios';

const ModalConfirm = ({product, productStatus, setShowModal}) => {

    const modalMsg = {
        warn: '¿Seguro que quieres añadir este producto a favoritos? Contiene ingredientes a los que tienes alergia',
        unknown: '¿Seguro que quieres añadir este producto a favoritos? No tenemos suficiente información como para garantizar que no contenga alérgenos',
        ok: '¿Quieres añadir este producto a favoritos?'
    }

    const addToFavs = () => {
        //aquí hacer un put al documento del usuario
    }

    return (
        <div className='modal'>
            <div className='modal-box'>
                <p className='modal-box__msg'>{modalMsg[productStatus]}</p>

                {productStatus !== 'ok' && <img src='./img/icons/warning.png' alt='icono aviso' className='modal-box__warn'/>}

                <div className='modal-box-btns'>
                    <button 
                        onClick={()=>{setShowModal(false); addToFavs()}}
                        className={'modal-box-btns__btn ' + (productStatus === 'ok' && 'modal-box-btns__btn--default')}>AÑADIR A FAVORITOS
                    </button>
                    <button 
                        onClick={()=>setShowModal(false)}
                        className={'modal-box-btns__btn ' + (productStatus !== 'ok' && 'modal-box-btns__btn--default')}>CANCELAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirm
