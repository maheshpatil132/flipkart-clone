import { Product_Detials_Fail, Product_Detials_Request, Product_Detials_Success, Product_Fail, Product_Request, Product_Success } from "../constants/ProductConstants";


    
export const ProductReducer = ( state = { products : [] } , action  )=>{
   switch(action.type){
    
    case Product_Request : return {
        loading : true,
        products : []
    }
    case Product_Success : return {
        loading : false,
        products : action.payload
    }
    case Product_Fail : return {
        loading : false,
        products : [],
        error : action.payload
    }
    default : return state

   }
}


export const Product_detial_reducer = ( state = { product:[] } , action) =>{

    switch (action.type) {
        case Product_Detials_Request : return{
          ...state,
          loading : true,
          
        }
        case Product_Detials_Success : return {
            loading:false,
            product : action.payload
        }
        case Product_Detials_Fail : return {
            loading:false,
            error : action.error
        }
    
        default: return state
    }
}