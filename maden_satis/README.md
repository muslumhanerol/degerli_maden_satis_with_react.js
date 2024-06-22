npm install react-icons
npm install @reduxjs/toolkit react-redux
npm install react-router-dom
npm isntall axios
npm install @mui/material @emotion/react @emotion/styled
--------------------------------------------------------
Redux toolkit kullanım.
1-redux klasörü içinde store.jsx oluşturuldu>
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
2-main.jsx içerisine >
import { Provider } from 'react-redux' import edildi.
3-redux>slices>productSlice.jsx oluştur
import { createSlice } from '@reduxjs/toolkit' ekle. 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
