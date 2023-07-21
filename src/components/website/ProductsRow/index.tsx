// Dependencies
import { FC } from "react";

// Interface Props
import { WebsiteDefaultProductsRowProps } from "@/interfaces/website/components/ProductsRow";

// Components
import ProductCard from "@/components/website/ProductCard";

const ProductsRow: FC<WebsiteDefaultProductsRowProps> = ({ products, scrolling }) => {
  return (
    <div className={`productsRow ${scrolling && "scrolling"}`} >
      {
        typeof products === "object" && products.length > 0 ? products.map((product, index) => (
          <ProductCard className="flex-1" discount={product.discount} key={index} category={product.category} name={product.name} image={product.image} price={product.price} />
        )) : null
      }
    </div>
  )
}

export default ProductsRow;
