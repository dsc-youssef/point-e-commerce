// Redux
import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import sidebar from "./slicers/sidebar"
import layout from "./slicers/layout"

export default combineReducers({
  sidebar,
  layout
});
