
import { configureStore } from '@reduxjs/toolkit'
import { CreateProduct, ProductsReducer, Product_detial_reducer , ProductReducer, newReviewReducer} from './Reducers/ProductReducer';
import { CartReducer } from './Reducers/CartReducer';
import { wishReducer } from './Reducers/WishReducer';
import { AlluserReducer, UserReducer } from './Reducers/UserReducer';
import {  AdminOrdersReducer, MyordersReducer, NewOrderReducer, OrderDetialReducer } from './Reducers/OrderReducer';




const store = configureStore({
    
    reducer:{
       AllProducts : ProductsReducer,
       ProductDetial : Product_detial_reducer,
       Cart : CartReducer,
       WishList: wishReducer,
       User:UserReducer,
       AllUser : AlluserReducer,
       CreateProduct : CreateProduct,
       Neworder : NewOrderReducer,
       Myorders : MyordersReducer,
       OrderDetial : OrderDetialReducer,
       AllOrders : AdminOrdersReducer,
       newReview: newReviewReducer,
    },
    

    

} );
export default store;