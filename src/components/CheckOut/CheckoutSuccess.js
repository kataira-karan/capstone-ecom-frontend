import React from "react";
import Navigation from "../navigation/Navigation";
import "./CheckOutSuccessStyle.css";
const CheckoutSuccess = () => {
  return (
    <>
      {" "}
      <Navigation></Navigation>
      <div className="checkout-success-container">
        <div class="card">
          <div>
            <i class="checkmark">✓</i>
          </div>
          <h1 className="success">Success</h1>
          <p className="success-p">
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutSuccess;
