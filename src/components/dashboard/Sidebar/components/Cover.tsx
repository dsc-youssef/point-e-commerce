// Dependencies
import { FC } from "react";

// Redux
import { useDispatch } from "react-redux";
import { toggleOpen } from "@/redux/dashboard/slicers/sidebar";

const SidebarCover:FC = ()=>{
  const dispatch = useDispatch();
  return (
    <div className="screen-cover cover-behind" onClick={()=>dispatch(toggleOpen())}></div>
  )
}

export default SidebarCover;