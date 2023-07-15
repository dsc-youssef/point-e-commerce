// Dependencies
import { lazy } from "react";

// Types
import { RouteObject } from "@/interfaces/hooks/Route";

// Pages
const Home = lazy(() => import("@/pages/dashboard/Home"));
const Information = lazy(() => import("@/pages/dashboard/Information"));
const Products = lazy(() => import("@/pages/dashboard/Products"));
const NewSale = lazy(() => import("@/pages/dashboard/NewSale"));
const Sales = lazy(() => import("@/pages/dashboard/Sales"));
const Expenses = lazy(() => import("@/pages/dashboard/Expenses"));
const Customers = lazy(() => import("@/pages/dashboard/Customers"));
const Users = lazy(() => import("@/pages/dashboard/Users"));
const Profile = lazy(() => import("@/pages/dashboard/Profile"));
const Roles = lazy(() => import("@/pages/dashboard/Roles"));
const Orders = lazy(() => import("@/pages/dashboard/Orders"));

const dashboardRoutes: RouteObject[] = [
  {
    path: "",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Home,
    name: "Dashboard",
    icon: "grid"
  },
  {
    path: "/information",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Information,
    name: "Information",
    icon: "info-circle"
  },
  {
    path: "/products",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Products,
    name: "Products",
    icon: "gifts"
  },
  {
    path: "/newSale",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: NewSale,
    name: "",
    icon: ""
  },
  {
    path: "/sales",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Sales,
    name: "Sales",
    icon: "chart-line-up"
  },
  {
    path: "/expenses",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Expenses,
    name: "Expenses",
    icon: "hand-holding-dollar"
  },
  {
    path: "/customers",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Customers,
    name: "Customers",
    icon: "users"
  },
  {
    path: "/users",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Users,
    name: "Users",
    icon: "user-shield"
  },
  {
    path: "/profile",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Profile,
    name: "",
    icon: ""
  },
  {
    path: "/roles",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Roles,
    name: "Roles",
    icon: "flag"
  },
    {
    path: "/orders",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Orders,
    name: "Orders",
    icon: "truck-fast"
  },
]

export default dashboardRoutes;
