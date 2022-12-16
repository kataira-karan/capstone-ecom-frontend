import React, { useContext, useState } from "react";
import "./Home.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import ProductsPage from "../ProductsPage/ProductsPage";
import Register from "../register/Register";
import ProductCard from "../ProductCard/ProductCard";
import { UserContext } from "../Context/UserContext";

const Home = () => {
  const [searchText, setsearchText] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [loggedInUser] = useContext(UserContext);

  const getSearchProduct = async (e) => {
    e.preventDefault();
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchtext: searchText, category: "" }),
    };
    await fetch(
      "https://localhost:7256/api/Product/GetProductData",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setsearchResult(data.data);
      });
  };

  return (
    <div className="home-container">
      .<Navigation></Navigation>
      {/* <Register></Register> */}
      <div className="search-bar-container">
        <form className="search-form" onSubmit={(e) => getSearchProduct(e)}>
          <div className="search-form-control">
            <input
              className="search-inputbox"
              placeholder="Search Ex. Shirt,laptop,shoes"
              type="text"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            ></input>
          </div>

          <div className="search-form-control">
            <input type="submit" className="search-button"></input>
          </div>
        </form>
      </div>
      {searchText === "" ? (
        <>
          {" "}
          <CategoryContainer></CategoryContainer>
          <ProductsPage></ProductsPage>{" "}
        </>
      ) : (
        <div className="searched-product">
          {" "}
          <h3 className="search-header">Results For {searchText}</h3>
          {searchResult.length > 0 ? (
            <div>
              {" "}
              {searchResult.map((product) => {
                return <ProductCard product={product}></ProductCard>;
              })}{" "}
            </div>
          ) : (
            <div> NO Search result for {searchResult} </div>
          )}{" "}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
