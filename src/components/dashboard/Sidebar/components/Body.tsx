// Dependencies
import { FC, useMemo } from "react";

// config
import LAYOUT from "@/config/layout";

// interface
import { RouteObject } from "@/interfaces/hooks/Route";

// Components
import SidebarButton from "./Button";
// import SidebarButtonsContainer from "./ButtonsContainer";

// Redux
import { useDispatch } from "react-redux";
import { setTabName } from "@/redux/dashboard/slicers/layout";

// Hooks
import useRoute from "@/hooks/useRoute";

// Routes
import dashboardRoutes from "@/routes/dashboard";


const Body: FC = () => {
  const dispatch = useDispatch();
  const { validateRoutes } = useRoute();
  const routes = useMemo(() => validateRoutes(dashboardRoutes, ["global"]), []);
  const notEmptyRoute = (route: RouteObject): RouteObject | null => route.name !== "" ? route : null;

  return (
    <div className="sidebar-body">
      {
        routes.map((button: RouteObject, key: number) =>
          notEmptyRoute(button) && (
            <SidebarButton
              key={key}
              title={button.name}
              to={`${LAYOUT.dashboard_url}${button.path.replace("/", "")}`}
              icon={button.icon}
              onClick={() => dispatch(setTabName(button.name))} />
          )
        )
      }
    </div>
  )
}

export default Body;
