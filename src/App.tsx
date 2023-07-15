// Dependencies
import React from "react";

// Providers
import MainProvider from "@/components/global/MainProvider";
import ThemeProvider from "@/components/global/ThemeProvider";

// Style
import "@/styles/bootstrap.scss"; 
import "~/libs/fontawesome/css/all.min.css";
import "@/styles/style.scss";

// Layouts
const Dashboard = React.lazy(() => import("./layouts/dashboard"));

const App: React.FC = () => {
  return (
    <MainProvider>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </MainProvider>
  )
}

export default App;