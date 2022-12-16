import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { id, category, description, imageUrl, name, price, quantity } =
    props.product;
  console.log(name);
  return (
    <div className="product-card-container">
      <div className="product-image-container">
        <img className="product-image" src={imageUrl}></img>
      </div>
      <span className="">{name}</span>
      <div className="product-information">
        <span className="product-title">{name}</span>

        {/* <span className="product-description">{description}</span> */}

        <span className="product-price">{price}$</span>

        <button className="add-to-cart-button">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
