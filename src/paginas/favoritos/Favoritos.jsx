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

  const eliminarEntrada = async (entradaId) => {
    try {
      await axios.delete(
        `http://localhost:3001/users/${userId}/favorito/${entradaId}`,
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
  return (
    <div className="favoritos">
      <h3 className="favoritos__title">Favoritos</h3>
      <div className="favoritos-grid">
        {favorites &&
          favorites.map((fav, i) => (
            <div className="favoritos-grid-item" key={i}>
              <img
                src={fav.image ? fav.image : "/img/icons/product.jpeg"}
                alt="{fav.name}"
                className="favoritos-grid-item__img"
              />
              <span className="favoritos-grid-item__name">{fav.name}</span>
              <button
                onClick={async () => {
                  console.log(fav);
                  eliminarEntrada(fav._id);
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>
      <div>
        <Link to="/escaneo"> Volver</Link>
      </div>
    </div>
  );
};

export default Favoritos;
