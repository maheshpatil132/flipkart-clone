import { Axios } from '../Axios'
import { Admin_Product_FAil, Admin_Product_Request, Admin_Product_Success, Create_Product_Fail, Create_Product_Request, Create_Product_Success, Product_Detials_Fail, Product_Detials_Request, Product_Detials_Success ,Product_Fail, Product_Request, Product_Success, Search_Product_Request, Search_Product_Success, Upadate_Product_Success, Update_Product_Fail, Update_Product_Request} from '../constants/ProductConstants'

export const getproduct = (key = " " , min , max ,page=1 ) => async ( dispatch )=>{
    try {
        dispatch({
            type : Product_Request
        })
        
        let link = `/getall/products?name=${key}&page=${page}`
        const {data} = await Axios.get(link)
        dispatch({
            type:Product_Success,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:Product_Fail,
            error: error
        })
    }
    
}


export const getproddetials = (id) => async(dispatch)=>{
  try {
    dispatch({
        type : Product_Detials_Request
    })

    const {data} = await Axios.get(`/product/${id}`)

    dispatch({
        type:Product_Detials_Success,
        payload:data.product
    })
  } catch (error) {
    dispatch({
        type:Product_Detials_Fail,
        error:error
    })
  }
} 







// Admin Actions

export const AdminGetProducts = () =>async(dispatch)=>{
    try {
        dispatch({
            type : Admin_Product_Request
        })
        
        let link = `/admin/products`
        const {data} = await Axios.get(link)
        dispatch({
            type:Admin_Product_Success,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:Admin_Product_FAil,
            error: error
        })
    }
    
}


export const CreateProducts = (formdata) => async(dispatch)=>{
    try {
          
        console.log(formdata);
        dispatch({
            type: Create_Product_Request
        })
        
        const config = { headers : { "Content-Type" :  "application/json" } } 

        const {data} = await Axios.post('/create/product', formdata )
        
        dispatch({
            type:Create_Product_Success,
            payload : data
        })
    } catch (error) {
         dispatch({
            type: Create_Product_Fail,
            payload:error.responce
         })
    }
}



export const UpdateProducts = (formdata ,id) => async(dispatch)=>{
    try {
          
        console.log(formdata);
        dispatch({
            type: Update_Product_Request
        })
        
        // const config = { headers : { "Content-Type" :  "application/json" } } 

        const {data} = await Axios.put(`/update/product/${id}`, formdata )
        
        dispatch({
            type: Upadate_Product_Success,
            payload : data
        })
    } catch (error) {
         dispatch({
            type: Update_Product_Fail,
            payload:error.responce
         })
    }
}







