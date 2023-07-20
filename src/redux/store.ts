// Redux
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// Reducers
import dashboard from './dashboard'
import global from "./global";
import website from './website';

// Reducers
const reducers = combineReducers({
  dashboard,
  global,
  website
})

// Store
export const store = configureStore({
  reducer: reducers
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
