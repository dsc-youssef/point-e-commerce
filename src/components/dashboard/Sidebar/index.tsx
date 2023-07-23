// Dependencies
import { FC } from "react";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Custom Scroll


// Components
import SidebarHeader from "./components/Header";
import SidebarBody from "./components/Body";
import SidebarFooter from "./components/Footer";

// Assets

const Sidebar: FC = () => {
  const isOpen = useSelector((state: RootState) => state.dashboard.sidebar.isOpen);

  return (
    <aside className={`sidebar ${isOpen && "active"}`} >
      <SidebarHeader />
      <div className="sidebar-content">
        <SidebarBody />
        <SidebarFooter />
      </div>
    </aside>
  )
}

export default Sidebar;
