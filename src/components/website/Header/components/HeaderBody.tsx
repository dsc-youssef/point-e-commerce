// Dependencies
import { FC } from "react";

// React Router
import { NavLink } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { toggleOpen } from "@/redux/website/slicers/header";

// Components
import SelectDropdown from "@/components/website/SelectDropdown";

const HeaderBody: FC = () => {
  const dispatch = useDispatch();

  const categoryOptions = [
    { value: "All Categories" },
    { value: "Smartphones" },
    { value: "Laptops & PCs" },
    { value: "Gadgets" },
    { value: "Photo & Video" },
    { value: "Gifts" },
    { value: "Books" },
    { value: "Toys" }
  ];

  const handleToggleHeader = () => {
    dispatch(toggleOpen());
  }


  return (
    <div className="header-body">
      <div className="container">

        <div className="logo-area">
          <i className="far fa-bars toggle-button" onClick={handleToggleHeader} />
          <img src={"/images/global/logo-dark.png"} alt="logo" />
        </div>
        <form className="search-area">
          <div className="input-field">
            <input type="text" className="form-control" placeholder="Search for products" />
            <SelectDropdown className="select-box" options={categoryOptions} />
          </div>
          <button className="far fa-search btn"></button>
        </form>
        <div className="special-buttons">
          <button className="fas fa-user"></button>
          <button className="fas fa-code-compare"></button>
          <button className="fas fa-heart"></button>
          <NavLink to="/cart">
            <button className="fas fa-bag-shopping"> $ <span>0.00</span></button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default HeaderBody;
