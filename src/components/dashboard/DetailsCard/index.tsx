// Dependencies
import { FC } from "react";

// React Router
import { NavLink } from "react-router-dom";

// Props Interface
import { DashboardDetailsCardProps } from "@/interfaces/dashboard/components/DetailsCard";

const DetailsCard:FC<DashboardDetailsCardProps> = ({ title, value, className, to, icon })=> {
  
  return (
    <div className={`details-card ${className}`}>
    
     <div className="card-body">
        <h1 className="card-title">{value}</h1>
        <h6 className="card-paragraph">{title}</h6>
        <i className={`far fa-${icon} icon`}/>
      </div>
     <div className="card-footer">
        <NavLink to={to} className="btn "><i className="fas fa-link" /><span className="uppercase font-bold">More Details</span></NavLink>
      </div>
   </div>
  )
}

export default DetailsCard;