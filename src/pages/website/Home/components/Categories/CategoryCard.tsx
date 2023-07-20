// Dependencies
import { FC } from "react";

// Interface Props
import { WebsiteHomeCategoryCardProps } from "@/interfaces/website/pages/Home/CategoryCard";

const CategoryCard: FC<WebsiteHomeCategoryCardProps> = ({ category, image }) => {
  return (
    <div className="categoryCard">
      <h1 className="category" >{category}</h1>
      <img className="image" src={image} alt="" />
      <i className="fas fa-angle-right btn-more"></i>
    </div>
  )
}

export default CategoryCard;
