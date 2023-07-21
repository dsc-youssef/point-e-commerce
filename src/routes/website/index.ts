// Dependencies
import { lazy } from "react";

// Types
import { RouteObject } from "@/interfaces/hooks/Route";

// Pages
const Home = lazy(()=> import("@/pages/website/Home/index"));


const websiteRoutes: RouteObject[] = [
  {
    path: "",
    role: "global",
    category: "",
    key: "",
    element: Home,
    name: "Home",
    icon: "house"
  },
]

export default websiteRoutes;
