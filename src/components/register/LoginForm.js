import { React, useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./RegisterStyle.css";
import { UserContext } from "../Context/UserContext";

const LoginForm = (props) => {
  const { isRegister, setisRegister } = props;
  const [user, setuser] = useState({ email: "", password: "" });
  const history = useHistory();
  const [loggedInUser, setloggedInUser, cart, setcart, isAdmin, setisAdmin] =
    useContext(UserContext);

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(user);

    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    await fetch(
      "https://localhost:7256/api/UserRegistration/loginUser",
      requestOptions
    )
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .then((data) => {
        if (data.success) {
          console.log(data);
          setloggedInUser({ email: user.email });

          if (data.data[0].isAdmin) {
            console.log("is admin");
            console.log("ture");
            setisAdmin(true);
            localStorage.setItem("isAdmin", JSON.stringify(true));
          }
          localStorage.setItem("user", JSON.stringify({ email: user.email }));
          console.log(loggedInUser);
          history.push("/");
        }
        console.log(data);
      });
  };

  const goToRegisterForm = () => {
    setisRegister(true);
  };

  useEffect(() => {}, [loggedInUser]);

  return (
    <form className="register-form" onSubmit={loginUser}>
      <header className="form-title"> Login </header>
      <div className="rgister form-control">
        <input
          className="register-input"
          type="text"
          placeholder="Name"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        />
      </div>

      <div className="rgister form-control">
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
      </div>

      <span>
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: "black" }}>
          Register
        </Link>{" "}
      </span>

      <input type="submit" value="login"></input>
    </form>
  );
};

export default LoginForm;
