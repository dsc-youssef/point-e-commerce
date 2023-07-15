// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// Bootstrap Components
import { Row, Col, Container } from "react-bootstrap";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Config
import LAYOUT from "@/config/layout";

// Default Components
const Sidebar = lazy(() => import("@/components/dashboard/Sidebar"));
const Navbar = lazy(()=> import("@/components/dashboard/Navbar"));
const Header = lazy(()=> import("@/components/dashboard/Header"));
const Footer = lazy(()=> import("@/components/dashboard/Footer"));


const DashboardLayout: FC = () => {
  const layoutTheme = useSelector((state:RootState)=> state.global.layout.theme);
  return (
    <main className={`${LAYOUT.dashboard_prefix} ${layoutTheme}`} >
      <Row className="m-0 p-0">
        <Col className="m-0 p-0">
          <Navbar />
          <div className="w-full flex">
          <Sidebar />
            <Container fluid className="dashboard-content">
              <Header />
              <Outlet />
              <Footer />
            </Container>
          </div>
        </Col>
      </Row >
    </main>
  )
}

export default DashboardLayout;
