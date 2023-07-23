// Dependencies
import { FC } from "react";

// Assets
import documentationIcon from "~/images/dashboard/sidebar-icon-documentation.svg"

const SidebarFooter:FC = ()=>{
  return (
    <div className="sidebar-footer">
      <img src={documentationIcon} alt=""/>
      <h3 className="documentation-info-title">Need help?</h3>
      <p className="documentation-info-text">Please check our docs</p>
      <button className="btn btn-big">DOCUMENTATION</button>
    </div>
  )
}

export default SidebarFooter;
