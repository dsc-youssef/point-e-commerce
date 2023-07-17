import { FC, useState } from "react";

// Bootstrap Components
import { Dropdown, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { toggleOpen } from "@/redux/dashboard/slicers/sidebar";
import { setTabName } from "@/redux/dashboard/slicers/layout";
// Config
import LAYOUT from "@/config/layout";

// Assets
import userImage from "~/images/global/userAvatar.svg";



const Navbar: FC = () => {
  const dispatch = useDispatch();
  const [searchList, setSearchList] = useState<string>("");
  const [searchVisibility, setSearchVisibility] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<string[]>(["Products", "Product2"]);

  return (
    <nav className="navbar">
      <div className="container-fluid nav-container">
        <div className="logo-block">
          <img
            className="nav-logo"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
          <h3>POINT</h3>
        </div>
        <div className={`nav-search ${!searchVisibility ? "hidden opacity-0" : ""}`}>
          <div className="container ">
            <input type="text" className="form-control " placeholder="Search for a Product" onChange={(e) => setSearchList(e.target.value)} />
            <button className="btn btn-close" onClick={() => setSearchVisibility(false)}><i className="fal fa-door-open" /> Cancel</button>
            <ListGroup className={`list-results ${searchList === "" && "hidden opacity-0"} `}>
              {
                searchResults.map((item: string, key: number) => (<ListGroup.Item key={key}>{item}</ListGroup.Item>))
              }
            </ListGroup>
          </div>
        </div>
        <div className="nav-control-area ">
          <i className="fad fa-search-plus icon" onClick={() => setSearchVisibility(true)} />
          <i className="far fa-bars-staggered icon" onClick={() => dispatch(toggleOpen())} />
          <Dropdown>
            <Dropdown.Toggle className="avatar avatar-dropdown">
              <img
                className="nav-logo"
                src={userImage}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow select-none">
              <div className="flex flex-col">
                <Link className="dropdown-item hover:bg-dash-warning hover:text-white font-medium transition" to={`${LAYOUT.dashboard_url}profile`} onClick={() => dispatch(setTabName("Profile"))}>
                  <i className="fal fa-user" />
                  Profile
                </Link>
                <div className="dropdown-item hover:bg-dash-success hover:text-white font-medium transition" >
                  <i className="fal fa-calculator-simple" />
                  Tools
                </div>
                <div className="dropdown-item hover:bg-dash-danger hover:text-white font-medium transition" >
                  <i className="fal fa-door-open" />
                  Logout
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
