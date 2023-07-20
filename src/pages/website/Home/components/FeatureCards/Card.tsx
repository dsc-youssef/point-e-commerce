// Dependencies
import { FC } from "react";

// Interface Props
import { WebsiteHomeFeatureCardProps } from "@/interfaces/website/pages/Home/FeatureCard";

const Card: FC<WebsiteHomeFeatureCardProps> = ({ icon, className, title, content }) => {
  return (
    <div className="feature-card">
      <i className={`${icon} ${className} icon`} />
      <div className="feature-info">
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
      </div>
    </div>
  )
}

export default Card;
