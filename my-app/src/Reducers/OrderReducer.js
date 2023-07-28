import { Clear_Error, New_Order_Fail, New_Order_Request, New_Order_Success } from "../constants/OrderConstants";


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