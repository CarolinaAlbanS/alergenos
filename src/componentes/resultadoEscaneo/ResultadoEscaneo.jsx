import React, { useState } from 'react'
import './ResultadoEscaneo.scss';
import ModalConfirm from '../modalFavs/ModalFavs';
import { useNavigate } from 'react-router-dom';
import ModalDiario from '../modalDiario/ModalDiario';

const ResultadoEscaneo = ({product, productStatus}) => {
    const navigate = useNavigate();
    const [showModalFavs, setShowModalFavs] = useState(false);
    const [showModalDiary, setShowModalDiary] = useState(false);

    const openModal = (modal) => {
        modal === 'favs' ? setShowModalFavs(true) : setShowModalDiary(true);
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
                                onClick={()=>openModal('favs')} src='/img/icons/star_1.png' 
                                className={'scannedProduct-pic-nav__icon ' + (productStatus === 'unknown' && 'scannedProduct-pic-nav__icon--disabled')} 
                                alt='icono'/>
                           <img onClick={()=>openModal('diary')} src='/img/icons/diary.png' 
                                className='scannedProduct-pic-nav__icon' 
                                alt='icono'/>
                           <img onClick={()=> navigate("/compartir")} src={'/img/icons/share.png'} className='scannedProduct-pic-nav__icon' alt='icono'/>
                    </div>
                </div>

                <div className='scannedProduct-info'>
                    <h4 className='scannedProduct-info__name'>{product.name}</h4>
                    <span className='scannedProduct-info__brands'>{product.brands}</span>
                    <p className='scannedProduct-info__ing'>Ingredientes: {product.ingredients.join(', ')}</p>
                </div>

                {/* <div className={'scannedProduct-modal-wrap ' + (showModalFavs && 'scannedProduct-modal-wrap--visible')}> */}
                    {showModalFavs
                        ? <ModalConfirm product={product} productStatus={productStatus} setShowModalFavs={setShowModalFavs} />
                        : showModalDiary
                        ? <ModalDiario product={product} productStatus={productStatus} setShowModalDiary={setShowModalDiary}/>
                        : undefined
                    }

                {/* </div>            */}
            </div>
    
        }
    </>
  )
}

export default ResultadoEscaneo

