// Dependencies
import { FC } from "react";

const Brands: FC = () => {
  const images = [
    "brands-1.png",
    "brands.png",
    "Gama.png",
    "gamerzone.png",
    "gomezbuzz.png",
    "TRACIC.png",
    "upside.png",
    "wofact.png"
  ]
  return (
    <div className="container">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5 sm:gap-3 mt-[41px]">
        {
          images.map((image, key) => (
            <div key={key} className="w-full p-0 m-0 min-h-[80px] inline-flex justify-center items-center h-full">
              <img className="object-center" src={`/images/website/components/brands/${image}`} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Brands;
