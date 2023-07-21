// Dependencies
import { FC } from "react";

// Components
import BlockTitle from "@/components/website/BlockTitle";
import DefaultRow from "@/components/website/ProductsRow";
import BannerCard from "@/components/website/BannerCard";

const Bestsellers: FC = () => {

  const products = [
    { category: "Laptops & PCs", price: 490, name: "Laptop HP 250 G9, Procesor Intel® Core™ i5-1235U", image:"images/website/pages/home/products/bestseller1.png"},
    { category: "Photo & Video", price: 510, name: "Canon EF-S 18-135mm f/3.5-5.6 IS USM Nano", image: "images/website/pages/home/products/bestseller2.png" },
    { category: "TV & Audio", price: 180, name: "IPS LED Lenovo ThinkVision 27 T27i-10, Full HD (1920 x 1080)", image:"images/website/pages/home/products/bestseller3.png" },
    { category: "Gadgets", price: 250, name: "Smartwatch Huawei Watch GT 3, Display AMOLED 1.32", image: "images/website/pages/home/products/bestseller4.png" },
    { category: "Smartphones", price: 20, name: "Nokia 105 (2019), Dual Sim (Black)", image: "images/website/pages/home/products/bestseller5.png" },
  ];

  return (
    <div className="container">
      <div className="w-full inline-flex flex-col mt-10 ">
        <BlockTitle title="Bestsellers" angles={true} />
        <DefaultRow products={products} scrolling={true}/>
        <div className="gap-5 w-full mt-[55px] grid grid-cols-1 lg:grid-cols-2">
          <BannerCard title="PORTABLE SPEAKERS COLLECTION" special="2023" image="images/website/components/banner/audio-speakers.png" />
          <BannerCard title="ALL ACCESSORIES FOR" special="GAMERS" image="images/website/components/banner/controller.png" />
        </div>
      </div>
    </div>
  )
}



export default Bestsellers;
