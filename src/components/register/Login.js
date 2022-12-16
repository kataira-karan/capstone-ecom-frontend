import React from "react";
import "./RegisterStyle.css";
import LoginForm from "./LoginForm";
import register from "../static/register.gif";

const Login = () => {
  return (
    <div className="register-container">
      <div className="register-form-container">
        <LoginForm></LoginForm>
      </div>

      <div className="register-banner-container">
        <img className="register-banner-image" src={register}></img>
      </div>
    </div>
  );
};

export default Login;
