import React from 'react'
import './ResultadoEscaneo.scss';

const ResultadoEscaneo = ({product, productStatus}) => {

    
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
                           ? "./img/icons/warn.png"
                           : productStatus === 'ok'
                           ? "./img/icons/ok.png"
                           : "./img/icons/unknown.png"
                           } 
                           
                           className={'scannedProduct-pic-icon__circle ' + 
                            (productStatus === 'warn' 
                            ? 'scannedProduct-pic-icon__circle--warn' 
                            : productStatus === 'ok' 
                            ? 'scannedProduct-pic-icon__circle--ok' 
                            : 'scannedProduct-pic-icon__circle--unknown')} alt='icon'/>
                    </div>
                </div>

                <div className='scannedProduct-info'>
                    <h4 className='scannedProduct-info__name'>{product.name}</h4>
                    <span className='scannedProduct-info__brands'>{product.brands}</span>
                    <p className='scannedProduct-info__ing'>{product.ingredients}</p>
                </div>

            </div>
    
        }
    </>
  )
}

export default ResultadoEscaneo
