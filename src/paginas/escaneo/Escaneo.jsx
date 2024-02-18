import Escanear from "../../componentes/escanear/Escanear"
import './Escaneo.scss';
import {useState, useEffect} from "react";
import axios from 'axios';
import {useTranslation} from "react-i18next";
import ResultadoEscaneo from "../../componentes/resultadoEscaneo/ResultadoEscaneo";
import { useNavigate } from 'react-router-dom';

//esto es PÁGINA
const Escaneo = () => {
  let navigate = useNavigate();
  const [t] = useTranslation("global");

  const [scanCode, setScanCode] = useState(null); //numero
  const [product, setProduct] = useState(null); //json
  const [productStatus, setProductStatus] = useState(null); //ok, unknown o warn
  const [scanType, setScanType] = useState('código de barras'); //o qr o nfc
  const [userAllergies, setUserAllergies] = useState(); //array de strings
  const [matchedAllergens, setMatchedAllergens] = useState([]); //alergias de usuario en producto (ingles)
  const [alergenosPresentes, setAlergenosPresentes] = useState([]); //alergias de usuario en producto (español)

  //placeholder cuando no hay suficientes datos del producto
  const unknownProduct =  {
    name : 'producto desconocido',
    image: 'https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png'
  }

  //url api datos productos
  const urlFoodFacts = 'https://world.openfoodfacts.org/api/v2/product/';


  useEffect(() => {

    //recoger los datos del usuario para recuperar sus alergias
    async function getUser () {
      const userId = localStorage.getItem('id');
      try {
        const user = await axios.get(`http://localhost:3001/users/${userId}`);
        setUserAllergies(user.data.data.allergens);
        console.log('alergias usuario', user.data.data.allergens);
      } catch (err) {
        console.log('fallo en el get a usuario')
        console.log(err);
      }
    }
    getUser();

     //buscar el producto por código de barras en Open Food Facts
     async function getProduct(){
      try {
        //petición a api Food Facts con código del producto
        const foodFactsResponse = await axios.get(`${urlFoodFacts}${scanCode}`);

        //si producto no está en Open Food Facts
        if (foodFactsResponse.data.status_verbose === "product not found" || foodFactsResponse.data.status_verbose === "no code or invalid code") {
          setProductStatus('unknown'); 
          console.log('producto no encontrado o código erróneo');

        //si producto SI está en Open Food Facts
        } else if ( foodFactsResponse.data.status_verbose === "product found"){

          console.log('el producto se ha encontrado en OFF')
          const productJson = foodFactsResponse.data.product;

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

          //guardar el producto mapeado
          setProduct(mappedProduct);
          //guardarlo en la base de datos
          saveProduct(mappedProduct);

          console.log(mappedProduct);

          //si producto tiene posibles alérgenos cotejar con alergias del usuario
          if (mappedProduct.allergens[0] !== '') {
            console.log('el array de alérgenos del producto no es string vacío')
            checkAllergens(mappedProduct);
          } else if (mappedProduct.ingredients[0] === ''){
            console.log('no tiene datos en ingredientes')
            setProductStatus('unknown');
          } else {
            console.log('ultimo else')
            setProductStatus('ok')
          }      
        }

      } catch (err) {
        //si la petición falla
        setProductStatus('unknown'); 
        setProduct(unknownProduct);
        console.log('get product fallida');
        console.log(err.message);
      }
    }

    //guardar producto en nuestra colección de productos de mongo
    async function saveProduct (product){
      try {
        await axios.post('http://localhost:3001/productos/create', product);

        console.log('Producto guardado con éxito');
      } catch (err) {
        console.log('Fallo al guardar el producto')
        console.log(err.message);
      }
    }

    //comprobar si los alérgenos del producto coinciden con alergias del usuario
    function checkAllergens(product){
      //traducir a inglés las alergias del usuario
      const translatedUserAllergens = [];
      userAllergies.forEach(al => {
        translatedUserAllergens.push(t(`allergens.${al}`))
      });

      console.log(translatedUserAllergens);
      console.log('esto es product en checkAllergens' , product)

      //guardar los alérgenos que coinciden con las alergias del usuario
      const presentAllergens = []
      translatedUserAllergens.forEach(al => {    
        product.allergens.includes(al) &&  presentAllergens.push(al);      
      });
      setMatchedAllergens(presentAllergens)

      console.log(presentAllergens, 'alérgenos presentes en el producto')

      if (presentAllergens.length){
        console.log('warn, el producto contiene alérgenos a los que reaccionas')
         setProductStatus('warn')  
      } else if (!presentAllergens.length){
        console.log('los alérgenos del producto no te afectan')
        setProductStatus('ok');
      } else {
        setProductStatus('ok')
      }

      //traducir al español los alérgenos presentes
      const alergenosEspañol = [];
      presentAllergens && presentAllergens.forEach(al => {
        alergenosEspañol.push(t(`alergenos.${al}`))
      })

      setAlergenosPresentes(alergenosEspañol);
      console.log('alergenos presentes peligrosos', alergenosEspañol)
    }

   scanCode && getProduct();

  }, [scanCode]);

  const resultMsg = {
    warn : `Este producto NO es apto para ti, contiene ${alergenosPresentes.join(', ')}`,
    unknown : 'Lo sentimos, no hay datos suficientes para poder valorar este producto',
    ok : 'El producto es apto para ti'
  }

  return (
    <div className="scan-wrapper">

        <div className="scan">
              
                <img className="scan__close" src="/img/icons/close.png" alt="icono cerrar" onClick={()=>navigate("/inicio")}/>    
            

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
