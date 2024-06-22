//Redux: 1. adım.
import { configureStore } from '@reduxjs/toolkit'

//Tanımlanan iki slice (productSlice, appSlice) burada bağlıyoruz.
import appReducer from '../redux/slices/appSlice';
import productReducer from '../redux/slices/productSlice';

export const store = configureStore({
  reducer: {
    app : appReducer,
    product : productReducer
  },
})

