import { React, useContext } from "react";
import "./CartProductCardStyle.css";
import { HiPlus, HiOutlineMinusSm } from "react-icons/hi";
import { UserContext } from "../Context/UserContext";
const CartProductItem = (props) => {
  const { cartItem } = props;
  const [loggedInUser, setloggedInUser, cart, setcart] =
    useContext(UserContext);
  console.log(props);
  const removeItem = (e) => {
    let indexToRemove;
    console.log(cart);

    cart.map(function (item, index) {
      console.log(index);
      console.log(item.product.id, cartItem.product.id);
      if (item.product.id === cartItem.product.id) {
        console.log("match");
        indexToRemove = index;
        console.log(item);
      }
    });
    console.log(indexToRemove);
    cart.splice(indexToRemove, 1);
    console.log(cart);
    // if (cart.length === 0) {
    //   localStorage.removeItem("cart");
    // } else {
    //   localStorage.setItem("cart", newCart);
    // }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  };

  return (
    <div className="cart-product-card">
      <div className="cart-product-image-container">
        <img
          className="cart-product-image"
          src={cartItem.product.imageUrl}
        ></img>
      </div>
      <div className="cart-product-content">
        <span className="cart-product-field product-name">
          {" "}
          {cartItem.product.name}{" "}
        </span>
        <span className="cart-product-field">
          {" "}
          {cartItem.product.description}{" "}
        </span>
        <span className="cart-product-field"> {cartItem.product.price} </span>

        {/* <div className="cart-product-buttons cart-product-field">
          <HiPlus className="cart-product-buttons plus"></HiPlus>
          <span>Quantity</span>
          <HiOutlineMinusSm className="cart-product-buttons minus">
            {" "}
          </HiOutlineMinusSm>
        </div> */}

        <button
          className="cart-product-field remove-button"
          onClick={removeItem}
        >
          {" "}
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartProductItem;
