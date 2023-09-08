import { Admin_Product_FAil, Admin_Product_Request, Admin_Product_Success, Create_Product_Fail, Create_Product_Request, Create_Product_Success, Product_Detials_Fail, Product_Detials_Request, Product_Detials_Success, Product_Fail, Product_Request, Product_Success, Update_Product_Request ,Upadate_Product_Success , Update_Product_Fail, New_Review_Request, New_Review_Sucess, New_Review_Fail, New_Review_Reset, Clear_Error, Delete_Product_Request, Delete_Product_Sucess, Delete_Product_Fail, Top_Product_Request, Top_Product_Success, Top_Product_Fail } from "../constants/ProductConstants";



// search products
// electornics products
// similar
    
export const ProductsReducer = ( state = { products : [] } , action  )=>{
   switch(action.type){
    
    case Product_Request : return {
        loading : true,
        products : {}
    }
    case Product_Success : return {
        ...state,
        loading : false,
        products : {
          ...state.products,
          [action.producttype] : action.payload.products
        },
        ProductCount : action.payload.productCount
    }
    case Product_Fail : return {
        loading : false,
        products : {},
        error : action.payload
    }
    case Admin_Product_Request : return {
        loading : true,
        adminproducts : []
    }
    case Admin_Product_Success : return {
        ...state,
        loading : false,
        adminproducts :   action.payload.products,
        ProductCount : action.payload.productCount
    }
    case Admin_Product_FAil : return {
        loading : false,
        adminproducts : [],
        error : action.payload
    }

    case Delete_Product_Request : return {
        loading : true,
        isDeleted : false,
        products : []
    }

    case Delete_Product_Sucess : {
        return{
            ...state ,
            loading : false,
            isDeleted : true,
            products : []
        }
    }

    case Delete_Product_Fail : {
        return{
            ...state ,
            loading : false,
            isDeleted : false, 
            products : []
        }
    }
    default : return state

   }
}


export const Product_detial_reducer = ( state = { product:[] } , action) =>{

    switch (action.type) {
        case Product_Detials_Request : return{
          ...state,
          loading : true,
          isUpdated:false
          
        }
        case Product_Detials_Success : return {
            loading:false,
            product : action.payload,
            isUpdated:false
        }
        case Product_Detials_Fail : return {
            loading:false,
            error : action.error,
            isUpdated:false
        }

        case Update_Product_Request : return {
            ...state,
            loading : true,
            isUpdated: action.isUpdated
        }
    
        case Upadate_Product_Success  : return{
            ...state,
            loading:false,
            isUpdated: action.isUpdated,
            product : action.payload
        }
    
        case Update_Product_Fail  : return{
            ...state,
            loading:false,
            isUpdated:false,
            error : action.payload
        }
    
        default : return state
    
    }
}


export const CreateProduct = (state = { product : {}},action)=>{
   switch(action.type){
    case Create_Product_Request : return {
        loading : true,
        sucess:false
    }

    case Create_Product_Success : return{
        ...state,
        loading:false,
        product : action.payload,
        sucess : true,
    }

    case Create_Product_Fail : return{
        ...state,
        loading:false,
        error : action.payload,
        sucess : false
    }

    default : return state

   }

   
}


export const newReviewReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case New_Review_Request:
            return {
                ...state,
                loading: true,
            };
        case New_Review_Sucess:
            return {
                loading: false,
                success: payload,
            };
        case New_Review_Fail:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        case New_Review_Reset : 
            return{
                ...state,
                success : false
            }
        case Clear_Error:
            return {
                    ...state,
                    error: null,
            };
    
        default:
            return state;
    }
}



export const Top_Product_Reducer = ( state = { products:[] } , action) =>{

    switch (action.type) {
        case Top_Product_Request : return{
          loading : true,
          products: []
        }
        case Top_Product_Success : return {
            loading:false,
            products : action.payload
        }
        case Top_Product_Fail : return {
            loading:false,
            error : action.error
        }

    
        default : return state
    
    }
}

 
