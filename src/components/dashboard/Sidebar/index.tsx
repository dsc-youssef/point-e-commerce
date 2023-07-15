// Dependencies
import { FC } from "react";

// Components
import Body from "./components/Body";
import SidebarCover from "./components/Cover";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Assets
import sidebarCoverImage from "~/images/dashboard/sidebar3.png";

const Sidebar: FC = () => {
  const isOpen = useSelector((state: RootState) => state.dashboard.sidebar.isOpen);

  return (
    <aside className={`sidebar ${isOpen && "active"}`}>
      <img src={sidebarCoverImage} className="area-cover cover-behind object-cover opacity-40" />
      <SidebarCover />
      <Body />
    </aside>
  )
}

export default Sidebar;
