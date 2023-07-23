// Dependencies
import { FC } from "react";

// Assets
import headerUnderLine from "~/images/dashboard/sidebar-header-line.svg";
import appLogo from "~/images/global/logo-dark.png";

const SidebarHeader:FC = ()=>{
  return (
    <header className="sidebar-header">
      <img width={100} src={appLogo} alt="headerUnderLine"/>
      <img src={headerUnderLine} alt="headerUnderLine"/>
    </header>
  )
}

export default SidebarHeader;
