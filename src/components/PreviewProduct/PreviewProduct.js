import { React, useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import "./PreviewProductStyle.css";
import { useLocation } from "react-router-dom";

const PreviewProduct = () => {
  const location = useLocation();
  // const { product } = location.state;
  // console.log(product);
  console.log(location);

  const [product, setproduct] = useState(location.state);

  const addToCart = () => {
    if (localStorage.getItem("cart")) {
      console.log("ghmm");
      let ifProductIsInCart = false;
      let tempCart = JSON.parse(localStorage.getItem("cart"));

      tempCart.map((item) => {
        console.log(item);
        console.log(product);
        if (item.product.id === product.id) {
          console.log("duplicate");
          console.log(item.quantity);
          item.quantity = item.quantity + 1;
          ifProductIsInCart = true;
        }
      });
      if (!ifProductIsInCart) {
        console.log("note duplicate");
        tempCart = [...tempCart, { product, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(tempCart));
      window.location.reload();
      return;
    } else {
      localStorage.setItem("cart", JSON.stringify([{ product, quantity: 1 }]));
    }
  };

  const buyNow = () => {};

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <>
      <Navigation></Navigation>
      <div className="preview-product-container">
        <div className="preview-product-image-container">
          <img className="preview-product-image" src={product.imageUrl} />
        </div>

        <div className="preview-product-content">
          <span className="header preview-product-content-field">
            {product.name}
          </span>
          <span className="preview-product-content-field">
            {product.price}$
          </span>
          <span className="preview-product-content-field">
            {product.description}
          </span>
          <span className="preview-product-content-field">
            Category: {product.category}
          </span>

          <div className="preview-product-content-button preview-product-content-field">
            <button className="button" onClick={(e) => addToCart()}>
              Add To Cart
            </button>

            {/* <button className="button" onClick={(e) => buyNow()}>
              Buy Now
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewProduct;
