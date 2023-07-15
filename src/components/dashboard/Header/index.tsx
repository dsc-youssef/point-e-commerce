// Dependencies
import { FC, useMemo, useState } from "react";
import { Dropdown } from "react-bootstrap";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleTheme, toggleDir } from "@/redux/global/slicers/layout";

const Header:FC = ()=> {
  // Redux
  const dispatch = useDispatch();
  const current_tab = useSelector((state:RootState)=> state.global.layout.current_tab);
  const tabName = useMemo(()=> current_tab, [current_tab]);

  // Date
  const dateOptions = useMemo(()=> Object({
    weekday: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric"
  }), []);
  const [currentTime, setCurrentTime] = useState(new Date());

  return (
    <header className="header ">
      <div className="right-side">
        <h1 className="tab-name">{tabName}</h1>
        <p className="local-time">
          {currentTime.toLocaleString("en-US", dateOptions)}
        </p>
      </div>
      <div className="left-side">

      <Dropdown>
        <Dropdown.Toggle className=" bg-transparent">
          <button className="fal fa-gear btn bg-danger text-white"></button>
        </Dropdown.Toggle>
        <Dropdown.Menu className="shadow select-none">
          <div className="flex flex-col">
            <div className="dropdown-item" onClick={()=> dispatch(toggleTheme())}>
              <i className="fal fa-moon" />
              Dark / Light
            </div>
            <div className="dropdown-item" onClick={()=> dispatch(toggleDir())}>
              <i className="fal fa-arrow-right" />
              Right Direction
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>


        <Dropdown>
          <Dropdown.Toggle className=" bg-transparent">
            <button className="fal fa-pen btn bg-primary text-white"></button>
          </Dropdown.Toggle>
          <Dropdown.Menu className="shadow select-none">
            <div className="flex flex-col">
              <div className="dropdown-item" >
                <i className="fal fa-dollar-circle" />
                New Sale
              </div>
              <div className="dropdown-item" >
                <i className="fal fa-user-plus" />
                New Customer
              </div>
              <div className="dropdown-item" >
                <i className="fal fa-file-text" />
                New Expense
              </div>
              <div className="dropdown-item" >
                <i className="fal fa-plane" />
                New Order
              </div>
              <div className="dropdown-item" >
                <i className="fal fa-flag" />
                New Role
              </div>
              <div className="dropdown-item">
                <i className="fal fa-cart-plus" />
                New Product
              </div>
              <div className="dropdown-item" >
                <i className="fal fa-user-shield" />
                New User
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

    </header>
  )
}

export default Header;
