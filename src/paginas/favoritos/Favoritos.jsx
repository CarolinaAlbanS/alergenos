import './Favoritos.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Favoritos = () => {

  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem('id');

  const userToken = localStorage.getItem("token");
    console.log(userToken, 'token');

  useEffect(() => {
    const getFavorites = async () => {
      const response = await axios.get(`http://localhost:3001/users/${userId}`);
      const favsRes = response.data.data.favorites;
      setFavorites(favsRes);
    }

    getFavorites()
  }, [])

  return (
    <div className='favoritos'>
      <img className="favoritos__close" src="/img/icons/close.png" alt="icono cerrar" onClick={()=>navigate(-1)}/>
      <h3 className='favoritos__title'>Favoritos</h3>
      <div className='favoritos-grid'>
        {favorites && favorites.map((fav, i) => (

          <div className='favoritos-grid-item' key={i}>
            <img src={fav.image ? fav.image : '/img/icons/product.jpeg'} alt='{fav.name}' className='favoritos-grid-item__img'/>
            <span className='favoritos-grid-item__name'>{fav.name}</span>
          </div>

        ))}
        
      </div>
    </div>
  )
}

export default Favoritos
