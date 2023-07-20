// Dependencies
import { FC } from "react";

// Components
import TopHeader from "./components/TopHeader";
import HeaderBody from "./components/HeaderBody";
import HeaderCategories from "./components/HeaderCategories";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header: FC = () => {
  const isOpen = useSelector((state: RootState) => state.website.header.isOpen);

  return (
    <div className={`header ${isOpen && "active"}`}>
      <TopHeader />
      <HeaderBody />
      <HeaderCategories />
    </div>
  )
}

export default Header;
