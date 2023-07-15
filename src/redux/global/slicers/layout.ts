// Redux
import { createSlice } from "@reduxjs/toolkit";

// State
import { initialState } from "../initialStates/layout";

// Actions
import { layoutActions} from "../actions/layout";

const layoutSlicer = createSlice({
  name: "layout",
  initialState,
  reducers: {
    ...layoutActions
  }
});

export default layoutSlicer.reducer;
export const { toggleTheme, toggleDir, setTabName } = layoutSlicer.actions;
