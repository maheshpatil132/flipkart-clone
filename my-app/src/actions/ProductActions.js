import { Axios } from '../Axios'
import { Admin_Product_FAil, Admin_Product_Request, Admin_Product_Success, Clear_Error, Create_Product_Fail, Create_Product_Request, Create_Product_Success, Delete_Product_Fail, Delete_Product_Request, Delete_Product_Sucess, New_Review_Fail, New_Review_Request, New_Review_Reset, New_Review_Sucess, Product_Detials_Fail, Product_Detials_Request, Product_Detials_Success ,Product_Fail, Product_Request, Product_Success, Top_Product_Fail, Top_Product_Request, Top_Product_Success, Upadate_Product_Success, Update_Product_Fail, Update_Product_Request} from '../constants/ProductConstants'

export const getproduct = (key = " " , min , max , page=1 , category , rating , prodtype ) => async ( dispatch )=>{
    try {
        dispatch({
            type : Product_Request
        })
        let link
        if(category){
             link = `/getall/products?name=${key}&page=${page}&category=${category}`
        }else{
            link = `/getall/products?name=${key}&page=${page}&price[gte]=${min}&price[lte]=${max}&rating[gte]=${rating}`
        }
        const {data} = await Axios.get(link)

        // console.log(data);
        dispatch({
            type:Product_Success,
            payload:data,
            producttype: prodtype 
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
        payload:data.product,
    })
  } catch (error) {
    dispatch({
        type:Product_Detials_Fail,
        error:error
    })
  }
} 



// get top products
export const GetTopProducts = () => async(dispatch)=>{
    try {
      dispatch({
          type : Top_Product_Request
      })
  
      const {data} = await Axios.get(`/top/products`)
  
      dispatch({
          type:Top_Product_Success,
          payload:data.products,
      })
    } catch (error) {
      dispatch({
          type: Top_Product_Fail,
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
            payload:data,
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
          
        dispatch({
            type: Create_Product_Request
        })
        
        // const config = { headers : { "Content-Type" :  "application/json" } } 

        const {data} = await Axios.post('/create/product', formdata )
        
        dispatch({
            type:Create_Product_Success,
            payload : data
        })
    } catch (error) {
        console.log(error);
         dispatch({
            type: Create_Product_Fail,
            payload:error.response.data.error
         })
    }
}


export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({ type: New_Review_Request });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await Axios.put("/add/review", reviewData, config);
         console.log(data);
        dispatch({
            type: New_Review_Sucess,
            payload: data.sucess,
        });
    } catch (error) {
        dispatch({
            type: New_Review_Fail,
            payload: error.response.data.message,
        });
    }
}



export const UpdateProducts = (formdata ,id) => async(dispatch)=>{
    try {
          
        dispatch({
            type: Update_Product_Request,
            isUpdated : false
        })
        
        // const config = { headers : { "Content-Type" :  "application/json" } } 

        const {data} = await Axios.put(`/update/product/${id}`, formdata )
        console.log(data);
        dispatch({
            type: Upadate_Product_Success,
            payload : data.product,
            isUpdated : true
        })
    } catch (error) {
         dispatch({
            type: Update_Product_Fail,
            payload:error.responce
         })
    }
}


export const Delete_Product = (id) => async(dispatch) => {
    try {
        
        dispatch({
            type : Delete_Product_Request
        })


        const {data} = await Axios.delete(`/delete/product/${id}`)
        console.log(data);
        dispatch({
            type : Delete_Product_Sucess,
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type : Delete_Product_Fail , 
            payload : error.responce
        })
    }
}


export const ClearError = () => (dispatch) => {
    dispatch({
        type : Clear_Error
    })
}

export const Reset_Review = () => (dispatch) => {
    dispatch({
        type : New_Review_Reset
    })
}




// categorywise search products







