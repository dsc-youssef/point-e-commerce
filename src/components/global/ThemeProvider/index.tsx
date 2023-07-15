// Dependencies
import React from "react";

// Config
import LAYOUT from "@/config/layout";

// Types
import { ThemeProviderProps } from "@/interfaces/global/components/ThemeProvider";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const layoutSettings = useSelector((state:RootState)=> state.global.layout);

  return (
    <main className={`${LAYOUT.global_prefix} ${layoutSettings.theme} direction-${layoutSettings.dir}`}>
      {children}
    </main>
  )
}

export default ThemeProvider;