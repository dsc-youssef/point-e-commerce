// Dependencies
import { FC } from "react";

// Interface Props
import { WebsiteBannerCardProps } from "@/interfaces/website/components/BannerCard";

const BannerCard: FC<WebsiteBannerCardProps> = ({ image, title, wrapper, special }) => {
  return (
    <div className={`bannerCard ${wrapper && "flex-col"}`}>
      <h1 className="title">{title} <span className="font-bold">{special}</span></h1>
      <img className="image" src={image} alt="" />
    </div>
  )
}

export default BannerCard;
