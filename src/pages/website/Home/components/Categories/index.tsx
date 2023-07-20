// Dependencies
import { FC } from "react";

// Components
import CategoryCard from "./CategoryCard";
import BlockTitle from "@/components/website/BlockTitle";

const CategoriesCards: FC = () => {
  const categories = [
    { category: "TV & Audio", image: "images/website/pages/home/products/category1.png" },
    { category: "Smartphones", image: "images/website/pages/home/products/category2.png" },
    { category: "Laptops & PCs", image: "images/website/pages/home/products/category3.png" },
    { category: "Gadgets", image: "images/website/pages/home/products/category4.png" },
    { category: "Photo & Video", image: "images/website/pages/home/products/category5.png" },
    { category: "Gifts", image: "images/website/pages/home/products/category6.png" },
    { category: "Books", image: "images/website/pages/home/products/category7.png" },
    { category: "Toys", image: "images/website/pages/home/products/category8.png" }
  ];

  return (
    <div className="bg-grey-100">
      <div className="container">
        <div className="categoryCards">
          <BlockTitle title="Categories" />
          <div className="categories">
            {
              categories.map((category, index) => (
                <CategoryCard key={index} category={category.category} image={category.image} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesCards;
