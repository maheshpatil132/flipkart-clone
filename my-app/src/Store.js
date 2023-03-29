
import { configureStore } from '@reduxjs/toolkit'
import { ProductReducer, Product_detial_reducer } from './Reducers/ProductReducer';


const store = configureStore({
    reducer:{
       AllProducts : ProductReducer,
       ProductDetial : Product_detial_reducer
    },

});
export default store;