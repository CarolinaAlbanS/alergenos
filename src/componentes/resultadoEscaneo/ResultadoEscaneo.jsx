import React, { useState } from 'react'
import './ResultadoEscaneo.scss';
import ModalConfirm from '../modalFavs/ModalFavs';

const ResultadoEscaneo = ({product, productStatus}) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    
  return (
    <>

        { product &&
        
            <div className='scannedProduct'>      

                <div className={'scannedProduct-pic ' + 
                    (productStatus === 'warn' 
                        ? 'scannedProduct-pic--warn' 
                        : productStatus === 'ok' 
                        ? 'scannedProduct-pic--ok' 
                        : 'scannedProduct-pic--unknown')}>

                    <img src={product.image} className='scannedProduct-pic__img' alt={product.name}/>

                    <div className='scannedProduct-pic-icon'>
                        <img src={ productStatus === 'warn'
                           ? "/img/icons/warn.png"
                           : productStatus === 'ok'
                           ? "/img/icons/ok.png"
                           : "/img/icons/unknown.png"
                           } 
                           
                           className={'scannedProduct-pic-icon__circle ' + 
                            (productStatus === 'warn' 
                            ? 'scannedProduct-pic-icon__circle--warn' 
                            : productStatus === 'ok' 
                            ? 'scannedProduct-pic-icon__circle--ok' 
                            : 'scannedProduct-pic-icon__circle--unknown')} alt='icon'/>
                    </div>

                    <div className='scannedProduct-pic-nav'>
                           <img 
                                onClick={openModal} src='/img/icons/star_1.png' 
                                className={'scannedProduct-pic-nav__icon ' + (productStatus === 'unknown' && 'scannedProduct-pic-nav__icon--disabled')} 
                                alt='icono'/>
                           <img src='/img/icons/diary.png' className='scannedProduct-pic-nav__icon' alt='icono'/>
                           <img src={'/img/icons/share.png'} className='scannedProduct-pic-nav__icon' alt='icono'/>
                    </div>
                </div>

                <div className='scannedProduct-info'>
                    <h4 className='scannedProduct-info__name'>{product.name}</h4>
                    <span className='scannedProduct-info__brands'>{product.brands}</span>
                    <p className='scannedProduct-info__ing'>Ingredientes: {product.ingredients.join(', ')}</p>
                </div>

                <div className={'scannedProduct-modal-wrap ' + (showModal && 'scannedProduct-modal-wrap--visible')}>
                    <ModalConfirm product={product} productStatus={productStatus} setShowModal={setShowModal} />
                </div>           
            </div>
    
        }
    </>
  )
}

export default ResultadoEscaneo

