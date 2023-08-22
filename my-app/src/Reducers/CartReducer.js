import { ClearCartItems, RemoveToCart } from "../constants/CartConstants";

const initialState = {
  Products :  localStorage.getItem('cartItems') ? JSON.parse( localStorage.getItem("cartItems")) : []
} 

export const CartReducer = ( state = initialState , action )=>{
    const item = action.product
    switch(action.type){
       case "AddToCart" : 
         const isExist = state.Products.find((e)=>e.data._id === item.data._id);
         if(isExist){
             return{
              ...state,
                Products : state.Products.map((e)=>
                  e.data._id === isExist.data._id ? item : e
              )
             }
         }else{

           return {
            ...state,
            Products : [...state.Products , item]
          }
         }

      case RemoveToCart :
         return{
          ...state,
          Products: state.Products.filter((e)=>e.data._id !== item)
         }
        
      case ClearCartItems : 
          return {
            Products : []
          }    
       
      

       default : return state

    }

}