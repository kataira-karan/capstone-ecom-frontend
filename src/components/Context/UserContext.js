import { React, useState, useEffect, createContext } from "react";

//  make a provider
//  make context

export const UserContext = createContext();

// whenever we want to use info we import userContext
export const UserProvider = (props) => {
  const [loggedInUser, setloggedInUser] = useState(
    JSON.parse(localStorage.getItem("user")) !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [cart, setcart] = useState(
    JSON.parse(localStorage.getItem("cart")) !== "undefined"
      ? JSON.parse(localStorage.getItem("cart"))
      : null
  );

  const [isAdmin, setisAdmin] = useState(
    JSON.parse(localStorage.getItem("isAdmin")) !== null ? true : false
  );
  useEffect(() => {}, [loggedInUser, cart]);

  return (
    <UserContext.Provider
      value={[
        loggedInUser,
        setloggedInUser,
        cart,
        setcart,
        isAdmin,
        setisAdmin,
      ]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
