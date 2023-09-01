import { Admin_Orders_Fail, Admin_Orders_Request, Admin_Orders_Sucess, Clear_Error, Delete_Order_Fail, Delete_Order_Request, Delete_Order_Sucess, My_Order_Fail, My_Order_Request, My_Order_Sucess, New_Order_Fail, New_Order_Request, New_Order_Success, Order_Detial_Fail, Order_Detial_Request, Order_Detial_Sucess, Update_Order_Fail, Update_Order_Request, Update_Order_Sucess } from "../constants/OrderConstants";


export const NewOrderReducer = (state = { order:{}}  , action)=>{


  switch(action.type){
    
    case New_Order_Request :
        return{
            loading : true,
        }
    case New_Order_Success:{
        return {
            ...state,
            loading : false,
            order : action.payload
        }
    }

    case New_Order_Fail:{
        return{
            ...state,
            loading:false,
            error : action.payload
        }
    }

    case Clear_Error:{
        return{
            ...state,
            error : null
        }
    }

    default : return state
  }
}




export const MyordersReducer = (state = { orders : [] } , action) =>{
    switch(action.type){
      
        case My_Order_Request : 
            return {
                loading : true,
            }

        case My_Order_Sucess : {
            return {
                ...state,
                loading : false,
                orders : action.payload
            }
        }

        case My_Order_Fail : {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        }

        default : return state

    }

}


export const OrderDetialReducer = (state = { order : {} } , action) =>{

    switch(action.type){
      
        case Order_Detial_Request : 
            return {
                loading : true,
            }

        case Order_Detial_Sucess : {
            return {
                ...state,
                loading : false,
                order : action.payload
            }
        }

        case Order_Detial_Fail : {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        }

        case Update_Order_Request : {
            return {
                loading : true,
                isUpdated : false
            }
        }

        case Update_Order_Sucess : {
            return {
                ...state,
                loading : false,
                isUpdated : true
            }
        }

        case Update_Order_Fail : {
            return {
                loading : false,
                error : action.payload , 
                isUpdated : false
            }
        }

        case Clear_Error : {
            return{
                loading : false,
                error : null
            }
        }

        default : return state

    }

}


export const AdminOrdersReducer = (state = { orders : [] } , action) =>{
    switch(action.type){
      
        case Admin_Orders_Request : 
            return {
                loading : true,
                orders : [  ]
            }

        case Admin_Orders_Sucess : {
            return {
                ...state,
                loading : false,
                orders : action.payload
            }
        }

        case Admin_Orders_Fail : {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        }

        case Delete_Order_Request : return {
            loading : true,
            isDeleted : false,
            orders : []
        }
    
        case Delete_Order_Sucess : {
            return{
                ...state ,
                loading : false,
                isDeleted : true,
                orders : []
            }
        }
    
        case Delete_Order_Fail : {
            return{
                ...state ,
                loading : false,
                isDeleted : false, 
                orders : []
            }
        }

        default : return state

    }

}