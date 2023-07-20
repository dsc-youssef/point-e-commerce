// Redux
import { createSlice } from "@reduxjs/toolkit";

// State
import { initialState } from "../initialStates/header";

// Actions
import { headerActions } from "../actions/header";


const headerSlicer = createSlice({
  name: "header",
  initialState,
  reducers: {
    ...headerActions
  }
});

export default headerSlicer.reducer;
export const { toggleOpen } = headerSlicer.actions;
