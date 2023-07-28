import { Login_Req , Login_Success , Login_Fail, Register_Req, Register_Success, Register_Fail , Clear_Error, Admin_User_Request, All_User_Request, All_User_Fail, All_User_Success} from '../constants/UserConstants'

export const UserReducer =  ( state = { user : {} } , action)=>{
   switch(action.type){
     case Login_Req : 
      return{
        loading : true,
        isAuthenticated : false
      }

      case Login_Success: return{
        ...state,
        loading : false,
        user : action.payload,
        isAuthenticated : true
      }

      case Login_Fail : return {
        ...state,
        loading : false,
        error : action.payload
      }

      case Register_Req : 
      return{
        loading : true,
        isAuthenticated : false
      }

      case Register_Success: return {
        ...state,
        loading : false,
        user : action.payload.user,
        isAuthenticated : true
      }

      case Register_Fail : return{
        ...state,
        loading : false,
        error : action.payload.data
      }

      case Clear_Error : return {
        loading : false,
        error:null
      }

      default : return state
   }
}


export const AlluserReducer = (state = {users : [] } , action)=>{
  switch (action.type) {
    case All_User_Request:
        return {
            ...state,
            loading: true,
        };
    case All_User_Success:
        return {
            ...state,
            loading: false,
            users: action.payload.users,
        };
    case All_User_Fail:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case Clear_Error:
        return {
            ...state,
            error: null,
        };
    default:
        return state;
}
}