import React from "react";
import { Link } from "react-router";
import "../styles/CardProduct.css";

const CardProduct = ({ id, img, name, description, price, category }) => {
  return (
    <Link className="card-product" to={`/detalles/${category}/${id}`}>
      <img src={img} alt="Perfume" />
      <h3>{name}</h3>
      <p>{`${description.slice(0, 150)}...`}</p>
      <p className="price">Precio: ${price} MNX</p>
    </Link>
  );
};

export default CardProduct;
