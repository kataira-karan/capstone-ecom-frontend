import { useContext, React, useState } from "react";
import CartProductItem from "../CartProductItem/CartProductItem";
import Navigation from "../navigation/Navigation";
import "./CartStyle.css";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Cart = () => {
  const [loggedInUser, setloggedInUser, cart, setcart] =
    useContext(UserContext);
  console.log(cart);
  let t = 0;
  const [total, settotal] = useState(0);
  return (
    <>
      <Navigation></Navigation>
      <div className="cart-container">
        <div className="cart-products-container">
          {cart === null
            ? "Cart Is Empty"
            : cart.map((item) => {
                console.log(item);
                t = t + parseFloat(item.product.price);
                return (
                  <CartProductItem
                    key={item.id}
                    cartItem={item}
                  ></CartProductItem>
                );
              })}

          {/* <CartProductItem></CartProductItem>
          <CartProductItem></CartProductItem>
          <CartProductItem></CartProductItem>
          <CartProductItem></CartProductItem> */}
        </div>

        <hr style={{ width: "100%", margin: "auto", marginTop: "1rem" }}></hr>
        <div className="cart-footer">
          <span className="cart-footer-title">
            Subtotal({cart ? cart.length : "0"}) :{" "}
          </span>
          <span className="cart-footer-value">{t}$</span>

          <button>
            {" "}
            <Link to="/user/cart/checkout"> Check Out </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
