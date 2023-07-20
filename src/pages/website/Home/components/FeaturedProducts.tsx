// Dependencies
import { FC } from "react";

// Components
import DefaultRow from "@/components/website/ProductsRow";
import BlockTitle from "@/components/website/BlockTitle";


const FeaturedProducts: FC = () => {
  const products = [
    { category: "Smartphones", price: 1200, name: "Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1", images: ["images/website/pages/home/products/featured1.png"] },
    { category: "Smartphones", price: 60, name: "Mobile Phone Nokia 8210, Dual SIM, 4G", images: ["images/website/pages/home/products/featured2.png"] },
    { category: "TV & Audio", price: 1200, name: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS", images: ["images/website/pages/home/products/featured3.png"] },
    { category: "TV & Audio", price: 920, name: "Headphones, Noise cancelling, Bluetooth 5.0", images: ["images/website/pages/home/products/featured4.png"] },
    { category: "Photo & Video", price: 1110, name: "D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm", images: ["images/website/pages/home/products/featured5.png"] },
  ]


  return (
    <div className="container">
      <div className="inline-flex flex-col my-5 mb-10 w-full">
        <BlockTitle title="Featured Products" angles={true} />
        <DefaultRow products={products} scrolling={true} />
      </div>
    </div>
  )
}

export default FeaturedProducts;
