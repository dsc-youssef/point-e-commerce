// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// Bootstrap Components

// Redux
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";

// Config
import LAYOUT from "@/config/layout";

// Default Components
const Header = lazy(()=> import("@/components/website/Header"));
const Footer = lazy(()=> import("@/components/website/Footer"));

const WebsiteLayout: FC = () => {

  return (
    <main className={`${LAYOUT.website_prefix} direction-ltr`} >
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default WebsiteLayout;
