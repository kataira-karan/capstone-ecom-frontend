import { React, useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsPage.css";
import { Link } from "react-router-dom";
const ProductsPage = () => {
  const [allProducts, setallProducts] = useState("");

  const fetchAllProducts = async () => {
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchtext: "", category: "" }),
    };
    await fetch(
      "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/GetProductData",
      requestOptions
    )
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setallProducts(data.data);
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="products-page-container">
      {allProducts.length > 0
        ? allProducts.map((product) => {
            return (
              <Link
                key={Math.random()}
                to={{
                  pathname: `/${product.name}/${product.id}`,
                  state: product,
                }}
              >
                <ProductCard key={product.id} product={product}></ProductCard>
              </Link>
            );
          })
        : "Loadinggg"}
    </div>
  );
};

export default ProductsPage;
