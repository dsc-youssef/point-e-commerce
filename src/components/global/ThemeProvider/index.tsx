// Dependencies
import React from "react";

// Config
import LAYOUT from "@/config/layout";

// Types
import { ThemeProviderProps } from "@/interfaces/global/components/ThemeProvider";


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <main className={`${LAYOUT.global_prefix}`}>
      {children}
    </main>
  )
}

export default ThemeProvider;
