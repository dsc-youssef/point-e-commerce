// Dependencies
import { FC } from "react";

// React Redux
import { NavLink } from "react-router-dom";

// Interface
import { DashboardSidebarDropdownProps } from  "@/interfaces/dashboard/components/Sidebar"

const SidebarDropdown: FC<DashboardSidebarDropdownProps> = ({ icon, title, active, to, onClick }) => {
  
  return (
    <>
    { to ? (
        <NavLink to={to} className={`sidebar-button ${active && "active"}`} onClick={onClick} end>
          <i className={`fal fa-${icon} btn-icon`} />
          <p className="btn-title">{title}</p>
        </NavLink> 
      ) : 
      (
        <button className={`sidebar-button ${active && "active"}`} onClick={onClick}>
          <i className={`fal fa-${icon} btn-icon`} />
          <p className="btn-title">{title}</p>
        </button> 
      )
    }
    </>
  )
}

export default SidebarDropdown;
