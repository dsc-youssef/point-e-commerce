// Dependencies
import { FC } from "react";
import { Dropdown } from "react-bootstrap";

// Redux
import { useDispatch } from "react-redux";
import { toggleTheme, toggleDir, toggleFullScreen } from "@/redux/dashboard/slicers/layout";


const Options: FC = () => {
  const dispatch = useDispatch();

  return (
    <Dropdown>
      <Dropdown.Toggle className=" bg-transparent">
        <button className="fal fa-gear btn bg-dash-danger text-white"></button>
      </Dropdown.Toggle>
      <Dropdown.Menu className="shadow select-none">
        <div className="flex flex-col">
          <div className="dropdown-item" onClick={() => dispatch(toggleTheme())}>
            <i className="fal fa-moon" />
            Dark / Light
          </div>
          <div className="dropdown-item" onClick={() => dispatch(toggleDir())}>
            <i className="fal fa-right-left" />
            Page Direction
          </div>
          <div className="dropdown-item" onClick={() => dispatch(toggleFullScreen())}>
            <i className="fal fa-expand" />
            Full Screen
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Options;
