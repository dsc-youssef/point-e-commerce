import { LayoutSlicerState } from "../../types/layout";
import { PayloadAction } from "@reduxjs/toolkit"

export const layoutActions = {
  toggleDir: (state: LayoutSlicerState) => {
    state.dir = state.dir === "ltr" ? "rtl" : "ltr";
  },
  changeTheme: (state: LayoutSlicerState, action: PayloadAction<string>)=> {
    state.theme = action.payload;
  }
}


