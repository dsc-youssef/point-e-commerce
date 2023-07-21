// Dependencies
import { FC } from "react";

// Interface Props
import { ProductProps } from "@/interfaces/models/Product";

const ProductCard: FC<ProductProps> = ({ category, name, price, discount, className, key, image }) => {
  return (
    <div key={key} className={`${className} productCard`}>
      <span className="category">{category}</span>
      <h1 className="name" title={name}>{name}</h1>
      <img className="image" src={image} alt={name} />
      <div className="footer">
        {
          !discount ? (
            <h4 className="price">${Number(price).toFixed(2)}</h4>
          ) : (
            <div className="discountBlock">
              <h4 className="price">$ {Number(price).toFixed(2)}</h4>
              <small className="discount">$ {Number(discount).toFixed(2)}</small>
            </div>
          )
        }
        <i className="fas fa-bag-shopping button" />
      </div>
    </div>
  )
}

export default ProductCard;
