import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "./NavigationStyle.css";
import { UserContext } from "../Context/UserContext";
import { FiLogOut } from "react-icons/fi";

const Navigation = () => {
  const [loggedInUser, setloggedInUser, cart, setcart, isAdmin, setisAdmin] =
    useContext(UserContext);

  const logoutuser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setisAdmin(false);
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };
  console.log(loggedInUser);
  console.log(isAdmin);
  return (
    <nav className="navigation-container">
      <div className="navigation-logo">
        <Link to="/">
          <img
            src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
            className="logo"
          ></img>
        </Link>
      </div>

      <ul className="navigation-links">
        {" "}
        <li className="navigation-link">
          <Link to="/">Home</Link>
        </li>
        {isAdmin ? (
          <li className="navigation-link">
            {" "}
            <Link to="/admin/products">Admin</Link>{" "}
          </li>
        ) : null}
        {loggedInUser !== null ? (
          <li className="navigation-link">
            {" "}
            <Link to="/user/cart/cart">
              Cart({cart === null ? 0 : cart.length})
            </Link>{" "}
          </li>
        ) : null}
        <li className="navigation-link">
          {" "}
          {loggedInUser !== null ? (
            <FiLogOut onClick={logoutuser}></FiLogOut>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li className="navigation-link">
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
