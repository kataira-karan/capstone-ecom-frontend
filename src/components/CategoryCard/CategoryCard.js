import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  const { categoryImage, categoryName } = props;

  return (
    <div className="category-card-container">
      <img className="category-image" src={categoryImage} />{" "}
      <div className="category-card-content">
        <span className="category-card-title"> {categoryName} </span>

        {/* <span className="category-description">  </span> */}

        <button className="category-button">
          {" "}
          <Link to={`/${categoryName}`}> Explore {categoryName} </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
