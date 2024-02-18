import React, { useState } from "react";
// import 'ModalDiario.scss';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ModalDiario = ({ product, productStatus, setShowModalDiary }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [comment, setComment] = useState("");

  const storeComment = (newComment) => {
    setComment(newComment);
  };

  //texto del modal
  const modalMsg = {
    warn: "Vas a añadir a tu diario un producto al que tienes alergia",
    unknown:
      "Vas a añadir al diario un producto del que no tenemos suficiente información",
    ok: "¿Quieres añadir el producto a tu diario?",
  };

  //añadir el producto al al diario
  const addToDiary = async (product) => {
    try {
      const userId = localStorage.getItem("id");
      const userToken = localStorage.getItem("token");
      //buscar el id del producto escaneado en nuestra colección
      const productMongo = await axios.get(
        `http://localhost:3001/productos/code/${product.barcode}`
      );
      const productId = productMongo.data.data._id;

      const newProd = {
        producto: productId,
        comentario: comment.comment,
        fecha: new Date(),
      };

      //recoger usuario para acceder a su propiedad diary
      const user = await axios.get(`http://localhost:3001/users/${userId}`);
      //recuperar el array de ids de productos en el diario del usuario
      const userDiaryArr = user.data.data.diario;
      userDiaryArr.push(newProd);

      await axios.patch(
        `http://localhost:3001/users/${userId}`,
        { diario: userDiaryArr },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      console.log(newProd);
      // console.log('Producto añadido al diario');
    } catch (err) {
      console.log("Error al añadir el producto l diario", err.message);
    }
  };

  const [modalContent, setModalContent] = useState("a");

  return (
    <div className="modal">
      {modalContent === "a" ? (
        <div className="modal-box">
          <p className="modal-box__msg">{modalMsg[productStatus]}</p>

          {productStatus !== "ok" && (
            <img
              src="/img/icons/star-warn.png"
              alt="icono aviso"
              className="modal-box__warn"
            />
          )}

          <div className="modal-box-btns">
            <button
              onClick={() => {
                setModalContent("b");
              }}
              className={
                "modal-box-btns__btn " +
                (productStatus === "ok" && "modal-box-btns__btn--default")
              }
            >
              AÑADIR A MI DIARIO
            </button>
            <button
              onClick={() => setShowModalDiary(false)}
              className={
                "modal-box-btns__btn " +
                (productStatus !== "ok" && "modal-box-btns__btn--default")
              }
            >
              CANCELAR
            </button>
          </div>
        </div>
      ) : modalContent === "b" ? (
        <div className="modal-box">
          <p className="modal-box__msg">
            Si quieres puedes añadir un comentario sobre el producto
          </p>

          <textarea
            placeholder="escribe aquí tu comentario"
            onInput={handleSubmit(storeComment)}
            id="comment"
            {...register("comment")}
          ></textarea>

          <div className="modal-box-btns">
            <button
              onClick={() => {
                addToDiary(product);
                setModalContent("c");
              }}
              className="modal-box-btns__btn modal-box-btns__btn--default"
            >
              AÑADIR
            </button>
          </div>
        </div>
      ) : (
        <div className="modal-box">
          <p className="modal-box__msg">Producto añadido al diario</p>

          <img
            src="/img/icons/circle-ok.png"
            alt="icono aviso"
            className="modal-box__warn"
          />

          <div className="modal-box-btns">
            <button
              onClick={() => {
                setShowModalDiary(false);
                setModalContent("a");
              }}
              className="modal-box-btns__btn modal-box-btns__btn--default"
            >
              OK
            </button>
            <button
              onClick={() => {
                setShowModalDiary(false);
                navigate("/diario");
              }}
              className="modal-box-btns__btn"
            >
              IR A DIARIO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDiario;
