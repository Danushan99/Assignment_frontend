import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Import reducers here
import products from "./apps/products/index";

// import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  // Add your reducers here
  products,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
