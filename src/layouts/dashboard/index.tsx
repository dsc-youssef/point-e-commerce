// Dependencies
import { FC, lazy, useMemo } from "react";

// Types
import { RouteObject } from "@/interfaces/hooks/Route";

// React Router
import { Routes, Route } from "react-router-dom";

// config
import LAYOUT from "@/config/layout";

// Hooks
import useRoute from "@/hooks/useRoute";

// Routes
import dashboardRoutes from "@/routes/dashboard";

// Layout
const DashboardLayout = lazy(() => import("./Layout"));

const Dashboard: FC = () => {
  const { validateRoutes } = useRoute();
  const routes = useMemo(()=> validateRoutes(dashboardRoutes, ["global"]), []);

  return (
    <Routes>
      <Route path={LAYOUT.dashboard_url} element={<DashboardLayout />}>
        {
          routes.map((route: RouteObject, key: number) =>
            <Route
              key={key}
              path={route.path}
              element={<route.element />}
            />
          )}
      </Route>
    </Routes>
  )
}

export default Dashboard;
