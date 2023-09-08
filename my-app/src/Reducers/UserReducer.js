import { Login_Req , Login_Success , Login_Fail, Register_Req, Register_Success, Register_Fail , Clear_Error, All_User_Request, All_User_Fail, All_User_Success, Load_User_Request, Load_User_Sucess, Load_User_Fail, Logout_User_Sucess, Logout_User_Fail} from '../constants/UserConstants'

export const UserReducer =  ( state = { user : {} } , action)=>{
   switch(action.type){
     case Login_Req : 
      return{
        loading : true,
        isAuthenticated : false
      }

      case Login_Success: 
      case Load_User_Sucess:
      case Register_Success :
      return{
        ...state,
        loading : false,
        user : action.payload,
        isAuthenticated : true
      }

      case Register_Req : 
      return{
        loading : true,
        isAuthenticated : false
      }
      case Login_Fail :
      case Register_Fail : return{
        ...state,
        loading : false,
        error : action.payload,
        isAuthenticated : false
      }

      case Load_User_Request : 
      return{
        loading : true,
        isAuthenticated : false
      }

      case Load_User_Fail : return {
        loading : false,
        user : null,
        error : action.payload,
        isAuthenticated : false
      }

      case Logout_User_Sucess : return{
        user : null,
        isAuthenticated : false,
        loading : false
      }
      
      case Logout_User_Fail:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }






      case Clear_Error : return {
        loading : false,
        error:null,
        isAuthenticated:false
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