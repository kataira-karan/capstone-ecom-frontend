import { React, useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function App(props) {
  const [user, setuser] = useState({ name: "", email: "", password: "" });
  const history = useHistory();

  const [isError, setisError] = useState(false);
  const [passwordError, setpasswordError] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    console.log(user);

    // if (
    // !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(user.password)
    // ) {
    //   setpasswordError(
    //     "Password sho d containe one spcial Char,number and a capital char"
    //   );
    //   return;
    // }

    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    await fetch(
      "https://ecomcapstone20221214140957.azurewebsites.net/api/UserRegistration/registerUser",
      requestOptions
    )
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .then((data) => {
        console.log(data);

        if (data.success) {
          history.push("/");
        }
        console.log(data);
      });

    // console.log(x.json());
  };

  const handleNameInputChange = (e) => {
    setuser({ ...user, name: e.target.value });
  };

  const handlePasswordInputChange = (e) => {
    setuser({ ...user, password: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setuser({ ...user, email: e.target.value });
  };

  const handleHover = (e) => {
    if (
      user.password.length < 8 ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)
    ) {
      setisError(true);
    }
  };

  const removeHoverEffect = (e) => {
    setisError(false);
  };

  return (
    <form className="register-form" onSubmit={registerUser}>
      <header className="form-title"> Register </header>
      {passwordError === "" ? "" : passwordError}
      <div className="rgister form-control">
        <input
          className="register-input"
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => handleNameInputChange(e)}
        />
      </div>

      <div className="rgister form-control">
        <input
          className="register-input"
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => handleEmailInputChange(e)}
        />
      </div>

      <div className="rgister form-control">
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => handlePasswordInputChange(e)}
        />
      </div>

      <span>
        Alreay have an account?{" "}
        <Link to="/login" style={{ color: "black" }}>
          Singin
        </Link>{" "}
      </span>

      <input
        type="submit"
        className={isError ? "activateHoverEffect" : "deactivateHoverEffect"}
        value="Sign Up"
        onMouseOver={handleHover}
        onMouseOut={removeHoverEffect}
      ></input>
    </form>
  );
}
