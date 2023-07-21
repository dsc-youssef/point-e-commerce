// Dependencies
import { FC } from "react";

// Interface Props
import { ProductProps } from "@/interfaces/models/Product";

const Product: FC<ProductProps> = ({ image, rate, price, discount, name }) => {
  return (
    <article className="w-full p-5 h-[10.5rem] flex gap-5 bg-white" >
      <div className="h-full w-[6.875rem] flex items-center justify-center text-white">
        <img className="w-full h-full" src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className=" text-web-primary-700 font-medium text-p1">Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1</h1>
        <div className="flex gap-1 items-center">
          {Array.from({ length: rate ? rate : 0 }, (_) => <i className="fas fa-star text-web-warning-500" />)}
        </div>
        <div className="flex justify-between items-center">
          {
            discount && price ? (
              <div className="flex flex-col">
                <span className="text-web-danger-600 font-bold text-h5">$ {(price - discount)?.toFixed(2)}</span>
                <span className="text-p2 decoration-slice text-web-gray-900 line-through">$ {(price)?.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-h5">$ {(price)?.toFixed(2)}</span>
            )
          }
          <button className="inline-flex items-center justify-center rounded-full h-[36px] text-white w-[36px] bg-web-gray-200 cursor-pointer fas fa-bag-shopping"></button>
        </div>
      </div>
    </article>
  )
}

export default Product;
