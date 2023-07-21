// Dependencies
import { FC } from "react";

// Interface Props
import { ProductProps } from "@/interfaces/models/Product";

const Product: FC<ProductProps> = ({ image, rate, price, discount, name }) => {
  return (
    <article className="product" >
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h1 className="product-name">Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1</h1>
        <div className="product-stars">
          {Array.from({ length: rate ? rate : 0 }, (_) => <i className="fas fa-star text-web-warning-500" />)}
        </div>
        <div className="product-footer">
          {
            discount && price ? (
              <div className="product-discount-area">
                <span className="price">$ {(price - discount)?.toFixed(2)}</span>
                <span className="discount">$ {(price)?.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-h5">$ {(price)?.toFixed(2)}</span>
            )
          }
          <button className="button fas fa-bag-shopping"></button>
        </div>
      </div>
    </article>
  )
}

export default Product;
