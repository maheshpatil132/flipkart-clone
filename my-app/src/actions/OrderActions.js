import { Axios } from "../Axios"
import { Admin_Orders_Fail, Admin_Orders_Request, Admin_Orders_Sucess, My_Order_Fail, My_Order_Request, My_Order_Sucess, New_Order_Fail, New_Order_Request, New_Order_Success, Order_Detial_Fail, Order_Detial_Request, Order_Detial_Sucess } from "../constants/OrderConstants"

export const NewOrder = (form) => async(dispatch)=>{
   try {

    dispatch({
        type : New_Order_Request,
    })
    console.log(form);
    const {data} = await Axios.post('/create/order' , form)

    console.log(data);

    dispatch({
        type: New_Order_Success,
        payload : data
    })

    sessionStorage.removeItem('order')
    
   } catch (error) {
       
    dispatch({
        type:New_Order_Fail,
        payload:error.message
    })

   }  
}



export const Myorders = () => async(dispatch)=>{
    try {
 
     dispatch({
         type : My_Order_Request,
     })
     const {data} = await Axios.get('/get/myorders')
      
 
     dispatch({
         type: My_Order_Sucess,
         payload : data.orders
     })
 
     sessionStorage.removeItem('order')
     
    } catch (error) {
        
     dispatch({
         type : My_Order_Fail,
         payload:error.message
     })
 
    }  
 }


 export const OrderDetialaction = (id) => async(dispatch)=>{
    try {
 
     dispatch({
         type : Order_Detial_Request,
     })
     const {data} = await Axios.get(`/order/${id}`)
      
     console.log(data);
     dispatch({
         type: Order_Detial_Sucess,
         payload : data.order
     })
 
     sessionStorage.removeItem('order')
     
    } catch (error) {
        
     dispatch({
         type : Order_Detial_Fail,
         payload:error.message
     })
 
    }  
 }


// admin orders List
export const AdminGetOrders = ()=> async(dispatch) =>{

    try {
 
        dispatch({
            type :Admin_Orders_Request,
        })
        const {data} = await Axios.get('/getall/orders')
         console.log(data);
    
        dispatch({
            type: Admin_Orders_Sucess,
            payload : data.orders
        })
    
        sessionStorage.removeItem('order')
        
       } catch (error) {
           
        dispatch({
            type : Admin_Orders_Fail,
            payload:error.message
        })
    
       }  

}



