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
import websiteRoutes from "@/routes/website";

// Layout
const WebsiteLayout = lazy(() => import("./Layout"));

const Website: FC = () => {
  const { validateRoutes } = useRoute();
  const routes = useMemo(()=> validateRoutes(websiteRoutes, ["global"]), []);

  return (
    <Routes>
      <Route path={LAYOUT.website_url} element={<WebsiteLayout />}>
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

export default Website;
