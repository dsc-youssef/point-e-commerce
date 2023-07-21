// Redux
import { createSlice } from "@reduxjs/toolkit";

// State
import { initialState } from "../initialStates/layout";

// Actions
import { layoutActions } from "../actions/layout";


const headerSlicer = createSlice({
  name: "layout",
  initialState,
  reducers: {
    ...layoutActions
  }
});

export default headerSlicer.reducer;
export const { toggleDir, changeTheme } = headerSlicer.actions;
