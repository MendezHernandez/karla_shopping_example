import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TitleSeparator from "../components/TitleSeparator";
import { men, news, unisex, women } from "../data/products";
import { useParams } from "react-router";
import "../styles/Details.css";

const Details = () => {
  let { category, id } = useParams();

  function product() {
    if (category === "men") {
      return men[id - 1];
    } else if (category === "news") {
      return news[id - 1];
    } else if (category === "unisex") {
      return unisex[id - 1];
    } else if (category === "women") {
      return women[id - 1];
    }
  }

  const [mainImg, setMainImg] = useState(product().img);

  const changeMainImg = (img) => {
    setMainImg(img);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <TitleSeparator text={product().name.toUpperCase()} />
      <section className="details-container">
        <div className="ctn-imgs">
          <img
            onClick={() => changeMainImg(product().img)}
            className="small-img"
            src={product().img}
            alt=""
          />
          {product().imgs &&
            product().imgs.map((item, index) => {
              return (
                <img
                  onClick={() => changeMainImg(item)}
                  className="small-img"
                  src={item}
                  key={index}
                  alt=""
                />
              );
            })}
        </div>
        <div className="ctn-main-img">
          <img className="main-img-details" src={mainImg} alt="" />
        </div>
        <section className="ctn-data-product">
          <p>{product().description}</p>
          <p className="price">Precio: {product().price} MXN</p>
          <p className="available">Disponibles: 2</p>
          <h3 style={{ color: "var(--tertiary-color)" }}>
            Dinamica de compra:
          </h3>
          <ul className="purchase-dynamics">
            <li>Enviar captura o link del producto.</li>
            <li>
              Enviar comprobante de pago al teléfono: <span>6949515120</span>.
            </li>
            <li>Se agenda hora, lugar y fecha para realizar la entrega.</li>
          </ul>
          <p>Envio Gratis (Solo para entregas en el Rosario, Sin.)</p>
        </section>
      </section>
    </>
  );
};

export default Details;
