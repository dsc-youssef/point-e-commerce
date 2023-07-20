// Dependencies
import { FC, useMemo, useState, lazy } from "react";
import { Dropdown } from "react-bootstrap";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Components
const Options = lazy(()=> import("./components/Options")) ;
const CreateModals = lazy(()=> import("./components/CreateModals")) ;

const Header:FC = ()=> {
  // Redux
  const current_tab = useSelector((state:RootState)=> state.dashboard.layout.current_tab);
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
        <Options />
        <CreateModals />
      </div>
    </header>
  )
}

export default Header;
