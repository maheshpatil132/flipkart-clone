import { Axios } from '../Axios'
import { Product_Detials_Fail, Product_Detials_Request, Product_Detials_Success ,Product_Fail, Product_Request, Product_Success} from '../constants/ProductConstants'

export const getproduct = () => async ( dispatch )=>{

    try {
        dispatch({
            type : Product_Request
        })
    
        const {data} = await Axios.get('/getall/products')
    
        dispatch({
            type:Product_Success,
            payload:data.products
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