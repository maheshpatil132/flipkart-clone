import { Axios } from "../Axios"
import { Login_Fail, Login_Req, Login_Success, Register_Fail, Register_Req, Register_Success ,Clear_Error ,All_User_Request , All_User_Success ,All_User_Fail } from "../constants/UserConstants";


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
    console.log(error);
    dispatch({
        type: Login_Fail,
        payload : error.response.data.message
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

      console.log("object");

      dispatch({
          type: Register_Success,
          payload : data.user
      })
  
    } catch (error) {
      dispatch({
          type: Register_Fail,
          payload : error.response
      })
    }
  }


  export const Clear_Errors = () => (dispatch)=>{
    dispatch({
        type : Clear_Error
    })
  }


  

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