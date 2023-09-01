import { AddToCart, ClearCartItems, ClearError, RemoveToCart, Save_ShipingInfo } from "../constants/CartConstants"


export const AddCart = (data , quantity = 1) => async(dispatch ,getState)=> {
      // console.log(data);
      dispatch({
         type:AddToCart,
         product: {data , quantity}
        })   

      //   console.log(getState().Cart.Products);

        localStorage.setItem("cartItems" , JSON.stringify(getState().Cart.Products))
      
}

export const RemoveCart = (id , quatity = 1) => (dispatch , getState)=>{

      dispatch({
            type:RemoveToCart,
            product:id, 
            quatity
      })

  
      localStorage.setItem("cartItems" , JSON.stringify(getState().Cart.Products))

     

}


export const ClearCart = () => (dispatch , getState)=>{
      dispatch({
            type:ClearCartItems
      })
      localStorage.removeItem("cartItems")
}


export const ClearErrors = () => (dispatch , getState)=>{
      dispatch({
            type:ClearError
      })
}


export const save_shippingindfo = (data) =>(dispatch)=> {
    dispatch({
      type : Save_ShipingInfo,
      payload : data
    })

    localStorage.setItem('shippingInfo', JSON.stringify(data));
}


