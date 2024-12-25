import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice"
import { productsApi } from "./service/api";
const store = configureStore({
  reducer: {
    data: dataSlice,
    [productsApi.reducerPath]: productsApi.reducer 
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(productsApi.middleware)
  )
})

export default store