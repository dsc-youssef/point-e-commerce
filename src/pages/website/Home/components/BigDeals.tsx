// Dependencies
import { FC } from "react";

// Components
import BlockTitle from "@/components/website/BlockTitle";
import DefaultRow from "@/components/website/ProductsRow";

const BigDeals: FC = () => {

  const products = [
    { category: "Laptops & PCs", price: 120, discount: 40, name: "E-ink Kindle PaperWhite 2021, 6.8, Waterproof, 8GB, Wi-Fi", image: "images/website/pages/home/products/bigDeals1.png" },
    { category: "Photo & Video", price: 500, discount: 100, name: "Graphic Tablet Wacom Cintiq 16 (Black)", image: "images/website/pages/home/products/bigDeals2.png" },
    { category: "Smartphones", price: 270, discount: 30, name: "Huawei Nova 9, Qualcomm SM7325 Snapdragon 778G, ", image: "images/website/pages/home/products/bigDeals3.png" },
    { category: "TV & Audio", price: 140, discount: 20, name: "Apple TV, 32GB Flash, WiFi, Bluetooth, Generation 5, 1080p", image: "images/website/pages/home/products/bigDeals4.png" },
    { category: "TV & Audio", price: 280, discount: 20, name: "Headphones Stereo Bose QuietComfort 35 II (Silver)", image: "images/website/pages/home/products/bigDeals5.png" },
  ];

  return (
    <div className="container">
      <div className="w-full inline-flex flex-col">
        <BlockTitle title="Big Deals" angles={true} />
        <DefaultRow products={products} scrolling={true} />
      </div>
    </div>
  )
}

export default BigDeals;
