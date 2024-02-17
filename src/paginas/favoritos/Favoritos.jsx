import "./Favoritos.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Favoritos = () => {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(userId);

  useEffect(() => {
    getFavorites();
  }, []);

  const eliminarEntrada = async (favId) => {
    try {
      await axios.delete(
        `http://localhost:3001/users/${userId}/favorito/${favId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      getFavorites();
    } catch (e) {
      console.log(e);
    }
  };

  const getFavorites = async () => {
    const res = await axios.get(`http://localhost:3001/users/${userId}`);
    const favsRes = res.data.data.favorites;
    setFavorites(favsRes);
  };
  console.log(favorites);

  return (
    <div className="favoritos">
      <h3 className="favoritos__title">Favoritos</h3>
      <div className="favoritos-grid">
        {favorites &&
          favorites.map((fav, i) => (
            <div className="favoritos-grid-item" key={i}>
              <img
                className="favoritos-grid-item__imagen"
                src="/img/icons/close.png"
                onClick={async () => {
                  eliminarEntrada(fav._id);
                  console.log(fav._id);
                }}
              />
              <img
                src={fav.image ? fav.image : "/img/icons/product.jpeg"}
                alt="{fav.name}"
                className="favoritos-grid-item__img"
              />
              <span className="favoritos-grid-item__name">{fav.name}</span>
            </div>
          ))}
      </div>
      <div className="favoritos__boton">
        <Link to="/escaneo"> Volver</Link>
      </div>
    </div>
  );
};

export default Favoritos;
