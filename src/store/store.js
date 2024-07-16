import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./ShoppingChartReducer"

const store = configureStore({
  reducer: {
    products: authReducer
  },
});

export default store