import { LayoutSlicerState } from "../../types/layout";
import { PayloadAction } from '@reduxjs/toolkit'

export const layoutActions = {
  toggleTheme: (state: LayoutSlicerState) => {
    state.theme = state.theme === "dark-blue" ? "light" : "dark-blue";
  },
  toggleDir: (state: LayoutSlicerState) => {
    state.dir = state.dir === "ltr" ? "rtl" : "ltr";
  },
  setTabName: (state: LayoutSlicerState, action: PayloadAction<string>) => {
    state.current_tab = action.payload;
  },
  toggleFullScreen: (_state: LayoutSlicerState) => {
    !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen()
  }
}
