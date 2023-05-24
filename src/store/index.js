import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/productSlice';
import sideBarSlice from '../features/sideBarSlice';

export default configureStore({
 reducer:{
    productReducer: productReducer,
    sideBarSlice: sideBarSlice
 }
})

