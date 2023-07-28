import { Admin_Product_FAil, Admin_Product_Request, Admin_Product_Success, Create_Product_Fail, Create_Product_Request, Create_Product_Success, Product_Detials_Fail, Product_Detials_Request, Product_Detials_Success, Product_Fail, Product_Request, Product_Success, Update_Product_Request ,Upadate_Product_Success , Update_Product_Fail } from "../constants/ProductConstants";


    
export const ProductReducer = ( state = { products : [] } , action  )=>{
   switch(action.type){
    
    case Product_Request : return {
        loading : true,
        products : []
    }
    case Product_Success : return {
        loading : false,
        products : action.payload.products,
        ProductCount : action.payload.productCount
    }
    case Product_Fail : return {
        loading : false,
        products : [],
        error : action.payload
    }
    case Admin_Product_Request : return {
        loading : true,
        products : []
    }
    case Admin_Product_Success : return {
        loading : false,
        products : action.payload.products,
        ProductCount : action.payload.productCount
    }
    case Admin_Product_FAil : return {
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


export const CreateProduct = (state = { product : {}},action)=>{
   switch(action.type){
    case Create_Product_Request : return {
        loading : true,
    }

    case Create_Product_Success : return{
        ...state,
        product : action.payload
    }

    case Create_Product_Fail : return{
        ...state,
        error : action.payload
    }

    default : return state

   }

   
}


export const UpdateProduct = (state = { product : {}},action)=>{
    switch(action.type){
     case Update_Product_Request : return {
         loading : true,
     }
 
     case Upadate_Product_Success  : return{
         ...state,
         product : action.payload
     }
 
     case Update_Product_Fail  : return{
         ...state,
         error : action.payload
     }
 
     default : return state
 
    }
 
    
 }

