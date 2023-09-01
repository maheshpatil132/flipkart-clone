import { Axios } from "../Axios"
import { Login_Fail, Login_Req, Login_Success, Register_Fail, Register_Req, Register_Success ,Clear_Error ,All_User_Request , All_User_Success ,All_User_Fail, Load_User_Request, Load_User_Sucess, Load_User_Fail, Logout_User_Sucess, Logout_User_Fail } from "../constants/UserConstants";


export const LoginUser = ( form) => async(dispatch)=>{
  try {
    dispatch({
        type: Login_Req
    })
    const config = { headers : { "Content-Type" : "application/json" } }
    const {data} = await Axios.post('/login/user' , form , config)

    dispatch({
        type: Login_Success,
        payload : data.user
    })

  } catch (error) {
    dispatch({
        type: Login_Fail,
        payload : error.response.data.error
    })
  }
}

export const RegisterUser = ( form) => async(dispatch)=>{
    try {

      dispatch({
          type: Register_Req
      })
       
      const config = { headers : { "Content-Type" : "application/json" } }

      const { data } = await Axios.post('/create/user' , form , config) 
      dispatch({
          type: Register_Success,
          payload : data.user
      })
  
    } catch (error) {
      dispatch({  
          type: Register_Fail,
          payload : error.response.data.error
      })
    }
  }


  export const Clear_Errors = () => (dispatch)=>{
    dispatch({
        type : Clear_Error
    })
  }


  export const LoadUser = () => async(dispatch)=>{
    try {
      dispatch({
          type: Load_User_Request
      })
     
      const {data} = await Axios.get('/me/user')
  
      dispatch({
          type: Load_User_Sucess,
          payload : data.user
      })
  
    } catch (error) {
      dispatch({
          type: Load_User_Fail,
          payload : error.response.data.error
      })
    }
  }
  

  export const logoutUser = () => async (dispatch) => {
    try {
        await Axios.get('/logout/user');
        dispatch({ type: Logout_User_Sucess });
    } catch (error) {
        dispatch({
            type: Logout_User_Fail,
            payload: error.response.data.message,
        });
    }
};

  

  // admin
  export const AdminGetUsers = () =>async(dispatch)=>{
    try {
        dispatch({
            type : All_User_Request
        })
        
        let link = `/getall/user`
        const {data} = await Axios.get(link)
        dispatch({
            type:All_User_Success,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:All_User_Fail,
            error: error
        })
    }
    
}