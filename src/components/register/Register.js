import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import "./RegisterStyle.css";
import register from "../static/register.gif";
import LoginForm from "./LoginForm";

const Register = () => {
  const [isRegister, setisRegister] = useState(true);

  return (
    <div className="register-container">
      <div className="register-form-container">
        <RegisterForm></RegisterForm>
      </div>

      <div className="register-banner-container">
        <img className="register-banner-image" src={register}></img>
        {/* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
      </div>
    </div>
  );
};

export default Register;
