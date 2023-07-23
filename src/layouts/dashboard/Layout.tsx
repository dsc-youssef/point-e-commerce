// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// Bootstrap Components
import { Container } from "react-bootstrap";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Config
import LAYOUT from "@/config/layout";

// Default Components
const MainCover = lazy(() => import("@/components/dashboard/MainCover"));
const Sidebar = lazy(() => import("@/components/dashboard/Sidebar"));
const Navbar = lazy(() => import("@/components/dashboard/Navbar"));
const Footer = lazy(() => import("@/components/dashboard/Footer"));


const DashboardLayout: FC = () => {
  const layoutSettings = useSelector((state: RootState) => state.dashboard.layout);

  return (
    <main className={`${LAYOUT.dashboard_prefix} ${layoutSettings.theme} direction-${layoutSettings.dir}`} >
      <MainCover />
      <Container fluid>
        <div className="flex gap-5 my-10">
          <Sidebar/>
          <div className="page-content">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default DashboardLayout;
