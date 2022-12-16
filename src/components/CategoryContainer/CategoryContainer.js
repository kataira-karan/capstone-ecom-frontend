import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryContainer.css";

const CategoryContainer = () => {
  return (
    <div className="category-container">
      <div className="category-container-header"> Explore Categories.!</div>

      <div className="category-list-container">
        <CategoryCard
          categoryName="Shoes"
          categoryImage="https://data.whicdn.com/images/326010542/original.png?t=1548802544"
        ></CategoryCard>
        <CategoryCard
          categoryName="Shirt"
          categoryImage="https://img.businessoffashion.com/resizer/BNzZcUmVBv8yQl9sFReQkx9QC2U=/1600x1200/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/3YKRYBI6IRCOJNOQORC2HBE44E.jpg"
        ></CategoryCard>
        <CategoryCard
          categoryName="Laptop"
          categoryImage="https://cdn.techjuice.pk/wp-content/uploads/2022/09/laptop.png"
        ></CategoryCard>
      </div>
    </div>
  );
};

export default CategoryContainer;
