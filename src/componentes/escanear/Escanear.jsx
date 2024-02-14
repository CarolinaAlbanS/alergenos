
import BarcodeScannerComponent from "react-barcode-scanner-updated";
import './Escanear.scss';


//esto es COMPONENTE
const Escanear = ({setScanCode, setScanType, scanType}) => {
 

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
              
              <div className="scan-icons-item" onClick={(e)=>setScanType('código de barras')}>
                <div  className={"scan-icons-item-icon " + (scanType === 'código de barras' && 'scan-icons-item-icon--active')}>
                  <img className="scan-icons-item-icon__img" src="./img/icons/barcode.png" alt="icono barcode"/>
                </div>
                <p className="scan-icons-item__txt">código de barras</p>
              </div>

              <div className="scan-icons-item" onClick={()=>setScanType('qr')}>
                <div className={"scan-icons-item-icon " + (scanType === 'qr' && 'scan-icons-item-icon--active')}>
                  <img className="scan-icons-item-icon__img" src="./img/icons/qr.png" alt="icono qr"/>
                </div>
                <p className="scan-icons-item__txt">código qr</p>
              </div>

              <div className="scan-icons-item" onClick={()=>setScanType('nfc')}>
                <div className={"scan-icons-item-icon " + (scanType === 'nfc' &&'scan-icons-item-icon--active')}>
                  <img className="scan-icons-item-icon__img" src="./img/icons/NFC.png" alt="icono NFC"/>
                </div>
                <p className="scan-icons-item__txt">NFC</p>
              </div>

       </div>
    </>
  )
}

export default Escanear;
