// Dependencies
import BlockTitle from "@/components/website/BlockTitle";
import { FC } from "react";
import Product from "./Product";

const ProductLists: FC = () => {
  const topRated = [
    { id: 1, name: "PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)", price: 600, rate: 4, image: "/images/website/pages/home/products/lists1.png" },
    { id: 2, name: "Laptop 2in1 Asus VivoBook S 14 Flip TP3402ZA Intel® Core™", price: 1000, rate: 5,  image: "/images/website/pages/home/products/lists2.png" },
    { id: 3, name: "Sony SRS-XP700, MEGA BASS, Bluetooth, LDAC, Wireless, IPX4", price: 600, rate: 4, image: "/images/website/pages/home/products/lists3.png" }
  ];

  const bestSellers = [
    { id: 4, name: "Panasonic SC-TMAX10E-K, Bluetooth, 300W, AIRQUAKE ", price: 240, rate: 3, image: "/images/website/pages/home/products/lists4.png" },
    { id: 5, name: "Sony Handycam FDR-AX700, 4K HDR(HLG), Black", price: 2000, rate: 5,  image: "/images/website/pages/home/products/lists5.png" },
    { id: 6, name: "Samsung Galaxy S22,Exynos 2200 Octa-Core", price: 640, rate: 4, image: "/images/website/pages/home/products/lists6.png" }
  ];

  const megaOffers = [
    { id: 7, name: "All In One PC ASUS, Intel® Core™ i5-11500B", price: 1200, discount: 200, rate: 4, image: "/images/website/pages/home/products/lists7.png" },
    { id: 8, name: "GoPro HERO10, Filmare 5.3K 30fps, 23MP, Waterproof, GPS", price: 600, discount: 100, rate: 5,  image: "/images/website/pages/home/products/lists8.png" },
    { id: 9, name: "Smartwatch iHunt Watch 6 Titan, Display Full Touch 1.28", price: 290, discount: 40, rate: 4, image: "/images/website/pages/home/products/lists9.png" }
  ];


  return (
    <div className="product-lists">
      <div className="container">
        <div className="products-container">
          <div>
            <BlockTitle title="Top Rated" />
            <div className="products-col">
              { topRated.map((product)=> <span key={product.id}><Product name={product.name} image={product.image} rate={product.rate} price={product.price} /></span>)}
            </div>
          </div>
          <div>
            <BlockTitle title="BestSellers" />
            <div className="products-col">
              { bestSellers.map((product)=> <span key={product.id}><Product name={product.name} image={product.image} rate={product.rate} price={product.price} /></span>)}
            </div>
          </div>
          <div>
            <BlockTitle title="Mega Offers" />
            <div className="products-col">
              { megaOffers.map((product)=> <span key={product.id}><Product name={product.name} image={product.image} rate={product.rate} price={product.price} discount={product.discount} /></span>)}
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default ProductLists;
