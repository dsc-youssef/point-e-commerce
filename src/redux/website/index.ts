// Redux
import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import header from "./slicers/header";
import layout from './slicers/layout';

export default combineReducers({
  header,
  layout
});
