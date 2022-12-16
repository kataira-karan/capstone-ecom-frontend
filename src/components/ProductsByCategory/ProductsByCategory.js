import { React, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./ProductsByCategory.css";

const ProductsByCategory = (props) => {
  const [productsByCategory, setproductsByCategory] = useState([]);

  const params = useParams();
  console.log(params);

  const fetchAllProductsByCategory = async () => {
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchtext: "", category: `${params.category}` }),
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
        setproductsByCategory(data.data);
      });
  };

  useEffect(() => {
    fetchAllProductsByCategory();
  }, []);

  return (
    <>
      <Navigation> </Navigation>
      <div className="productbycategory-container">
        <span className="productbycategory-title"> {params.category} </span>

        <div className="products-by-category-container">
          {productsByCategory.length > 0
            ? productsByCategory.map((product) => {
                return (
                  <Link
                    key={Math.random()}
                    to={{
                      pathname: `/${product.name}/${product.id}`,
                      state: product,
                    }}
                  >
                    <ProductCard
                      key={product.id}
                      product={product}
                    ></ProductCard>
                  </Link>
                );
              })
            : "Loading"}
        </div>
      </div>
    </>
  );
};

export default ProductsByCategory;
