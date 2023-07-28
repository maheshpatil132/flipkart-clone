
import { configureStore } from '@reduxjs/toolkit'
import { CreateProduct, ProductReducer, Product_detial_reducer } from './Reducers/ProductReducer';
import { CartReducer } from './Reducers/CartReducer';
import { wishReducer } from './Reducers/WishReducer';
import { AlluserReducer, UserReducer } from './Reducers/UserReducer';




const store = configureStore({
    
    reducer:{
       AllProducts : ProductReducer,
       ProductDetial : Product_detial_reducer,
       Cart : CartReducer,
       WishList: wishReducer,
       User:UserReducer,
       AllUser : AlluserReducer,
       CreateProduct : CreateProduct

    },
    

    

} );
export default store;