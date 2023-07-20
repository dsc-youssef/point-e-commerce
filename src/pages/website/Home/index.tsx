// Dependencies
import { FC } from "react";

// Components
import Slider from "./components/Slider";
import FeatureCards from "./components/FeatureCards";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesCards from "./components/Categories";
import Bestsellers from "./components/Bestsellers";
import BigDeals from "./components/BigDeals";
import Brands from "@/components/website/Brands";


const Home: FC = () => {

  const sliders = [
    { before: "", after: "CONSOLE X245-HD", special: "PLAYBOX", image: "/images/website/pages/home/slider2.png" },
    { before: "KEEP YOUR SHAPE WITH ALL NEW", after: "", special: "GADGETS", image: "/images/website/pages/home/slider3.png" }
  ];

  return (
    <div className="home-page w-full">
      <Slider sliders={sliders} />
      <FeatureCards />
      <FeaturedProducts />
      <CategoriesCards />
      <Bestsellers />
      <BigDeals />
      <Brands />
    </div>
  )
}

export default Home;
