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
                    <img src="./img/icons/close.png" className={'scannedProduct-pic__icon ' + 
                        (productStatus === 'warn' 
                        ? 'scannedProduct-pic__icon--warn' 
                        : productStatus === 'ok' 
                        ? 'scannedProduct-pic__icon--ok' 
                        : 'scannedProduct-pic__icon--unknown')} alt='icon'/>
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
