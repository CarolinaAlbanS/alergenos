import React from 'react';
import BarcodeScannerComponent from "react-barcode-scanner-updated";
import './Escanear.scss';


//esto es COMPONENTE
const Escanear = ({setScanCode}) => {

  // const [scanCode, setScanCode] = useState(null);


  return (
    <>
      {  
        <div className="scanner-component">
          <BarcodeScannerComponent 
              width={300}
              height={200}
              onUpdate={(err, result) => {
                if (result) setScanCode(result.text);
              }}
            />
        </div>
      }
      <div className="scan-icons">
              <div className="scan-icons-item">
                <div className="scan-icons-item-icon">
                  <img className="scan-icons-item-icon__img" src="./img/icons/qr.png" alt="icono qr"/>
                </div>
                <p className="scan-icons-item__txt">código qr</p>
              </div>

              <div className="scan-icons-item">
                <div className="scan-icons-item-icon">
                  <img className="scan-icons-item-icon__img" src="./img/icons/barcode.png" alt="icono barcode"/>
                </div>
                <p className="scan-icons-item__txt">código de barras</p>
              </div>
            </div>
    </>
  )
}

export default Escanear;
