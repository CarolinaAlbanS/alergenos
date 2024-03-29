import Escanear from "../../componentes/escanear/Escanear"
import './Escaneo.scss';
import {useState, useEffect} from "react";
import axios from 'axios';
import ResultadoEscaneo from "../../componentes/resultadoEscaneo/ResultadoEscaneo";
import { useNavigate } from 'react-router-dom';

//esto es PÁGINA
const Escaneo = () => {
  let navigate = useNavigate();

  const [scanCode, setScanCode] = useState(null); //numero
  const [product, setProduct] = useState(null); //json
  const [productStatus, setProductStatus] = useState(null);
  const [scanType, setScanType] = useState('código de barras');

  const unknownProduct =  {
    name : 'producto desconocido',
    image: 'https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png'
  }

  const urlFoodFacts = 'https://world.openfoodfacts.org/api/v2/product/';

  //datos fake, sustituir por datos usuario
  const userAllergies = ['milk', 'nuts'];

  useEffect(() => {

    const saveProduct = async (product) => {
      try {
        console.log(product);
        const newProduct = await axios.post('http://localhost:3001/productos/create', product);

        console.log('Producto guardado con éxito');
      } catch (err) {
        console.log(err.message);
      }
    }

    const getProduct = async () => {
      try {
        const foodFactsResponse = await axios.get(`${urlFoodFacts}${scanCode}`);

         //si producto no está en Open Food Facts
        if (foodFactsResponse.data.status_verbose === "product not found") {
          setProductStatus('unknown'); 
          console.log('producto no encontrado');

        //si producto SI está en Open Food Facts
        } else if ( foodFactsResponse.data.status_verbose === "product found"){
          const productJson = foodFactsResponse.data.product;
          console.log('producto encontrado');
          //recoger propiedades que utilizaremos
          const mappedProduct =  {
            name : productJson.product_name,
            quantity : productJson.quantity,
            brands : Array.isArray(productJson.brands) 
                      ? productJson.brands
                      : Array(productJson.brands),
            image: productJson.image_url ? productJson.image_url : '',
            ingredients : productJson.ingredients ? productJson.ingredients.map(ing => ing.text) : [''],
            // traces: productJson.traces,
            allergens: Array.isArray(productJson.allergens) 
                        ? productJson.allergens.map(al => al.split(':').at(-1))
                        : Array.from(productJson.allergens.split(':').slice(-1)),
            barcode: productJson.code
          }


          setProduct(mappedProduct);
          console.log(mappedProduct, 'aquí');
          saveProduct(mappedProduct);
          //si producto tiene posibles alérgenos cotejar con alergias del usuario
          if (mappedProduct.allergens) {
            let hasAllergens = [];
            console.log(mappedProduct.allergens);
            console.log(userAllergies);

            for (const allrgn of mappedProduct.allergens) {

              //si tiene algún alérgeno traquearlo en un array
              if(userAllergies.includes(allrgn)) {
                hasAllergens.push(allrgn)
              } 
            };

            hasAllergens.length ? setProductStatus('warn') : setProductStatus('ok');
          } else {
            setProductStatus('ok');
          }

          
        }

      } catch (err) {
        //si la petición falla
        setProductStatus('unknown'); 
        setProduct(unknownProduct);
        console.log(err.message);
      }
    }

    getProduct();

  

  }, [scanCode]);

  const resultMsg = {
    warn : `Este producto NO es apto para ti, contiene ${product ? product.allergens : ''}`,
    unknown : 'Lo sentimos, no hay datos suficientes para poder valorar este producto',
    ok : 'El producto es apto para ti'
  }

  return (
    <div className="scan-wrapper">

        <div className="scan">
              
                <img className="scan__close" src="/img/icons/close.png" alt="icono cerrar" onClick={()=>navigate(-1)}/>    
            

            {productStatus 
              ? <span className="scan__title">Aquí tienes tu resultado</span>
              :<span className="scan__title">Escaneando...</span>
            }
            

            {productStatus  
              ? <p className='scan__p'>{resultMsg[productStatus]}</p>
              : <p className="scan__p">Tan solo tienes que centrar el <span className="bold">{scanType}</span> del producto en el recuadro</p>
            }
            

            {productStatus
                ? <ResultadoEscaneo product={product} productStatus={productStatus}></ResultadoEscaneo>
                : <Escanear setScanCode={setScanCode} setScanType={setScanType} scanType={scanType}></Escanear>
            }

            {productStatus
              && <button className="scan__btn" onClick={()=>setProductStatus(null)}>Escanea otro producto</button>
            }

        </div>
    </div>
   
  )
}

export default Escaneo
