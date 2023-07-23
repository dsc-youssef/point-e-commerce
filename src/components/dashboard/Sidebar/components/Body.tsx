// Dependencies
import { FC, useMemo } from "react";

// React Router
import { NavLink } from "react-router-dom";

// config
import LAYOUT from "@/config/layout";

// interface
import { RouteObject } from "@/interfaces/hooks/Route";

// Redux
import { useDispatch } from "react-redux";
import { setTabName } from "@/redux/dashboard/slicers/layout";

// Hooks
import useRoute from "@/hooks/useRoute";

// Routes
import dashboardRoutes from "@/routes/dashboard";


const SidebarBody:FC = ()=>{
  const dispatch = useDispatch();
  const { validateRoutes } = useRoute();
  const routes = useMemo(() => validateRoutes(dashboardRoutes, ["global"]), []);
  const notEmptyRoute = (route: RouteObject): RouteObject | null => route.name !== "" ? route : null;

  return (
    <div className="sidebar-body">

      {
        routes.map((button: RouteObject, key: number) =>
          notEmptyRoute(button) && (
          <NavLink
            to={button.path}
            className="btn-sidebar"
            key={key}
            onClick={()=> dispatch(setTabName(button.name))}
            end >
            <i className={`fas fa-${button.icon} btn-icon`} />
            <span className="btn-title">{button.name}</span>
          </NavLink>
        ))
      }
    {/* <label className="sidebar-label">ACCOUNT PAGES</label> */}

    </div>
  )
}

export default SidebarBody;
