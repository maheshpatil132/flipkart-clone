import { RemoveToCart } from "../constants/CartConstants";

const initialState = {
  Products :  localStorage.getItem('cartItems') ? JSON.parse( localStorage.getItem("cartItems")) : []
} 

export const CartReducer = ( state = initialState , action )=>{
  const item = action.product
    switch(action.type){
       case "AddToCart" : 
         const isExist = state.Products.find((e)=>e._id === item._id);

         if(isExist){
             return{
              ...state,
                Products : state.Products.map((e)=>
                e.product === isExist.product ? item : e
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
          Products: state.Products.filter((e)=>e._id !== item)
         }
        
          
       
      

       default : return state

    }

}